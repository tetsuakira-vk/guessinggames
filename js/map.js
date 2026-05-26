let guessMap = null;
let resultMap = null;
let _guessMarker = null;
let _guessLatLng = null;

function _svgPin(fill) {
    // Standard teardrop pin: circle body, pointed tip at bottom-center.
    // No CSS rotation needed — the SVG already points straight down.
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="36" viewBox="0 0 28 36">
        <path d="M14 0C6.27 0 0 6.27 0 14c0 9.33 14 22 14 22S28 23.33 28 14C28 6.27 21.73 0 14 0z"
              fill="${fill}" stroke="#fff" stroke-width="2"/>
        <circle cx="14" cy="13" r="5" fill="#fff" opacity="0.9"/>
    </svg>`;
    return L.divIcon({ className: '', html: svg, iconSize: [28, 36], iconAnchor: [14, 36] });
}
function _guessIcon()  { return _svgPin('#f59e0b'); } // amber
function _actualIcon() { return _svgPin('#22c55e'); } // green

function _osm() {
    return L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    });
}

function initGuessMap() {
    if (guessMap) { guessMap.remove(); guessMap = null; }

    guessMap = L.map('guess-map', {
        center: [20, 0],
        zoom: 2,
        minZoom: 1,
        maxBoundsViscosity: 0.8,
        zoomControl: true,
    });

    _osm().addTo(guessMap);
    _guessMarker = null;
    _guessLatLng = null;

    guessMap.on('click', (e) => {
        if (_guessMarker) guessMap.removeLayer(_guessMarker);
        _guessMarker = L.marker(e.latlng, { icon: _guessIcon() }).addTo(guessMap);
        _guessLatLng = e.latlng;
        document.getElementById('confirm-guess-btn').disabled = false;
        document.getElementById('map-hint').textContent = 'Move your marker or confirm your guess';
    });
}

function getGuessLatLng() {
    return _guessLatLng;
}

function resetGuessMap() {
    if (_guessMarker && guessMap) guessMap.removeLayer(_guessMarker);
    _guessMarker = null;
    _guessLatLng = null;
    if (guessMap) guessMap.setView([20, 0], 2);
    const btn = document.getElementById('confirm-guess-btn');
    if (btn) btn.disabled = true;
    const hint = document.getElementById('map-hint');
    if (hint) hint.textContent = 'Click on the map to place your guess';
}

function invalidateGuessMap() {
    if (guessMap) guessMap.invalidateSize();
}

function showResultMap(guessLat, guessLng, actualLat, actualLng) {
    if (resultMap) { resultMap.remove(); resultMap = null; }

    const midLat = (guessLat + actualLat) / 2;
    const midLng = (guessLng + actualLng) / 2;

    resultMap = L.map('result-map', {
        center: [midLat, midLng],
        zoom: 3,
        zoomControl: true,
        attributionControl: true,
    });

    _osm().addTo(resultMap);

    L.marker([guessLat, guessLng], { icon: _guessIcon() })
        .addTo(resultMap)
        .bindPopup('<b>Your guess</b>');

    L.marker([actualLat, actualLng], { icon: _actualIcon() })
        .addTo(resultMap)
        .bindPopup('<b>Actual location</b>');

    L.polyline([[guessLat, guessLng], [actualLat, actualLng]], {
        color: '#ffffff',
        weight: 2,
        dashArray: '6 8',
        opacity: 0.85,
    }).addTo(resultMap);

    const bounds = L.latLngBounds(
        [guessLat, guessLng],
        [actualLat, actualLng]
    );
    resultMap.fitBounds(bounds.pad(0.35));
}

function invalidateResultMap() {
    if (resultMap) resultMap.invalidateSize();
}
