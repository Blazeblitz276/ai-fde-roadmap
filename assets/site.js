(function(){
var b=document.getElementById('theme');
if(b)b.addEventListener('click',function(){var cur=document.documentElement.dataset.theme||(matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');var n=cur==='dark'?'light':'dark';document.documentElement.dataset.theme=n;try{localStorage.setItem('theme',n)}catch(e){}location.reload();});
var f=document.querySelector('.filters');
if(f)f.addEventListener('click',function(ev){var bt=ev.target.closest('button');if(!bt)return;f.querySelectorAll('button').forEach(function(x){x.setAttribute('aria-pressed',x===bt)});var t=bt.dataset.f;document.querySelectorAll('.av[data-type]').forEach(function(a){a.style.display=(t==='all'||a.dataset.type===t)?'':'none'});});
var q=document.getElementById('q'),res=document.getElementById('results'),data=null;
if(q){q.addEventListener('input',function(){
  var v=q.value.trim().toLowerCase();
  if(v.length<2){res.hidden=true;return}
  (data?Promise.resolve(data):fetch('data/search.json').then(function(r){return r.json()}).then(function(d){data=d;return d})).then(function(d){
    var hits=d.filter(function(x){return (x.t+' '+x.d).toLowerCase().indexOf(v)>-1}).slice(0,12);
    res.innerHTML=hits.length?hits.map(function(h){return '<li><a href="'+h.u+'">'+h.t.replace(/</g,'&lt;')+' <small>'+(h.k==='topic'?'Topic':h.k==='experience'?'Experience':'Glossary term')+' · '+h.d.replace(/</g,'&lt;').slice(0,100)+'</small></a></li>'}).join(''):'<li><a href="#">No matches</a></li>';
    res.hidden=false;});
});}
})();
