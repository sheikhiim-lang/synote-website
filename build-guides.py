"""Generates the static Synote guide pages into ./public/<slug>/index.html.
Run: python3 build_pages.py   (no dependencies)"""
import json, os, html, re

SITE = "https://www.synote.ca"
APP = "https://apps.apple.com/app/synote/id6761725997"
UPDATED = "2026-10-01"
HERE = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.join(HERE, "public")

APPLE = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16.37 12.6c-.02-2.3 1.88-3.4 1.96-3.46-1.07-1.56-2.73-1.78-3.32-1.8-1.41-.14-2.76.83-3.48.83-.72 0-1.82-.81-3-.79-1.54.02-2.96.9-3.76 2.28-1.6 2.78-.41 6.89 1.15 9.15.76 1.1 1.67 2.34 2.86 2.3 1.15-.05 1.58-.74 2.97-.74 1.38 0 1.77.74 2.98.72 1.23-.02 2.01-1.12 2.76-2.23.87-1.28 1.23-2.52 1.25-2.58-.03-.01-2.4-.92-2.42-3.66zM14.1 5.86c.63-.77 1.06-1.83.94-2.89-.91.04-2.01.61-2.66 1.37-.58.67-1.1 1.76-.96 2.8 1.01.08 2.05-.52 2.68-1.28z"/></svg>'

PAGES = {}

def page(slug, **kw):
    PAGES[slug] = kw

# ───────────────────────────────────────────────────────────────── 1
page("photo-to-calendar",
  title="Photo to Calendar: Snap a Schedule, Get Events | Synote",
  desc="Take a photo or screenshot of a timetable, shift roster or event poster and Synote turns it into calendar events — times, rooms and weekly repeats.",
  crumb="Photo to calendar",
  h1='Turn a <em>photo of any schedule</em> into calendar events',
  lead="Point your iPhone at a class timetable, a work roster or an event poster. Synote reads it, builds every event — with the right days, times, rooms and weekly repeats — and shows you a preview to save in one tap.",
  hero_img=("/SynoteCaptureCalendar.jpg", "Synote reading a photo of a semester timetable and listing the classes it found", 814, 1753),
  body="""
<p>Typing a whole timetable into a calendar app is the kind of job everyone puts off. A semester of classes can mean thirty or more entries, each with a day, a start and end time, a room and an end date. Synote does that reading for you: you give it a picture, it gives you the events.</p>

<h2>How photo-to-calendar works in Synote</h2>
<ol class="g-steps">
  <li><b>Take a photo or pick a screenshot</b>Tap <strong>+</strong>, then <strong>Take a Photo</strong> for something in front of you, or <strong>Upload a photo</strong> for a screenshot or saved image.</li>
  <li><b>Synote reads the schedule</b>It finds each item and its day, start and end time, and location. A class that appears every Monday and Wednesday becomes one repeating event, not a pile of copies.</li>
  <li><b>It asks only what the picture can't tell it</b>Timetables rarely say when the term starts or ends, so Synote asks — for example “When does this semester end?” — instead of guessing.</li>
  <li><b>Check the preview, tap Save</b>You see every event before anything is written. Nothing is saved until you tap <strong>Save</strong>, and Synote checks for clashes with what's already in your calendar first.</li>
</ol>

<h2>What you can photograph</h2>
<p>Anything where the schedule is printed or typed clearly works well:</p>
<ul>
  <li><strong>Class and university timetables</strong> — weekly grids with rooms and course codes.</li>
  <li><strong>Work shift rosters</strong> — a photo of the schedule pinned in the staff room.</li>
  <li><strong>Kids' school, sports and activity schedules</strong> — practice times, games, term dates.</li>
  <li><strong>Event posters and flyers</strong> — a concert, a workshop, a community event.</li>
  <li><strong>Invitations and screenshots</strong> — a wedding invite, an email or a message that contains a date and time.</li>
</ul>
<p>Synote keeps the place out of the title and puts it in the event's location, so “Biology 101 (Room 204)” becomes the event <em>Biology 101</em> at <em>Room 204</em>.</p>

<div class="g-shots">
  <figure><img src="/img/synote-schedule-preview.jpg" alt="Synote schedule preview showing the events it will add, with dates, times and a weekly repeat" width="585" height="1266" loading="lazy"><figcaption>The preview shows exactly what will be added — nothing is saved until you tap Save.</figcaption></figure>
  <figure><img src="/img/synote-saved-recurring.jpg" alt="Synote confirming events were scheduled, with repeating events running until the end date" width="585" height="1266" loading="lazy"><figcaption>Weekly classes are saved as repeating events that stop on the date you gave.</figcaption></figure>
</div>

<h2>Why not just retype it?</h2>
<p>Because the slow part isn't typing one event — it's the repetition and the details. With a photo, Synote handles the parts people usually get wrong:</p>
<ul>
  <li><strong>Repeats:</strong> each weekly class is created once, as a repeating event, with an end date.</li>
  <li><strong>Times:</strong> start <em>and</em> end times come from the grid, so your day view shows real gaps between classes.</li>
  <li><strong>Clashes:</strong> before saving, Synote checks the new events against what you already have.</li>
  <li><strong>Reminders:</strong> after saving, it offers a reminder for all of them at once — 5, 10 or 30 minutes before, or a day ahead.</li>
</ul>

<h2>Tips for the best result</h2>
<ul>
  <li>Photograph the schedule straight on, with the whole grid in the frame and no glare.</li>
  <li>A screenshot of a digital timetable is even better than a photo of a screen.</li>
  <li>For a very long schedule, send one week or one page at a time.</li>
  <li>If something is unclear, just reply in the chat — “the lab is actually at 2pm” — and Synote updates the preview.</li>
</ul>
""",
  faq=[
    ("Can I turn a picture of my class schedule into calendar events on iPhone?", "Yes. In Synote, tap + then Take a Photo or Upload a photo. Synote reads the timetable, creates each class with its day, time and room, and turns weekly classes into repeating events. You review a preview and tap Save."),
    ("Does it work with screenshots?", "Yes. Screenshots of a timetable, an email, a message or an invitation work just like photos — often better, because the text is sharp."),
    ("What if the photo doesn't show the start or end date of the term?", "Synote asks you. It never invents a date it can't see; it asks a short question such as when the semester ends, then sets the repeats to stop on that date."),
    ("Will it add events without asking me?", "No. You always see a preview first, and nothing is saved until you tap Save."),
    ("Is Synote free?", "Synote is free to download on the App Store and you can try the AI features for free. A Pro subscription unlocks unlimited use."),
  ],
  related=["ai-planner-for-students", "ai-scheduling-assistant"],
)

# ───────────────────────────────────────────────────────────────── 2
page("ai-planner-for-students",
  title="AI Planner for Students: Class Schedule to Calendar | Synote",
  desc="A student planner that builds your semester for you: snap your timetable, type exams and deadlines, and Synote sets up classes, tasks and reminders.",
  crumb="AI planner for students",
  h1='The <em>AI student planner</em> that builds your semester for you',
  lead="Snap your class timetable, type your exams and assignment deadlines in plain words, and Synote turns it all into a calendar you can actually follow — with repeats, reminders and the free time between classes.",
  hero_img=("/img/synote-day-timeline.jpg", "Synote day timeline showing a student's events with the free time between them", 585, 1266),
  body="""
<p>Most student planners are empty notebooks with a grid. You still have to copy every class, every lab and every deadline into them by hand — usually in the first, busiest week of term. Synote flips that around: you give it what you already have, and it does the copying.</p>

<h2>Set up your whole semester in about a minute</h2>
<ol class="g-steps">
  <li><b>Photograph your timetable</b>Take a photo or screenshot of your class schedule. Synote reads each course, its days, times and room.</li>
  <li><b>Answer one question</b>It asks when the semester ends, so weekly classes repeat until the right date — no endless repeating into next year.</li>
  <li><b>Save</b>Every class lands in your calendar as a repeating event, colour-coded so lectures, labs and work shifts are easy to tell apart.</li>
</ol>
<p>Already have a schedule in a PDF or on your university portal? Take a screenshot of it and upload that instead. See <a href="/photo-to-calendar/">how photo-to-calendar works</a> for tips.</p>

<h2>Add exams and deadlines by just saying them</h2>
<p>You don't need to fill in forms. Type or say it the way you'd text a friend:</p>
<div class="g-quote">“Chem midterm Thursday Oct 15 at 10am, essay due Nov 2, and study group every Tuesday at 7pm”</div>
<p>Synote splits that into three items: a timed exam, a deadline, and a weekly study session. If something is missing — like what time the study group ends — it asks instead of guessing, and nothing is saved until you tap <strong>Save</strong>.</p>

<div class="g-shots">
  <figure><img src="/img/synote-type-request.jpg" alt="Typing several events in one sentence into Synote" width="585" height="1266" loading="lazy"><figcaption>One sentence, several events — Synote understands dates like “Friday” and “every Monday”.</figcaption></figure>
  <figure><img src="/img/synote-task-completed.jpg" alt="Synote calendar with a completed item ticked off" width="585" height="1266" loading="lazy"><figcaption>Tick things off as you go — your day view shows what's done and what's next.</figcaption></figure>
</div>

<h2>See your real free time</h2>
<p>Synote's day view shows each class with its actual start and end time, and labels the gaps between them — “1 h 30 free” — so you can see where a study block, a gym session or a shift fits before you commit to it.</p>

<h2>Ask your planner instead of scrolling</h2>
<p>Because Synote understands your schedule, you can just ask it:</p>
<ul>
  <li>“What do I have tomorrow?”</li>
  <li>“When is my next exam?”</li>
  <li>“Move my study group to Wednesday.”</li>
  <li>“Do I have anything Friday afternoon?”</li>
</ul>

<h2>Reminders that don't need setting up one by one</h2>
<p>After you save a batch of events, Synote offers to remind you before all of them at once — 5, 10 or 30 minutes before, or a day ahead for exams. To-dos like readings and problem sets can be added as tasks with a due date and ticked off when done.</p>

<h2>Works in your language</h2>
<p>Synote understands and replies in <strong>English, French, Japanese and Persian</strong>, so international students can write the way they think — and a timetable in French is read as easily as one in English.</p>
""",
  faq=[
    ("What is the best AI planner app for students?", "The best one is the one that saves you setup time. Synote is built for that: you photograph your timetable and type deadlines in plain words, and it creates repeating classes, exams, tasks and reminders for you on iPhone."),
    ("Can I import my class schedule automatically?", "Yes — take a photo or a screenshot of your timetable. Synote reads the courses, days, times and rooms and creates repeating events until the end date of your semester."),
    ("Can Synote track assignments and exams?", "Yes. Type them naturally, for example “essay due Nov 2” or “chem midterm Thursday 10am”. Timed items become events and deadlines become tasks you can tick off."),
    ("Does Synote work in French?", "Yes. Synote works in English, French, Japanese and Persian."),
    ("Is Synote free for students?", "Synote is free to download and you can try the AI features for free. A Pro subscription unlocks unlimited use."),
  ],
  related=["photo-to-calendar", "ai-scheduling-assistant"],
)

# ───────────────────────────────────────────────────────────────── 3
page("ai-scheduling-assistant",
  title="AI Scheduling Assistant for iPhone – Plan by Typing | Synote",
  desc="Synote is an AI scheduling assistant for iPhone. Type, say or snap your plans — “dentist Friday at 3pm, gym every Monday” — and it builds your calendar.",
  crumb="AI scheduling assistant",
  h1='An <em>AI scheduling assistant</em> that plans your day from one sentence',
  lead="Type it, say it or snap a photo. Synote understands dates, times and repeats, asks when something is missing, checks for clashes, and shows you the plan before it saves anything.",
  hero_img=("/img/synote-schedule-preview.jpg", "Synote schedule preview created from a single typed sentence", 585, 1266),
  body="""
<p>A calendar app is a place to store plans. A scheduling assistant does the planning work: it turns what you say into correctly dated events, notices what's missing, and keeps your week consistent. That's what Synote is — an assistant that lives inside your calendar.</p>

<h2>What you can say to Synote</h2>
<div class="g-quote">“Dentist Friday at 3pm and gym every Monday at 6pm”</div>
<p>From that one line Synote creates two events: a one-off dentist appointment this Friday from 3 to 4pm, and a weekly gym session on Mondays from 6 to 7pm. Some other things it handles:</p>
<ul>
  <li><strong>Several plans at once</strong> — “Lunch with Sara Tuesday 12:30, call the bank tomorrow morning, pick up groceries after work.”</li>
  <li><strong>Repeats</strong> — every day, every weekday, every other week, the first Monday of the month.</li>
  <li><strong>To-dos</strong> — “Renew passport by the end of the month” becomes a task with a due date, not a fake meeting.</li>
  <li><strong>Changes</strong> — “Move my dentist to next Wednesday.”</li>
  <li><strong>Questions</strong> — “What's my busiest day this week?” or “Am I free Saturday afternoon?”</li>
</ul>

<h2>Three ways in: type, speak or snap</h2>
<ol class="g-steps">
  <li><b>Type</b>Write it like a message. Synote reads natural dates — “next Friday”, “tomorrow evening”, “every other Tuesday”.</li>
  <li><b>Speak</b>Say it out loud when your hands are busy; Synote turns your voice into the same events.</li>
  <li><b>Snap</b>Photograph a timetable, poster or invitation and Synote extracts the events. <a href="/photo-to-calendar/">More on photo-to-calendar →</a></li>
</ol>

<h2>It asks instead of guessing</h2>
<p>Most mistakes in calendars come from guessed details. If you say “team lunch Thursday” without a time, Synote asks “What time is the team lunch?” instead of inventing noon. You always see a preview of what it understood, and nothing is saved until you tap <strong>Save</strong>.</p>

<div class="g-shots">
  <figure><img src="/img/synote-type-request.jpg" alt="Typing a plan into Synote's chat" width="585" height="1266" loading="lazy"><figcaption>Type your plans like a text message.</figcaption></figure>
  <figure><img src="/img/synote-saved-recurring.jpg" alt="Synote confirming the events were scheduled and offering reminders" width="585" height="1266" loading="lazy"><figcaption>Saved in one tap — with one question to set reminders for everything.</figcaption></figure>
</div>

<h2>Synote vs. a regular calendar app</h2>
<div class="g-table-wrap"><table class="g-table">
  <thead><tr><th></th><th>Regular calendar app</th><th>Synote</th></tr></thead>
  <tbody>
    <tr><td><strong>Adding an event</strong></td><td>Fill in title, date, start, end, repeat and reminder fields</td><td>One sentence, a voice note or a photo</td></tr>
    <tr><td><strong>Many events at once</strong></td><td>One at a time</td><td>As many as you list, in one message</td></tr>
    <tr><td><strong>Missing details</strong></td><td>Defaults silently (often wrong)</td><td>Asks a short question</td></tr>
    <tr><td><strong>Clashes</strong></td><td>You notice later</td><td>Checked before saving</td></tr>
    <tr><td><strong>Finding things</strong></td><td>Scroll and search</td><td>Ask: “When is my next dentist appointment?”</td></tr>
  </tbody>
</table></div>

<h2>Who it's for</h2>
<ul>
  <li><strong>Busy professionals</strong> who think of plans in the middle of something else.</li>
  <li><strong>Students</strong> juggling classes, exams and part-time work — see the <a href="/ai-planner-for-students/">AI planner for students</a>.</li>
  <li><strong>Parents</strong> keeping school, sports and appointments straight.</li>
  <li>Anyone who has a calendar but doesn't keep it up to date because entering things is a chore.</li>
</ul>
""",
  faq=[
    ("What is an AI scheduling assistant?", "It's an app that turns plans written or spoken in everyday language into calendar events. Instead of filling in forms, you say “dentist Friday at 3pm” and the assistant works out the date, time, duration and repeats, then asks you to confirm."),
    ("Is Synote available on iPhone?", "Yes. Synote is available on the App Store for iPhone."),
    ("Can Synote schedule recurring events?", "Yes — daily, weekly, every other week, weekdays only, monthly and more. Say it naturally, such as “gym every Monday and Thursday at 6pm”."),
    ("Does Synote save anything without my confirmation?", "No. You see a preview of every event first, and nothing is saved until you tap Save."),
    ("Which languages does Synote understand?", "English, French, Japanese and Persian."),
  ],
  related=["photo-to-calendar", "ai-planner-for-students"],
)

CARD = {
  "photo-to-calendar": ("Photo to calendar", "Snap a timetable, roster or poster and get the events."),
  "ai-planner-for-students": ("AI planner for students", "Build your semester from one photo of your timetable."),
  "ai-scheduling-assistant": ("AI scheduling assistant", "Plan your day from one sentence — type, speak or snap."),
}

def esc(s): return html.escape(s, quote=True)
def strip(s): return re.sub(r"<[^>]+>", "", s)

def head(title, desc, url, image, ld):
    return f"""<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{esc(title)}</title>
<meta name="description" content="{esc(desc)}">
<link rel="canonical" href="{url}">
<meta name="robots" content="index, follow, max-image-preview:large">
<meta name="theme-color" content="#B4512D">
<meta name="apple-itunes-app" content="app-id=6761725997">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32.png">
<link rel="icon" type="image/png" sizes="192x192" href="/favicon-192.png">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
<meta property="og:type" content="article">
<meta property="og:site_name" content="Synote">
<meta property="og:title" content="{esc(title)}">
<meta property="og:description" content="{esc(desc)}">
<meta property="og:url" content="{url}">
<meta property="og:image" content="{SITE}{image}">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="{esc(title)}">
<meta name="twitter:description" content="{esc(desc)}">
<meta name="twitter:image" content="{SITE}{image}">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@600;700;800&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="/guides.css">
<script type="application/ld+json">{json.dumps(ld, ensure_ascii=False)}</script>
</head>
<body>
<header class="g-head"><div class="g-head-in">
  <a class="g-logo" href="/"><img src="/Synotelogo.png" alt="" width="30" height="30">Synote</a>
  <nav class="g-nav" aria-label="Main">
    <a href="/">Home</a>
    <a href="/guides/">Guides</a>
    <a class="g-btn" href="{APP}">Get the app</a>
  </nav>
</div></header>
"""

FOOT = f"""
<footer class="g-foot">
  <a class="g-logo" href="/" style="font-size:15px"><img src="/Synotelogo.png" alt="" width="22" height="22" style="width:22px;height:22px">Synote</a>
  <span>© 2026 Zenith Software Corp</span>
  <span class="g-sp"></span>
  <a href="/guides/">Guides</a>
  <a href="/privacy">Privacy</a>
  <a href="mailto:support@synote.ca">Contact</a>
</footer>
</body>
</html>
"""

def cta():
    return f"""
<section class="g-cta">
  <img src="/Synotelogo.png" alt="Synote logo" width="64" height="64" loading="lazy">
  <h2>Try Synote free on iPhone</h2>
  <p>Type it, say it or snap it — Synote plans it.</p>
  <a class="g-btn big" href="{APP}">{APPLE} Download on the App Store</a>
</section>
"""

def build(slug, p):
    url = f"{SITE}/{slug}/"
    app_ld = {"@type": "MobileApplication", "name": "Synote", "operatingSystem": "iOS",
              "applicationCategory": "ProductivityApplication", "installUrl": APP,
              "offers": {"@type": "Offer", "price": "0", "priceCurrency": "USD"}}
    ld = {"@context": "https://schema.org", "@graph": [
        {"@type": "WebPage", "@id": url, "url": url, "name": p["title"], "description": p["desc"],
         "inLanguage": "en", "dateModified": UPDATED, "isPartOf": {"@type": "WebSite", "name": "Synote", "url": SITE + "/"},
         "primaryImageOfPage": SITE + p["hero_img"][0], "about": app_ld,
         "publisher": {"@type": "Organization", "name": "Zenith Software Corp", "url": "https://zenithsoftware.ca/"}},
        {"@type": "BreadcrumbList", "itemListElement": [
            {"@type": "ListItem", "position": 1, "name": "Synote", "item": SITE + "/"},
            {"@type": "ListItem", "position": 2, "name": "Guides", "item": SITE + "/guides/"},
            {"@type": "ListItem", "position": 3, "name": p["crumb"], "item": url}]},
        {"@type": "FAQPage", "mainEntity": [
            {"@type": "Question", "name": q, "acceptedAnswer": {"@type": "Answer", "text": a}} for q, a in p["faq"]]},
    ]}
    src, alt, w, h = p["hero_img"]
    faq_html = "\n".join(f"<details><summary>{esc(q)}</summary><p>{esc(a)}</p></details>" for q, a in p["faq"])
    rel = "\n".join(f'<a href="/{s}/"><b>{CARD[s][0]}</b><span>{CARD[s][1]}</span></a>' for s in p["related"])
    doc = head(p["title"], p["desc"], url, src, ld) + f"""
<section class="g-hero">
  <div>
    <nav class="g-crumbs" aria-label="Breadcrumb"><a href="/">Synote</a> › <a href="/guides/">Guides</a> › {esc(p["crumb"])}</nav>
    <h1>{p["h1"]}</h1>
    <p class="g-lead">{esc(p["lead"])}</p>
    <a class="g-btn big" href="{APP}">{APPLE} Download on the App Store</a>
    <p class="g-sub">Free to download · iPhone · English, Français, 日本語, فارسی</p>
  </div>
  <div class="g-phone"><img src="{src}" alt="{esc(alt)}" width="{w}" height="{h}" fetchpriority="high"></div>
</section>
<main class="g-main">
{p["body"]}
<section class="g-faq">
<h2>Frequently asked questions</h2>
{faq_html}
</section>
</main>
{cta()}
<section class="g-related"><h2>Related guides</h2><div class="g-cards">
{rel}
</div></section>
""" + FOOT
    d = os.path.join(OUT, slug); os.makedirs(d, exist_ok=True)
    open(os.path.join(d, "index.html"), "w", encoding="utf-8").write(doc)
    words = len(strip(p["body"] + " ".join(q + a for q, a in p["faq"])).split())
    print(f"/{slug}/  title={len(p['title'])}ch  desc={len(p['desc'])}ch  words={words}")

def hub():
    url = f"{SITE}/guides/"
    title = "Synote Guides: Photo to Calendar, Student & AI Planning"
    desc = "Guides to planning faster with Synote — turn photos of schedules into events, build a student semester in a minute, and plan your day from one sentence."
    ld = {"@context": "https://schema.org", "@type": "CollectionPage", "@id": url, "url": url, "name": title,
          "description": desc, "inLanguage": "en",
          "hasPart": [{"@type": "WebPage", "url": f"{SITE}/{s}/", "name": PAGES[s]["title"]} for s in PAGES]}
    cards = "\n".join(f'<a href="/{s}/"><b>{CARD[s][0]}</b><span>{esc(PAGES[s]["desc"])}</span></a>' for s in PAGES)
    doc = head(title, desc, url, "/img/synote-day-timeline.jpg", ld) + f"""
<section class="g-hero" style="grid-template-columns:1fr;padding-bottom:20px">
  <div>
    <nav class="g-crumbs" aria-label="Breadcrumb"><a href="/">Synote</a> › Guides</nav>
    <h1>Plan faster with <em>Synote</em></h1>
    <p class="g-lead">Short guides to getting your schedule out of your head — and out of photos and messages — and into a calendar you can trust.</p>
  </div>
</section>
<section class="g-hub"><div class="g-cards">
{cards}
</div></section>
{cta()}
""" + FOOT
    d = os.path.join(OUT, "guides"); os.makedirs(d, exist_ok=True)
    open(os.path.join(d, "index.html"), "w", encoding="utf-8").write(doc)
    print(f"/guides/  title={len(title)}ch desc={len(desc)}ch")

for slug, p in PAGES.items():
    build(slug, p)
hub()
