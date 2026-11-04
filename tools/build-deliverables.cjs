// Uses the Codex bundled docx package via NODE_PATH; no application dependencies.
const fs=require('node:fs'),path=require('node:path');
const {Document,Packer,Paragraph,TextRun,Table,TableRow,TableCell,WidthType,ShadingType,BorderStyle,HeadingLevel,Footer,PageNumber,AlignmentType,ImageRun}=require('docx');
const root=path.resolve(__dirname,'..'),base=path.join(root,'deliverables/D4');
(async()=>{
const put=(name,s)=>fs.writeFileSync(path.join(base,name),s);
const evidence=JSON.parse(fs.readFileSync(path.join(base,'evidence/test-results.json'),'utf8'));
const clean=s=>s.replace(/\*\*/g,'').replace(/`/g,'').replace(/[–—]/g,'-').replace(/→/g,' > ').replace(/↔/g,' < > ');
const esc=s=>s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
function ratio(a,b){const l=h=>{const v=h.match(/\w\w/g).map(x=>parseInt(x,16)/255).map(x=>x<=.04045?x/12.92:((x+.055)/1.055)**2.4);return .2126*v[0]+.7152*v[1]+.0722*v[2]};const x=l(a),y=l(b);return((Math.max(x,y)+.05)/(Math.min(x,y)+.05)).toFixed(2);}
const pairs=[['Main text','18202d','ffffff'],['Secondary text','505b6b','ffffff'],['Accent on white','4338a5','ffffff'],['Success','176044','edf7f1'],['Warning','794400','fff4df'],['Error','a32332','fff0f1'],['Information','245b83','eff6fc'],['Part A muted labels','62626b','ffffff'],['Focus on page','18202d','f5f6f8'],['Input boundary','707b8d','ffffff']];
const incomplete=evidence.audits.filter(a=>a.incomplete.length);
const testing=`# Automated verification record

## Actual run

Run date: 4 November 2026. Browser: Microsoft Edge ${evidence.browser}, headless through Playwright ${evidence.playwright}. Axe-core: ${evidence.axe}. Mode: local file:// execution. The prototype required no server, build, network or university connection. The record timestamp is ${evidence.runAt} (UTC); client timezone is Asia/Karachi.

Result: ${evidence.results.filter(r=>r.status==='PASS').length}/${evidence.results.length} browser scenarios passed. All ${evidence.audits.length} axe snapshots reported zero violations under wcag2a, wcag2aa, wcag21a and wcag21aa tags. ${incomplete.length} snapshots contain incomplete contrast checks, detailed below. A zero-violation scan is not a full WCAG conformance finding.

Prototype SHA256: ${evidence.prototypeSHA256}

## Commands actually used

The workspace dependency loader supplied the bundled runtime. In PowerShell, set runtime to the returned dependencies directory, then run these commands from the repository:

\
$env:NODE_PATH = "$runtime\\node\\node_modules"
$env:AXE_PATH = (Resolve-Path 'work\\axe.min.js').Path
& "$runtime\\python\\python.exe" -X utf8 tools\\extend-wireframes.py
& "$runtime\\node\\bin\\node.exe" tools\\check.cjs
& "$runtime\\node\\bin\\node.exe" tests\\verify.cjs
\

The initial setup downloaded axe-core 4.10.3 from https://cdnjs.cloudflare.com/ajax/libs/axe-core/4.10.3/axe.min.js to work/axe.min.js. No prototype runtime dependency was installed. On a normal developer installation, npm install supplies the pinned development packages; npm run check and npm test invoke the same scripts. There is no separate build or lint configuration to run.

Syntax and duplicate static-ID checks passed for both HTML artifacts. The first pass exposed a skip-link routing defect; the implementation was corrected and the keyboard assertion passed on the recorded repeat. A filter test initially requested a control in the wrong empty-data fixture; the fixture was corrected. The static ID checker initially included script template strings and data-id attributes; it now checks actual static markup. The final evidence reflects the corrected checks and application.

## Browser scenarios

| Scenario | Result |
| --- | --- |
${evidence.results.map(r=>'| '+r.name+' | '+r.status+' |').join('\n')}

## Automated accessibility snapshots

| Screen or state | Reported violations | Incomplete checks |
| --- | --- | --- |
${evidence.audits.map(a=>'| '+a.screen+' | '+a.violations.length+' | '+(a.incomplete.map(v=>v.id+' ('+v.nodes+' nodes)').join(', ')||'None')+' |').join('\n')}

Incomplete contrast checks arise in form/date controls and SVG wireframe text. They are retained in the raw JSON for human assessment rather than reported as passes. The following calculated palette ratios supplement the scans; they do not prove every composited or interactive state.

| Foreground and background pair | Ratio | Threshold used |
| --- | --- | --- |
${pairs.map(([n,a,b])=>'| '+n+' (#'+a.toUpperCase()+' / #'+b.toUpperCase()+') | '+ratio(a,b)+':1 | '+(n==='Input boundary'||n.startsWith('Focus')?'3:1 non-text':'4.5:1 normal text')+' |').join('\n')}

## Scope and re-check

The suite exercises visible states, real DOM events, keyboard keypresses, focus destinations, local state persistence, error recovery, a narrow grayscale view and escaped user text. It checks that the browser reports no JavaScript exceptions. It does not measure usability, test real administrative decisions or establish actual speech output. Additional browser/assistive-technology combinations, 200 percent zoom, forced colours and team-owned walkthrough evidence use the Part A audit procedure.

Evidence files: test-results.json and seven PNG screenshots in evidence/. Keep the raw record with the submitted build and repeat verification after changing executable HTML. Generated documentation and tests do not establish the D2 success percentages.
`;
// Preserve actual newlines inside the command block without shell interpolation.
put('part-b/Testing.md',testing.replace('\n$env:NODE_PATH','\n```powershell\n$env:NODE_PATH').replace('\n\nThe initial setup','\n```\n\nThe initial setup'));
const cards=fs.readFileSync(path.join(base,'part-a/IA-and-card-sort.md'),'utf8').split('\n').filter(l=>/^\| C\d/.test(l)).map(l=>l.split('|').slice(1,-1).map(x=>x.trim()));
put('part-a/Printable-card-sort-pack.html',`<!doctype html><html lang="en"><head><meta charset="utf-8"><title>EventFlow feature card sorting pack</title><style>@page{size:A4;margin:18mm}*{box-sizing:border-box}body{font:16px/1.5 Arial,sans-serif;color:#181818;max-width:900px;margin:24px auto}h1{font-size:28px}.cards{display:grid;grid-template-columns:1fr 1fr;gap:12px}.card{border:1px dashed #555;padding:20px;min-height:110px;break-inside:avoid}small{display:block;color:#444}footer{margin-top:24px}@media print{body{margin:0}button{display:none}.intro{break-after:page}}</style></head><body><section class="intro"><h1>EventFlow feature card sorting pack</h1><p>D08 - Shmeezki &amp; Mahid · D4 · Team-proposed navigation activity</p><h2>Facilitator instructions</h2><p>Print the cards, cut along the borders and shuffle. Show only card labels; proposed navigation categories are intentionally omitted. Record consent and anonymous role categories. Allow about twenty minutes and retain independent placements before group discussion.</p><h2>Read aloud</h2><p>These cards describe things an event-request portal might let you do. Group things where you would expect to find them together. Make as many or as few groups as you need. Name each group. Put confusing cards aside or rename them. There are no correct answers; explain the choices that matter to you.</p><p>Use the separate results form and CSV. Ask where the person would look for an overdue request, a refusal reason, correction and new submission. Compare proposed labels only after the open sort.</p></section><section class="cards" aria-label="Sixteen feature cards">${cards.map(c=>`<article class="card"><small>${esc(c[0])}</small><h2 style="font-size:18px;margin:8px 0">${esc(c[1])}</h2></article>`).join('')}</section><footer>Retain original group labels and explanations. This activity sorts portal features; D2 affinity notes group research observations.</footer></body></html>`);
const svg=`<svg xmlns="http://www.w3.org/2000/svg" width="960" height="500" viewBox="0 0 960 500" role="img" aria-labelledby="title desc"><title id="title">EventFlow proposed information architecture</title><desc id="desc">My Requests is the hub, with request details, correction, validation and confirmation. New Request and Help are top-level destinations. All request paths return to the hub.</desc><defs><marker id="arr" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto-start-reverse"><path d="M0 0L8 4L0 8Z" fill="#222"/></marker></defs><rect width="960" height="500" fill="white"/><g font-family="Arial,sans-serif" fill="#181818"><text x="30" y="30" font-size="20" font-weight="bold">Team proposed hub and spoke navigation</text><g fill="none" stroke="#333" stroke-width="2" marker-end="url(#arr)"><path d="M190 110V170"/><path d="M480 110V360"/><path d="M190 230V290"/><path d="M190 350V410H390"/><path d="M570 390H650"/><path d="M740 360V230H280" stroke-dasharray="6 4"/><path d="M480 420V465H90V110"/><path d="M770 110V170"/></g><g fill="#eee" stroke="#333"><rect x="100" y="60" width="180" height="50"/><rect x="390" y="60" width="180" height="50"/><rect x="680" y="60" width="180" height="50"/><rect x="80" y="170" width="220" height="60"/><rect x="80" y="290" width="220" height="60"/><rect x="390" y="360" width="180" height="60"/><rect x="650" y="360" width="220" height="60"/><rect x="650" y="170" width="220" height="60"/></g><g text-anchor="middle" font-size="16"><text x="190" y="91">My Requests W1 W2</text><text x="480" y="91">New Request W9</text><text x="770" y="91">Help W10</text><text x="190" y="195">Request detail W3 W4 W5</text><text x="190" y="217" font-size="13">Stage, reason and history</text><text x="190" y="316">Edit and resubmit W6</text><text x="190" y="338" font-size="13">Only Changes needed</text><text x="480" y="386">Validation W7</text><text x="480" y="408" font-size="13">Correct and retry</text><text x="760" y="386">Confirmation W8</text><text x="760" y="408" font-size="13">Updated stage and expected date</text><text x="760" y="195">Stage and task guidance</text><text x="760" y="217" font-size="13">Available globally</text></g><text x="310" y="457" font-size="13">Return to My Requests from details and confirmation</text><text x="30" y="492" font-size="12">Solid paths show task entry. Dashed return represents continued inspection of the same request.</text></g></svg>`;
put('part-a/Information-architecture.svg',svg);
fs.mkdirSync(path.join(root,'work'),{recursive:true});
await require('sharp')(Buffer.from(svg)).png().toFile(path.join(root,'work/ia.png'));
const border={style:BorderStyle.SINGLE,size:4,color:'D9D9D9'};
function runs(text){return [new TextRun({text:clean(text),font:'Calibri',size:21})];}
function para(text,opts={}){return new Paragraph({children:runs(text),spacing:{after:100,line:260},...opts});}
function table(rows){const count=rows[0].length,total=9300;let widths=count===2?[3300,6000]:count===3?[2500,3200,3600]:count===4?[1400,2500,2700,2700]:Array(count).fill(Math.floor(total/count));widths[widths.length-1]=total-widths.slice(0,-1).reduce((a,b)=>a+b,0);return new Table({width:{size:total,type:WidthType.DXA},columnWidths:widths,borders:{top:border,bottom:border,left:border,right:border,insideHorizontal:border,insideVertical:border},rows:rows.map((row,i)=>new TableRow({tableHeader:i===0,cantSplit:true,children:row.map((text,n)=>new TableCell({width:{size:widths[n],type:WidthType.DXA},margins:{top:90,bottom:90,left:100,right:100},shading:i===0?{fill:'EDEDED',type:ShadingType.CLEAR}:undefined,children:[new Paragraph({children:[new TextRun({text:clean(text),font:'Calibri',size:19,bold:i===0})],spacing:{after:30,line:230}})]}))}))});}
function parse(text){const lines=text.split('\n'),out=[];let i=0;while(i<lines.length){const line=lines[i].trim();if(!line){i++;continue;}if(line.startsWith('|')){const rows=[];while(i<lines.length&&lines[i].trim().startsWith('|')){const cells=lines[i].split('|').slice(1,-1).map(x=>x.trim());if(!cells.every(c=>/^:?-+:?$/.test(c)))rows.push(cells);i++;}out.push(table(rows),para('',{spacing:{after:40}}));continue;}const heading=line.match(/^(#{1,3}) (.+)/);if(heading){const level=heading[1].length;out.push(new Paragraph({text:clean(heading[2]).replace(/[^\w\s]/g,' ').replace(/\s+/g,' ').trim(),heading:level===1?HeadingLevel.HEADING_1:level===2?HeadingLevel.HEADING_2:HeadingLevel.HEADING_3,keepNext:true,spacing:{before:level===1?260:180,after:100}}));i++;continue;}if(line.startsWith('```')){i++;continue;}out.push(para(line,{keepNext:/^[12]\. .*\?$/.test(line)||line.startsWith('Team response:')}));i++;}return out;}
const files=['Traceability.md','part-a/IA-and-card-sort.md','part-a/Wireframe-review.md','part-a/Accessibility-audit.md','part-a/Card-sort-results-template.md','part-a/Studio-critique-template.md','part-b/Implementation.md','part-b/Testing.md','AI-use-and-reflection.md','Video-script.md','Submission-checklist.md'];
const contents=[new Paragraph({text:'FAST EventFlow D4 Prototype Report',heading:HeadingLevel.TITLE,spacing:{after:200}}),para('CS3014 Applied Human Computer Interaction | D08 - Shmeezki & Mahid'),para('Prepared for instructor review | 4 November 2026 | Build 1.0'),table([['Team member','Student ID'],['Zaki Nabeel','23I-0508'],['Abdul Mahid','23I-0828'],['Shehryar Faisal','23I-0604'],['Muhammad Sameer','23I-0634']]),para('This package documents a working status-first approval prototype, its grayscale structure, design system, scope and verification. It connects the D2 requirements and D3 concept to the actual implementation and provides forms for team-owned activity records.'),para('The build passes the recorded automated workflow checks. The IA is team-proposed; feature-sort records, team accessibility walkthroughs, critique notes, reflections, captioned team narration and the instructor checkpoint are completed through the accompanying forms and recording instructions.'),new Paragraph({text:'Package contents',heading:HeadingLevel.HEADING_1}),...files.map((f,i)=>para((i+1)+'. '+fs.readFileSync(path.join(base,f),'utf8').split('\n')[0].replace(/^# /,'')))];
for(const f of files){contents.push(...parse(fs.readFileSync(path.join(base,f),'utf8')));if(f==='part-a/IA-and-card-sort.md'){const img=path.join(root,'work/ia.png');if(fs.existsSync(img))contents.push(new Paragraph({children:[new ImageRun({data:fs.readFileSync(img),type:'png',transformation:{width:620,height:323}})]}),para('Figure 1. Proposed navigation; separate results form records subsequent feature-sort decisions.'));}}
const doc=new Document({creator:'D08 - Shmeezki & Mahid; prepared with OpenAI Codex',title:'FAST EventFlow D4 Prototype Report',description:'Implementation, design documentation and verification with team-owned evidence forms',styles:{default:{document:{run:{font:'Calibri',size:21,color:'000000'}}},paragraphStyles:[{id:'Title',name:'Title',basedOn:'Normal',run:{font:'Calibri',size:36,bold:true,color:'000000'}},{id:'Heading1',name:'Heading 1',basedOn:'Normal',next:'Normal',run:{font:'Calibri',size:27,bold:true,color:'000000'},paragraph:{border:{bottom:{style:BorderStyle.SINGLE,size:6,color:'000000',space:5}}}},{id:'Heading2',name:'Heading 2',basedOn:'Normal',next:'Normal',run:{font:'Calibri',size:23,bold:true,color:'000000'}},{id:'Heading3',name:'Heading 3',basedOn:'Normal',next:'Normal',run:{font:'Calibri',size:22,bold:true,color:'000000'}}]},sections:[{properties:{page:{size:{width:11906,height:16838},margin:{top:1300,bottom:1300,left:1300,right:1300}}},footers:{default:new Footer({children:[new Paragraph({alignment:AlignmentType.RIGHT,children:[new TextRun({text:'D08 | FAST EventFlow D4 | ',font:'Calibri',size:18}),new TextRun({children:[PageNumber.CURRENT],font:'Calibri',size:18})]})]})},children:contents}]});
Packer.toBuffer(doc).then(b=>{fs.writeFileSync(path.join(base,'D08-Shmeezki&Mahid-D4-Submission.docx'),b);console.log('Created consolidated DOCX, printable cards, IA and testing record.');});
})().catch(e=>{console.error(e);process.exitCode=1;});
