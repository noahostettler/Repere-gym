(function(root){
function recommend(ex,sets,increment=ex.inc){
 const valid=Array.isArray(sets)&&sets.length===ex.sets&&sets.every(s=>s.done&&Number.isFinite(s.weight)&&s.weight>0&&Number.isInteger(s.reps)&&s.reps>0&&Number.isFinite(s.rir)&&s.rir>=0&&s.rir<=10&&s.clean!==false);
 if(!valid)return {kind:'incomplete',title:'Complète tes séries',text:'Valide toutes les séries avant de calculer la prochaine cible.'};
 const base=sets[0].weight,total=sets.reduce((n,s)=>n+s.reps,0),same=sets.every(s=>Math.abs(s.weight-base)<.001);
 if(!same)return {kind:'mixed',title:'Charges différentes',text:'Garde les charges de chaque série. La hausse automatique attend une séance réalisée avec la même charge sur toutes les séries.',weights:sets.map(s=>s.weight)};
 if(!Number.isFinite(increment)||increment<=0)return {kind:'invalid',title:'Incrément à vérifier',text:'Choisis une augmentation de charge positive dans le programme.'};
 if(sets.every(s=>s.reps>=ex.max&&s.rir>=1))return {kind:'increase',weight:Math.round((base+increment)*100)/100,title:'Charge validée',text:`Passe à ${Math.round((base+increment)*100)/100} kg. Vise ${ex.min}–${ex.max} reps propres, avec 1–2 répétitions en réserve.`};
 if(sets.some(s=>s.reps<ex.min))return {kind:'hold',weight:base,title:`Garde ${base} kg`,text:`Au moins une série est sous ${ex.min} reps. Retrouve la plage avant de monter. Si cela se répète sur 2–3 séances, revois la charge et la récupération.`};
 const target=sets.map(s=>Math.min(s.reps,ex.max));const idx=target.findIndex(r=>r<ex.max);if(idx>=0)target[idx]++;
 return {kind:'hold',weight:base,target,title:`Garde ${base} kg`,text:idx>=0?`Objectif : ${target.join(' / ')} reps, si ta forme du jour le permet. Garde 1–2 répétitions en réserve.`:'Le maximum est atteint, mais avec 0 répétition en réserve. Répète cette performance avec environ 1 répétition en réserve avant de monter.'};
}
root.RepereProgression={recommend};if(typeof module!=='undefined')module.exports={recommend};
})(typeof window!=='undefined'?window:globalThis);
