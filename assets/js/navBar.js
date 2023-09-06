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

//these are the nav links - the two arrays will need to match to where we want things to go.
let navLinks=['Home', 'About', 'Contact', 'Order CanMod'];
let navLinksHttp=['https://www.hardcorestorage.com', 'https://www.hardcorestorage.com/pages/about.html', 'https://shop.hardcorestorage.com/pages/contact', 'https://shop.hardcorestorage.com/'];
for (let i=0; i < navLinks.length; i++){
    let navLink=document.createElement('a');
    let navLinkText=document.createTextNode(navLinks[i]);
    navLink.appendChild(navLinkText);
    navLink.href=navLinksHttp[i];
    navLink.className="btn";
    innerNav.append(navLink);
}

