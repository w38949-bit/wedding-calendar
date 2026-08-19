(()=>{
const ROOT='wedding-hall-original-photos/assets';
const seq=(base,n)=>Array.from({length:n},(_,i)=>`${ROOT}/${base}/${String(i+1).padStart(2,'0')}.jpg`);
const PHOTO={
  '그랜드 모먼트':{
    '시그니처홀':{source:'',imgs:seq('grand-moment/signature',6)},
    '베일홀':{source:'',imgs:seq('grand-moment/veil',3)},
    '클래식홀':{source:'',imgs:seq('grand-moment/classic',4)},
    '엘라홀':{source:'',imgs:seq('grand-moment/ella',4)},
    '오페라홀':{source:'',imgs:seq('grand-moment/opera',2)}
  },
  '그랜드 블랑':{
    '퀸덤홀(화이트홀)':{source:'',imgs:seq('grand-blanc/queendom',9)},
    '미라벨가든':{source:'',imgs:seq('grand-blanc/mirabell-garden/wedding-hall-original-photos-2/assets/grand-blanc/mirabell-garden',5)}
  },
  '센텀사이언스':{
    '1층 더라움홀':{source:'https://www.directwedding.co.kr/weddinghall/hall0241',imgs:[
      'https://cdn.prod.website-files.com/66a1eeaa00f1c86c3dbae974/66f61b3122a676a6f9ee992d_1375669764_img_2765_0_1617857919.avif',
      'https://cdn.prod.website-files.com/66a1eeaa00f1c86c3dbae974/66f61b31d5bb871f9836377d_1375669764_img_2765_1_1617857919.avif'
    ]},
    '스카이홀':{source:'https://www.directwedding.co.kr/weddinghall/hall0241',imgs:[
      'https://cdn.prod.website-files.com/66a1eeaa00f1c86c3dbae974/66f61aaf327c3f2f8b295572_1375669764_img_2767_0_1617858077.avif',
      'https://cdn.prod.website-files.com/66a1eeaa00f1c86c3dbae974/66f61aaf8f1046e9035b775e_1375669764_img_2767_1_1617858077.avif',
      'https://cdn.prod.website-files.com/66a1eeaa00f1c86c3dbae974/66f61aa84ca344dcb8d9fe4d_1375669764_img_2767_2_1617858077.avif',
      'https://cdn.prod.website-files.com/66a1eeaa00f1c86c3dbae974/66f61aa8c23b15733fb72aaf_1375669764_img_2767_3_1617858077.avif',
      'https://cdn.prod.website-files.com/66a1eeaa00f1c86c3dbae974/66f61aa737bb7a94f7d093ea_1375669764_img_2767_4_1617858077.avif',
      'https://cdn.prod.website-files.com/66a1eeaa00f1c86c3dbae974/66f61aa7a46699bb93f917e0_1375669764_img_2767_5_1617858077.avif',
      'https://cdn.prod.website-files.com/66a1eeaa00f1c86c3dbae974/66f61a9de74cdc7c0b730aa9_1375669764_img_2767_6_1617858077.avif',
      'https://cdn.prod.website-files.com/66a1eeaa00f1c86c3dbae974/66f61a9c4ca344dcb8d9e6a5_1375669764_img_2767_7_1617858077.avif',
      'https://cdn.prod.website-files.com/66a1eeaa00f1c86c3dbae974/66f61a9c3bd61d162102b821_1375669764_img_2767_8_1617858077.avif',
      'https://cdn.prod.website-files.com/66a1eeaa00f1c86c3dbae974/66f61a9d327c3f2f8b2941c1_1375669764_img_2767_9_1617858077.avif'
    ]}
  },
  '해운대 마리나컨벤션':{
    '':{source:'https://www.directwedding.co.kr/weddinghall/hall0237',imgs:[
      'https://cdn.prod.website-files.com/66a1eeaa00f1c86c3dbae974/66e002900f8017c535185958_1400565572_img_3719_0_1503308143.avif',
      'https://cdn.prod.website-files.com/66a1eeaa00f1c86c3dbae974/66e002900f8017c535185942_1400565572_img_3719_0_1503046036.avif',
      'https://cdn.prod.website-files.com/66a1eeaa00f1c86c3dbae974/66e002900f8017c53518595e_1400565572_img_3719_1_1503046036.avif',
      'https://cdn.prod.website-files.com/66a1eeaa00f1c86c3dbae974/66e002900f8017c535185925_1400565572_img_3719_2_1503046036.avif',
      'https://cdn.prod.website-files.com/66a1eeaa00f1c86c3dbae974/66e002900f8017c535185961_1400565572_img_3719_3_1503046036.avif',
      'https://cdn.prod.website-files.com/66a1eeaa00f1c86c3dbae974/66e002900f8017c53518596b_1400565572_img_3719_4_1503046036.avif',
      'https://cdn.prod.website-files.com/66a1eeaa00f1c86c3dbae974/66e002900f8017c535185945_1400565572_img_3719_5_1503046036.avif',
      'https://cdn.prod.website-files.com/66a1eeaa00f1c86c3dbae974/66e002900f8017c5351858e1_1400565572_img_3719_6_1503046036.avif',
      'https://cdn.prod.website-files.com/66a1eeaa00f1c86c3dbae974/66e002900f8017c535185968_1400565572_img_3719_7_1503046036.avif',
      'https://cdn.prod.website-files.com/66a1eeaa00f1c86c3dbae974/66e002900f8017c535185912_1400565572_img_3719_8_1503046036.avif'
    ]}
  },
  '센텀호텔':{
    '':{source:'https://www.directwedding.co.kr/weddinghall/hall0298',imgs:[
      'https://cdn.prod.website-files.com/66a1eeaa00f1c86c3dbae974/66e002c0791b91cee4eb5d17_1448851134_img_4813_0_1531876245.jpeg',
      'https://cdn.prod.website-files.com/66a1eeaa00f1c86c3dbae974/66e002c0791b91cee4eb5cfe_1448851134_img_4814_0_1531876231.jpeg',
      'https://cdn.prod.website-files.com/66a1eeaa00f1c86c3dbae974/66e002c0791b91cee4eb5d04_1448851134_img_4814_1_1531876231.jpeg',
      'https://cdn.prod.website-files.com/66a1eeaa00f1c86c3dbae974/66e002c2791b91cee4eb5e10_1448851134_img_4815_0_1531876212.jpeg',
      'https://cdn.prod.website-files.com/66a1eeaa00f1c86c3dbae974/66e002c0791b91cee4eb5d1b_1448851134_img_4815_1_1531876214.jpeg',
      'https://cdn.prod.website-files.com/66a1eeaa00f1c86c3dbae974/66e002c0791b91cee4eb5d3d_1448851134_img_4815_2_1531876214.jpeg'
    ]}
  }
};

const style=document.createElement('style');
style.textContent=`
.photo-meta{display:flex;justify-content:center;align-items:center;gap:10px;margin-top:14px;color:var(--muted);font-size:12px}
.photo-meta a{color:var(--strong);font-weight:700;text-decoration:none}
.photogrid{display:block;columns:2;column-gap:12px;margin-top:12px}
.photoitem{display:inline-block;width:100%;overflow:hidden;border:1px solid var(--line);border-radius:14px;background:#fff;margin:0 0 12px;break-inside:avoid;vertical-align:top}
.photoitem>a:first-child{display:block}
.photoitem img{display:block;width:100%;height:auto;aspect-ratio:auto;object-fit:contain;background:#f1ede8}
.photosource{display:block;padding:8px 10px;color:var(--muted);font-size:11px;text-decoration:none}
.photo-empty{margin-top:12px;padding:24px 14px;border:1px dashed var(--line);border-radius:14px;text-align:center;color:var(--muted);font-size:13px}
.photo-empty a{display:inline-block;margin-top:8px;color:var(--strong);font-weight:700}
.photogrid.centum-hotel-grid{display:grid!important;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px;columns:auto!important;align-items:start}
.photogrid.centum-hotel-grid .photoitem{display:block;width:100%;margin:0}
@media(max-width:620px){.photogrid{columns:1}.photogrid.centum-hotel-grid{grid-template-columns:1fr}}
`;
document.head.appendChild(style);

const favTab=document.getElementById('favTab');
if(!favTab)return;
let photoTab=document.getElementById('photoTab');
if(!photoTab){
  photoTab=document.createElement('button');
  photoTab.id='photoTab';photoTab.className='viewtab';photoTab.type='button';photoTab.textContent='웨딩홀 사진';
  favTab.insertAdjacentElement('afterend',photoTab);
}

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
  const entries=[...g.imgs.map(src=>({src,source:g.source})),...(g.extraImgs||[]).map(src=>({src,source:g.extraSource||g.source}))];
  const sourceLink=g.source?`<a href="${g.source}" target="_blank" rel="noopener noreferrer">출처 페이지 ↗</a>`:'';
  const meta=`<div class="photo-meta"><span>확인 가능한 원본 사진 ${entries.length}장</span>${sourceLink}</div>`;
  if(!entries.length){resBox.innerHTML=meta+'<div class="photo-empty">등록된 사진이 없습니다.</div>';return;}
  const gridClass=photoVenue==='센텀호텔'?'photogrid centum-hotel-grid':'photogrid';
  resBox.innerHTML=meta+`<div class="${gridClass}">${entries.map((it,i)=>`<div class="photoitem"><a href="${it.src}" target="_blank" rel="noopener noreferrer"><img src="${it.src}" loading="lazy" alt="${photoVenue} ${photoHall||''} 사진 ${i+1}" referrerpolicy="no-referrer"></a>${it.source?`<a class="photosource" href="${it.source}" target="_blank" rel="noopener noreferrer">출처 보기</a>`:''}</div>`).join('')}</div>`;
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