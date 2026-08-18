(()=>{
const PHOTO={
  '그랜드 모먼트':{
    '시그니처홀':{source:'https://www.korea-iphone.com/blog/ljfpBZVyLJsd.html',imgs:[
      'https://i1.korea-iphone.com/files/3e34566c647fd428fa67b0d6c2a111d0.jpg','https://i1.korea-iphone.com/files/5e6ec4f3cb74c1867545788d319a66b1.jpg','https://i1.korea-iphone.com/files/bf8e6dae09c3ea76f1479ec58206db6f.jpg','https://i1.korea-iphone.com/files/54ea92e313000b7cd92ad275d10d4d0c.jpg','https://i1.korea-iphone.com/files/0b8846f3cd507b42219029a39b0cc70c.jpg','https://i1.korea-iphone.com/files/482110b583c4135da8d41b17e5ebfaf6.jpg','https://i1.korea-iphone.com/files/ea4707c2c1520b3f4e75a80ca3457d67.jpg','https://i1.korea-iphone.com/files/9815888f0daeae994a7aba487a2f9a72.jpg','https://i1.korea-iphone.com/files/2269b217b7dbd6ff7907cbb1c92af986.jpg']},
    '베일홀':{source:'https://www.korea-iphone.com/blog/JqDBLepnDdcm.html',imgs:[
      'https://i1.korea-iphone.com/files/e3174f48938e2ad84b623442a783d00b.jpg','https://i1.korea-iphone.com/files/78cb78dcd009c4b30393bcb4effed6d4.jpg','https://i1.korea-iphone.com/files/0c5037241d88a537d0264191cc98694f.jpg','https://i1.korea-iphone.com/files/de6d99cf93aa561889fe832c22ea08e9.jpg','https://i1.korea-iphone.com/files/b9f1998eee29359631ff0e00c1e85dac.jpg','https://i1.korea-iphone.com/files/c5960b6c83b2317de83bea18f1a2ca55.jpg','https://i1.korea-iphone.com/files/6752006e6b3799ad68f8a82c750749fb.jpg','https://i1.korea-iphone.com/files/2712ff771606db5ae5414b2c2ac0a2db.jpg','https://i1.korea-iphone.com/files/ab7ea93c209a23e6cbcacbe5b593e160.jpg','https://i1.korea-iphone.com/files/b8d32810b5c4c067ff714a2d02f75f27.jpg']},
    '클래식홀':{source:'https://www.korea-iphone.com/blog/MOYIHJlKPmWQ.html',imgs:[
      'https://i1.korea-iphone.com/files/50b7567ca630651b5452a66f0a479fd8.jpg','https://i1.korea-iphone.com/files/5267eacf052d0d37bcd2bad8f2cc9f87.jpg','https://i1.korea-iphone.com/files/76bc795250ee077b3f0108485e3ad457.jpg','https://i1.korea-iphone.com/files/0314f8b4b8d993e421b29432bdd02d65.jpg','https://i1.korea-iphone.com/files/8c0d1053def3e6dd921624161caa0da2.jpg','https://i1.korea-iphone.com/files/6ad4c41f653672605a4cfac2d7a6c9d8.jpg','https://i1.korea-iphone.com/files/e6ba46743f62ee0ed4ed1dac1a478575.jpg','https://i1.korea-iphone.com/files/6d44b10875907b1ca50aa4d8aced8428.jpg','https://i1.korea-iphone.com/files/53ae85260c22d0951f2cb0e9a620660d.jpg','https://i1.korea-iphone.com/files/2cfefe0ce032ac74a329cc9dafc7d2ea.jpg']},
    '엘라홀':{source:'https://www.korea-iphone.com/blog/WiFEPNLIDoxh.html',imgs:[
      'https://i1.korea-iphone.com/files/b40c9a7d776750981174a1670dbdb923.jpg','https://i1.korea-iphone.com/files/289554b426153db690a1fecb6e8bf02a.jpg','https://i1.korea-iphone.com/files/28c32d167a0a9af0eb69379f88cf8b2e.jpg','https://i1.korea-iphone.com/files/69adfd290aa75b9a9543fabfd03df830.jpg','https://i1.korea-iphone.com/files/f54b645b2765ad0eec3915ae284c1df8.jpg','https://i1.korea-iphone.com/files/1fcb6d4b22c46fec63ea5b6fdf5377c6.jpg','https://i1.korea-iphone.com/files/b338cdfc9822cc0add530e592efcd1b8.jpg','https://i1.korea-iphone.com/files/7f8329dda9face18d72826b614ee58b8.jpg','https://i1.korea-iphone.com/files/a0f9de0e48fb16646f0b5943fb70e888.jpg','https://i1.korea-iphone.com/files/db813ca49ff10ddc114daa0ae976b9a4.jpg']},
    '화이트홀':{source:'https://fodlem45.tistory.com/entry/%EB%B6%80%EC%82%B0-%EA%B7%B8%EB%9E%9C%EB%93%9C%EB%AA%A8%EB%A8%BC%ED%8A%B8-%ED%99%94%EC%9D%B4%ED%8A%B8%ED%99%80-%EA%B3%84%EC%95%BD-%ED%9B%84%EA%B8%B0%EA%B2%AC%EC%A0%81%EB%B9%84%EC%9A%A9-%EA%B3%B5%EC%9C%A0',imgs:[]}
  },
  '그랜드 블랑':{
    '퀸덤홀(화이트홀)':{source:'https://www.korea-iphone.com/blog/OoxhXVscoXie.html',imgs:[
      'https://i1.korea-iphone.com/files/d7bb7fb21bd36c1287e23a9c649d74b6.jpg','https://i1.korea-iphone.com/files/871a4c79c3da707e594f932b6f85801f.jpg','https://i1.korea-iphone.com/files/58895f4a0b27eea428d16d35ee25f6e1.jpg','https://i1.korea-iphone.com/files/e6237c41a04f935a909cb96017f04206.jpg','https://i1.korea-iphone.com/files/db992ecc50e0f101c55eaed222eeb895.jpg','https://i1.korea-iphone.com/files/c500edcccc9ac7b879e000cae7bd3904.jpg','https://i1.korea-iphone.com/files/6e10044a0d9849c01352fea72a13c1ea.jpg','https://i1.korea-iphone.com/files/4827d07ae717ab99c5524477a44f4de0.jpg','https://i1.korea-iphone.com/files/2c20464e44101d48efa36111de460f7b.jpg','https://i1.korea-iphone.com/files/8471933dcc02270e751e94f7d5407cca.jpg']}
  },
  '센텀사이언스':{
    '1층 더라움홀':{source:'https://www.directwedding.co.kr/weddinghall/hall0241',imgs:[
      'https://cdn.prod.website-files.com/66a1eeaa00f1c86c3dbae974/66f61b3122a676a6f9ee992d_1375669764_img_2765_0_1617857919.avif','https://cdn.prod.website-files.com/66a1eeaa00f1c86c3dbae974/66f61b31d5bb871f9836377d_1375669764_img_2765_1_1617857919.avif']},
    '스카이홀':{source:'https://www.directwedding.co.kr/weddinghall/hall0241',imgs:[
      'https://cdn.prod.website-files.com/66a1eeaa00f1c86c3dbae974/66f61aaf327c3f2f8b295572_1375669764_img_2767_0_1617858077.avif','https://cdn.prod.website-files.com/66a1eeaa00f1c86c3dbae974/66f61aaf8f1046e9035b775e_1375669764_img_2767_1_1617858077.avif','https://cdn.prod.website-files.com/66a1eeaa00f1c86c3dbae974/66f61aa84ca344dcb8d9fe4d_1375669764_img_2767_2_1617858077.avif','https://cdn.prod.website-files.com/66a1eeaa00f1c86c3dbae974/66f61aa8c23b15733fb72aaf_1375669764_img_2767_3_1617858077.avif','https://cdn.prod.website-files.com/66a1eeaa00f1c86c3dbae974/66f61aa737bb7a94f7d093ea_1375669764_img_2767_4_1617858077.avif','https://cdn.prod.website-files.com/66a1eeaa00f1c86c3dbae974/66f61aa7a46699bb93f917e0_1375669764_img_2767_5_1617858077.avif','https://cdn.prod.website-files.com/66a1eeaa00f1c86c3dbae974/66f61a9de74cdc7c0b730aa9_1375669764_img_2767_6_1617858077.avif','https://cdn.prod.website-files.com/66a1eeaa00f1c86c3dbae974/66f61a9c4ca344dcb8d9e6a5_1375669764_img_2767_7_1617858077.avif','https://cdn.prod.website-files.com/66a1eeaa00f1c86c3dbae974/66f61a9c3bd61d162102b821_1375669764_img_2767_8_1617858077.avif','https://cdn.prod.website-files.com/66a1eeaa00f1c86c3dbae974/66f61a9d327c3f2f8b2941c1_1375669764_img_2767_9_1617858077.avif']}
  },
  '해운대 마리나컨벤션':{
    '':{source:'https://www.directwedding.co.kr/weddinghall/hall0237',imgs:[
      'https://cdn.prod.website-files.com/66a1eeaa00f1c86c3dbae974/66e002900f8017c535185958_1400565572_img_3719_0_1503308143.avif','https://cdn.prod.website-files.com/66a1eeaa00f1c86c3dbae974/66e002900f8017c535185942_1400565572_img_3719_0_1503046036.avif','https://cdn.prod.website-files.com/66a1eeaa00f1c86c3dbae974/66e002900f8017c53518595e_1400565572_img_3719_1_1503046036.avif','https://cdn.prod.website-files.com/66a1eeaa00f1c86c3dbae974/66e002900f8017c535185925_1400565572_img_3719_2_1503046036.avif','https://cdn.prod.website-files.com/66a1eeaa00f1c86c3dbae974/66e002900f8017c535185961_1400565572_img_3719_3_1503046036.avif','https://cdn.prod.website-files.com/66a1eeaa00f1c86c3dbae974/66e002900f8017c53518596b_1400565572_img_3719_4_1503046036.avif','https://cdn.prod.website-files.com/66a1eeaa00f1c86c3dbae974/66e002900f8017c535185945_1400565572_img_3719_5_1503046036.avif','https://cdn.prod.website-files.com/66a1eeaa00f1c86c3dbae974/66e002900f8017c5351858e1_1400565572_img_3719_6_1503046036.avif','https://cdn.prod.website-files.com/66a1eeaa00f1c86c3dbae974/66e002900f8017c535185968_1400565572_img_3719_7_1503046036.avif','https://cdn.prod.website-files.com/66a1eeaa00f1c86c3dbae974/66e002900f8017c535185912_1400565572_img_3719_8_1503046036.avif']}
  },
  '센텀호텔':{
    '':{source:'https://www.directwedding.co.kr/weddinghall/hall0298',imgs:[
      'https://cdn.prod.website-files.com/66a1eeaa00f1c86c3dbae974/66e002c0791b91cee4eb5d17_1448851134_img_4813_0_1531876245.jpeg','https://cdn.prod.website-files.com/66a1eeaa00f1c86c3dbae974/66e002c0791b91cee4eb5cfe_1448851134_img_4814_0_1531876231.jpeg','https://cdn.prod.website-files.com/66a1eeaa00f1c86c3dbae974/66e002c0791b91cee4eb5d04_1448851134_img_4814_1_1531876231.jpeg','https://cdn.prod.website-files.com/66a1eeaa00f1c86c3dbae974/66e002c2791b91cee4eb5e10_1448851134_img_4815_0_1531876212.jpeg','https://cdn.prod.website-files.com/66a1eeaa00f1c86c3dbae974/66e002c0791b91cee4eb5d1b_1448851134_img_4815_1_1531876214.jpeg','https://cdn.prod.website-files.com/66a1eeaa00f1c86c3dbae974/66e002c0791b91cee4eb5d3d_1448851134_img_4815_2_1531876214.jpeg']}
  }
};

const style=document.createElement('style');
style.textContent=`.photo-meta{display:flex;justify-content:space-between;align-items:center;gap:10px;margin-top:14px;color:var(--muted);font-size:12px}.photo-meta a{color:var(--strong);font-weight:700;text-decoration:none}.photogrid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px;margin-top:10px}.photoitem{overflow:hidden;border:1px solid var(--line);border-radius:14px;background:#fff}.photoitem>a:first-child{display:block}.photoitem img{display:block;width:100%;aspect-ratio:4/3;object-fit:cover;background:#f1ede8}.photosource{display:block;padding:8px 10px;color:var(--muted);font-size:11px;text-decoration:none}.photoitem.broken img{display:none}.photoitem.broken>a:first-child:after{content:'사진을 불러오지 못했습니다';display:flex;min-height:120px;align-items:center;justify-content:center;padding:12px;color:var(--muted);font-size:12px;background:#faf7f4}.photo-empty{margin-top:12px;padding:24px 14px;border:1px dashed var(--line);border-radius:14px;text-align:center;color:var(--muted);font-size:13px}.photo-empty a{display:inline-block;margin-top:8px;color:var(--strong);font-weight:700}@media(max-width:620px){.photogrid{grid-template-columns:1fr}}`;
document.head.appendChild(style);

const favTab=document.getElementById('favTab');
const photoTab=document.createElement('button');
photoTab.id='photoTab';photoTab.className='viewtab';photoTab.type='button';photoTab.textContent='웨딩홀 사진';
favTab.insertAdjacentElement('afterend',photoTab);

let photoVenue=Object.keys(PHOTO)[0],photoHall='';
function renderPhotoVenues(){
  const vs=Object.keys(PHOTO);
  if(!PHOTO[photoVenue])photoVenue=vs[0];
  document.getElementById('dl').textContent='웨딩홀 사진';
  document.getElementById('venueLabel').textContent='웨딩홀';
  const box=document.getElementById('vt');
  box.innerHTML=vs.map(v=>`<button class="tab ${v===photoVenue?'a':''}" type="button"><span class="tab-dot" style="background:${venueColor(v)}"></span>${v}</button>`).join('');
  [...box.children].forEach((b,i)=>b.onclick=()=>{photoVenue=vs[i];photoHall='';renderPhotoVenues()});
  renderPhotoHalls();
}
function renderPhotoHalls(){
  const halls=Object.keys(PHOTO[photoVenue]||{}),sec=document.getElementById('hallSection'),box=document.getElementById('ht');
  if(halls.length===1&&halls[0]===''){
    photoHall='';sec.classList.add('hidden');box.innerHTML='';renderPhotoGallery();return;
  }
  sec.classList.remove('hidden');
  if(!halls.includes(photoHall))photoHall=halls[0]||'';
  box.innerHTML=halls.map(h=>`<button class="tab ${h===photoHall?'a':''}" type="button">${h}</button>`).join('');
  [...box.children].forEach((b,i)=>b.onclick=()=>{photoHall=halls[i];renderPhotoHalls()});
  renderPhotoGallery();
}
function renderPhotoGallery(){
  if(viewMode!=='photos')return;
  const g=(PHOTO[photoVenue]||{})[photoHall];
  const resBox=document.getElementById('res');
  if(!g){resBox.innerHTML='<div class="photo-empty">등록된 사진이 없습니다.</div>';return;}
  const count=g.imgs.length;
  const meta=`<div class="photo-meta"><span>확인 가능한 원본 사진 ${count}장${count<10?' · 추가 원본 확인 중':''}</span><a href="${g.source}" target="_blank" rel="noopener noreferrer">출처 페이지 ↗</a></div>`;
  if(!count){
    resBox.innerHTML=meta+`<div class="photo-empty">안정적으로 직접 불러올 수 있는 원본 이미지 URL을 아직 확보하지 못했습니다.<br><a href="${g.source}" target="_blank" rel="noopener noreferrer">화이트홀 원본 사진 보기 ↗</a></div>`;
    return;
  }
  resBox.innerHTML=meta+`<div class="photogrid">${g.imgs.map((src,i)=>`<div class="photoitem"><a href="${src}" target="_blank" rel="noopener noreferrer"><img src="${src}" loading="lazy" alt="${photoVenue} ${photoHall||''} 사진 ${i+1}" referrerpolicy="no-referrer" onerror="this.closest('.photoitem').classList.add('broken')"></a><a class="photosource" href="${g.source}" target="_blank" rel="noopener noreferrer">사진 ${i+1} · 출처 보기</a></div>`).join('')}</div>`;
}

const baseSetView=setView;
setView=function(mode){
  if(mode!=='photos'){
    photoTab.classList.remove('a');
    document.getElementById('venueLabel').textContent='웨딩홀';
    return baseSetView(mode);
  }
  viewMode='photos';
  document.getElementById('browseTab').classList.remove('a');
  document.getElementById('favTab').classList.remove('a');
  photoTab.classList.add('a');
  document.getElementById('venueLabel').classList.remove('hidden');
  document.getElementById('vt').classList.remove('hidden');
  renderPhotoVenues();
};
photoTab.onclick=()=>setView('photos');

const baseSel=sel;
sel=function(ds){if(viewMode==='photos')setView('browse');return baseSel(ds)};
const baseRedrawFavorites=redrawFavorites;
redrawFavorites=function(){if(viewMode==='photos'){cal();renderPhotoGallery();return}return baseRedrawFavorites()};
const baseOpenFavoriteCard=openFavoriteCard;
openFavoriteCard=function(id){photoTab.classList.remove('a');return baseOpenFavoriteCard(id)};
})();
