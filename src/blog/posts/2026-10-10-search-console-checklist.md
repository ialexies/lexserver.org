---
title: A Search Console checklist for small business sites
date: 2026-10-10T11:00:00Z
category: SEO
excerpt: Google Search Console is free and tells you how Google sees your site. Here's what to set up once, and what to check every month.
---

Google Search Console is a free tool from Google that shows how your site appears in search: which pages are indexed, what people searched to find you, and what's broken. Many small business sites never set it up, or set it up once and never look again.

This is the checklist we use for client sites. You don't need to be technical for most of it.

## Set up once

### 1. Add your site as a domain property

In Search Console, choose **Domain** rather than **URL prefix**. A domain property covers every version of your site (with and without www, http and https) in one place. Google gives you a TXT record to add at your domain registrar or DNS provider to prove you own it.

### 2. Submit your sitemap

A sitemap is a list of the pages you want Google to know about. Most sites have one at `/sitemap.xml`, and WordPress SEO plugins create it for you. Open **Sitemaps**, paste the address and submit. Check back after a few days that the status says it was read successfully.

### 3. Add the people who need access

Under **Settings → Users and permissions**, add your developer or whoever looks after the site. Give them their own access instead of sharing your Google password.

### 4. Make sure email alerts reach someone

Search Console emails the owners when it finds a serious problem, like pages that can't be indexed or a security issue. Make sure those emails go to an inbox someone reads.

### 5. Link it to Google Analytics

If you use Google Analytics, link the two so you can see search queries next to what visitors did after they arrived.

## Check every month

### 6. Pages: are your important pages indexed?

Open **Indexing → Pages**. The number that matters is not the total, but whether your key pages are in the indexed group: your homepage, services, products and contact page.

If an important page is listed under "Not indexed", the reason tells you what to do:

- **Discovered – currently not indexed** or **Crawled – currently not indexed:** Google knows the page but hasn't decided it's worth indexing yet. Often the page is thin or too similar to another. Make it more useful and link to it from your other pages.
- **Excluded by 'noindex' tag:** something on the page is telling Google to stay away. Common after a redesign, when a setting from the test site was left on.
- **Not found (404):** a link points to a page that no longer exists. Fix the link or redirect the old address.
- **Page with redirect** or **Alternate page with proper canonical tag:** usually fine. Google is indexing a different version of the same page.

### 7. Performance: what people search to find you

Open **Performance → Search results** and look at the last three months. Check:

- **Queries.** Are these the words your customers would use? If you sell catering in Pampanga and none of your queries mention catering, your pages aren't saying it clearly enough.
- **Pages.** Which pages bring in clicks, and which important pages get none.
- **Average position between 5 and 20.** These pages are close to the top. Improving the title, adding detail or linking to them from other pages can move them up.
- **High impressions, low clicks.** People see the result but don't click. Rewrite the page title and description so they match what the person searched.

### 8. Core Web Vitals: is the site fast enough?

Open **Experience → Core Web Vitals**. This uses real visits from Chrome users, so a small site may see "not enough data". That's normal. If it shows poor URLs on mobile, the usual causes are large images, too many plugins or slow hosting.

### 9. Security and manual actions

Both should say no issues detected. If either doesn't, deal with it before anything else.

### 10. Inspect anything new

When you publish an important new page, paste its address into the search bar at the top and choose **Request indexing**. It doesn't guarantee anything, but it puts the page in Google's queue sooner.

## Check the pages themselves

Search Console tells you how Google sees the site overall. To check one page at a time, such as whether it has a proper title, description, headings and image alt text, we built [Indexwise](https://indexwise.dev/), a free Chrome extension. It runs in your browser, explains each problem in plain words and shows how to fix it.

## If you'd rather not do it yourself

Setting up Search Console, fixing what it finds and reporting each month is part of what we do for clients. [Send us your site's address](/#contact) and we'll tell you what we'd look at first.
