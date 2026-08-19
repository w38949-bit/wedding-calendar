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
  const VERSION='20260819-1201';
  const active=sel=>document.querySelector(sel)?.textContent?.trim()||'';

  function card(src,venue,hall,i){
    return `<div class="photoitem local-original-item"><img class="local-original-photo" src="${src}?v=${VERSION}" loading="lazy" alt="${venue} ${hall} 사진 ${i+1}" onerror="this.closest('.photoitem')?.remove()"></div>`;
  }

  function apply(){
    if(document.getElementById('dl')?.textContent?.trim()!=='웨딩홀 사진')return;
    const venue=active('#vt .tab.a');
    const hall=active('#ht .tab.a');
    const imgs=MAP[venue]?.[hall];
    if(!imgs)return;
    const res=document.getElementById('res');
    if(!res)return;
    const key=`${venue}|${hall}`;
    if(res.querySelector(`.photogrid[data-local-original="${CSS.escape(key)}"]`))return;
    const left=[],right=[];
    imgs.forEach((src,i)=>(i%2===0?left:right).push(card(src,venue,hall,i)));
    res.innerHTML=`<div class="photo-meta"><span>저장된 원본 사진 ${imgs.length}장</span></div><div class="photogrid local-original-grid" data-local-original="${key}"><div class="local-photo-col">${left.join('')}</div><div class="local-photo-col">${right.join('')}</div></div>`;
  }

  const style=document.createElement('style');
  style.textContent=`
    .photogrid.local-original-grid{display:grid!important;grid-template-columns:minmax(0,1fr) minmax(0,1fr)!important;gap:12px!important;width:100%!important;max-width:820px!important;margin:12px auto 0!important;align-items:start!important}
    .local-photo-col{display:flex!important;flex-direction:column!important;gap:12px!important;min-width:0!important;width:100%!important}
    .photogrid.local-original-grid .photoitem.local-original-item{display:block!important;width:100%!important;margin:0!important;padding:0!important;height:auto!important;min-height:0!important;overflow:hidden!important;border-radius:14px!important}
    .photoitem img.local-original-photo{display:block!important;width:100%!important;height:auto!important;max-height:none!important;aspect-ratio:auto!important;object-fit:contain!important;margin:0 auto!important;background:#f1ede8}
    .photo-meta{max-width:820px!important;margin-left:auto!important;margin-right:auto!important}
    .photo-meta a,.photosource{display:none!important}
    @media(max-width:620px){
      .photogrid.local-original-grid{grid-template-columns:1fr!important;max-width:560px!important}
      .local-photo-col{display:contents!important}
    }
  `;
  document.head.appendChild(style);
  new MutationObserver(()=>queueMicrotask(apply)).observe(document.documentElement,{childList:true,subtree:true});
  document.addEventListener('click',()=>setTimeout(apply,0),true);
  apply();
})();
