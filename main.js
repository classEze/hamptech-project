const copyrightTag = document.querySelector("footer p#site-copyright")

document.addEventListener("DOMContentLoaded" , function(e){
copyrightTag.innerHTML += `${new Date().getFullYear()}, Hamptech Projects Limited`
})