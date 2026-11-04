from pathlib import Path
import re

root=Path(__file__).resolve().parents[1]
p=root/'deliverables/D4/part-a/D08-Shmeezki&Mahid_D4A_Wireframes.html'
s=(root/'deliverables/D4/sources/D08-Shmeezki&Mahid_D4A_Wireframes.original.html').read_text(encoding='utf-8')
s=s.replace('#8a8a93','#62626b')
s=s.replace('<div class="stage" id="stage">','<main class="stage" id="stage" tabindex="-1">')
s=s.replace('  </div>\n</div>\n\n<footer','  </main>\n</div>\n\n<footer')
s=s.replace('<h2>Screens</h2>','''<h2>Navigation additions for Part B</h2>
<div class="mapbox"><p><b>W1 or W2 → W9 New Request → W7 errors → W9 correction → W8 confirmation → W1.</b></p>
<p>W1 ↔ W3 / W4 / W5. W4 → W5 is a simulated staff update. W5 → W6 → W7 → W6 → W8. Every detail returns to W1. W10 Help is available from every screen.</p>
<p>Dates in the original sketches are illustrative October snapshots. Part B uses a fixed 4 November 2026 clock. IA is the team-proposed hub-and-spoke structure, grounded in D2 synthesis.</p></div>
<h2>Screens</h2>''')
s=s.replace('    </div>\n  </nav>','''      <button role="tab" id="t9" aria-controls="p9" aria-selected="false" tabindex="-1"><span class="code">W9</span>New Request</button>
      <button role="tab" id="t10" aria-controls="p10" aria-selected="false" tabindex="-1"><span class="code">W10</span>Help</button>
    </div>
  </nav>''')
new='''
    <div role="tabpanel" id="p9" aria-labelledby="t9" tabindex="0" hidden>
      <div class="framewrap"><div class="frame"><div class="appbar"><div class="ttl">New Request</div></div><div class="body">
      <p class="hint">Required: title, society, future date, preferred demo venue and event plan. Optional: reviewer note. Static field sketches; use Part B for data entry.</p>
      <div class="field"><p>Event title · required</p><div class="inp">Short event name</div></div>
      <div class="field"><p>Society · required</p><div class="inp">Fictional society</div></div>
      <div class="field"><p>Date · required</p><div class="inp">After demo date</div></div>
      <div class="field"><p>Venue · required</p><div class="inp">Choose a demo venue</div></div>
      <div class="field"><p>Event plan · required</p><div class="inp tall">Purpose, guests, resources and budget</div></div>
      <button class="btn" data-go="8">Preview valid submission</button><button class="btn ghost" data-go="7">Preview missing-field errors</button><button class="btn ghost" data-go="1">Cancel</button>
      </div></div></div><div class="notes"><h3>Annotation — W9</h3><dl><dt>Role and hierarchy</dt><dd>Completes the New Request entry from W1 and W2. Heading, preparation guidance, required fields, then action. Mirrors W6.</dd><dt>Gestalt — proximity</dt><dd>Each field description stays next to its box; larger gaps separate fields.</dd><dt>Recovery</dt><dd>W7 applies to both new submission and resubmission; errors retain input in Part B. W8 uses Submitted or Resubmitted wording as appropriate.</dd></dl></div>
    </div>
    <div role="tabpanel" id="p10" aria-labelledby="t10" tabindex="0" hidden>
      <div class="framewrap"><div class="frame"><div class="appbar"><div class="ttl">Help</div></div><div class="body">
      <p class="rtitle">How approval works</p><p>Submitted → Mentor → Department → Decision.</p><p class="rtitle">What overdue means</p><p>The expected review date has passed and no decision is recorded.</p><p class="rtitle">How to correct a request</p><p>Read the reason, edit the requested fields, then resubmit. The ID and history carry forward.</p><button class="btn ghost" data-go="1">Back to My Requests</button>
      </div></div></div><div class="notes"><h3>Annotation — W10</h3><dl><dt>Hierarchy</dt><dd>Task-based headings make guidance scannable.</dd><dt>Gestalt — similarity</dt><dd>Stage names and action labels match the main workflow.</dd><dt>Scope</dt><dd>Supports R2 and R5; keyboard instructions and simulation boundaries appear in Part B.</dd></dl></div>
    </div>
'''
s=s.replace('  </main>\n</div>',new+'  </main>\n</div>')
# Preserve the existing screen compositions while making each important action navigable.
for n in range(1,11):
 pattern=rf'(<div role="tabpanel" id="p{n}".*?)(?=\n    <!-- W|\n    <div role="tabpanel"|\n  </main>)'
 m=re.search(pattern,s,re.S)
 if not m: continue
 block=m.group(1)
 block=block.replace('<label>','<p class="meta">').replace('</label>','</p>')
 block=block.replace('<button class="btn">New request</button>','<button class="btn" data-go="9">New request</button>')
 block=block.replace('<button class="btn" style="margin-top:16px">New request</button>','<button class="btn" style="margin-top:16px" data-go="9">New request</button>')
 block=block.replace('<button class="btn">Edit &amp; resubmit</button>','<button class="btn" data-go="6">Edit &amp; resubmit</button>')
 block=block.replace('<button class="btn">Resubmit request</button>',f'<button class="btn" data-go="{7 if n==6 else 8}">Resubmit request</button>')
 block=block.replace('<button class="btn ghost">Save draft</button>','<button class="btn ghost" data-go="6">Preview saved draft</button>')
 block=block.replace('<button class="btn ghost">Back to My Requests</button>','<button class="btn ghost" data-go="1">Back to My Requests</button>')
 block=block.replace('<button class="btn ghost">View full history</button>','<details><summary>View full history</summary><p>Illustrative history: submitted → mentor reviewed → current stage. Full dated history is implemented in Part B.</p></details>')
 block=block.replace('<p class="rtitle">Annual TechFest</p>','<p class="rtitle"><a href="#p4" data-go="4">Annual TechFest</a></p>')
 block=block.replace('<p class="rtitle">Guest Speaker Session</p>','<p class="rtitle"><a href="#p3" data-go="3">Guest Speaker Session</a></p>')
 if n==4: block=block.replace('</div>\n        </div>\n      </div>','<button class="btn" data-go="5">Preview simulated staff decision</button></div>\n        </div>\n      </div>',1)
 if n==7: block=block.replace('</div>\n        </div>\n      </div>','<button class="btn ghost" data-go="9">Return to New Request</button></div>\n        </div>\n      </div>',1)
 if n==2: block=block.replace('<dt>Why it exists</dt>','<dt>Hierarchy and Gestalt</dt><dd>Empty-state headline, explanation and action form a close group; proximity makes the next step clear.</dd><dt>Why it exists</dt>')
 block=block.replace('The reviewing officer was notified automatically on 13 Oct.','A simulated reviewing-officer notification is shown for 13 Oct; nothing is sent.')
 block=block.replace('CS Lawn and the Auditorium are free on your proposed date.','Availability is illustrative; choose a demo venue.')
 block=block.replace('this is logged in the Part A keyboard walkthrough.','the team walkthrough form is supplied for recording actual observations.')
 block=block.replace('</div>\n      <div class="notes">','<div class="actions" style="padding:12px"><button class="btn ghost" data-go="1">My Requests</button><button class="btn ghost" data-go="9">New Request</button><button class="btn ghost" data-go="10">Help</button></div></div>\n      <div class="notes">',1)
 s=s[:m.start()]+block+s[m.end():]
s=s.replace('Eight screens, one alternate path.','Ten screens, including New Request and Help; one shared validation state.')
s=s.replace('before anything is built.','alongside the functional Part B build. Wireframe boxes are sketches, not data-entry controls.')
s=s.replace("  tabs.forEach(function (t, i) {",'''  document.querySelectorAll('[data-go]').forEach(function (control) {
    control.addEventListener('click', function (e) { e.preventDefault(); select(Number(control.dataset.go)-1, true); });
  });
  tabs.forEach(function (t, i) {''')
s=s.replace('<style>','<style>\n.actions{display:flex;gap:8px;flex-wrap:wrap}.actions .btn{width:auto}summary{cursor:pointer}:focus-visible{outline-offset:3px}')
p.write_text(s,encoding='utf-8')
print('Extended original wireframes to W1-W10; original preserved.')
