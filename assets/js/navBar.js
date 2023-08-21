

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
    
    let span=document.createElement('span');
    span.setAttribute("class","icon-bar");
    navbarContainer.append(button);
    // for (let i=0; i < 3; i++){button.append(span);}
    button.append(span, "another thing");
    button.append(span);

    console.log(button.innerHTML);
      
    
}

homeLink();

