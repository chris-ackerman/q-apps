$(document).foundation()

$(document).ready( function () {
  $('#example1, #example2').dataTable( {
    "bSort": false
  } );
} );

function showSecondFloor() {
    $("#third").velocity("fadeOut", {duration: 500});
    $("#second").velocity("fadeIn", {duration: 500});
}

function showThirdFloor() {
    $("#second").velocity("fadeOut", {duration: 500});
    $("#third").velocity("fadeIn", {duration: 500});
}

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function(){
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    }
}
