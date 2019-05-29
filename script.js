var myIndex = 0; // start med at nulstille myIndex. myIndex bruges til at tælle og holde styr på hvilket billede vi er nået til.

carousel(); // Kald funktionen og start showet :D

function carousel() {
  var fotos = document.querySelector(".foto"); // Find i DOM træet alle elementer med class "foto"
  // loop alle fotos igennem
  for (var i = 0; i < fotos.length; i++) { // for hvert af fotos
    fotos[i].style.display = "none";  // sæt display til "none", som dermed fjerner billedet fra renderingen
  }
  if (myIndex > fotos.length) {myIndex = 0} // hvis vores tæller er størrere end antallet af fotos, sæt tæller til 1   
  fotos[myIndex].style.display = "unset"; // fjern display:none fra det billede vi vil vise  
  myIndex++; // læg een til vores tæller
  setTimeout(carousel, 2500); // Gentag denne funktion hver 2.5 sekund
}
Collapse
