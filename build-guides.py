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
  related=["ai-planner-for-students", "ai-scheduling-assistant", "shift-schedule-app"],
  alternates={"fr": "/fr/emploi-du-temps/"},
)

# ───────────────────────────────────────────────────────────────── 2
page("ai-planner-for-students",
  title="AI Planner for Students: Class Schedule to Calendar | Synote",
  desc="A student planner that builds your semester for you: snap your timetable, type exams and deadlines, and Synote sets up classes, tasks and reminders.",
  crumb="AI planner for students",
  h1='The <em>AI student planner</em> that builds your semester for you',
  lead="Snap your class timetable, type your exams and assignment deadlines in plain words, and Synote turns it all into a calendar you can actually follow — with repeats, reminders and the free time between classes.",
  hero_img=None,
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
  related=["photo-to-calendar", "ai-scheduling-assistant", "schedule-maker"],
)

# ───────────────────────────────────────────────────────────────── 3
page("ai-scheduling-assistant",
  title="AI Scheduling Assistant for iPhone – Plan by Typing | Synote",
  desc="Synote is an AI scheduling assistant for iPhone. Type, say or snap your plans — “dentist Friday at 3pm, gym every Monday” — and it builds your calendar.",
  crumb="AI scheduling assistant",
  h1='An <em>AI scheduling assistant</em> that plans your day from one sentence',
  lead="Type it, say it or snap a photo. Synote understands dates, times and repeats, asks when something is missing, checks for clashes, and shows you the plan before it saves anything.",
  hero_img=None,
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
  related=["photo-to-calendar", "ai-planner-for-students", "day-planner-app"],
)

# ───────────────────────────────────────────────────────────────── 4
page("shift-schedule-app",
  updated="2026-10-05",
  title="Shift Schedule App: Add Work Shifts by Typing | Synote",
  desc="Add your work shifts by typing, speaking or snapping the roster. Synote handles night shifts past midnight, repeating rotas, clashes and reminders.",
  crumb="Shift schedule app",
  h1='A <em>shift schedule app</em> that adds your shifts for you',
  lead="Type your shifts the way you'd text a coworker, or snap a photo of the roster. Synote puts every shift on your iPhone calendar — night shifts that end the next morning included — and reminds you before you have to leave.",
  hero_img=None,
  body="""
<p>When your hours change every week, keeping a calendar up to date is a chore. Copying a roster into a calendar app means opening the same form again and again: date, start, end, repeat, reminder. Synote lets you add a whole week of shifts in one message.</p>

<h2>Add a week of shifts in one message</h2>
<div class="g-quote">“Work Monday, Tuesday and Friday 7am to 3:30pm, remind me 60 minutes before”</div>
<p>From that one line Synote prepares three shifts with the right start and end times and a reminder an hour before each one. You check the preview, tap <strong>Save</strong>, and they're on your calendar.</p>
<ol class="g-steps">
  <li><b>Type, say or snap it</b>Write your shifts in plain words, say them out loud, or take a photo of the roster pinned up at work. A screenshot of a scheduling app works too.</li>
  <li><b>Synote fills in the details</b>It works out each date, the start and end time, and any repeat. If a detail is missing, it asks a short question instead of guessing — for example, whether “7 to 3” means 7am or 7pm.</li>
  <li><b>Review and save</b>Nothing is saved until you tap <strong>Save</strong>. Before it saves, Synote checks the new shifts against what's already in your calendar and tells you about any clash.</li>
</ol>

<h2>Night shifts that end the next morning</h2>
<p>Many calendar apps get overnight shifts wrong. Synote doesn't:</p>
<div class="g-quote">“Night shift Saturday 10pm to 6am”</div>
<p>This becomes one shift from 10pm Saturday to 6am <em>Sunday</em>. Your day view shows it in the right place, and the reminder fires before you leave on Saturday evening, not on the wrong day.</p>

<h2>Fixed, repeating and rotating schedules</h2>
<ul>
  <li><strong>Same shifts every week:</strong> “Shift every Monday, Tuesday, Thursday and Saturday 2:30am to 9am” creates one repeating series.</li>
  <li><strong>Every other week:</strong> “Weekend shift every other Saturday 8am to 4pm” repeats every two weeks, not every week.</li>
  <li><strong>Rotating rosters</strong> (4 on / 4 off, 2-2-3 and other patterns): photograph the roster, or list the dates — “Shifts on Oct 6, 7, 10 and 11, 7am to 7pm” — and Synote adds each one.</li>
</ul>
<p>Synote asks when a repeating shift should stop, so your calendar doesn't fill up with shifts for a job you left months ago.</p>

<h2>Reminders before every shift</h2>
<p>Add a reminder as you type (“remind me 30 minutes before”), or choose one for the whole batch after you save: 5, 10 or 30 minutes before, or a day ahead. Reminders are delivered on your iPhone even when Synote is closed.</p>

<h2>Ask about your schedule</h2>
<p>Instead of scrolling through weeks of shifts, just ask:</p>
<ul>
  <li>“When do I work next?”</li>
  <li>“Am I free Saturday afternoon?”</li>
  <li>“Move Friday's shift to start at 9am.”</li>
  <li>“How many shifts do I have this week?”</li>
</ul>

<h2>Who uses Synote for shift work</h2>
<ul>
  <li><strong>Nurses and healthcare workers</strong> with day, evening and night rotations.</li>
  <li><strong>Retail, restaurant and hospitality staff</strong> whose roster changes every week.</li>
  <li><strong>Warehouse, security and transport workers</strong> on early starts and overnights.</li>
  <li><strong>Students with part-time jobs</strong> fitting shifts around classes — see the <a href="/ai-planner-for-students/">AI planner for students</a>.</li>
</ul>
""",
  faq=[
    ("What is the easiest way to add work shifts to my iPhone calendar?", "With Synote you type your shifts in one message — for example “Work Monday, Tuesday and Friday 7am to 3:30pm” — or take a photo of the roster. Synote prepares every shift, shows you a preview and saves them when you tap Save."),
    ("Can Synote handle night shifts that go past midnight?", "Yes. “Night shift Saturday 10pm to 6am” is saved as one shift that ends at 6am on Sunday, so it appears on the right days with the reminder at the right time."),
    ("Can I add a rotating shift pattern like 4 on, 4 off?", "Photograph your roster or list the dates of your shifts, and Synote adds each one. Simple weekly and every-other-week patterns can be set up as a single repeating series."),
    ("Will Synote remind me before each shift?", "Yes. Say it when you add them (“remind me 60 minutes before”) or pick a reminder for all of them after saving. Reminders arrive on your iPhone even when the app is closed."),
    ("Is Synote free?", "Synote is free to download on the App Store and you can try the AI features for free. A Pro subscription unlocks unlimited use."),
  ],
  related=["schedule-maker", "photo-to-calendar", "day-planner-app"],
)

# ───────────────────────────────────────────────────────────────── 5
page("schedule-maker",
  updated="2026-10-05",
  title="Schedule Maker App: Build a Weekly Schedule Fast | Synote",
  desc="Make a weekly schedule in seconds. List your classes, work and routines in one message and Synote builds a repeating schedule on your iPhone calendar.",
  crumb="Schedule maker",
  h1='The <em>schedule maker</em> that builds your week from one message',
  lead="Skip the blank template. Write your week the way you'd describe it to a friend — classes, work, gym, family — and Synote turns it into a repeating schedule on your iPhone calendar, with the free time between things clearly marked.",
  hero_img=None,
  body="""
<p>Most schedule makers hand you an empty grid and leave the work to you: drag a block, name it, set the time, copy it to the next day, and repeat. Synote works the other way around. You describe your week, and it builds the schedule.</p>

<h2>Make a weekly schedule in three steps</h2>
<ol class="g-steps">
  <li><b>Describe your week</b>Write everything in one message, as a list or a sentence. You can also photograph a schedule you already have on paper.</li>
  <li><b>Answer a quick question if needed</b>If something is unclear — the end time of a class, whether a routine repeats every week, or when the schedule should stop — Synote asks once instead of guessing.</li>
  <li><b>Check the preview and save</b>You see every block before anything is written. Tap <strong>Save</strong> and the whole week goes onto your calendar as repeating events.</li>
</ol>

<h2>Example: a full week in one message</h2>
<div class="g-quote">“Classes Mon and Wed 9 to 12, work Tue and Thu 1pm to 6pm, gym Mon, Wed and Fri at 6:30am for an hour, Spanish every Saturday 10 to 11:30”</div>
<p>Synote creates four repeating series — classes, work, gym and Spanish — each on the right days and times. Because they repeat, you set up your week once instead of re-entering it every Sunday.</p>

<h2>Schedules Synote can make</h2>
<ul>
  <li><strong>Weekly routines:</strong> the same days every week, or weekdays only.</li>
  <li><strong>Every other week:</strong> “Team meeting every other Tuesday at 10am” repeats every two weeks.</li>
  <li><strong>Monthly:</strong> “Book club the first Thursday of every month at 7pm.”</li>
  <li><strong>One-off plans</strong> mixed in with the routine: “and dentist next Friday at 3pm.”</li>
  <li><strong>From a photo:</strong> a printed timetable, a roster or a schedule on a whiteboard. <a href="/photo-to-calendar/">See photo to calendar →</a></li>
</ul>

<h2>See the gaps in your day</h2>
<p>Synote's day view shows each block with its real start and end time and labels the time in between — “1 h 30 free”, “free after 8:00 PM” — so you can see where a study session, an errand or a break fits before you add it.</p>

<h2>Change it by just saying so</h2>
<p>Schedules change. Instead of editing every repeat, tell Synote what's different:</p>
<ul>
  <li>“Move gym to 7am.”</li>
  <li>“Cancel Spanish this Saturday.”</li>
  <li>“Work ends at 5pm on Thursdays now.”</li>
</ul>

<h2>Template vs. Synote</h2>
<div class="g-table-wrap"><table class="g-table">
  <thead><tr><th></th><th>Schedule template</th><th>Synote</th></tr></thead>
  <tbody>
    <tr><td><strong>Making the schedule</strong></td><td>Fill in every cell by hand</td><td>One message, a voice note or a photo</td></tr>
    <tr><td><strong>Next week</strong></td><td>Copy it again</td><td>Repeats automatically</td></tr>
    <tr><td><strong>Reminders</strong></td><td>None</td><td>Before any event, on your iPhone</td></tr>
    <tr><td><strong>Clashes</strong></td><td>You spot them yourself</td><td>Checked before saving</td></tr>
    <tr><td><strong>Changes</strong></td><td>Erase and rewrite</td><td>“Move gym to 7am”</td></tr>
  </tbody>
</table></div>
""",
  faq=[
    ("What is the fastest way to make a weekly schedule?", "Describe the whole week in one message — for example “classes Mon and Wed 9 to 12, work Tue and Thu 1 to 6, gym Mon, Wed and Fri at 6:30am”. Synote creates each repeating block on your iPhone calendar and shows a preview before saving."),
    ("Can Synote make a schedule that repeats every week?", "Yes. Weekly, weekdays-only, every-other-week and monthly schedules are supported. Synote asks when the schedule should end so it doesn't repeat forever."),
    ("Can I turn a paper schedule into a digital one?", "Yes. Take a photo or a screenshot of it and Synote reads the days, times and places and builds the events."),
    ("Can I change my schedule later?", "Yes. Tell Synote what changed — “move gym to 7am” or “cancel Spanish this Saturday” — and it updates the events after you confirm."),
    ("Is Synote free?", "Synote is free to download on the App Store and you can try the AI features for free. A Pro subscription unlocks unlimited use."),
  ],
  related=["shift-schedule-app", "day-planner-app", "ai-planner-for-students"],
)

# ───────────────────────────────────────────────────────────────── 6
page("day-planner-app",
  updated="2026-10-05",
  title="Day Planner App with AI: Plan Your Day by Typing | Synote",
  desc="A day planner for iPhone that plans for you: type your appointments and to-dos, see the free time between them, and get a reminder before each one.",
  crumb="Day planner app",
  h1='A <em>day planner app</em> that fills in your day for you',
  lead="Tell Synote what today — or tomorrow — looks like. It lays everything out on a timeline, shows you the free time in between, keeps your to-dos separate from your appointments, and reminds you before each one.",
  hero_img=None,
  body="""
<p>A paper day planner works because writing your day down makes it real. The problem is the writing: every appointment, every errand, every time, by hand, every morning. Synote keeps the habit and drops the busywork.</p>

<h2>Plan your day in one message</h2>
<div class="g-quote">“Stand-up 9:30, design review 11 to 12, lunch with Sara at 12:30, pick up groceries after work, call the bank tomorrow morning”</div>
<p>Synote turns that into a timed plan for today, plus a to-do for tomorrow. Anything with a time becomes an appointment on your timeline. Anything without one — like “call the bank” — becomes a task you can tick off, instead of a fake 9am meeting.</p>

<h2>A timeline that shows your free time</h2>
<p>Your day appears as a simple timeline: each event with its real start and end time, and the gaps between them labelled — “1 h free”, “30 min free”. At the top, one line sums up the day: how many events, how much is booked, and when you're free after. You can see at a glance where a workout or a focused hour fits.</p>

<h2>Done? One tap.</h2>
<p>Each item on your day has a circle. Tap it when you're done and it's marked complete. Tap it again if you got it wrong. Tasks without a time stay on your list until you tick them off, so nothing quietly disappears at midnight.</p>

<h2>Reminders without the setup</h2>
<p>Say it while you plan — “dentist Thursday at 3pm, remind me 30 minutes before” — or choose a reminder for the whole day after you save: 5, 10 or 30 minutes before, or a day ahead. Reminders arrive on your iPhone even when Synote is closed.</p>

<h2>Plan tomorrow tonight</h2>
<p>The calmest mornings are planned the night before. Spend one minute before bed:</p>
<ol class="g-steps">
  <li><b>Ask what's already there</b>“What do I have tomorrow?” — Synote lists it.</li>
  <li><b>Add the rest</b>“Gym at 7, dentist at 3, groceries after work.”</li>
  <li><b>Save and sleep</b>Tomorrow is ready, with reminders set.</li>
</ol>

<h2>Ask your planner anything</h2>
<ul>
  <li>“What's next today?”</li>
  <li>“Am I free at 4pm?”</li>
  <li>“Move lunch to 1pm.”</li>
  <li>“What's my busiest day this week?”</li>
</ul>
<p>Want to set up a whole week, not just a day? See the <a href="/schedule-maker/">schedule maker</a>.</p>
""",
  faq=[
    ("What is the best day planner app for iPhone?", "One that takes less time to fill in than the day it plans. Synote lets you type or say your whole day in one message; it builds a timeline with your free time marked, separates to-dos from appointments, and reminds you before each one."),
    ("Can I plan my day by typing instead of filling in forms?", "Yes. Write it like a message — “stand-up 9:30, lunch with Sara 12:30, groceries after work” — and Synote creates the events and tasks. You see a preview and tap Save."),
    ("Does Synote separate tasks from appointments?", "Yes. Things with a time become events on your timeline. Things without a time, like “call the bank”, become tasks you can tick off when done."),
    ("Can Synote remind me before each event?", "Yes — add a reminder as you type, or choose one for everything after saving: 5, 10 or 30 minutes before, or a day ahead."),
    ("Is Synote free?", "Synote is free to download on the App Store and you can try the AI features for free. A Pro subscription unlocks unlimited use."),
  ],
  related=["schedule-maker", "ai-scheduling-assistant", "shift-schedule-app"],
)

# ───────────────────────────────────────────────────────────────── 7 (FR)
page("fr/emploi-du-temps",
  lang="fr",
  updated="2026-10-05",
  alternates={"en": "/photo-to-calendar/"},
  title="Emploi du temps : de la photo à l'agenda iPhone | Synote",
  desc="Prenez en photo votre emploi du temps (lycée, prépa, fac, BTS, alternance) : Synote crée chaque cours dans votre agenda, avec les salles et les semaines A/B.",
  crumb="Emploi du temps en photo",
  h1='Votre <em>emploi du temps en photo</em>, directement dans votre agenda',
  lead="Prenez en photo ou en capture d'écran votre emploi du temps. Synote lit chaque cours — jour, horaires, salle — et le place dans votre agenda iPhone, avec les répétitions chaque semaine ou une semaine sur deux.",
  hero_img=None,
  body="""
<p>Recopier un emploi du temps dans un agenda, c'est long : trente cours ou plus, chacun avec son jour, son heure de début et de fin, sa salle… et tout est à refaire au semestre suivant. Synote s'en charge à votre place : vous lui donnez une image, il vous rend les cours.</p>

<h2>Comment ça marche</h2>
<ol class="g-steps">
  <li><b>Prenez une photo ou une capture d'écran</b>Touchez <strong>+</strong>, puis prenez une photo de l'emploi du temps affiché, ou importez une capture d'écran de Pronote, de l'ENT ou du site de votre école.</li>
  <li><b>Synote lit chaque cours</b>Il repère la matière, le jour, l'heure de début et de fin, et la salle. Un cours qui revient chaque lundi devient un seul événement répété, pas une pile de copies.</li>
  <li><b>Il pose seulement les bonnes questions</b>Une grille dit rarement quand commence et finit le semestre. Synote vous demande « À partir de quand ? » au lieu d'inventer une date.</li>
  <li><b>Vérifiez l'aperçu, touchez Enregistrer</b>Vous voyez tous les cours avant que quoi que ce soit soit ajouté. Rien n'est enregistré sans votre accord.</li>
</ol>

<h2>Semaines A et B, groupes et alternance</h2>
<ul>
  <li><strong>Semaines A/B :</strong> dites simplement « la semaine prochaine est une semaine A ». Les cours de la semaine A et de la semaine B se répètent chacun une semaine sur deux.</li>
  <li><strong>Un bloc par matière :</strong> chaque cours garde son nom et sa salle — « Physique-Chimie, Labo 1 » — pour que votre journée soit lisible d'un coup d'œil.</li>
  <li><strong>Alternance école / entreprise :</strong> photographiez le calendrier d'alternance et Synote place les journées « Entreprise » et « Formation ».</li>
  <li><strong>Changements en cours d'année :</strong> écrivez « le TP de chimie passe à 14h » et Synote met à jour.</li>
</ul>

<h2>Ajoutez vos devoirs et vos contrôles en une phrase</h2>
<div class="g-quote">« Contrôle de maths jeudi 15 octobre à 10h, exposé d'histoire à rendre le 2 novembre »</div>
<p>Synote crée le contrôle à son horaire et l'exposé comme une tâche avec une date limite, que vous cochez une fois terminée. S'il manque une information, il vous la demande.</p>

<h2>Des rappels avant chaque cours</h2>
<p>Après l'enregistrement, Synote propose un rappel pour tous les cours d'un coup : 5, 10 ou 30 minutes avant, ou la veille pour un contrôle. Les rappels arrivent sur votre iPhone même quand l'application est fermée.</p>

<h2>Conseils pour une photo réussie</h2>
<ul>
  <li>Cadrez la grille entière, bien de face, sans reflet.</li>
  <li>Une capture d'écran est encore mieux qu'une photo d'écran.</li>
  <li>Si votre établissement a des semaines A et B, envoyez la grille complète et dites quelle semaine commence.</li>
  <li>Si une case est coupée ou illisible, Synote vous pose la question plutôt que de deviner.</li>
</ul>

<h2>Synote parle français</h2>
<p>Écrivez comme vous parlez : Synote comprend et répond en <strong>français</strong>, ainsi qu'en anglais, en japonais et en persan. Les horaires « 8h-10h » et les jours « lun., mar. » sont lus tels quels.</p>
""",
  faq=[
    ("Comment mettre mon emploi du temps dans l'agenda de mon iPhone ?", "Avec Synote, touchez + puis prenez une photo de votre emploi du temps ou importez une capture d'écran. Synote crée chaque cours avec son jour, ses horaires et sa salle, puis vous montre un aperçu avant d'enregistrer."),
    ("Synote gère-t-il les semaines A et B ?", "Oui. Indiquez quelle semaine commence (par exemple « la semaine prochaine est une semaine A ») et les cours de chaque semaine se répètent une semaine sur deux."),
    ("Ça marche avec une capture d'écran de Pronote ou de l'ENT ?", "Oui. Une capture d'écran nette fonctionne aussi bien qu'une photo, souvent mieux."),
    ("Synote ajoute-t-il des cours sans me demander ?", "Non. Vous voyez toujours un aperçu, et rien n'est enregistré tant que vous n'avez pas touché Enregistrer."),
    ("Synote est-il gratuit ?", "Synote est gratuit à télécharger sur l'App Store et vous pouvez essayer les fonctions d'IA gratuitement. L'abonnement Pro débloque une utilisation illimitée."),
  ],
  related=["photo-to-calendar", "ai-planner-for-students", "schedule-maker"],
)

CARD = {
  "photo-to-calendar": ("Photo to calendar", "Snap a timetable, roster or poster and get the events."),
  "ai-planner-for-students": ("AI planner for students", "Build your semester from one photo of your timetable."),
  "ai-scheduling-assistant": ("AI scheduling assistant", "Plan your day from one sentence — type, speak or snap."),
  "shift-schedule-app": ("Shift schedule app", "Add a week of shifts in one message — night shifts included."),
  "schedule-maker": ("Schedule maker", "Build a repeating weekly schedule from one message."),
  "day-planner-app": ("Day planner app", "Plan your day by typing and see your free time."),
  "fr/emploi-du-temps": ("Emploi du temps en photo (FR)", "Votre emploi du temps en photo, directement dans votre agenda."),
}
# cards as shown on a French page
CARD_FR = {
  "photo-to-calendar": ("Photo to calendar (en anglais)", "Affiches, plannings de travail, invitations : tout en photo."),
  "ai-planner-for-students": ("AI planner for students (en anglais)", "Tout le semestre à partir d'une photo."),
  "schedule-maker": ("Schedule maker (en anglais)", "Une semaine complète en un seul message."),
}

# interface text per language (English output is unchanged)
T = {
  "en": dict(home="Home", guides="Guides", get="Get the app", sub="Free to download · iPhone · English, Français, 日本語, فارسی",
             faq="Frequently asked questions", related="Related guides", cta_h="Try Synote free on iPhone",
             cta_p="Type it, say it or snap it — Synote plans it.", store="Download on the App Store",
             privacy="Privacy", contact="Contact", og="en_US"),
  "fr": dict(home="Accueil", guides="Guides", get="Télécharger", sub="Gratuit · iPhone · Français, English, 日本語, فارسی",
             faq="Questions fréquentes", related="Guides associés", cta_h="Essayez Synote gratuitement sur iPhone",
             cta_p="Écrivez-le, dites-le ou prenez-le en photo — Synote s'occupe du reste.", store="Obtenir sur l'App Store",
             privacy="Confidentialité", contact="Contact", og="fr_FR"),
}

def esc(s): return html.escape(s, quote=True)
def strip(s): return re.sub(r"<[^>]+>", "", s)

def head(title, desc, url, image, ld, lang="en", alts=""):
    t = T[lang]
    return f"""<!doctype html>
<html lang="{lang}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{esc(title)}</title>
<meta name="description" content="{esc(desc)}">
<link rel="canonical" href="{url}">
{alts}<meta name="robots" content="index, follow, max-image-preview:large">
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
    <a href="/">{t["home"]}</a>
    <a href="/guides/">{t["guides"]}</a>
    <a class="g-btn" href="{APP}">{t["get"]}</a>
  </nav>
</div></header>
"""

def foot(lang="en"):
    t = T[lang]
    return f"""
<footer class="g-foot">
  <a class="g-logo" href="/" style="font-size:15px"><img src="/Synotelogo.png" alt="" width="22" height="22" style="width:22px;height:22px">Synote</a>
  <span>© 2026 Zenith Software Corp</span>
  <span class="g-sp"></span>
  <a href="/guides/">{t["guides"]}</a>
  <a href="/privacy">{t["privacy"]}</a>
  <a href="mailto:support@synote.ca">{t["contact"]}</a>
</footer>
</body>
</html>
"""

def cta(lang="en"):
    t = T[lang]
    return f"""
<section class="g-cta">
  <img src="/Synotelogo.png" alt="Synote logo" width="64" height="64" loading="lazy">
  <h2>{t["cta_h"]}</h2>
  <p>{t["cta_p"]}</p>
  <a class="g-btn big" href="{APP}">{APPLE} {t["store"]}</a>
</section>
"""

def build(slug, p):
    lang = p.get("lang", "en"); t = T[lang]
    url = f"{SITE}/{slug}/"
    alts = ""
    if p.get("alternates"):
        pairs = dict(p["alternates"]); pairs[lang] = f"/{slug}/"
        alts = "".join(f'<link rel="alternate" hreflang="{k}" href="{SITE}{v}">\n' for k, v in sorted(pairs.items()))
        alts += f'<link rel="alternate" hreflang="x-default" href="{SITE}{pairs["en"]}">\n'
    app_ld = {"@type": "MobileApplication", "name": "Synote", "operatingSystem": "iOS",
              "applicationCategory": "ProductivityApplication", "installUrl": APP,
              "offers": {"@type": "Offer", "price": "0", "priceCurrency": "USD"}}
    ld = {"@context": "https://schema.org", "@graph": [
        {"@type": "WebPage", "@id": url, "url": url, "name": p["title"], "description": p["desc"],
         "inLanguage": lang, "dateModified": p.get("updated", UPDATED), "isPartOf": {"@type": "WebSite", "name": "Synote", "url": SITE + "/"},
         "primaryImageOfPage": SITE + (p["hero_img"] or ("/SynoteCaptureCalendar.jpg",))[0], "about": app_ld,
         "publisher": {"@type": "Organization", "name": "Zenith Software Corp", "url": "https://zenithsoftware.ca/"}},
        {"@type": "BreadcrumbList", "itemListElement": [
            {"@type": "ListItem", "position": 1, "name": "Synote", "item": SITE + "/"},
            {"@type": "ListItem", "position": 2, "name": t["guides"], "item": SITE + "/guides/"},
            {"@type": "ListItem", "position": 3, "name": p["crumb"], "item": url}]},
        {"@type": "FAQPage", "mainEntity": [
            {"@type": "Question", "name": q, "acceptedAnswer": {"@type": "Answer", "text": a}} for q, a in p["faq"]]},
    ]}
    src, alt, w, h = p["hero_img"] or ("/SynoteCaptureCalendar.jpg", "", 0, 0)
    phone = (f'<div class="g-phone"><img src="{src}" alt="{esc(alt)}" width="{w}" height="{h}" fetchpriority="high"></div>'
             if p["hero_img"] else "")
    hero_cls = "g-hero" if p["hero_img"] else "g-hero g-hero-solo"
    faq_html = "\n".join(f"<details><summary>{esc(q)}</summary><p>{esc(a)}</p></details>" for q, a in p["faq"])
    cards = CARD_FR if lang == "fr" else CARD
    rel = "\n".join(f'<a href="/{s}/"><b>{cards[s][0]}</b><span>{cards[s][1]}</span></a>' for s in p["related"])
    doc = head(p["title"], p["desc"], url, src, ld, lang, alts) + f"""
<section class="{hero_cls}">
  <div>
    <nav class="g-crumbs" aria-label="Breadcrumb"><a href="/">Synote</a> › <a href="/guides/">{t["guides"]}</a> › {esc(p["crumb"])}</nav>
    <h1>{p["h1"]}</h1>
    <p class="g-lead">{esc(p["lead"])}</p>
    <a class="g-btn big" href="{APP}">{APPLE} {t["store"]}</a>
    <p class="g-sub">{t["sub"]}</p>
  </div>
  {phone}
</section>
<main class="g-main">
{p["body"]}
<section class="g-faq">
<h2>{t["faq"]}</h2>
{faq_html}
</section>
</main>
{cta(lang)}
<section class="g-related"><h2>{t["related"]}</h2><div class="g-cards">
{rel}
</div></section>
""" + foot(lang)
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
    doc = head(title, desc, url, "/SynoteCaptureCalendar.jpg", ld) + f"""
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
""" + foot()
    d = os.path.join(OUT, "guides"); os.makedirs(d, exist_ok=True)
    open(os.path.join(d, "index.html"), "w", encoding="utf-8").write(doc)
    print(f"/guides/  title={len(title)}ch desc={len(desc)}ch")

for slug, p in PAGES.items():
    build(slug, p)
hub()
