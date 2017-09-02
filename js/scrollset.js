function scroll(id, dec) {
    var h = window.innerHeight;
    h = h * dec;
    document.getElementById(id).style.height = String(h).concat("px");
}
