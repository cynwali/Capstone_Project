 // inserting collapsible document sections
 var collapseSection = document.getElementsByClassName ("section");
 for (var i=0; i <collapseSection.length; i++) {
     collapseSection[i].addEventListener("click", function(){
         this.classList.toggle("active");
         let content = this.nextElementSibling;
         if (content.style.display === "block") {
         content.style.display = "none";
         } else {
         content.style.display = "block";
         }
     });
 }

//dark mode button function
var icon = document.getElementById ("icon");
icon.onclick = function () {
  document.body.classList.toggle("dark-theme");
  if(document.body.classList.contains("dark-theme")){
    icon.src = "images/sun.png";
  } else {
    icon.src = "images/moon.png"
  }
}

//Back to top button
mybutton = document.getElementById("myBtn");

//button appears after sctolling 20px from the top of the document
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

//Back to top function
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
