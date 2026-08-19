(()=>{
  const proxy=(src)=>{
    if(!src||(!src.includes('blog.kakaocdn.net')&&!src.includes('postfiles.pstatic.net')&&!src.includes('blogfiles.pstatic.net'))) return src;
    return 'https://wsrv.nl/?url='+encodeURIComponent(src)+'&w=1200&q=85&output=webp';
  };
  function fixImages(root=document){
    root.querySelectorAll?.('.photoitem img').forEach(img=>{
      const original=img.dataset.originalSrc||img.getAttribute('src');
      if(!original) return;
      if(!img.dataset.originalSrc) img.dataset.originalSrc=original;
      img.removeAttribute('referrerpolicy');
      const next=proxy(original);
      if(img.src!==next){
        img.closest('.photoitem')?.classList.remove('broken');
        img.src=next;
      }
      img.onerror=()=>{
        const item=img.closest('.photoitem');
        if(img.dataset.proxyRetried!=='1'){
          img.dataset.proxyRetried='1';
          item?.classList.remove('broken');
          img.src='https://wsrv.nl/?url='+encodeURIComponent(original)+'&default=1';
        }else item?.classList.add('broken');
      };
    });
  }
  const observer=new MutationObserver(()=>fixImages());
  observer.observe(document.documentElement,{childList:true,subtree:true});
  document.addEventListener('click',()=>setTimeout(()=>fixImages(),0),true);
  fixImages();
})();