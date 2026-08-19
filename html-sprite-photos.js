(()=>{
  const MAP={
    '그랜드 모먼트':{
      '클래식홀':[0,1,2,3],
      '엘라홀':[4,5,6,7],
      '베일홀':[8,9,10],
      '오페라홀':[11,12,13],
      '시그니처홀':[14,15,16,17,18,19]
    },
    '그랜드 블랑':{
      '퀸덤홀(화이트홀)':[20,21,22,23,24,25,26,27,28]
    }
  };
  const TOTAL=29;
  const VERSION='20260819-1110';
  let spritePromise=null;

  function active(sel){return document.querySelector(sel)?.textContent?.trim()||''}
  function loadSprite(){
    if(spritePromise)return spritePromise;
    spritePromise=Promise.all(Array.from({length:6},(_,i)=>{
      const n=String(i+1).padStart(2,'0');
      return fetch(`assets/html-sprite/part${n}.txt?v=${VERSION}`,{cache:'no-store'}).then(r=>{
        if(!r.ok)throw new Error(`HTML sprite part ${n}: ${r.status}`);
        return r.text();
      });
    })).then(parts=>'data:image/jpeg;base64,'+parts.join('').replace(/\s+/g,''));
    return spritePromise;
  }

  async function apply(){
    if(document.getElementById('dl')?.textContent?.trim()!=='웨딩홀 사진')return;
    const venue=active('#vt .tab.a');
    const hall=active('#ht .tab.a');
    const ids=MAP[venue]?.[hall];
    if(!ids)return;
    const res=document.getElementById('res');
    const grid=res?.querySelector('.photogrid');
    if(!grid)return;
    const key=`${venue}|${hall}`;
    if(grid.dataset.htmlSprite===key)return;
    grid.dataset.htmlSprite=key;
    const meta=res.querySelector('.photo-meta span');
    if(meta)meta.textContent=`HTML에서 추출한 사진 ${ids.length}장`;
    res.querySelector('.photo-meta a')?.remove();
    try{
      const sprite=await loadSprite();
      if(!grid.isConnected||active('#vt .tab.a')!==venue||active('#ht .tab.a')!==hall)return;
      grid.innerHTML=ids.map((idx,i)=>{
        const y=idx*100/(TOTAL-1);
        return `<div class="photoitem"><div class="html-sprite-photo" role="img" aria-label="${venue} ${hall} 사진 ${i+1}" style="background-image:url('${sprite}');background-position:center ${y}%"></div></div>`;
      }).join('');
    }catch(e){
      console.error('HTML-derived photo load failed',e);
      grid.innerHTML='<div class="photo-empty">HTML에서 저장한 사진을 불러오지 못했습니다.</div>';
    }
  }

  const style=document.createElement('style');
  style.textContent='.html-sprite-photo{display:block;width:100%;aspect-ratio:4/3;background-size:100% 2900%;background-repeat:no-repeat;background-color:#f1ede8}.photoitem:has(.html-sprite-photo){padding:0}';
  document.head.appendChild(style);
  new MutationObserver(()=>queueMicrotask(apply)).observe(document.documentElement,{childList:true,subtree:true});
  document.addEventListener('click',()=>setTimeout(apply,0),true);
  apply();
})();
