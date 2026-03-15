const copyrightTag = document.querySelector("footer p#site-copyright");
const hamburger = document.querySelector("p.mobile-icons img");
const mobileMenu = document.querySelector("ul.mobile-links");



document.addEventListener("DOMContentLoaded" , function(e){
copyrightTag.innerHTML += `${new Date().getFullYear()}, Hamptech Projects Limited`;


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



function createCarousel(root) {
  const track = root.querySelector(".carousel-track")
  const slides = [...track.children]
  const dotsContainer = root.querySelector('aside.carousel-dots')
  let index = 0

  

  slides.forEach((item,itemIndex) => {
    const dotDiv = window.document.createElement('a')
    dotDiv.classList.add("carousel-dot");
    if(index === itemIndex){
     dotDiv.classList.add("active")
    }
    dotsContainer.appendChild(dotDiv)
  })

  const dotsArr = [...dotsContainer.children]

  const prev = root.querySelector(".prev")
  const next = root.querySelector(".next")


  function update() {
    const width = slides[0].getBoundingClientRect().width
    track.style.transform = `translateX(-${index * width}px)`
  }

  next.onclick = () => {
    const currentIndex = index
    if (index < slides.length - 1) {
    ++index
   }
      else {
        index = 0;
      }
        dotsArr[currentIndex].classList.remove('active')
        dotsArr[index].classList.add('active')
        update()
  }

  prev.onclick = () => {
      const currentIndex = index
      if(index > 0) {
        index--
      }
      else {
        index = slides.length - 1;
      }
      dotsArr[currentIndex].classList.remove('active')
      dotsArr[index].classList.add('active')
      update()
  }

  window.addEventListener("resize", update)
}

document.querySelectorAll(".carousel").forEach(createCarousel)