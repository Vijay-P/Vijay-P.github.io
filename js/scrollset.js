function scroll(id){
    var h = window.innerHeight;
    h = h * .636;
    document.getElementById(id).style.height = String(h).concat("px");
}

