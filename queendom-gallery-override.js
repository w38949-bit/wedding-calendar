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
  const VERSION='20260819-1212';
  const active=sel=>document.querySelector(sel)?.textContent?.trim()||'';
  let renderToken=0;

  const preload=src=>new Promise(resolve=>{
    const im=new Image();
    im.onload=()=>resolve({src,ratio:im.naturalHeight/im.naturalWidth});
    im.onerror=()=>resolve(null);
    im.src=`${src}?v=${VERSION}`;
  });

  function card(item,venue,hall,i){
    return `<div class="photoitem local-original-item"><img class="local-original-photo" src="${item.src}?v=${VERSION}" loading="lazy" alt="${venue} ${hall} 사진 ${i+1}" onerror="this.closest('.photoitem')?.remove()"></div>`;
  }

  async function apply(){
    if(document.getElementById('dl')?.textContent?.trim()!=='웨딩홀 사진')return;
    const venue=active('#vt .tab.a');
    const hall=active('#ht .tab.a');
    const imgs=MAP[venue]?.[hall];
    if(!imgs)return;
    const res=document.getElementById('res');
    if(!res)return;
    const key=`${venue}|${hall}`;
    if(res.querySelector(`.photogrid[data-local-original="${CSS.escape(key)}"]`))return;
    const token=++renderToken;
    res.innerHTML=`<div class="photo-meta local-original-meta"><span>저장된 원본 사진 ${imgs.length}장</span></div><div class="local-photo-loading">사진 정렬 중…</div>`;
    const loaded=(await Promise.all(imgs.map(preload))).filter(Boolean);
    if(token!==renderToken)return;
    if(document.getElementById('dl')?.textContent?.trim()!=='웨딩홀 사진')return;
    if(active('#vt .tab.a')!==venue||active('#ht .tab.a')!==hall)return;

    if(matchMedia('(max-width:620px)').matches){
      res.innerHTML=`<div class="photo-meta local-original-meta"><span>저장된 원본 사진 ${loaded.length}장</span></div><div class="photogrid local-original-grid one-col" data-local-original="${key}">${loaded.map((x,i)=>card(x,venue,hall,i)).join('')}</div>`;
      return;
    }

    const items=loaded.map((x,i)=>({...x,idx:i})).sort((a,b)=>b.ratio-a.ratio);
    const cols=[[],[]],heights=[0,0];
    for(const item of items){
      const c=heights[0]<=heights[1]?0:1;
      cols[c].push(item);
      heights[c]+=item.ratio+0.035;
    }
    res.innerHTML=`<div class="photo-meta local-original-meta"><span>저장된 원본 사진 ${loaded.length}장</span></div><div class="photogrid local-original-grid balanced" data-local-original="${key}"><div class="local-photo-col">${cols[0].map(x=>card(x,venue,hall,x.idx)).join('')}</div><div class="local-photo-col">${cols[1].map(x=>card(x,venue,hall,x.idx)).join('')}</div></div>`;
  }

  const style=document.createElement('style');
  style.textContent=`
    .photogrid.local-original-grid.balanced{
      display:grid!important;
      grid-template-columns:minmax(0,1fr) minmax(0,1fr)!important;
      gap:14px!important;
      width:min(100%,860px)!important;
      margin:12px auto 0!important;
      align-items:start!important;
      justify-content:center!important;
    }
    .local-photo-col{display:flex!important;flex-direction:column!important;gap:14px!important;min-width:0!important;width:100%!important}
    .photogrid.local-original-grid.one-col{display:flex!important;flex-direction:column!important;gap:12px!important;width:min(100%,560px)!important;margin:12px auto 0!important}
    .photogrid.local-original-grid .photoitem.local-original-item{
      display:block!important;
      width:100%!important;
      margin:0!important;
      padding:0!important;
      height:auto!important;
      min-height:0!important;
      overflow:hidden!important;
      border-radius:14px!important;
      background:#f1ede8!important;
    }
    .photoitem img.local-original-photo{
      display:block!important;
      width:100%!important;
      height:auto!important;
      max-height:none!important;
      aspect-ratio:auto!important;
      object-fit:contain!important;
      margin:0!important;
    }
    .photo-meta.local-original-meta{
      width:min(100%,860px)!important;
      margin:14px auto 0!important;
      text-align:center!important;
    }
    .local-photo-loading{width:min(100%,860px);margin:12px auto;padding:24px;text-align:center;color:#8a817a}
    .photo-meta a,.photosource{display:none!important}
  `;
  document.head.appendChild(style);
  new MutationObserver(()=>queueMicrotask(apply)).observe(document.documentElement,{childList:true,subtree:true});
  document.addEventListener('click',()=>setTimeout(apply,0),true);
  addEventListener('resize',()=>setTimeout(()=>{const g=document.querySelector('.photogrid[data-local-original]');if(g){g.removeAttribute('data-local-original');apply()}},80));
  apply();
})();
