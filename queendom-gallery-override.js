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
  const VERSION='20260819-1156';
  const active=sel=>document.querySelector(sel)?.textContent?.trim()||'';

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
    res.innerHTML=`<div class="photo-meta"><span>저장된 원본 사진 ${imgs.length}장</span></div><div class="photogrid local-original-grid" data-local-original="${key}">${imgs.map((src,i)=>`<div class="photoitem"><img class="local-original-photo" src="${src}?v=${VERSION}" loading="lazy" alt="${venue} ${hall} 사진 ${i+1}" onerror="this.closest('.photoitem')?.remove()"></div>`).join('')}</div>`;
  }

  const style=document.createElement('style');
  style.textContent=`
    .photogrid.local-original-grid{display:block!important;columns:2;column-gap:10px;margin-top:10px}
    .photogrid.local-original-grid .photoitem{display:block!important;break-inside:avoid;margin:0 0 10px;padding:0!important;height:auto!important;min-height:0!important;overflow:hidden}
    .photoitem img.local-original-photo{display:block!important;width:100%!important;height:auto!important;max-height:none!important;aspect-ratio:auto!important;object-fit:contain!important;background:#f1ede8}
    .photo-meta a,.photosource{display:none!important}
    @media(max-width:620px){.photogrid.local-original-grid{columns:1}}
  `;
  document.head.appendChild(style);
  new MutationObserver(()=>queueMicrotask(apply)).observe(document.documentElement,{childList:true,subtree:true});
  document.addEventListener('click',()=>setTimeout(apply,0),true);
  apply();
})();
