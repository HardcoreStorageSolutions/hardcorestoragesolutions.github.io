

console.log("Hello world!");



let navbarContainer = document.getElementById("navBarContainer");
let myNavbarID = document.getElementById("myNavbarID");
myNavbarID.className=("navbar, navbar-inverse, navbar-fixed-top, green");

function homeLink(){
    let link = document.createElement('a');
    let homeLink= document.createTextNode("Home");
    link.appendChild(homeLink);
    link.href="https://www.hardcorestorage.com";
    navbarContainer.className="container";
    navbarContainer.append(link);

    let hButton= document.createElement('button');
    hButton.className="navbar-toggle";
    hButton.setAttribute("data-toggle","collapse");
    hButton.setAttribute("data-target","#myNavbar");
    
    navbarContainer.append(hButton);

    let hamburger=document.createElement("img");
    hamburger.setAttribute("width","25px");
    hamburger.src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/800px-Hamburger_icon.svg.png";
    hButton.append(hamburger);
        
}

homeLink();


function shopLink(){
    let orderButton = document.createElement('button');
    orderButton.className="navbar-toggle btn btn-primary";
    orderButton.id="shopButton";
    orderButton.setAttribute("data-toggle","collapse");
    orderButton.setAttribute("data-target","#myNavbar");
    orderButton.innerHTML="Order CanMod";
    navbarContainer.append(orderButton);
    console.log(location);
}

shopLink();

function shopLinkClick(){
window.location.replace("https://shop.hardcorestorage.com/");}

let shopButton= document.getElementById("shopButton");
shopButton.addEventListener("click", shopLinkClick); 
