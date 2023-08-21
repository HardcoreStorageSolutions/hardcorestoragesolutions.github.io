

console.log("Hello world!");



let navbarContainer = document.getElementById("navBarContainer");

function homeLink(){
    let link = document.createElement('a');
    let homeLink= document.createTextNode("Home");
    link.appendChild(homeLink);
    link.href="https://www.hardcorestorage.com";
    navbarContainer.className="container";
    navbarContainer.append(link);

    let button= document.createElement('button');
    button.className="navbar-toggle";
    button.setAttribute("data-toggle","collapse");
    button.setAttribute("data-target","#myNavbar");
    
    navbarContainer.append(button);

    let hamburger=document.createElement("img");
    hamburger.setAttribute("width","25px");
    hamburger.src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/800px-Hamburger_icon.svg.png";
    button.append(hamburger)
   


    console.log(button.innerHTML);
      
    
}

homeLink();

