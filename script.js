 const sorryCards = [
    "I'm sorry for hurting you💔",
    "I'm sorry for making you angry 🥺",
    "I'm sorry I didn't understand you better 🌷",
    "Afterall i just care about you more 😢",
    "I'm sorry, and I'm never giving up on us 💞",
    "please baby, i never ment to make out relation like this🥹😊"
  ];
  const promiseCards = [
    "I promise to listen to you more 👂",
    "I promise to be more careful with your heart 💗",
    "I promise to never third party interfarance😊",
    "I promise to never let you feel alone 🫶",
    "I promise to love you more every day and keep you safe like Papa 🌹"
  ];
  const angryReplies = [
    "Please forgive me, baby. I'm so sorry. I promise I'll make it up to you! 💔",
    "I'm really, really sorry 🥺 Please don't be angry anymore…",
    "I'll do anything for your smile! Please? 🧸💗",
    "Okay okay, I'll keep saying sorry until you forgive me! 😭💞"
  ];

  
  
  const hbox = document.getElementById('hearts');
  const hs = ['💗','💖','💕','🌸','✨','🩷','🎀','💞'];
  setInterval(()=>{
    const h=document.createElement('div');
    h.className='heart'; h.textContent=hs[Math.floor(Math.random()*hs.length)];
    h.style.left=Math.random()*100+'vw';
    h.style.fontSize=(16+Math.random()*28)+'px';
    h.style.animationDuration=(7+Math.random()*7)+'s';
    hbox.appendChild(h); setTimeout(()=>h.remove(),15000);
  },450);

  /* ====== navigation ====== */
  const dots=document.getElementById('dots');
  for(let i=1;i<=5;i++){const d=document.createElement('div');d.className='dot';dots.appendChild(d)}
  function go(n){
    document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
    document.getElementById('p'+n).classList.add('active');
    dots.style.display = n>0 ? 'flex':'none';
    [...dots.children].forEach((d,i)=>d.classList.toggle('on',i===n-1));
    if(n===5) burst();
  }

  /* ====== page 0 buttons ====== */
  let angryCount=0;
  const angryBtn=document.getElementById('angryBtn'), okBtn=document.getElementById('okBtn');
  angryBtn.onclick=()=>{
    document.getElementById('mTxt').textContent=angryReplies[angryCount%angryReplies.length];
    document.getElementById('mEm').textContent=['🥺','😭','🧸','🙏'][angryCount%4];
    document.getElementById('overlay').classList.add('show');
    angryCount++;
    angryBtn.style.transform='scale('+Math.max(.6,1-angryCount*.1)+')';
    okBtn.style.transform='scale('+Math.min(1.35,1+angryCount*.08)+')';
  };
  function closeModal(){document.getElementById('overlay').classList.remove('show')}
  okBtn.onclick=()=>{ burst(18); go(1) };

  /* ====== card adders ====== */
  function setupCards(list, boxId, btnId, countId, nextId){
    let i=0;
    const box=document.getElementById(boxId), btn=document.getElementById(btnId),
          cnt=document.getElementById(countId), nxt=document.getElementById(nextId);
    btn.onclick=()=>{
      if(i>=list.length) return;
      const c=document.createElement('div'); c.className='card'; c.textContent=list[i++];
      box.appendChild(c); box.scrollTop=box.scrollHeight;
      cnt.textContent=i+' / '+list.length;
      if(i>=3) nxt.disabled=false;
      if(i>=list.length){btn.textContent='All cards shown 💝';btn.disabled=true;btn.style.opacity=.5}
    };
  }
  setupCards(sorryCards,'cards1','add1','count1','next2');
  setupCards(promiseCards,'cards2','add2','count2','next3');

  /* ====== confetti ====== */
  function burst(n=40){
    const e=['💖','💗','💕','🌸','✨','🎀','💘','🥰'];
    for(let i=0;i<n;i++){
      const c=document.createElement('div'); c.className='confetti';
      c.textContent=e[Math.floor(Math.random()*e.length)];
      c.style.left=Math.random()*100+'vw';
      c.style.fontSize=(18+Math.random()*24)+'px';
      c.style.animationDuration=(2.5+Math.random()*2.5)+'s';
      c.style.animationDelay=(Math.random()*.8)+'s';
      document.body.appendChild(c); setTimeout(()=>c.remove(),6500);
    }
  }
