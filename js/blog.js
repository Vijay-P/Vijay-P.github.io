function setup(id) {
    $(id).load("/include/blog/" + id.slice(1) + ".html");
    $(id).toggle();
    $(id + "_s").click(function() {
        postToggle(id);
    });
}

function postToggle(id) {
    if ($(id + "_s").hasClass("toggled")) {
        $(id + "_s").animate({
            "bottom": "initial"
        }).removeClass("toggled");
    } else {
        $(id + "_s").animate({
            "bottom": "5px"
        }).addClass("toggled");
    }
    $(id).toggle();
}
