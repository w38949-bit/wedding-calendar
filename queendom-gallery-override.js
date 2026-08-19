(()=>{
  if(document.querySelector('script[data-html-photo-loader="1"]'))return;
  const s=document.createElement('script');
  s.src='html-sprite-photos.js?v=20260819-1110';
  s.dataset.htmlPhotoLoader='1';
  s.defer=true;
  document.body.appendChild(s);
})();
