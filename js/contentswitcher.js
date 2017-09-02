window.onpopstate = function(event) {
    redirect();
};

$(document).ready(function() {
    redirectverb();
    $("#nav1").click(function() {
        loadhome();
    });
    $("#nav2").click(function() {
        loadskill();
    });
    $("#nav3").click(function() {
        loadresume();
    });
    $("#nav4").click(function() {
        loadport();
    });
    $("#nav5").click(function() {
        loadblog();
    });
    $("#nav6").click(function() {
        loadcontact();
    });
});

function loadhome() {
    hide_all();
    $("#homepage").fadeIn();
    set_scroll("homepage");
    history.pushState({
        path: "homepage"
    }, '', "homepage");
    document.title = "Homepage";
    resetAll();
    document.getElementById('nav1').style.textDecoration = "underline";
}

function loadabout() {
    hide_all();
    $("#about").fadeIn();
    set_scroll("about");
    history.pushState({
        path: "about"
    }, '', "about");
}

function loadskill() {
    hide_all();
    $("#skillset").fadeIn();
    set_scroll("skillset");
    console.log("scroll set");
    history.pushState({
        path: "skillset"
    }, '', "skillset");
    document.title = "Skillset";
    resetAll();
    document.getElementById('nav2').style.textDecoration = "underline";
}

function loadresume() {
    hide_all();
    if (screen.width <= 1000) {
        $("#resume_mobile").fadeIn();
        set_scroll("resume_mobile");
        history.pushState({
            path: "resume_mobile"
        }, '', "resume_mobile");
    } else {
        $("#resume").fadeIn();
        set_scroll("resume");
        history.pushState({
            path: "resume"
        }, '', "resume");

    }
    document.title = "Resume";
    resetAll();
    document.getElementById('nav3').style.textDecoration = "underline";
}

function loadport() {
    hide_all();
    $("#portfolio").fadeIn();
    set_scroll("portfolio");
    history.pushState({
        path: "portfolio"
    }, '', "portfolio");
    document.title = "Portfolio";
    resetAll();
    document.getElementById('nav4').style.textDecoration = "underline";
}

function loadblog() {
    hide_all();
    $("#blog").fadeIn();
    set_scroll("blog");
    history.pushState({
        path: "blog"
    }, '', "blog");
    document.title = "Blog";
    resetAll();
    document.getElementById('nav5').style.textDecoration = "underline";
}

function loadcontact() {
    hide_all();
    $("#contact").fadeIn();
    set_scroll("contact");
    history.pushState({
        path: "contact"
    }, '', "contact");
    document.title = "Contact";
    resetAll();
    document.getElementById('nav6').style.textDecoration = "underline";
}

function hide_all() {
    $("#homepage").hide();
    $("#portfolio").hide();
    $("#resume").hide();
    $("#resume_mobile").hide();
    $("#about").hide();
    $("#skillset").hide();
    $("#blog").hide();
    $("#contact").hide();
}

function set_scroll(id) {
    var h = window.innerHeight;
    h = h * 0.65;
    document.getElementById(id).style.height = String(h).concat("px");
}

function redirect() {
    if (event.state.path == "homepage") {
        loadhome();
    }
    if (event.state.path == "portfolio") {
        loadport();
    }
    if (event.state.path == "resume") {
        loadresume();
    }
    if (event.state.path == "resume_mobile") {
        loadresume();
    }
    if (event.state.path == "about") {
        loadabout();
    }
    if (event.state.path == "skillset") {
        loadskill();
    }
    if (event.state.path == "blog") {
        loadblog();
    }
    if (event.state.path == "contact") {
        loadcontact();
    }
}

function redirectverb() {
    verb = document.URL.substr(document.URL.lastIndexOf('/') + 1);
    if (verb == "homepage") {
        loadhome();
    }
    if (verb == "portfolio") {
        loadport();
    }
    if (verb == "resume") {
        loadresume();
    }
    if (verb == "resume_mobile") {
        loadresume();
    }
    if (verb == "about") {
        loadabout();
    }
    if (verb == "skillset") {
        loadskill();
    }
    if (verb == "blog") {
        loadblog();
    }
    if (verb == "contact") {
        loadcontact();
    }
}

function resetAll() {
    document.getElementById('nav1').style.textDecoration = "initial";
    document.getElementById('nav2').style.textDecoration = "initial";
    document.getElementById('nav3').style.textDecoration = "initial";
    document.getElementById('nav4').style.textDecoration = "initial";
    document.getElementById('nav5').style.textDecoration = "initial";
    document.getElementById('nav6').style.textDecoration = "initial";
}
