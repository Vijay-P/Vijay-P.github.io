$(document).ready(function(){
  $("#portfolio").hide();
  $("#resume").hide();
  $("#about").hide();
  $("#contact").hide();

    $("#nav1").click(function(){
      hide_all();
      $("#homepage").fadeIn();
      set_scroll("index");
    });
    $("#nav2").click(function(){
      hide_all();
      $("#portfolio").fadeIn();
      set_scroll("portfolio");
    });
    $("#nav3").click(function(){
      hide_all();
      $("#resume").fadeIn();
      set_scroll("resume");
    });
    $("#nav4").click(function(){
      hide_all();
      $("#about").fadeIn();
      set_scroll("about");
    });
    $("#nav5").click(function(){
      hide_all();
      $("#contact").fadeIn();
      set_scroll("contact");
    });
});

function hide_all(){
  $("#homepage").hide();
  $("#portfolio").hide();
  $("#resume").hide();
  $("#about").hide();
  $("#contact").hide();
}

function set_scroll(id){
  var h = window.innerHeight;
  h = h*.5855108877721943;
  document.getElementById(id).style.height=String(h).concat("px");
}
