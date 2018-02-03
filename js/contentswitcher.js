$(document).ready(function() {
	var pages = ["about", "resume", "resume_mobile", "portfolio", "skillset", "blog", "contact"];
	for (var i = 0; i < pages.length; i++) {
		$("#" + pages[i]).hide();
	}
});

var MOBILE = ["resume"];

window.onpopstate = function(event) {
	redirect(event.state.path);
};

$(document).ready(function() {
	redirect(document.URL.substr(document.URL.lastIndexOf('/') + 1));
	$("#nav1").click(function() {
		loadPage("homepage", this.id);
	});
	$("#nav2").click(function() {
		loadPage("resume", this.id);
	});
	$("#nav3").click(function() {
		loadPage("portfolio", this.id);
	});
	$("#nav4").click(function() {
		loadPage("blog", this.id);
	});
	$("#nav5").click(function() {
		loadPage("contact", this.id);
	});
});

function redirect(input) {
	if (input == "homepage") {
		loadPage("homepage", "nav1");
	}
	if (input == "resume" || input == "resume_mobile") {
		loadPage("resume", "nav2");
	}
	if (input == "portfolio") {
		loadPage("portfolio", "nav3");
	}
	if (input == "blog") {
		loadPage("blog", "nav4");
	}
	if (input == "contact") {
		loadPage("contact", "nav5");
	}
}

function loadPage(id, navid) {
	hide_all();
	if ((screen.width <= 1000) && (MOBILE.indexOf(id) > -1)) {
		id += "_mobile";
	}
	$("#" + id).fadeIn();
	setScroll(id);
	history.pushState({
		path: id
	}, '', id);
	document.title = titleCase(id);
	resetAll();
	document.getElementById(navid).style.textDecoration = "underline";
}

function titleCase(string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
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

function setScroll(id) {
	console.log(id);
	var h = window.innerHeight;
	h = h * 0.65;
	document.getElementById(id).style.height = String(h).concat("px");
}

function resetAll() {
	document.getElementById('nav1').style.textDecoration = "initial";
	document.getElementById('nav2').style.textDecoration = "initial";
	document.getElementById('nav3').style.textDecoration = "initial";
	document.getElementById('nav4').style.textDecoration = "initial";
	document.getElementById('nav5').style.textDecoration = "initial";
}