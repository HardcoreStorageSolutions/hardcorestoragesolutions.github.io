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

let navLinks=['Home', 'about'];
for (let i=0; i < navLinks.length; i++){
    let navLink=document.createElement('a');
    let navLinkText=document.createTextNode(navLinks[i]);
    navLink.appendChild(navLinkText);
    navLink.href="https://www.hardcorestorage.com";
    navLink.className="btn btn=primary";
    innerNav.append(navLink);
    console.log(navLinks[i]);
}

// --save this for formatting--//
// let link = document.createElement('a');
// let homeLink= document.createTextNode("Home");
// link.appendChild(homeLink);
// link.href="https://www.hardcorestorage.com";
// link.className="btn btn-primary";
// innerNav.append(link);

// let link2 = document.createElement('a');
// let aboutlink = document.createTextNode('About');
// link2.appendChild(aboutlink);
// link2.href="https://www.hardcorestorage.com/pages/about.html";
// link2.className="btn btn-primary";
// innerNav.append(link2);