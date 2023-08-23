console.log("Helloooo World");

let outerNav = document.getElementById("myNavbarID");

let innerNav=document.getElementById("linksContainer");
innerNav.className="collapse navbar-collapse";

//hamburgericon - currently an img, needs dropdown links functionality
let hButton= document.createElement('button');
hButton.className="navbar-toggle";
let hamburger=document.createElement("img");
hamburger.setAttribute("width","25px");
hamburger.src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/800px-Hamburger_icon.svg.png";
hButton.append(hamburger);

outerNav.append(hButton);


// --save this for formatting--//
let link = document.createElement('button');
let homeLink= document.createTextNode("Home");
link.appendChild(homeLink);
link.href="https://www.hardcorestorage.com";
link.className="btn btn-primary";
innerNav.append(link);
