---
title: How we built LupaAtBahay
date: 2026-10-10T11:30:00Z
category: Case study
excerpt: The decisions behind our free property marketplace for Central Luzon, from leaving out checkout to running it with an AI team.
---

[LupaAtBahay](https://lupaatbahay.com) is a property marketplace for Central Luzon. Verified agents list houses, lots and land in Pampanga, Tarlac, Zambales and Bataan, and buyers browse and message them directly. It's our own product: we designed it, built it, host it and run it.

This post is about the decisions that shaped it. The full feature list and screenshots are in the [case study](/lupaatbahay).

## The inquiry is the product

Buyers in the region had no single place they trusted to browse lots and homes, and small agents had no affordable way to be seen. The obvious move for a marketplace is to add payments or reservations. We left them out on purpose.

Property deals in the Philippines happen through people: site visits, calls, paperwork with banks and Pag-IBIG. What the platform can do well is get a genuine inquiry to the right agent quickly. So that's the one thing the whole site is built around.

That decision made a lot of others simpler:

- **No account needed to inquire.** A buyer fills in a short form and the agent gets it. Asking people to sign up first would lose most of them.
- **Agents are notified on their phone straight away.** A lead that waits until tomorrow is often a lead lost.
- **It's free.** Free to browse, free to list, no commission. Without payments in the flow, there's nothing to take a cut of.

## Trust before growth

A listing site is only useful if people believe the listings. Every new listing is checked by an admin before it goes live, and agents have verified profiles.

Behind that, access is split into four roles, enforced in three places: at the proxy, on the page and in the database itself, using Postgres row-level security. If one layer has a bug, the others still hold.

## Built for phones first

Most buyers find LupaAtBahay on a phone, and agents need to manage their listings from theirs. So the screens were designed at phone size first: search by city, province, type and price, a map you can search by moving around, and listing pages that load quickly on mobile data.

Agents get a dashboard for their listings, leads and public profile that works on a small screen, including editing prices inline.

For notifications, we didn't build a separate native app. We wrapped the live site in a thin Flutter app that adds push notifications, geofencing and deep links. One codebase does the real work, and the app adds only what a browser can't.

## Built to be found

A marketplace with no traffic is an empty room. From the start, the site had buyer guides, sitemaps, structured data for search engines and an llms.txt file for AI assistants. There's also a Pag-IBIG and bank loan calculator that estimates a monthly amortization as you type, without saving or sending anything you enter.

## Running it after launch

LupaAtBahay runs as a containerised stack on a server we manage, behind Cloudflare, with error tracking, backups and a documented deploy.

To keep an eye on it, we built a Site Insights MCP server: a tool that lets an AI assistant answer questions from the site's real analytics, Search Console, speed and error data. Our AI Office, a virtual office of AI teammates, uses it with a read-only token to answer questions like "which pages are close to page one on Google?" and to flag new errors after a deploy. Lead and listing data is only shared as totals, never inquirers' personal details.

## What we'd tell a client building something similar

- Decide what the one important action is, and make everything else serve it.
- Leave out anything you can't run well yet, even if competitors have it.
- Check content before it goes live if your users' trust depends on it.
- Plan for search from day one, not after launch.
- Budget for running it, not just building it.

If you're planning a marketplace, listing site or lead-gen platform, [tell us about it](/#contact). It's the kind of project we know best.
