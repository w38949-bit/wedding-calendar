(()=>{
  const originals=[
    "https://postfiles.pstatic.net/MjAyNjAxMTJfMjkw/MDAxNzY4MjA5Mzk4MDA4.PE8gvGwPY-75qnd5PsM1fvWYomAOMB_v3lVoGvidfrcg.K7F6JD4p3ObhNsIrF1GPPEc6kWx-XLW0yu0f0J_-tDEg.JPEG/IMG%EF%BC%BF1152.JPG?type=w1600",
    "https://postfiles.pstatic.net/MjAyNjAxMTJfMTky/MDAxNzY4MjA5NDAxMzA0.Vxp09th3r-pEVUn_RzBaQCZW3sfCSXDmRloDBarySHcg.r89s6fQGs8Jye7YSrjXIv9_IbyfUnu8pneLKRPztNuog.JPEG/IMG%EF%BC%BF1153.JPG?type=w1600",
    "https://postfiles.pstatic.net/MjAyNjAxMTJfMjA4/MDAxNzY4MjA5Mzk4MDE1.gWQAUf4SrUIcv4ShIOLpaJrnbiIX0vGmyMPpI_aEPD4g.tEh5f--7O86p7bjbyaX7L2IxTKty22KI2bTvljTjqiMg.JPEG/IMG%EF%BC%BF1157.JPG?type=w1600",
    "https://postfiles.pstatic.net/MjAyNjAxMTJfMTgy/MDAxNzY4MjA5Mzk3OTkz.oy4SQogoO9DF6I1OecnG2rm7sOxAkODeU5EkVRWWPHMg.MBLH4_9fhiEoA8FqlY04YOM017FwU0AePSBCLa_5MD4g.JPEG/IMG%EF%BC%BF1158.JPG?type=w1600",
    "https://postfiles.pstatic.net/MjAyNjAxMTJfMTMy/MDAxNzY4MjA5Mzk4MDY2.3yYBKwK6Luz73ayQlEvfBrh-jaJYzPwjoMC-IsOUVAAg.6osnACyUqCXfQ-mZEkp838RQAVFF_FdKu0oM1Jb5Wl4g.JPEG/IMG%EF%BC%BF1154.JPG?type=w1600",
    "https://postfiles.pstatic.net/MjAyNjAxMTJfMjgx/MDAxNzY4MjA5Mzk4NzI5.Y0xoLlor0ij3wb-d1sto4T06cRKl43_bjTH9_5dkyuYg.FN_hwAEpG3n39MMUgzW0TouapzSmDUa1kswX3QNQnMcg.JPEG/IMG%EF%BC%BF1162.JPG?type=w1600",
    "https://postfiles.pstatic.net/MjAyNjAxMTJfMjQw/MDAxNzY4MjA5Mzk4NTc2.EdjWitfytQ-Wj7Q1KkessBViVm_tjSJ1tuWpu4OrIYAg.UKUEZDWH5t386L_ZTM4w0I1yR9wXm_MVqe8S6whvE10g.JPEG/IMG%EF%BC%BF1166.JPG?type=w1600",
    "https://postfiles.pstatic.net/MjAyNjAxMTJfMTY0/MDAxNzY4MjA5Mzk4NjAy.NTwfNpVC8IEx94JcI6jbyPfoGS4aG-gFeMowhIf9l74g.CAc-bMHZqP6dAORw3LJSfysAy-bPaXMXuKyevvS5j7kg.JPEG/IMG%EF%BC%BF1167.JPG?type=w1600",
    "https://postfiles.pstatic.net/MjAyNjAxMTJfMTE4/MDAxNzY4MjA5Mzk5MDMw.17ERkhxKa61I25gx96oOxQ6P6j8au-KL2XB6Sd1bA7gg.RExqFLvqspIepss_qcU-FlH4gvbauAQOOcDFdm4j-b4g.JPEG/IMG%EF%BC%BF1168.JPG?type=w1600"
  ];
  const proxy=u=>'https://naver-img-proxy.5126537.workers.dev/?url='+encodeURIComponent(u);
  let busy=false;
  function activeText(sel){return document.querySelector(sel)?.textContent?.trim()||''}
  function apply(){
    if(busy) return;
    if(document.getElementById('dl')?.textContent?.trim()!=='웨딩홀 사진') return;
    if(activeText('#vt .tab.a')!=='그랜드 블랑') return;
    if(activeText('#ht .tab.a')!=='퀸덤홀(화이트홀)') return;
    const res=document.getElementById('res');
    const grid=res?.querySelector('.photogrid');
    if(!grid||grid.dataset.queendomOverride==='1') return;
    busy=true;
    const meta=res.querySelector('.photo-meta span');
    if(meta) meta.textContent='확인 가능한 원본 사진 9장';
    grid.dataset.queendomOverride='1';
    grid.innerHTML=originals.map((u,i)=>`<div class="photoitem"><a href="${u}" target="_blank" rel="noopener noreferrer"><img src="${proxy(u)}" loading="lazy" alt="그랜드 블랑 퀸덤홀 사진 ${i+1}" onerror="this.closest('.photoitem')?.remove()"></a><a class="photosource" href="https://m.blog.naver.com/rh30921/224144337505" target="_blank" rel="noopener noreferrer">출처 보기</a></div>`).join('');
    busy=false;
  }
  new MutationObserver(()=>queueMicrotask(apply)).observe(document.documentElement,{childList:true,subtree:true});
  document.addEventListener('click',()=>setTimeout(apply,0),true);
  apply();
})();
