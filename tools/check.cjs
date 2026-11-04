const fs=require('node:fs'),vm=require('node:vm'),path=require('node:path');
const root=path.resolve(__dirname,'..');
for(const file of ['index.html','deliverables/D4/part-a/D08-Shmeezki&Mahid_D4A_Wireframes.html']){
 const html=fs.readFileSync(path.join(root,file),'utf8');
 for(const match of html.matchAll(/<script>([\s\S]*?)<\/script>/g))new vm.Script(match[1],{filename:file});
 const markup=html.replace(/<script>[\s\S]*?<\/script>/g,'');
 const ids=[...markup.matchAll(/(?<![\w-])id="([^"]+)"/g)].map(m=>m[1]);
 if(new Set(ids).size!==ids.length)throw Error('Duplicate static ID in '+file);
 console.log('PASS syntax and static IDs: '+file);
}
