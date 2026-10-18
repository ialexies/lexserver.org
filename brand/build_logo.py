"""Lexserver 'Tiles' final artwork. Usage: python -P -E tiles.py <fontdir> <outdir>"""
import math
import sys
from pathlib import Path

from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.transformPen import TransformPen
from fontTools.ttLib import TTFont

FONT_DIR, OUT = Path(sys.argv[1]), Path(sys.argv[2])
OUT.mkdir(parents=True, exist_ok=True)

INDIGO, CORAL, INK = "#3346b8", "#ff6b4a", "#1b1d22"
INDIGO_DARK, INK_DARK = "#8c9cff", "#e9eaee"


def f(v):
    return f"{v:.2f}".rstrip("0").rstrip(".")


def circle(cx, cy, r):
    return f"M{f(cx-r)} {f(cy)}A{f(r)} {f(r)} 0 1 0 {f(cx+r)} {f(cy)}A{f(r)} {f(r)} 0 1 0 {f(cx-r)} {f(cy)}Z"


def rrect(x, y, w, h, r):
    return (f"M{f(x+r)} {f(y)}H{f(x+w-r)}A{f(r)} {f(r)} 0 0 1 {f(x+w)} {f(y+r)}V{f(y+h-r)}"
            f"A{f(r)} {f(r)} 0 0 1 {f(x+w-r)} {f(y+h)}H{f(x+r)}A{f(r)} {f(r)} 0 0 1 {f(x)} {f(y+h-r)}"
            f"V{f(y+r)}A{f(r)} {f(r)} 0 0 1 {f(x+r)} {f(y)}Z")


def quarter(cx, cy, c, rot, rr, re):
    """Quarter disc, right-angle corner at (cx, cy), radius c, bulging toward `rot` (0=up-left,
    1=up-right, 2=down-right, 3=down-left). rr = fillet at the right angle, re = fillets where the
    straight edges meet the arc."""
    # Build in local frame (corner at origin, disc in the -x,-y quadrant), then rotate.
    d = math.sqrt((c - re) ** 2 - re ** 2)  # fillet-centre offset along each edge
    k = c / (c - re)
    # fillet on the edge y=0 (going left): centre (-d, -re)
    e1_line, e1_arc = (-d, 0), (-d * k, -re * k)
    # fillet on the edge x=0 (going up): centre (-re, -d)
    e2_arc, e2_line = (-re * k, -d * k), (0, -d)
    pts = {
        "a": (0, -rr), "b": (-rr, 0),  # right-angle fillet ends
        "c": e1_line, "d": e1_arc, "e": e2_arc, "f": e2_line,
    }
    cos, sin = [(1, 0), (0, 1), (-1, 0), (0, -1)][rot]  # rotate by rot*90°

    def T(p):
        x, y = p
        return f(cx + x * cos - y * sin), f(cy + x * sin + y * cos)

    P = {k_: T(v) for k_, v in pts.items()}
    return (f"M{P['a'][0]} {P['a'][1]}A{rr} {rr} 0 0 1 {P['b'][0]} {P['b'][1]}"
            f"L{P['c'][0]} {P['c'][1]}A{re} {re} 0 0 1 {P['d'][0]} {P['d'][1]}"
            f"A{c} {c} 0 0 1 {P['e'][0]} {P['e'][1]}A{re} {re} 0 0 1 {P['f'][0]} {P['f'][1]}Z")


def tiles(c=92, g=12, rr=14, re=6, coral=CORAL, ind=INDIGO):
    x0 = y0 = (256 - 2 * c - g) / 2
    x1 = y1 = x0 + c + g
    # optical: circle overshoots its cell by ~1.5%
    return [
        (quarter(x0 + c, y0 + c, c, 0, rr, re), ind),
        (circle(x1 + c / 2, y0 + c / 2, c / 2 * 1.015), coral),
        (rrect(x0, y1, c, c, rr), ind),
        (quarter(x1, y1, c, 2, rr, re), ind),
    ]


def text_path(text, weight, size, tracking):
    font = TTFont(FONT_DIR / f"geist-{weight}.ttf")
    gs, cmap, upm = font.getGlyphSet(), font.getBestCmap(), font["head"].unitsPerEm
    s, pen, x = size / upm, SVGPathPen(font.getGlyphSet()), 0.0
    for ch in text:
        g = gs[cmap[ord(ch)]]
        g.draw(TransformPen(pen, (s, 0, 0, -s, x, 0)))
        x += g.width * s + tracking
    return pen.getCommands(), x - tracking, font["OS/2"].sCapHeight * s


def paths(parts):
    return "".join(f'<path fill="{c}" d="{d}"/>' for d, c in parts)


def write(name, body, vb="0 0 256 256", title="Lexserver"):
    (OUT / name).write_text(
        f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="{vb}">'
        f"<title>{title}</title>\n{body}\n</svg>\n", encoding="utf-8")


WD, WW, CAP = text_path("Lexserver", 600, 112, -2.5)


def horizontal(parts, ink):
    # symbol occupies 30..226; wordmark cap height centred on the symbol, gap = one tile-gap x 3
    x = 226 + 36
    body = paths(parts) + f'<path fill="{ink}" transform="translate({x} {f(128 + CAP / 2)})" d="{WD}"/>'
    return body, f"29 29 {f(x + WW - 29 + 2)} 198"


def stacked(parts, ink):
    size = 72
    wd, ww, cap = text_path("Lexserver", 600, size, -1.6)
    tx = 128 - ww / 2
    body = paths(parts) + f'<path fill="{ink}" transform="translate({f(tx)} {f(226 + 40 + cap)})" d="{wd}"/>'
    return body, f"{f(min(29, tx))} 29 {f(max(198, ww))} {f(197 + 40 + cap)}"


light, dark = tiles(), tiles(ind=INDIGO_DARK)
write("lexserver-symbol.svg", paths(light), vb="29 29 198 198")
write("lexserver-symbol-padded.svg", paths(light))
write("lexserver-symbol-dark.svg", paths(dark), vb="29 29 198 198")
write("lexserver-symbol-black.svg", paths(tiles(coral="#000", ind="#000")), vb="29 29 198 198")
write("lexserver-symbol-white.svg", paths(tiles(coral="#fff", ind="#fff")), vb="29 29 198 198")
b, vb = horizontal(light, INK); write("lexserver-horizontal.svg", b, vb)
b, vb = horizontal(dark, INK_DARK); write("lexserver-horizontal-dark.svg", b, vb)
b, vb = horizontal(tiles(coral="#000", ind="#000"), "#000"); write("lexserver-horizontal-black.svg", b, vb)
b, vb = horizontal(tiles(coral="#fff", ind="#fff"), "#fff"); write("lexserver-horizontal-white.svg", b, vb)
b, vb = stacked(light, INK); write("lexserver-stacked.svg", b, vb)
b, vb = stacked(dark, INK_DARK); write("lexserver-stacked-dark.svg", b, vb)

# App icon / favicon: white tiles + coral circle on an indigo rounded tile; wider gap for 16 px.
icon_parts = [(d, "#fff" if col == INDIGO else col) for d, col in tiles(c=88, g=20, rr=12, re=6)]
scale = 0.72
inner = "".join(f'<path fill="{c}" d="{d}"/>' for d, c in icon_parts)
write("lexserver-app-icon.svg",
      f'<rect width="256" height="256" rx="56" fill="{INDIGO}"/>'
      f'<g transform="translate({f(128 - 128 * scale)} {f(128 - 128 * scale)}) scale({scale})">{inner}</g>')
print("ok")
