/* PODSPHERE v0.6 Galaxy Core · concatenated runtime */
window.PS_VERSION={number:'0.9.0',codename:'Audio DNA',build:'2026.07',engine:'Universe Engine'};window.$=(s,c=document)=>c.querySelector(s);window.$$=(s,c=document)=>[...c.querySelectorAll(s)];
/* PODSPHERE v0.8 Galaxy Navigation */
(function(){
 const map={
  explore:[['Universe','index.html'],['Discover','discover.html'],['Categories','categories.html'],['Trending','trending.html'],['Live','live.html'],['Collections','collections.html']],
  podcasts:[['Audio DNA','audio-dna.html'],['Podcast DNA','podcast.html'],['Episodes','episodes.html'],['Charts','charts.html'],['Audio Universe','audio-universe.html'],['Submit Podcast','submit.html'],['AI Picks','ai-recommendations.html']],
  stories:[['Stories','news.html'],['Article','article.html'],['Newsletter','newsletter.html'],['Press','press.html'],['Events','events.html'],['Awards','awards.html']],
  community:[['Community','community.html'],['Creator Hub','creator.html'],['Playlists','playlists.html'],['Following','following.html'],['Members','members.html'],['Plus','pricing.html']],
  library:[['Studio','members.html'],['Library','library.html'],['Bookmarks','bookmarks.html'],['Signals','notifications.html'],['Profile','profile.html'],['Settings','settings.html']],
  lab:[['Components','components.html'],['Living Motion','motion.html'],['Floating Player','player.html'],['Design System','design-system.html'],['Audio Lab','lab.html'],['Universe Engine','audio-universe.html']]
 };
 const copy={explore:['Explore','Kuratierte Podcast-Galaxien, Trends und Live-Signale.'],podcasts:['Podcasts','Shows, Episoden und Audio-DNA als eigene Welten.'],stories:['Stories','Editoriale News, Artikel und Ereignisse im Story-Kosmos.'],community:['Community','Creator, Playlists und Menschen hinter dem Klang.'],library:['Your Space','Dein Studio, deine Bibliothek, deine Einstellungen.'],lab:['Lab','Das technische Herz von PODSPHERE v0.6.']};
 const nav=document.querySelector('.universe-nav'); if(!nav||document.querySelector('.galaxy-nav')) return;
 const old=nav.querySelector('.navlinks'); if(old) old.remove();
 const btn=nav.querySelector('.hamb')||document.createElement('button'); btn.className='hamb galaxy-trigger'; btn.innerHTML='<span><i></i></span>'; btn.setAttribute('aria-label','Audio Galaxy Navigation öffnen'); btn.setAttribute('aria-expanded','false'); if(!btn.parentNode) nav.append(btn);
 const overlay=document.createElement('aside'); overlay.className='galaxy-nav'; overlay.setAttribute('aria-hidden','true');
 overlay.innerHTML=`<div class="galaxy-field"></div><div class="galaxy-shell" role="dialog" aria-modal="true" aria-label="Audio Galaxy Navigation"><div class="galaxy-top"><button class="galaxy-back" type="button">← Zurück</button><div class="galaxy-title"><span class="brand-orb"></span><span>PodSpot.io Galaxy</span></div><button class="galaxy-close" type="button" aria-label="Navigation schließen">×</button></div><div class="galaxy-core"><div class="galaxy-center"><strong>PODSPHERE</strong><span>v0.9 · Audio DNA</span></div><button class="galaxy-star s-explore" data-sector="explore"><b>Explore</b><small>Trends</small></button><button class="galaxy-star s-podcasts" data-sector="podcasts"><b>Podcasts</b><small>DNA</small></button><button class="galaxy-star s-stories" data-sector="stories"><b>Stories</b><small>News</small></button><button class="galaxy-star s-community" data-sector="community"><b>Community</b><small>Crew</small></button><button class="galaxy-star s-library" data-sector="library"><b>Your Space</b><small>Studio</small></button><button class="galaxy-star s-lab" data-sector="lab"><b>Lab</b><small>Engine</small></button></div><section class="galaxy-sector" aria-live="polite"><div class="sector-heading"><h2></h2><p></p></div><div class="sector-links"></div></section></div>`;
 document.body.append(overlay);
 const sector=overlay.querySelector('.galaxy-sector'), h=sector.querySelector('h2'), p=sector.querySelector('p'), links=sector.querySelector('.sector-links');
 function open(){overlay.classList.add('is-open');overlay.setAttribute('aria-hidden','false');btn.setAttribute('aria-expanded','true');document.body.style.overflow='hidden'}
 function close(){overlay.classList.remove('is-open','has-sector');sector.classList.remove('is-active');overlay.setAttribute('aria-hidden','true');btn.setAttribute('aria-expanded','false');document.body.style.overflow=''}
 function back(){overlay.classList.remove('has-sector');sector.classList.remove('is-active')}
 function show(key){const c=copy[key], items=map[key]; if(!c||!items)return; h.textContent=c[0]; p.textContent=c[1]; links.innerHTML=items.map(([label,url])=>`<a href="${url}">${label}</a>`).join(''); overlay.classList.add('has-sector'); sector.classList.add('is-active')}
 btn.addEventListener('click',open); overlay.querySelector('.galaxy-close').addEventListener('click',close); overlay.querySelector('.galaxy-back').addEventListener('click',back); overlay.addEventListener('click',e=>{if(e.target===overlay)close(); const star=e.target.closest('[data-sector]'); if(star)show(star.dataset.sector)}); document.addEventListener('keydown',e=>{if(e.key==='Escape'&&overlay.classList.contains('is-open'))close()});
})();
/* PODSPHERE v0.8 · tiny universe engine */
(function(){const canvas=document.getElementById('podspace');if(canvas){const ctx=canvas.getContext('2d');let w,h,stars=[];const resize=()=>{w=canvas.width=innerWidth;h=canvas.height=innerHeight;stars=Array.from({length:Math.min(180,Math.floor(w*h/8500))},()=>({x:Math.random()*w,y:Math.random()*h,r:Math.random()*1.8+.35,v:Math.random()*.32+.06,a:Math.random()*6.28}))};resize();addEventListener('resize',resize);let mx=w/2,my=h/2;addEventListener('pointermove',e=>{mx=e.clientX;my=e.clientY},{passive:true});(function draw(){ctx.clearRect(0,0,w,h);const g=ctx.createRadialGradient(mx,my,0,mx,my,Math.max(w,h)*.7);g.addColorStop(0,'rgba(38,247,214,.10)');g.addColorStop(.45,'rgba(124,92,255,.045)');g.addColorStop(1,'rgba(0,0,0,0)');ctx.fillStyle=g;ctx.fillRect(0,0,w,h);stars.forEach((s,i)=>{s.a+=s.v*.012;s.y+=s.v;if(s.y>h+20)s.y=-20;let x=s.x+Math.sin(s.a)*18;ctx.beginPath();ctx.arc(x,s.y,s.r,0,Math.PI*2);ctx.fillStyle=i%5===0?'rgba(38,247,214,.62)':i%7===0?'rgba(255,62,165,.48)':'rgba(255,255,255,.42)';ctx.fill();if(i%11===0){ctx.beginPath();ctx.moveTo(x,s.y);ctx.lineTo(x+34*Math.sin(s.a),s.y+20*Math.cos(s.a));ctx.strokeStyle='rgba(255,255,255,.08)';ctx.stroke();}});requestAnimationFrame(draw)})()}window.PodsphereEngine={version:'0.9.0',camera:{x:0,y:0,zoom:1,rotation:0,focus(){},move(){}}};})();
(function(){const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('on')}),{threshold:.12});$$('.reveal').forEach(el=>io.observe(el));document.addEventListener('click',e=>{if(e.target.closest('.galaxy-nav'))return;const r=document.createElement('span');r.className='cursor-ripple';r.style.left=e.clientX+'px';r.style.top=e.clientY+'px';document.body.append(r);setTimeout(()=>r.remove(),700)});$$('[data-wave]').forEach(w=>{w.innerHTML=Array.from({length:22},(_,i)=>`<i style="--i:${i};--h:${Math.round(8+Math.random()*30)}"></i>`).join('')});})();
(function(){const spot=document.createElement('div');spot.className='spotlight';document.body.append(spot);addEventListener('pointermove',e=>{spot.style.left=e.clientX+'px';spot.style.top=e.clientY+'px'},{passive:true});document.querySelectorAll('.magnetic').forEach(el=>{el.addEventListener('pointermove',e=>{const r=el.getBoundingClientRect();el.style.transform=`translate(${(e.clientX-r.left-r.width/2)*.10}px,${(e.clientY-r.top-r.height/2)*.10}px)`});el.addEventListener('pointerleave',()=>el.style.transform='')});document.querySelectorAll('.parallax-card').forEach(el=>{el.addEventListener('pointermove',e=>{const r=el.getBoundingClientRect();const x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;el.style.transform=`rotateX(${y*-8}deg) rotateY(${x*10}deg) translateY(-6px)`});el.addEventListener('pointerleave',()=>el.style.transform='')});})();
(function(){const clock=$('[data-time-theme]');if(clock){const h=new Date().getHours();document.documentElement.style.setProperty('--hot',h>18?'#ff7a3e':h<10?'#8be9ff':'#ff3ea5');clock.textContent=h>18?'Night Frequency':h<10?'Morning Frequency':'Daylight Frequency'}})();


/* PODSPHERE v0.8 · Living Components Registry */
(function(){
  const registry={
    version:'0.9.0',codename:'Audio DNA',
    primitives:['ps-card','ps-orb','ps-wave-button','ps-signal','ps-frequency','ps-timeline','ps-orbit-card','ps-dna','ps-field','ps-kinetic-list','ps-audio-dna','ps-genome-card','ps-mood-spectrum','ps-signature-wave'],
    mount(){document.documentElement.dataset.components='living';}
  };
  window.PodsphereComponents=registry; registry.mount();
  document.querySelectorAll('[data-frequency]').forEach(el=>{
    const n=parseInt(el.getAttribute('data-frequency')||'18',10);
    el.innerHTML=Array.from({length:n},(_,i)=>`<i style="--f:${22+Math.round(Math.random()*58)}%;--delay:${(i*-0.045).toFixed(2)}s"></i>`).join('');
  });
  document.querySelectorAll('[data-component-count]').forEach(el=>el.textContent=registry.primitives.length+' primitives');
})();

/* PODSPHERE v0.9 · Audio DNA Engine */
(function(){
  const moods={
    tech:['#26f7d6','#7c5cff','#8be9ff'],
    comedy:['#ffd166','#ff7a3e','#ff3ea5'],
    crime:['#ff3e6c','#7c1428','#2b0614'],
    business:['#d0a772','#8be9ff','#101827'],
    culture:['#b18cff','#ff3ea5','#26f7d6'],
    news:['#5a94c3','#26f7d6','#eef7ff']
  };
  function hash(str){let h=2166136261; for(let i=0;i<str.length;i++){h^=str.charCodeAt(i); h+= (h<<1)+(h<<4)+(h<<7)+(h<<8)+(h<<24);} return Math.abs(h>>>0)}
  function pick(seed, arr){return arr[seed%arr.length]}
  function makeBars(seed,count=34){return Array.from({length:count},(_,i)=>{const v=18+Math.round(((Math.sin((seed+i*13)*.31)+1)/2)*50)+Math.round(Math.random()*16);return `<i style="--h:${Math.min(92,v)}%;--d:${(-i*.035).toFixed(2)}s"></i>`}).join('')}
  function mount(el){
    const name=el.dataset.name||'Unknown Signal'; const mood=el.dataset.mood||'tech'; const tempo=el.dataset.tempo||'72'; const depth=el.dataset.depth||'64'; const seed=hash(name+mood+tempo+depth); const pal=moods[mood]||moods.tech;
    el.style.setProperty('--dna-a',pal[0]); el.style.setProperty('--dna-b',pal[1]); el.style.setProperty('--dna-c',pal[2]); el.style.setProperty('--dna-rot',(seed%360)+'deg');
    const energy=42+(seed%48), clarity=30+((seed>>4)%60), gravity=28+((seed>>8)%62), intimacy=35+((seed>>12)%55);
    el.innerHTML=`<div class="dna-orb"><span></span><em></em></div><div class="dna-copy"><span class="ps-signal"><i></i>${mood.toUpperCase()} SIGNAL</span><h3>${name}</h3><p>Generative Audio-DNA aus Mood, Tempo, Tiefe und redaktionellem Fingerabdruck.</p><div class="signature-wave">${makeBars(seed)}</div><div class="dna-metrics"><b style="--v:${energy}%">Energy <strong>${energy}</strong></b><b style="--v:${clarity}%">Clarity <strong>${clarity}</strong></b><b style="--v:${gravity}%">Gravity <strong>${gravity}</strong></b><b style="--v:${intimacy}%">Intimacy <strong>${intimacy}</strong></b></div></div>`;
  }
  document.querySelectorAll('[data-audio-dna]').forEach(mount);
  document.querySelectorAll('[data-dna-wave]').forEach(el=>{el.innerHTML=makeBars(hash(el.dataset.dnaWave||'podspot'), parseInt(el.dataset.bars||'42',10));});
  window.PodsphereAudioDNA={version:'0.9.0',hash,mount,moods};
})();
