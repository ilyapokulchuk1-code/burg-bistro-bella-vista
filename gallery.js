(() => {
  const imgs = [
    ['06DDD719-7AB9-463B-8167-274963FF29EA.webp','Innenraum'],
    ['54944608-51D1-4738-B9F9-C3051BA90CD0.webp','Innenraum'],
    ['8EBDDCBB-BA99-4BE3-8885-1DB4A3AB708C.webp','Terrasse'],
    ['61F4B0A2-C809-43D6-B068-6B9D4E9F3A2F.webp','Terrasse'],
    ['A808A9D7-1606-4B0C-8AD3-90E8A0C3C952.webp','Eingang'],
    ['F92A8031-09EF-4707-BB0F-0EC08331DBFA.webp','Innenraum'],
    ['545483FE-4C7A-4F31-861C-81B7521FA83B.webp','Innenraum'],
    ['DB276184-A71A-467A-9E03-22D8D3D9AD5A.webp','Innenraum'],
    ['05DF0C85-F62E-46E0-9B51-83B20BC4A3AB.webp','Innenraum'],
    ['C66C6830-2946-4458-B7C9-436A152AF6B4.webp','Innenraum']
  ];
  const path = f => 'images/' + f;
  const hero = document.querySelector('.hero-img img');
  if (hero) { hero.src = path(imgs[0][0]); hero.alt = 'Burg Bistro Bella Vista'; }
  const photos = document.querySelector('.photos');
  if (photos) {
    photos.innerHTML = imgs.slice(0,3).map((x,i) => `<img class="${i===0?'tall':''}" src="${path(x[0])}" alt="${x[1]}" loading="lazy">`).join('');
  }
  const section = document.querySelector('#galerie');
  if (section) {
    section.innerHTML = `<div class="wrap"><div class="section-head"><div class="eyebrow">Impressionen</div><h2>Ein Blick ins Bistro</h2><p>Innenraum, Terrasse und die besondere Atmosphäre der Bella Vista.</p></div><div class="gallery gallery-new">${imgs.map((x,i)=>`<button class="gallery-item" type="button" data-src="${path(x[0])}"><img src="${path(x[0])}" alt="${x[1]}" loading="lazy"><span>${x[1]}</span></button>`).join('')}</div></div>`;
    section.querySelectorAll('.gallery-item').forEach(b => b.addEventListener('click', () => {
      const overlay = document.createElement('div');
      overlay.className = 'gallery-lightbox';
      overlay.innerHTML = `<button aria-label="Schließen">×</button><img src="${b.dataset.src}" alt="">`;
      document.body.appendChild(overlay);
      overlay.addEventListener('click', e => { if (e.target === overlay || e.target.tagName === 'BUTTON') overlay.remove(); });
    }));
  }
})();
