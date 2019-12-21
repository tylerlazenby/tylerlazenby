function getChill() {
    // Document Variables
    let t = parseInt(document.getElementById('temp').innerHTML);
    let s = parseInt(document.getElementById('wind').innerHTML);

    // Equation Constants
    const A = 35.74;
    const B = 0.6215;
    const C = 35.75;
    const D = 0.4275;
    const E = 0.16;

    // Compute and Return
    let f = A + (B * t) - (C * Math.pow(s, E)) + (D * t * Math.pow(s, E));
    return f.toFixed(1);
}

document.getElementById('chill').innerHTML = getChill();
