let _viewer = null;
let _cssCleanup = null;

function _hasWebGL() {
    try {
        const c = document.createElement('canvas');
        return !!(c.getContext('webgl') || c.getContext('experimental-webgl'));
    } catch (_) { return false; }
}

function initPanorama(imageUrl, onLoad, onError) {
    destroyPanorama();

    // Pannellum does NOT call onError for WebGL failures — detect first.
    if (!_hasWebGL()) {
        _cssFallback(imageUrl, onLoad, onError);
        return;
    }

    try {
        _viewer = pannellum.viewer('panorama-container', {
            type: 'equirectangular',
            panorama: imageUrl,
            autoLoad: true,
            showControls: false,
            compass: false,
            friction: 0.15,
            hfov: 100,
            minHfov: 50,
            maxHfov: 120,
            autoRotate: 0,
            onLoad: () => { if (onLoad) onLoad(); },
            onError: () => { destroyPanorama(); _cssFallback(imageUrl, onLoad, onError); },
        });
    } catch (_) {
        _cssFallback(imageUrl, onLoad, onError);
    }
}

// Pan-and-zoom fallback used when WebGL is unavailable.
// Starts zoomed-in (1.8×) so there is plenty of image to drag through.
function _cssFallback(imageUrl, onLoad, onError) {
    const container = document.getElementById('panorama-container');
    container.innerHTML = '';
    container.style.overflow = 'hidden';
    container.style.cursor = 'grab';

    const img = new Image();
    img.style.cssText = 'position:absolute;user-select:none;-webkit-user-drag:none;will-change:left,top,width,height;';
    container.appendChild(img);

    let scale = 1.8; // default zoom — gives lots of panning room
    let posX = 0, posY = 0;
    let drag = null;

    function naturalAspect() {
        return img.naturalWidth && img.naturalHeight
            ? img.naturalWidth / img.naturalHeight
            : 16 / 9;
    }

    function imgSize() {
        const h = container.clientHeight * scale;
        return { w: h * naturalAspect(), h };
    }

    function clamp() {
        const { w, h } = imgSize();
        const cw = container.clientWidth, ch = container.clientHeight;
        posX = Math.min(0, Math.max(cw - w, posX));
        posY = Math.min(0, Math.max(ch - h, posY));
    }

    function applyPos() {
        clamp();
        const { w, h } = imgSize();
        img.style.width  = w + 'px';
        img.style.height = h + 'px';
        img.style.left   = posX + 'px';
        img.style.top    = posY + 'px';
    }

    img.onload = () => {
        // Reject portrait, near-square, or tiny images — almost certainly not
        // street-level photography (tickets, selfies, error pages, etc.)
        const ratio = img.naturalWidth / img.naturalHeight;
        const minPx = 400;
        if (ratio < 1.25 || img.naturalWidth < minPx || img.naturalHeight < minPx) {
            if (onError) onError(new Error('Image rejected: bad dimensions'));
            return;
        }
        const { w, h } = imgSize();
        posX = (container.clientWidth  - w) / 2;
        posY = (container.clientHeight - h) / 2;
        applyPos();
        if (onLoad) onLoad();
    };
    img.onerror = () => { if (onError) onError(new Error('Image load failed')); };

    // — mouse —
    const onMouseDown = (e) => {
        e.preventDefault();
        drag = { sx: e.clientX - posX, sy: e.clientY - posY };
        container.style.cursor = 'grabbing';
    };
    const onMouseMove = (e) => {
        if (!drag) return;
        posX = e.clientX - drag.sx;
        posY = e.clientY - drag.sy;
        applyPos();
    };
    const onMouseUp = () => { drag = null; container.style.cursor = 'grab'; };

    // — scroll-to-zoom (toward cursor) —
    const onWheel = (e) => {
        e.preventDefault();
        const rect  = container.getBoundingClientRect();
        const mx    = e.clientX - rect.left;
        const my    = e.clientY - rect.top;
        const prev  = scale;
        scale = Math.max(0.9, Math.min(6, scale * (e.deltaY < 0 ? 1.12 : 0.89)));
        const ratio = scale / prev;
        posX = mx - ratio * (mx - posX);
        posY = my - ratio * (my - posY);
        applyPos();
    };

    // — touch —
    let lastPinchDist = null;
    const onTouchStart = (e) => {
        e.preventDefault();
        if (e.touches.length === 1) {
            drag = { sx: e.touches[0].clientX - posX, sy: e.touches[0].clientY - posY };
        } else if (e.touches.length === 2) {
            drag = null;
            lastPinchDist = Math.hypot(
                e.touches[0].clientX - e.touches[1].clientX,
                e.touches[0].clientY - e.touches[1].clientY,
            );
        }
    };
    const onTouchMove = (e) => {
        e.preventDefault();
        if (e.touches.length === 1 && drag) {
            posX = e.touches[0].clientX - drag.sx;
            posY = e.touches[0].clientY - drag.sy;
            applyPos();
        } else if (e.touches.length === 2 && lastPinchDist) {
            const dist  = Math.hypot(
                e.touches[0].clientX - e.touches[1].clientX,
                e.touches[0].clientY - e.touches[1].clientY,
            );
            const ratio = dist / lastPinchDist;
            const mx = (e.touches[0].clientX + e.touches[1].clientX) / 2;
            const my = (e.touches[0].clientY + e.touches[1].clientY) / 2;
            scale = Math.max(0.9, Math.min(6, scale * ratio));
            posX = mx - ratio * (mx - posX);
            posY = my - ratio * (my - posY);
            lastPinchDist = dist;
            applyPos();
        }
    };
    const onTouchEnd = () => { drag = null; lastPinchDist = null; };

    container.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    container.addEventListener('wheel', onWheel, { passive: false });
    container.addEventListener('touchstart', onTouchStart, { passive: false });
    window.addEventListener('touchmove', onTouchMove, { passive: false });
    window.addEventListener('touchend', onTouchEnd);

    _cssCleanup = () => {
        container.removeEventListener('mousedown', onMouseDown);
        window.removeEventListener('mousemove', onMouseMove);
        window.removeEventListener('mouseup', onMouseUp);
        container.removeEventListener('wheel', onWheel);
        container.removeEventListener('touchstart', onTouchStart);
        window.removeEventListener('touchmove', onTouchMove);
        window.removeEventListener('touchend', onTouchEnd);
        container.innerHTML = '';
        container.style.cursor = container.style.overflow = '';
    };

    img.src = imageUrl;
}

function destroyPanorama() {
    if (_viewer) {
        try { _viewer.destroy(); } catch (_) {}
        _viewer = null;
    }
    if (_cssCleanup) {
        _cssCleanup();
        _cssCleanup = null;
    }
}
