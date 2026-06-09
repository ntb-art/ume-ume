// ume-ume.ch – app.js

const STANDORTE = [
  { id: 'sie-wott',     titel: '\u201esie wott au eine BMW\u201c',  foto: 'fotos/foto-sie-wott.jpg',     text: 'Fassade vorne<br>Parkpl\u00e4tze hinten links<br>Fluss hinten<br>Geb\u00e4ude 745 rechts leicht hinten' },
  { id: 'haeuschen',   titel: 'H\u00e4uschen und B\u00e4umchen',    foto: 'fotos/foto-haeuschen.jpg',    text: 'Parkplatz links, rechts, vorne<br>Geb\u00e4ude 745 hinten<br>Fluss links' },
  { id: 'insel',       titel: 'Insel',                               foto: 'fotos/foto-insel.jpg',        text: '360\u00b0<br>neben Br\u00fccke, unten<br>3 Str\u00f6me fliessen zusammen' },
  { id: 'plattform',   titel: 'Plattform',                           foto: 'fotos/foto-plattform.jpg',    text: 'Strasse vorne unten<br>Fluss vorne unten<br>Waldgrenze<br>Wald hinten' },
  { id: 'dach',        titel: 'Dach',                                foto: 'fotos/foto-dach.jpg',         text: '2. Stock<br>KUNST &amp; ERMITTLUNG<br>Treppenhaus rechts, Glas vorne,<br>Toilette links, T\u00fcr hinten' },
  { id: 'unterm-baum', titel: 'unterm Baum',                         foto: 'fotos/foto-unterm-baum.jpg',  text: 'Baumstamm hinten<br>\u00c4ste oben<br>Bl\u00e4tter oben, unten, herum<br>Pflanzen rundherum' },
  { id: 'restholz',    titel: 'Restholz',                            foto: 'fotos/foto-restholz.jpg',     text: '3. Stock<br>371 MASCHINEN HOLZ<br>T\u00fcr, durch, links, 11 Schritte<br>Halt vor Bandss\u00e4gemaschine<br>70\u00b0 nach links drehen' },
  { id: 'richtung',    titel: 'Richtung',                            foto: 'fotos/foto-richtung.jpg',     text: 'Fluss vorne, Weg hinten<br>Strasse gegen\u00fcber, H\u00fcgel dahinter' },
  { id: 'wanderweg',   titel: 'Wanderweg',                           foto: 'fotos/foto-wanderweg.jpg',    text: 'Autogarage hinten links<br>Geb\u00e4ude rechts<br>Hauptstrasse hinten<br>Wald vorne<br>Fluss hinten<br>H\u00fcgel vorne' },
  { id: 'wand',        titel: 'Wand',                                foto: 'fotos/foto-wand.jpg',         text: 'Farbraum links<br>Velo Unterstand rechts<br>Fluss hinten<br>Wand vorne' },
  { id: 'sumpf',       titel: 'Sumpf vor Bank ohne Brett',           foto: 'fotos/foto-sumpf.jpg',        text: 'Am rechten Wegrand<br>Sumpf rechts<br>Bank vorne<br>Verzweigung bald links' },
  { id: 'fenster',     titel: 'Fenster',                             foto: 'fotos/foto-fenster.jpg',      text: 'Treppenhaus n\u00e4her zum Bahnhof<br>vom 6. in 5. Stock<br>erste Treppe<br>zweitletzte Stufe' },
  { id: '7',           titel: '7',                                   foto: 'fotos/foto-7.jpg',            text: 'Fenster vorne<br>Treppenhaus n\u00e4her zum Bahnhof rechts hinten<br>Wand links' },
  { id: 'bricks',      titel: 'Bricks In The Wall',                  foto: 'fotos/foto-bricks.jpg',       text: 'in Parkplatz<br>Velo Unterstand hinten, Geb\u00e4ude 737 hinten<br>Hauptstrasse rechts<br>Fluss links' },
  { id: 'purple',      titel: 'Purple',                              foto: 'fotos/foto-purple.jpg',       text: 'auf Weg<br>Fluss vorne<br>Geb\u00e4ude hinten' },
  { id: 'd3e3',        titel: 'D 3 & E 3',                           foto: 'fotos/foto-d3e3.jpg',         text: 'Geb\u00e4ude 737<br>1. Stock<br>Treppenhaus n\u00e4her zum Fluss<br>raus, rechts, rechts' },
  { id: 'white-cube',  titel: 'white cube',                          foto: 'fotos/foto-white-cube.jpg',   text: 'Geb\u00e4ude 737<br>5. Stock<br>Treppenhaus n\u00e4her zum Fluss<br>raus, rechts, geradeaus' },
  { id: 'kunst-am-bau',titel: 'Kunst am Bau',                        foto: 'fotos/foto-kunst-am-bau.jpg', text: 'Geb\u00e4ude 737<br>2. Stock<br>Treppenhaus n\u00e4her zum Fluss<br>raus, rechts' },
  { id: 'blumen',      titel: 'Blumen',                              foto: 'fotos/foto-blumen.jpg',       text: 'Spinnerei Haupteingang, Geb\u00e4ude 737, vorne<br>Fluss hinten<br>4viertel rechts<br>Blumen vorne, hinten, links, rechts' },
  { id: 'felder',      titel: 'Felder',                              foto: 'fotos/foto-felder.jpg',       text: 'Fluss vorne<br>Geb\u00e4ude 737 hinten<br>Steine links<br>Velo Unterst\u00e4nde vorne rechts<br>Geb\u00e4ude vorne links' },
  { id: 'platte',      titel: 'Platte',                              foto: 'fotos/foto-platte.jpg',       text: 'Strasse hinten<br>Gelb vorne<br>Haus links leicht hinten' }
];

// Positionen in % relativ zum Kartenbild
const KARTENPUNKTE = [
  { id: 'sie-wott',     left: 51.21, top: 27.62 },
  { id: 'haeuschen',   left: 49.06, top: 31.65 },
  { id: 'insel',       left: 37.20, top: 31.70 },
  { id: 'plattform',   left: 25.22, top: 38.69 },
  { id: 'dach',        left: 53.60, top: 40.62 },
  { id: 'unterm-baum', left: 24.04, top: 41.59 },
  { id: 'restholz',    left: 53.45, top: 45.67 },
  { id: 'richtung',    left: 48.29, top: 51.68 },
  { id: 'wanderweg',   left: 37.08, top: 51.89 },
  { id: 'wand',        left: 55.40, top: 54.38 },
  { id: 'sumpf',       left: 23.75, top: 54.94 },
  { id: 'fenster',     left: 67.50, top: 58.50 },
  { id: '7',           left: 66.87, top: 59.07 },
  { id: 'bricks',      left: 65.40, top: 59.28 },
  { id: 'purple',      left: 52.74, top: 60.40 },
  { id: 'd3e3',        left: 61.53, top: 65.95 },
  { id: 'white-cube',  left: 65.52, top: 65.55 },
  { id: 'kunst-am-bau',left: 62.80, top: 67.20 },
  { id: 'blumen',      left: 63.16, top: 70.08 },
  { id: 'felder',      left: 61.86, top: 74.16 },
  { id: 'platte',      left: 36.93, top: 82.47 }
];

// Navigation
function show(pageId) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const el = document.getElementById(pageId);
  if (el) { el.classList.add('active'); window.scrollTo(0, 0); }
}

// Standort rendern – Bild vorladen bevor Seite sichtbar wird
function showStandort(id) {
  const s = STANDORTE.find(x => x.id === id);
  if (!s) return;

  // Bild vorladen
  const preload = new Image();
  preload.src = s.foto;

  const render = () => {
    const container = document.getElementById('page-standort');
    container.innerHTML = `
      <span class="back" onclick="show('page-viscosi')">&#8592;</span>
      <div class="standort-inner">
        <img class="standort-img" src="${s.foto}" alt="${s.titel}" id="simg">
        <div class="standort-info" id="sinfo">
          <p class="standort-titel">${s.titel}</p>
          <p class="standort-text">${s.text}</p>
        </div>
      </div>`;
    show('page-standort');

    // Text auf Bildbreite angleichen
    const img = document.getElementById('simg');
    const info = document.getElementById('sinfo');
    const sync = () => {
      const w = img.getBoundingClientRect().width;
      if (w > 0) info.style.width = w + 'px';
    };
    // Bild ist bereits geladen (aus Cache)
    requestAnimationFrame(() => { sync(); window.addEventListener('resize', sync); });
  };

  if (preload.complete) {
    render();
  } else {
    preload.onload = render;
    preload.onerror = render; // Zeige Seite auch bei Fehler
  }
}

// Punkte positionieren – relativ zum tatsächlich gerenderten Bildbereich
// Das Bild hat naturalWidth/naturalHeight, wird in einem Container angezeigt.
// Wir setzen die Punkte direkt auf das <img>-Element (kein object-fit),
// damit left/top % immer exakt stimmen.
function positioniereKartenpunkte() {
  const wrap = document.getElementById('karte-wrap');
  const img  = wrap ? wrap.querySelector('img') : null;
  if (!img) return;

  const dots = wrap.querySelectorAll('.kp');
  dots.forEach((dot, i) => {
    const p = KARTENPUNKTE[i];
    if (!p) return;
    dot.style.left = p.left + '%';
    dot.style.top  = p.top  + '%';
  });
}

function buildKarte() {
  const wrap = document.getElementById('karte-wrap');
  if (!wrap) return;
  wrap.querySelectorAll('.kp').forEach(el => el.remove());

  KARTENPUNKTE.forEach(p => {
    const dot = document.createElement('span');
    dot.className = 'kp';
    dot.style.left = p.left + '%';
    dot.style.top  = p.top  + '%';
    dot.addEventListener('click', () => showStandort(p.id));
    dot.addEventListener('touchend', (e) => { e.preventDefault(); showStandort(p.id); }, {passive: false});
    wrap.appendChild(dot);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  buildKarte();
  show('page-start');
});
