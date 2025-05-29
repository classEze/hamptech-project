const copyrightTag = document.querySelector("footer p#site-copyright");
const galleryContainer = document.querySelector("div.slider-container");
const prevButton = document.querySelector("div.slider-wrapper > span:first-of-type");
const nextButton = document.querySelector("div.slider-wrapper > span:last-of-type");
const hamburger = document.querySelector("p.mobile-icons img");
const mobileMenu = document.querySelector("ul.mobile-links");



document.addEventListener("DOMContentLoaded" , function(e){
copyrightTag.innerHTML += `${new Date().getFullYear()}, Hamptech Projects Limited`;


galleryContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    galleryContainer.scrollLeft += evt.deltaY
})

prevButton.addEventListener("click", (evt) => {
 galleryContainer.computedStyleMap.scrollBehaviour = "smooth"
  galleryContainer.scrollLeft -= 250  
})
nextButton.addEventListener("click", (evt) => {
  galleryContainer.computedStyleMap.scrollBehaviour = "smooth"
  galleryContainer.scrollLeft += 250  
})

hamburger.addEventListener("click", (evt) => {
    let nextImg = hamburger.getAttribute("src").indexOf("close") === -1 ? "./assets/images/close-icon.png" : "./assets/images/hamburger.jpg"
    hamburger.setAttribute("src",  nextImg);
    mobileMenu.classList.toggle("active");
});


[...mobileMenu.children].forEach(childNode => {
    childNode.addEventListener("click", (e) => {
    mobileMenu.classList.toggle("active");
    hamburger.setAttribute("src", "./assets/images/hamburger.jpg");
    })
})

document.querySelector("main").addEventListener("click", (evt) => {
  evt.stopPropagation();
  if(evt.target.tagName != "ul"){
        mobileMenu.classList.remove("active");
        hamburger.setAttribute("src", "./assets/images/hamburger.jpg");

  }

})
})