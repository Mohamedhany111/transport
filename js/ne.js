


let cover = document.getElementById('cover');

function slide(){
    cover.style.animation="cover 5s infinite"; 
}
slide();

let preloader =document.querySelector('.preloader');
window.addEventListener('load',function(){
    preloader.classList.add('preloader-hidden');
})
