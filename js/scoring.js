// Haversine great-circle distance in km
function haversineDistance(lat1, lng1, lat2, lng2) {
    const R = 6371;
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLng = (lng2 - lng1) * Math.PI / 180;
    const a =
        Math.sin(dLat / 2) ** 2 +
        Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
        Math.sin(dLng / 2) ** 2;
    return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

function calculateScore(distanceKm) {
    return Math.round(Math.max(0, 5000 - distanceKm * 2));
}

function animateCounter(element, target, duration = 1800) {
    const start = parseInt(element.textContent.replace(/,/g, '')) || 0;
    const startTime = performance.now();

    function tick(now) {
        const t = Math.min((now - startTime) / duration, 1);
        const eased = 1 - Math.pow(1 - t, 3);
        element.textContent = Math.round(start + (target - start) * eased).toLocaleString();
        if (t < 1) requestAnimationFrame(tick);
    }

    requestAnimationFrame(tick);
}
