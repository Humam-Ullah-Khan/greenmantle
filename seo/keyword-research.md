# Keyword Research — Blaine Tree Removals

_Researched 2026-11-07. Internal planning file: do not upload to the web server._

> **About search volumes:** no paid keyword tool was used, so this file has no
> search-volume numbers. Priorities come from what Google shows for each
> search (who ranks and what kind of page they are), city sizes, and buyer
> intent. Before building new pages, confirm the volumes in Google Keyword
> Planner (free with a Google Ads account) and fill in the "Volume" column.

---

## 1. What the search results look like (the big finding)

For "tree removal Blaine MN", "tree service Blaine Minnesota",
"stump grinding Blaine MN" and "tree removal Coon Rapids MN", the organic
results are mostly:

- **Directories / lead aggregators:** Thumbtack, HomeAdvisor, Angi, BBB, This
  Old House, Today's Homeowner.
- **Templated spam sites:** dozens of near-identical `*.pages.dev`,
  `*.netlify.app` and `*.vercel.app` "Tree Service Blaine" pages sharing one
  888 phone number.
- **City of Blaine pages:** Emerald Ash Borer, Boulevard Tree Maintenance.
- **Very few real local company websites.** Greenvia Blaine Tree Service and
  Blaine Tree Care show up, but only as thin profile pages (Locable, Carrd).

**What this means:** organic competition is weak. A real business site with
1,400+ word service pages, schema, real photos and local detail (which this
site already has) can realistically reach page 1. The **Google Map Pack**
(Google Business Profile) is where the real competitors are, such as Tree Top
Climbers (~58 reviews) and Goldentree Landscaping (~22 reviews). Reviews and
a verified GBP matter as much as the website.

---

## 2. Core keywords: status of existing pages

| Keyword (primary) | Intent | Page | Status |
|---|---|---|---|
| tree removal blaine mn | Buy | tree-removal.html | ✅ Main page for this keyword; homepage links to it (fixed 2026-11-07, see §5) |
| tree service blaine mn | Buy | index.html | ✅ In the homepage title and H1 (fixed 2026-11-07) |
| stump grinding blaine mn / stump removal blaine | Buy | stump-grinding.html | ✅ |
| tree trimming blaine mn / tree pruning blaine | Buy | tree-trimming.html | ✅ |
| emergency tree removal blaine / storm damage tree removal | Urgent buy | storm-damage-cleanup.html | ✅ |
| ash tree removal blaine / emerald ash borer blaine | Buy + info | emerald-ash-borer-removal.html | ✅ Competes with the city EAB page, a good fit |
| crane tree removal blaine | Buy | crane-tree-removal.html | ✅ Low volume, high ticket |
| tree removal cost blaine mn | Research → buy | tree-removal-cost.html | ✅ Competes with Today's Homeowner (avg ~$629, range $239–$1,005) |
| winter tree removal mn | Info → buy | winter-tree-removal.html | ✅ Seasonal, timely right now (November) |
| arborist blaine mn | Buy | tree-trimming.html | ✅ In an H2 (2026-11-07). Add "Certified Arborist" to the title only if someone on the crew is certified |
| tree service near me / tree removal near me | Buy | — | ℹ "Near me" is won through GBP + location signals, not by typing "near me" on pages |

---

## 3. Nearby cities: handled by separate sites

**Decision (2026-11-07):** this site stays focused on **Blaine only**. Each
nearby region gets its own separate site, so do **not** add city pages, city
names in the footer, or extra cities in `areaServed` here.

Research for those other sites (same weak search results there: directories
and templated spam):

| City | Population (2024) | Priority for its own site | Local angle to use |
|---|---|---|---|
| Coon Rapids | ~63,300 | 🔴 1 | Older neighborhoods with large mature trees; the city has been clearing EAB ash from boulevards since it was found there in 2017, but private ash is the owner's job; river/Coon Creek cottonwoods |
| Andover | ~32,600 | 🔴 2 | Large wooded lots; city EAB plan updated Dec 2024; oaks on the Anoka Sand Plain; septic and drain fields |
| Lino Lakes | ~22,600 | 🟠 3 | Lakes and wetlands; the city lists oak wilt, Dutch elm and EAB as its main tree problems; city estimates up to 10,000 trees lost to EAB |
| Ham Lake | ~16,400 | 🟠 4 | Acre-plus wooded lots; first EAB find in Anoka County (2015); oak-heavy |

On this Blaine site, go deeper on **Blaine neighborhoods** instead (The Lakes,
TPC Twin Cities area, west of Highway 65, Lexington Ave corridor) for
"tree removal near [neighborhood]" style searches.

---

## 4. Missing service / topic keywords

> **Not applicable (2026-11-07):** the business doesn't offer lot clearing,
> cabling or hedge trimming, so those rows are skipped. The arborist row is
> handled in §5, and oak wilt / boulevard-tree topics stay as sections on
> existing pages.

| Keyword | Intent | Priority | Suggested action |
|---|---|---|---|
| arborist blaine mn | Buy | 🔴 High | Add "Arborist" to the home or tree-trimming title/H2. Optional `arborist.html` |
| lot clearing / land clearing anoka county | Buy (high ticket) | 🟠 Medium | New page **only if the business offers it** |
| oak wilt blaine mn / oak wilt treatment | Info + buy | 🟠 Medium | Already mentioned 12 times. Could become its own guide (MN-specific, seasonal) |
| does blaine remove boulevard trees / city of blaine tree removal | Info | 🟠 Medium | The city removes dead right-of-way trees for free. A short FAQ section on tree-removal.html already covers permits, so expand it to capture this search |
| tree cabling and bracing | Buy | 🟡 Low | Only if offered |
| hedge / shrub trimming blaine | Buy | 🟡 Low | Only if offered |
| how to tell if a tree is dead / dying tree signs | Info | 🟡 Low | Blog-style guide linking to tree-removal.html |
| tree removal permit blaine mn | Info | 🟡 Low | Covered in tree-removal.html |

---

## 5. Fixes to existing pages (quick wins)

1. ✅ **Done 2026-11-07. Keyword cannibalisation:** `index.html` and `tree-removal.html` both target
   "tree removal Blaine MN". Make the **homepage** the "tree service Blaine MN"
   page (title such as _"Tree Service & Tree Removal in Blaine, MN | Blaine Tree
   Removals"_) and let `tree-removal.html` own "tree removal Blaine". Link to it
   from the homepage with the anchor text "tree removal in Blaine".
2. ✅ **Done 2026-11-07. Add "arborist"** to one title or H2 (for example, tree-trimming.html: "Certified
   Arborist Tree Trimming in Blaine, MN", but only if it's true).
3. ~~Service-area line / extra `areaServed` cities~~: dropped. This site is Blaine-only (see §3).

---

## 6. Off-site (needed to rank for "near me" and the Map Pack)

- Create/verify a **Google Business Profile** with category "Tree service",
  service area = Blaine, and the same name, phone and address (NAP) as the site.
- Collect **reviews**. The top Map Pack competitor has ~58, so aim to pass that.
- Set up **Google Search Console** and submit `sitemap.xml`. After 4–8 weeks,
  check the Performance report for the keywords the site actually appears for and add them to this file.

---

## 7. Recommended order

1. ✅ Quick wins in §5.
2. Google Business Profile + Search Console (§6).
3. Confirm volumes in Keyword Planner for the §2 keywords and fill them in here.
4. Use §3 when building the separate regional sites.

---

### Sources
- Search results checked 2026-11-07 for: "tree removal Blaine MN",
  "tree service Blaine Minnesota", "stump grinding Blaine MN",
  "tree removal Coon Rapids MN"
- Cost data: https://todayshomeowner.com/near-me/minnesota/blaine/tree-removal
- City of Blaine EAB: https://www.blainemn.gov/933/Emerald-Ash-Borer
- City of Blaine boulevard trees: https://www.blainemn.gov/1440/Boulevard-Tree-Maintenance
- Populations: https://www.revenue.state.mn.us/sites/default/files/2025-12/population-2024-web.pdf ,
  https://usafacts.org/answers/how-many-people-live-in-the-us/county/anoka-county-mn/
