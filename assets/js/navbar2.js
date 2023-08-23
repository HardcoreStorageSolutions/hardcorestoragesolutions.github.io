console.log("Hello World!");

let navbar = document.getElementById("myNavbarID");
myNavbarID.className=("green");


let innerNav=document.getElementById("linksContainer");
innerNav.className="collapse navbar-collapse";

let waffle=document.createElement('button');
waffle.className=("btn-primary navbar-toggle nav-item");
waffle.innerHTML="Here is a Waffle";

let waffle2=document.createElement('button');
waffle2.className=("btn-primary navbar-brand");
waffle2.innerHTML="Here is another Waffle";


navbar.append(waffle);
innerNav.append(waffle2);


//the above allows for the pretty button to appear when screen is minimized, but disappears when maximized.
//the things that matter are, that the navbar is a navbar which has special properties.  If there is something inside it, it won't collapse.  
//navbar toggle makes the navbar appear when the screen in minized if that item has the navbar-toggle class.  if it does not have the class and it's inside the navbar, the navbar will stay expanded
//if I want to have the navbar show items when expanded - how do i do that? lets try adding another button - added second one with out navbar toggle let's try navbarbrand

//UPDATE!!! I DID IT!!!
