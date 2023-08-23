

console.log("Hello World!");

//this is grabbing the navbar from html and adding the classes//
let linksContainer = document.getElementById("linksContainer");
let myNavbarID = document.getElementById("myNavbarID");
myNavbarID.className=("navbar, navbar-expand, navbar-inverse, navbar-fixed-top, green");
linksContainer.className=("navbar-collapse");

//this function creates the navigation links and the hamburger button for small media screent
//still needs functionality added to dropdown the links
let links=["Home", "About", "Contact", "Order"];



function navLinks(){
    //--save this for formatting--//
    // let link = document.createElement('button');
    // let homeLink= document.createTextNode("HomeCowboy");
    // link.appendChild(homeLink);
    // link.href="https://www.hardcorestorage.com";
    // link.className="btn btn-primary";
    // linksContainer.className="container";
    // linksContainer.append(link);
    //--//

    //hamburger
    let linkDiv = document.createElement('div');
    linkDiv.className="expand";
    linkDiv.setAttribute("id","myNavbar");
    linksContainer.append(linkDiv);

    
    let hButton= document.createElement('button');
    hButton.className="navbar-toggle";
    // hButton.setAttribute("data-toggle","collapse");
    // hButton.setAttribute("data-target","#linksContainer");
    
    linksContainer.append(hButton);

    let hamburger=document.createElement("img");
    hamburger.setAttribute("width","25px");
    hamburger.src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/800px-Hamburger_icon.svg.png";
    hButton.append(hamburger);
    


// these are the expanded navigation links
    let collapseHome= document.createElement('a');
    collapseHome.className="navbar-brand";
    let collapseHomeLink=document.createTextNode("HomePickles");
    collapseHome.append(collapseHomeLink);
    collapseHome.href="https://www.google.com/";
    // let collapseAbout= document.createElement('a');
    // let collapseAboutLink=document.createTextNode("About");
    // collapseAbout.append(collapseAboutLink);
    // collapseAbout.href="https://www.hardcorestorage.com/pages/about.html";
    // collapseAbout.className="navbar-brand";
    // let collapseContact = document.createElement('a');
    // collapseContact.className="navbar-brand";
    // let collapseContactLink=document.createTextNode("Contact");
    // collapseContact.append(collapseContactLink);
    // collapseContact.href="https://shop.hardcorestorage.com/pages/contact";
    // let collapseOrder = document.createElement('a');
    // let collapseOrderLink= document.createTextNode("Order CanMod");
    // collapseOrder.append(collapseOrderLink);
    // collapseOrder.href="https://shop.hardcorestorage.com/";

    linkDiv.append(collapseHome);
    // linkDiv.append(collapseAbout);
    // linkDiv.append(collapseContact);
    // linkDiv.append(collapseOrder);

console.log(linkDiv.id);

    collapseOrder.className="navbar-brand";




    

}

navLinks();


function shopLink(){
    let orderButton = document.createElement('button');
    orderButton.className="navbar-toggle btn btn-primary";
    orderButton.id="shopButton";
    orderButton.setAttribute("data-toggle","expand");
    orderButton.setAttribute("data-target","#myNavbar");
    orderButton.innerHTML="Order CanMod";
    linksContainer.append(orderButton);
    console.log(location);
}

shopLink();

function shopLinkClick(){
window.location.replace("https://shop.hardcorestorage.com/");}

let shopButton= document.getElementById("shopButton");
shopButton.addEventListener("click", shopLinkClick); 
