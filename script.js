/* -------------------------------JS- Ibra----------Start------------------------*/

let i = 0; // Start Point
const images = []; // Images Array
const imageBackground = ['abdou.jpg', 'chaussettes.jpg','goatman.jpg'];
let time = 3000; // Time Between Switch

const testimonial = document.querySelector(".testimonial-items");
const backgroundImage = document.querySelector('.testimonial-carousel');

const arrow = document.querySelectorAll("span.lnr");

// arrow.style.backgroundColor = "red";
console.log(arrow);
arrow.forEach(arr => {
  arr.addEventListener("click", () => {
    if (i < allArticles.length - 1) {
      // Add 1 to Index
      i++;
    } else {
      // Reset Back To O
      i = 0;
    }
    backgroundImage.style.backgroundImage =  `linear-gradient(rgba(0, 0, 0, 0.692), rgba(0, 0, 0, 0.699)),url(${imageBackground[i]})`;
    testimonial.innerHTML = allArticles[i];
  });
 
});

const article1 = `
<div class="testimonial-item first">
<img src="https://robohash.org/monster1?set=set2 " alt="robot">
<blockquote>
  <p class="testimonial-quote">Cette créature grotesque, à mi-chemin entre le poulet
  et l'homme aurait été aperçue aux environs du 2ème étage de la wcs...</p>
  <p class="testimonial-author"><cite>— <a href="creatures.html">En savoir plus...</a></cite></p>
</blockquote>
</div>
`;
const article2 = ` <div class="testimonial-item first">
<img src="https://robohash.org/monster2?set=set2 " alt="robot">
<blockquote>
  <p class="testimonial-quote">Des élèves se seraient plaints d'avoir eu leur fond d'écran
  mystérieusement changé en image de chèvre...</p>
  <p class="testimonial-author"><cite>— <a href="poltergeist.html">En savoir plus...</a> </cite></p>
</blockquote>
</div>`;

const article3 = `<div class="testimonial-item first">
<img src="https://robohash.org/monster3?set=set2 " alt="robot">
<blockquote>
  <p class="testimonial-quote">Il nous a été reporté que les chaussettes à la wcs seraient
  vivantes...</p>
  <p class="testimonial-author"><cite>— <a href="possessions.html">En savoir plus... </a> </cite></p>
</blockquote>
</div>`;

const allArticles = [article1, article2, article3];
testimonial.innerHTML = allArticles[i];

// Change Article

function changeArt() {
  testimonial.innerHTML = allArticles[i];

  // Check If Index Is Under Max
  if (i < allArticles.length - 1) {
    // Add 1 to Index
    i++;
  } else {
    // Reset Back To O
    i = 0;
  }

  // Run function every x seconds
  setTimeout("changeArt()", time);
}

// Run function when page loads
// window.onload = changeArt;
/* -------------------------------JS- Ibra---------End-------------------------*/


/* Hover */


/* Footer effect  */
const hideButton = document.getElementById('hide');
const openButton = document.getElementById('boutonContactFooter');


openButton.addEventListener('click' , () => {
  document.getElementById('contactInfosHome').style.display = 'flex';
  
});

hideButton.addEventListener('click' , () => {
  document.getElementById('contactInfosHome').style.display = 'none';
});


