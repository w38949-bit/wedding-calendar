# CODEX HANDOFF — Wedding Calendar Project

## 1. Repository / deployment

- GitHub repo: `w38949-bit/wedding-calendar`
- Default branch: `main`
- GitHub Pages base URL: `https://w38949-bit.github.io/wedding-calendar/`
- Common entry point: `https://w38949-bit.github.io/wedding-calendar/latest.html`
- Pages deploy workflow: `.github/workflows/pages.yml`
- `latest.html` is intended to be a full copy of the app, not a tiny redirect.

## 2. User working style / verification requirement

The user has repeatedly asked that changes are **double-checked before saying they are complete**.

For every meaningful change:
1. Verify the expected code/data exists in `main:index.html`.
2. Verify `latest.html` matches the newest app behavior/content.
3. Verify deployment evidence (Pages workflow / latest commit) where possible.
4. If actual public GitHub Pages rendering cannot be inspected, explicitly say so. Do not claim browser-visible verification unless it was actually observed.
5. Avoid generic “cache” explanations unless the source/deployment diagnosis supports them.

The user prefers direct edits without repeated confirmation.

## 3. Current app structure

The app is a compact single-page wedding hall comparison calendar for 2027 Saturdays.

Main files:
- `index.html` — primary app
- `latest.html` — full-copy alternate entry point
- `photos.js` — wedding hall photo gallery data + photo tab UI
- `photo-proxy-fix.js` — image proxy fallback for blocked external images
- `.github/workflows/pages.yml` — GitHub Pages deploy

Current top-level right-side tabs should be:
- `견적 보기`
- `찜한 카드`
- `웨딩홀 사진`

Photo tab is injected by `photos.js` after the base app loads.

## 4. Critical date bug — DO NOT REGRESS

The calendar previously shifted Saturdays to Friday in Korea because `toISOString()` converted KST local midnight to previous UTC date.

Keep the Saturday generator in local calendar fields:

```js
function sat(a,b){
  let x=new Date(a+'T00:00:00'),z=new Date(b+'T00:00:00'),r=[];
  while(x.getDay()!=6)x.setDate(x.getDate()+1);
  for(;x<=z;x.setDate(x.getDate()+7)){
    let y=x.getFullYear(),
        m=String(x.getMonth()+1).padStart(2,'0'),
        d=String(x.getDate()).padStart(2,'0');
    r.push(`${y}-${m}-${d}`)
  }
  return r
}
```

Do not replace this with `toISOString().slice(0,10)`.

## 5. Favorites — shared Supabase state

Favorites are no longer intended to be browser-only localStorage state.

Supabase project:
- project ref: `diaqqckvgxgqnmzijwjh`
- project URL: `https://diaqqckvgxgqnmzijwjh.supabase.co`
- frontend publishable key currently used in app:
  `sb_publishable_PbTUIS2ps9arxJ2yJG1QQA_7rDPFedM`

Table:
```sql
public.wedding_favorites (
  favorite_id text primary key,
  created_at timestamptz not null default now()
)
```

RLS is enabled. Public anon/authenticated SELECT/INSERT/DELETE policies were intentionally created because the user wants anyone with the link to see and toggle the same shared favorites.

Frontend uses Supabase REST Data API directly.

Current favorite id format:
```js
function favId(x){return [x.date,x.venue,x.hall||'',x.time].join('|')}
```

Behavior to preserve:
- favorites are shared among all visitors
- optimistic add/remove
- periodic polling (roughly 3 seconds currently)
- legacy localStorage migration may run once and upload prior favorites, then remove the old local key
- favorite cards show all favorites across dates
- clicking a favorite card jumps back to the exact calendar month/date/venue/hall
- clicking the heart itself only toggles favorite, not navigation

Security note: because this is a no-login public board, anyone who can access the app can add/remove shared favorites. This is intentional for current user requirements.

## 6. Favorite visual markers

No calendar heart number.

Calendar date cells:
- bottom-left: `n곳` venue count
- bottom-right: distinct venue-colored dots for venues that have at least one favorite on that date

Venue colors:
```js
function venueColor(v){
  return ({
    '그랜드 모먼트':'#e05252',
    '센텀사이언스':'#e0b72f',
    '그랜드 블랑':'#4f7edb',
    '해운대 마리나컨벤션':'#4fa66a'
  })[v]||'#999'
}
```

Preserve:
- venue tabs always show their color dot
- internal hall tabs show the venue color dot only if that hall has >=1 favorite
- favorite view cards show venue color dot

Centum Hotel currently falls back to gray unless a color is intentionally added later.

## 7. Grand Moment total calculation

Grand Moment has two meal choices. Cards should show two separate 350-person totals:

- buffet total = rental + 350 × buffet meal
- steak total = rental + 350 × steak meal

Current meal strings are like:
- `뷔페 63,000원 / 스테이크 74,000원`
- `뷔페 66,000원 / 스테이크 77,000원`

Current `totalBlock(x)` should preserve special Grand Moment two-column totals and retain the normal single total fallback for all other venues.

Important past bug: a bad fallback accidentally became recursive. Make sure the non-Grand-Moment fallback is plain static HTML using `x.total`, not a call back into `totalBlock()`.

## 8. Wedding hall quote data

### 8.1 그랜드 모먼트

Common:
- guarantee 200
- LED 200,000 + production 100,000 excluded from total
- liquor 6,600/bottle excluded
- totals use rental + 350 × meal

6/19, 6/26:
- Signature: 14:00 4,000,000 / 15:00+ 2,500,000
- Veil: 14:00 2,000,000 / 15:00+ 1,500,000
- Classic: 14:00 1,500,000 / 15:00+ 1,000,000
- Ella: 14:00+ 1,000,000
- White: 14:00+ 1,000,000
- buffet 66,000 / steak 77,000

7/3, 7/10:
- Signature: 14:00 2,000,000 / 15:00+ **1,000,000**
- Veil: 14:00+ 1,000,000
- Classic: 14:00+ 1,000,000
- Ella: 14:00+ 1,000,000
- White: 14:00+ 1,000,000
- buffet 63,000 / steak 74,000

7/17 through 8/14 Saturdays:
- Signature: 14:00+ 1,000,000
- Veil: 14:00 1,000,000 / 15:00+ 500,000
- Classic: 14:00 1,000,000 / 15:00+ 500,000
- Ella: 14:00 1,000,000 / 15:00+ 500,000
- White: 14:00 1,000,000 / 15:00+ 500,000
- buffet 63,000 / steak 74,000

8/21, 8/28:
- Signature: 14:00 3,500,000 / 15:00+ 2,000,000
- Veil: 14:00 1,500,000 / 15:00+ 1,000,000
- Classic: 14:00 1,500,000 / 15:00+ 1,000,000
- Ella: 14:00+ 1,000,000
- White: 14:00+ 1,000,000
- buffet 63,000 / steak 74,000

9/4:
- Signature: 15:00+ 3,500,000
- Veil: 14:00 4,000,000 / 15:00+ 3,000,000
- Classic: 14:00 3,500,000 / 15:00+ 2,500,000
- Ella: 14:00 3,000,000 / 15:00+ 2,000,000
- White: 14:00 2,500,000 / 15:00+ 1,500,000
- buffet 66,000 / steak 77,000

9/11, 9/18:
- Signature: 14:00+ 1,500,000
- Other halls: time unspecified, 1,000,000
- buffet 63,000 / steak 74,000

9/25 through 11/27 Saturdays:
- Signature: 15:00-range 4,500,000
- Veil: 14:00 7,500,000 / 15:00-range 3,500,000
- Classic: 14:00 7,000,000 / 15:00-range 3,000,000
- Ella: 14:00-range 6,500,000 / 15:00-range 2,500,000
- White: 14:00 6,000,000 / 15:00 2,000,000
- buffet 66,000 / steak 77,000

### 8.2 그랜드 블랑
Hall: `퀸덤홀(화이트홀)`

- 6/12, 6/19: 15:00 rental 1,500,000; meal 58,000; guarantee 150
- 6/26 13:30 rental 1,500,000; meal 58,000; guarantee 150
- 6/26 15:00 rental 1,000,000; meal 58,000; guarantee 150; latest phone condition precedence
- 7/3, 8/21, 8/28: 15:00 rental 1,000,000; meal 54,000; guarantee 150
- production 100,000 excluded

### 8.3 센텀사이언스

1층 더라움홀:
- 6/26 15:00 rental 500,000; meal 58,000; guarantee 150
- 7/3, 7/10, 8/21, 8/28: 14:00 800,000 / 15:00 700,000; meal 55,000; guarantee unspecified
- 9/4 14:00 1,800,000; meal 58,000
- 9/25 15:00 600,000; meal 58,000

스카이홀:
- June fully booked
- 8/21 15:30 rental 1,000,000; meal 55,000

Production 150,000 excluded.

### 8.4 해운대 마리나컨벤션

No internal hall. Keep `hall` blank. Do not create a fake internal hall tab.

- guarantee 150
- production 150,000 excluded
- June/Sep meal 52,000
- Jul/Aug meal 49,000

6/5, 6/12:
- 15:30 rental 500,000

6/19, 6/26:
- 13:20 800,000
- 14:30 600,000
- 15:30 500,000

7/3, 7/10:
- 12:00 / 13:20 / 14:30 / 15:30 all 500,000

8/21, 8/28:
- 13:20 / 14:30 / 15:30 all 500,000

9/4, 9/25:
- 14:30 600,000
- 15:30 500,000

### 8.5 센텀호텔

Added by user most recently:
- 2027 July and August Saturdays
- time 13:40
- rental field: 7,000,000
- note must clearly say `홀드메 패키지`
- additional note: `7·8월 13:40 자리 조금 있음`
- guarantee 200
- meal 65,000

Current data insertion pattern:
```js
add('센텀호텔','',sat('2027-07-01','2027-08-31'),[['13:40',7000000]],'65,000원',200,'홀드메 패키지 / 7·8월 13:40 자리 조금 있음');
```

## 9. Photo tab architecture

`photos.js` injects a third tab: `웨딩홀 사진`.

Photo view behavior:
- user selects wedding venue
- if venue has internal halls, user selects internal hall
- gallery for that exact hall is shown
- venues with no internal hall (Marina / Centum Hotel) show photos immediately
- clicking calendar while in photo mode should switch back to browse mode
- shared favorites polling should not overwrite the photo view

Current venue/hall targets:
- 그랜드 모먼트
  - 시그니처홀
  - 베일홀
  - 클래식홀
  - 엘라홀
  - 화이트홀
- 그랜드 블랑
  - 퀸덤홀(화이트홀)
- 센텀사이언스
  - 1층 더라움홀
  - 스카이홀
- 해운대 마리나컨벤션
  - no internal hall
- 센텀호텔
  - no internal hall

Current image handling:
- `photos.js` uses external source URLs rather than re-uploading most images to GitHub
- each gallery has a source page link
- some image hosts block hotlinking
- `photo-proxy-fix.js` was added to proxy/fallback blocked images
- image loading failures must be handled gracefully

## 10. Current Grand Moment photo state

Current `photos.js` already has existing photo sets for Grand Moment.

Most recent changes:
- Classic Hall replaced with a 10-image set from a Tistory Grand Moment hall-tour post
- Ella Hall replaced with a 10-image set from the same hall-tour post
- White Hall replaced with a 10-image set from a White Hall-specific Tistory post

These Kakao CDN images initially failed when directly hotlinked from GitHub Pages, so `photo-proxy-fix.js` was introduced to proxy them.

## 11. CURRENT OPEN TASK — Naver blog photos

The user wants photos from this exact Naver blog post added to the Grand Moment hall galleries:

`https://m.blog.naver.com/qorrkdnjs/223451943421`

User explicitly said the post contains Grand Moment hall-by-hall photos and wants those photos added to the corresponding halls.

Direct access to Naver from the prior ChatGPT environment was blocked by robots/DNS/safe-open restrictions, so the next step is to use a real local/Codex environment with shell/network or a proxy.

### Useful proxy discovery already found

A public GitHub project for Naver blog image downloading was inspected:
- repo: `hoyashu/hoyashu.github.io`
- it contains `cors-worker.js`
- the frontend currently references this deployed Cloudflare Worker:

`https://naver-img-proxy.5126537.workers.dev`

Usage:
```text
https://naver-img-proxy.5126537.workers.dev/?url=<URL_ENCODED_TARGET>
```

Its HTML proxy fallback list also includes:
```text
https://api.allorigins.win/raw?url=<encoded>
https://api.codetabs.com/v1/proxy?quest=<encoded>
https://thingproxy.freeboard.io/fetch/<url>
```

The Worker source sets browser-like headers including:
- User-Agent
- Accept
- Accept-Language
- Referer: `https://blog.naver.com/`

### Suggested Codex workflow for the Naver post

1. Try requesting the user URL directly.
2. Resolve/locate the underlying Naver `PostView` URL if the mobile page is just a wrapper.
3. If direct request fails, use the Cloudflare Worker above.
4. Parse SmartEditor/PostView HTML.
5. Extract image URLs (`postfiles.pstatic.net`, `blogfiles.pstatic.net`, etc.).
6. Use nearby headings/text and image order to classify photos into:
   - 시그니처홀
   - 베일홀
   - 클래식홀
   - 엘라홀
   - 화이트홀
7. Do **not** guess ambiguous classification. If a photo cannot be confidently assigned, leave it unassigned or document it separately.
8. Append confirmed Naver images to the existing corresponding hall arrays in `photos.js` rather than deleting all current photos, unless the user explicitly asks to replace.
9. Add/retain the exact Naver post as a source for those appended photos if practical.
10. Update the photo script cache-busting version in both `index.html` and `latest.html`.
11. Verify `main:photos.js`, `main:index.html`, and `main:latest.html`.
12. Trigger/verify GitHub Pages deployment.
13. If actual public render can be opened in Codex/browser, visually verify at least one image from each modified hall.

## 12. Deployment / cache notes

The user has had multiple cases where source code changed but the public page appeared unchanged.

Recommended pattern after photo changes:
- update `photos.js`
- change script query version in both `index.html` and `latest.html`, e.g.
  ```html
  <script src="photos.js?v=YYYYMMDD-HHMM"></script>
  ```
- if `photo-proxy-fix.js` changes, bump its query version too
- ensure `pages.yml` deploys `main` root `.`
- if needed, make a no-op/comment change to `pages.yml` to force redeploy

Do not create endless one-off redirect pages unless needed for diagnosis.

## 13. Known significant commits / history

Useful reference points from prior work:
- `f049dc982e2a900203902c606a62235fddd395fa` — Saturday date fix while keeping favorites
- `90881fe318ab1eb120e3ee8b51b2c6e6f3ba72f9` — old user-approved visual baseline / rollback reference
- `6b3f314d79bc7c262a6eebb4c502d1e232be8e6c` — favorites collection tab
- `7ab6947204a0ee21c00848aa68db29edb250cb5a` — favorite card jump to calendar date
- `ac339795143038d7bf0074a0d02fc7973b9a791b` — replace Grand Moment Classic/Ella/White photo sets
- `8825d4d2b39200359c16ff74485c5e07963d19dd` — use proxy fallback for Kakao wedding photos

If asked for rollback of the whole recent experiment, understand that `90881fe...` predates later features, so rolling back there will remove many newer features.

## 14. Data/UI preservation checklist before any edit

Before modifying app files, preserve all of the following unless the user explicitly asks otherwise:

- correct Saturday date generation without UTC shift
- all existing quote data
- shared Supabase favorites
- calendar colored favorite dots
- venue color dots
- internal hall favorite markers
- `찜한 카드` tab
- favorite card click-to-calendar behavior
- Grand Moment buffet/steak dual totals
- Marina blank-hall behavior
- Centum Hotel quote data
- photo tab and existing galleries
- photo proxy fallback

## 15. What to tell the user after Codex work

Be explicit about what was actually verified.

Good completion report structure:
- what files changed
- which halls received which Naver images
- commit SHA
- whether `index.html` and `latest.html` both reference the new cache version
- whether Pages deploy completed
- whether actual public rendering was visually checked

Never say “done” if only a workflow trigger was committed but the resulting app/source was not verified.

---

### Recommended first Codex instruction

> Read `CODEX_HANDOFF.md` fully. Continue the current open task: extract Grand Moment hall-by-hall photos from `https://m.blog.naver.com/qorrkdnjs/223451943421`, append confidently classified images to `photos.js`, preserve all existing app behavior, update cache versions in both `index.html` and `latest.html`, commit/push to `main`, verify Pages deployment, and visually verify the public gallery if browser access is available.
