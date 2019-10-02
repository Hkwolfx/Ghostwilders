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
  <p class="testimonial-quote">Thank you very much for the great job you made of my cooker. You made a
    horrible job look easy and I can't thank you enough. I hate cleaning oven racks and they sparkle now.
    Thanks again.</p>
  <p class="testimonial-author"><cite>— <a href="https://www.google.com/">H Scott, Edinburgh</a></cite></p>
</blockquote>
</div>
`;
const article2 = ` <div class="testimonial-item first">
<img src="https://robohash.org/monster2?set=set2 " alt="robot">
<blockquote>
  <p class="testimonial-quote">Just a wee note to say 'WOW!' and thank you to you, and colleagues. Our old
    flat is sparkling and looks absolutely fantastic, I still can't believe how clean the oven is! Thanks so
    much again for all your hard work yesterday.</p>
  <p class="testimonial-author"><cite>— <a href="https://www.google.com/"> Nicola, Leith, Edinburgh </a> </cite></p>
</blockquote>
</div>`;

const article3 = `<div class="testimonial-item first">
<img src="https://robohash.org/monster3?set=set2 " alt="robot">
<blockquote>
  <p class="testimonial-quote">As mentioned I was very satisfied with the quality of the cleaning. The lady
    was very cheerful and enthusiastic. I will definitely consider using Quality Cleaning Services again.</p>
  <p class="testimonial-author"><cite>— <a href="https://www.google.com/"> Read more... </a> </cite></p>
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
