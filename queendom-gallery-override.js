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
  const VERSION='20260819-1230';
  const active=sel=>document.querySelector(sel)?.textContent?.trim()||'';
  let runId=0;

  const preload=src=>new Promise(resolve=>{
    const im=new Image();
    im.onload=()=>resolve({src,w:im.naturalWidth,h:im.naturalHeight,ratio:im.naturalWidth/im.naturalHeight});
    im.onerror=()=>resolve(null);
    im.src=`${src}?v=${VERSION}`;
  });

  async function draw(){
    if(document.getElementById('dl')?.textContent?.trim()!=='웨딩홀 사진')return;
    const venue=active('#vt .tab.a');
    const hall=active('#ht .tab.a');
    const imgs=MAP[venue]?.[hall];
    if(!imgs)return;
    const res=document.getElementById('res');
    if(!res)return;
    const myRun=++runId;
    res.innerHTML='<div class="local-photo-loading">사진 불러오는 중…</div>';
    const items=(await Promise.all(imgs.map((src,i)=>preload(src).then(x=>x&&({...x,index:i}))))).filter(Boolean);
    if(myRun!==runId)return;
    if(document.getElementById('dl')?.textContent?.trim()!=='웨딩홀 사진')return;
    if(active('#vt .tab.a')!==venue||active('#ht .tab.a')!==hall)return;

    const left=[],right=[];
    let lh=0,rh=0;
    for(const item of items){
      const estimated=1/item.ratio;
      if(lh<=rh){left.push(item);lh+=estimated+0.04}else{right.push(item);rh+=estimated+0.04}
    }
    const card=x=>`<a class="local-photo-card" href="${x.src}" target="_blank" rel="noopener noreferrer"><img src="${x.src}?v=${VERSION}" loading="lazy" alt="${venue} ${hall} 사진 ${x.index+1}"></a>`;
    res.innerHTML=`<div class="local-photo-meta">저장된 원본 사진 ${items.length}장</div><div class="local-photo-columns"><div>${left.map(card).join('')}</div><div>${right.map(card).join('')}</div></div>`;
  }

  const style=document.createElement('style');
  style.textContent=`
    .local-photo-meta{max-width:860px;margin:14px auto 10px;text-align:center;color:var(--muted);font-size:12px}
    .local-photo-columns{max-width:860px;margin:0 auto;display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:14px;align-items:start}
    .local-photo-columns>div{display:flex;flex-direction:column;gap:14px;min-width:0}
    .local-photo-card{display:block;overflow:hidden;border:1px solid var(--line);border-radius:14px;background:#f1ede8;box-shadow:0 3px 12px rgba(60,45,35,.06)}
    .local-photo-card img{display:block;width:100%;height:auto;aspect-ratio:auto;object-fit:contain;margin:0;background:#f1ede8}
    .local-photo-loading{max-width:860px;margin:14px auto;padding:24px;text-align:center;color:var(--muted)}
    @media(max-width:620px){.local-photo-columns{grid-template-columns:1fr;gap:12px}.local-photo-columns>div{gap:12px}}
  `;
  document.head.appendChild(style);

  document.addEventListener('click',e=>{
    if(e.target.closest('#photoTab,#vt .tab,#ht .tab'))setTimeout(draw,0);
  },true);
  window.addEventListener('load',()=>setTimeout(draw,0));
})();