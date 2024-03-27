const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */

/* and the alternative text for each image file */
const imgSrcAltText = [
    { src: 'images/pic1.jpg', alt: 'Image 1' },
    { src: 'images/pic2.jpg', alt: 'Image 2' },
    { src: 'images/pic3.jpg', alt: 'Image 3' },
    { src: 'images/pic4.jpg', alt: 'Image 4' },
    { src: 'images/pic5.jpg', alt: 'Image 5' },

];

/* Looping through images */

for (let imgItem of imgSrcAltText) {

const newImage = document.createElement('img');
newImage.setAttribute('src', imgItem.src);
newImage.setAttribute('alt', imgItem.alt);
thumbBar.appendChild(newImage);

newImage.addEventListener("click", (e) => {
    displayedImage.src = e.target.src;
    displayedImage.alt = e.target.alt;
  });
}

/* Wiring up the Darken/Lighten button */

btn.addEventListener("click", (e) => {
    if (btn.target.getAttribute("class") === "dark") {
      btn.target.setAttribute("class", "light");
      btn.target.textContent = "Lighten";
      overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
    } else {
      btn.target.setAttribute("class", "dark");
      btn.target.textContent = "Darken";
      overlay.style.backgroundColor = "rgba(0,0,0,0)";
    }
  });