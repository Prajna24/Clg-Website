//select element fn
const selectElement = function (element) {
    return document.querySelector(element);
};

let menuToggler = selectElement('.menuToggle');
let body = selectElement('body');
menuToggler.addEventListener('click',function(){
    body.classList.toggle('open');
});
window.sr = ScrollReveal();

sr.reveal('.animate-left', {
    origin:'left',
    duration: 1000,
    distance:'25rem',
    delay: 600
});

sr.reveal('.animate-right', {
    origin:'right',
    duration: 1000,
    distance:'25rem',
    delay: 600
});

sr.reveal('.animate-top', {
    origin:'top',
    duration: 1000,
    distance:'25rem',
    delay: 600
});

sr.reveal('.animate-bottom', {
    origin:'bottom',
    duration: 1000,
    distance:'25rem',
    delay: 600
});



window.addEventListener('scroll', function(){
    const header = document.querySelector('header');
    header.classList.toggle("sticky",window.scrollY > 0);
})