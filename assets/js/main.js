
// Generate floating petals
(function createPetals(){
  const container = document.getElementById('petals');
  const count = 70;
  for(let i=0;i<count;i++){
    const el = document.createElement('div');
    el.className='petal';
    el.style.left = Math.random()*100 + 'vw';
    el.style.animationDuration = (6 + Math.random()*12) + 's';
    el.style.animationDelay = (-Math.random()*10) + 's';
    el.style.opacity = 0.35 + Math.random()*0.45;
    el.style.transform = `scale(${0.6 + Math.random()*0.9})`;
    container.appendChild(el);
  }
})();

// Lightweight confetti
function confetti(){
  const duration = 1800;
  const end = Date.now() + duration;
  (function frame(){
    const colors = ['#ffd166','#7bdcb5','#ff6ec7','#a0c4ff','#fdffb6'];
    for(let i=0;i<10;i++){
      const d = document.createElement('div');
      Object.assign(d.style, {
        position:'fixed', top:'-10px', left:(Math.random()*100)+'vw',
        width:'8px', height:'14px', background: colors[(Math.random()*colors.length)|0],
        transform:`rotate(${Math.random()*360}deg)`, zIndex:9999, borderRadius:'2px',
        boxShadow:'0 0 6px rgba(255,255,255,.6)'
      });
      document.body.appendChild(d);
      const fall = d.animate([
        { transform: d.style.transform, opacity:1 },
        { transform:`translateY(110vh) rotate(${Math.random()*720}deg)`, opacity:0.8 }
      ], { duration: 1200 + Math.random()*1200, easing:'ease-out' });
      fall.onfinish = () => d.remove();
    }
    if(Date.now() < end) requestAnimationFrame(frame);
  })();
}
document.getElementById('confettiBtn').addEventListener('click', confetti);

// Social share
(function(){
  const pageURL = encodeURIComponent(window.location.href);
  const text = encodeURIComponent('ಗೌರಿ ಹಬ್ಬದ ಹಾರ್ದಿಕ ಶುಭಾಶಯಗಳು 🌺');
  document.getElementById('waShare').href = `https://wa.me/?text=${text}%20-%20${pageURL}`;
  document.getElementById('fbShare').href = `https://www.facebook.com/sharer/sharer.php?u=${pageURL}`;
  document.getElementById('xShare').href  = `https://twitter.com/intent/tweet?text=${text}&url=${pageURL}`;
  document.getElementById('copyLink').addEventListener('click', async () => {
    try { await navigator.clipboard.writeText(window.location.href); alert('Link copied!'); }
    catch(e){ console.log(e); }
  });
})();

// Theme toggle (light/dark glass)
(function(){
  const btn = document.getElementById('themeToggle');
  let dark = true;
  btn.addEventListener('click', ()=>{
    dark = !dark;
    document.documentElement.classList.toggle('light', !dark);
    btn.textContent = dark ? '🌙' : '☀️';
  });
})();
