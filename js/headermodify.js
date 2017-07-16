$(document).ready(function() {
    document.title = "Homepage";
    document.getElementById('nav1').style.textDecoration = "underline";
    $("#nav1").click(function() {
        document.title = "Homepage";
        resetAll();
        document.getElementById('nav1').style.textDecoration = "underline";
    });
    $("#nav2").click(function() {
        document.title = "Skillset";
        resetAll();
        document.getElementById('nav2').style.textDecoration = "underline";
    });
    $("#nav3").click(function() {
        document.title = "Resume";
        resetAll();
        document.getElementById('nav3').style.textDecoration = "underline";
    });
    $("#nav4").click(function() {
        document.title = "Portfolio";
        resetAll();
        document.getElementById('nav4').style.textDecoration = "underline";
    });
    $("#nav5").click(function() {
        document.title = "Contact";
        resetAll();
        document.getElementById('nav5').style.textDecoration = "underline";
    });
});

function resetAll() {
    document.getElementById('nav1').style.textDecoration = "initial";
    document.getElementById('nav2').style.textDecoration = "initial";
    document.getElementById('nav3').style.textDecoration = "initial";
    document.getElementById('nav4').style.textDecoration = "initial";
    document.getElementById('nav5').style.textDecoration = "initial";
}
