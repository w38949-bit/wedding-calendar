(()=>{
  const ROOT='wedding-hall-original-photos/assets';
  const seq=(base,n)=>Array.from({length:n},(_,i)=>`${ROOT}/${base}/${String(i+1).padStart(2,'0')}.jpg`);
  const MAP={
    '그랜드 모먼트':{
      '클래식홀':seq('grand-moment/classic',4),
      '엘라홀':seq('grand-moment/ella',4),
      '베일홀':seq('grand-moment/veil',3),
      '오페라홀':seq('grand-moment/opera',2),
      '시그니처홀':seq('grand-moment/signature',6)
    },
    '그랜드 블랑':{
      '퀸덤홀(화이트홀)':seq('grand-blanc/queendom',9)
    }
  };
  const VERSION='20260819-1226';
  const active=sel=>document.querySelector(sel)?.textContent?.trim()||'';
  let renderToken=0;
  let applying=false;

  const preload=src=>new Promise(resolve=>{
    const im=new Image();
    im.onload=()=>resolve({src,w:im.naturalWidth,h:im.naturalHeight,ratio:im.naturalWidth/im.naturalHeight});
    im.onerror=()=>resolve(null);
    im.src=`${src}?v=${VERSION}`;
  });

  const imgCard=(item,venue,hall,i,cls='')=>`<div class="local-gallery-card ${cls}"><img src="${item.src}?v=${VERSION}" loading="lazy" alt="${venue} ${hall} 사진 ${i+1}" onerror="this.closest('.local-gallery-card')?.remove()"></div>`;

  async function apply(){
    if(applying)return;
    if(document.getElementById('dl')?.textContent?.trim()!=='웨딩홀 사진')return;
    const venue=active('#vt .tab.a');
    const hall=active('#ht .tab.a');
    const imgs=MAP[venue]?.[hall];
    if(!imgs)return;
    const res=document.getElementById('res');
    if(!res)return;
    const key=`${venue}|${hall}`;
    if(res.querySelector('.local-gallery')?.dataset.key===key)return;

    applying=true;
    const token=++renderToken;
    res.innerHTML=`<div class="local-gallery-meta">저장된 원본 사진 ${imgs.length}장</div><div class="local-gallery-loading">사진 배치 중…</div>`;
    try{
      const loaded=(await Promise.all(imgs.map(preload))).filter(Boolean).map((x,i)=>({...x,idx:i}));
      if(token!==renderToken)return;
      if(document.getElementById('dl')?.textContent?.trim()!=='웨딩홀 사진')return;
      if(active('#vt .tab.a')!==venue||active('#ht .tab.a')!==hall)return;

      const landscapes=loaded.filter(x=>x.ratio>=1.18).sort((a,b)=>b.ratio-a.ratio);
      const portraits=loaded.filter(x=>x.ratio<1.18).sort((a,b)=>Math.abs(a.ratio-0.78)-Math.abs(b.ratio-0.78));
      const blocks=[];

      while(portraits.length>=2){
        const a=portraits.shift(),b=portraits.shift();
        blocks.push(`<div class="local-gallery-pair">${imgCard(a,venue,hall,a.idx)}${imgCard(b,venue,hall,b.idx)}</div>`);
        if(landscapes.length){
          const wide=landscapes.shift();
          blocks.push(imgCard(wide,venue,hall,wide.idx,'local-gallery-wide'));
        }
      }
      if(portraits.length){
        const a=portraits.shift();
        blocks.push(`<div class="local-gallery-single">${imgCard(a,venue,hall,a.idx)}</div>`);
      }
      while(landscapes.length){
        const a=landscapes.shift();
        blocks.push(imgCard(a,venue,hall,a.idx,'local-gallery-wide'));
      }

      res.innerHTML=`<div class="local-gallery-meta">저장된 원본 사진 ${loaded.length}장</div><div class="local-gallery" data-key="${key}">${blocks.join('')}</div>`;
    } finally {
      applying=false;
    }
  }

  const style=document.createElement('style');
  style.textContent=`
    .local-gallery-meta{width:min(100%,860px);margin:14px auto 0;text-align:center;color:var(--muted);font-size:12px}
    .local-gallery{width:min(100%,860px);margin:12px auto 0;display:flex;flex-direction:column;gap:14px}
    .local-gallery-pair{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:14px;align-items:start}
    .local-gallery-single{display:flex;justify-content:center}
    .local-gallery-single .local-gallery-card{width:calc(50% - 7px)}
    .local-gallery-card{overflow:hidden;border:1px solid var(--line);border-radius:14px;background:#f1ede8;box-shadow:0 3px 12px rgba(60,45,35,.06)}
    .local-gallery-card img{display:block!important;width:100%!important;height:auto!important;aspect-ratio:auto!important;object-fit:contain!important;margin:0!important;background:#f1ede8!important}
    .local-gallery-wide{width:100%}
    .local-gallery-loading{width:min(100%,860px);margin:12px auto;padding:24px;text-align:center;color:#8a817a}
    .photo-meta a,.photosource{display:none!important}
    @media(max-width:620px){
      .local-gallery{width:min(100%,560px);gap:12px}
      .local-gallery-pair{grid-template-columns:1fr;gap:12px}
      .local-gallery-single .local-gallery-card{width:100%}
    }
  `;
  document.head.appendChild(style);

  let scheduled=false;
  const scheduleApply=()=>{
    if(scheduled)return;
    scheduled=true;
    requestAnimationFrame(()=>{
      scheduled=false;
      apply();
    });
  };
  new MutationObserver(()=>{if(!applying)scheduleApply()}).observe(document.documentElement,{childList:true,subtree:true});
  document.addEventListener('click',()=>setTimeout(scheduleApply,0),true);
  scheduleApply();
})();
