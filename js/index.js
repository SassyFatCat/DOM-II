//MOUSEOVER -------------------------------------->
const parag = document.querySelectorAll('p');
parag.forEach(x => {
    x.addEventListener('mouseover', event => event.target.style.backgroundColor = 'lightgrey');
    x.addEventListener('mouseout', event => event.target.style.backgroundColor = '');
});

//COPY ---------------------------------------->
document.querySelectorAll('*').forEach(x => {
    x.addEventListener('copy', (event) => {
        alert("Your selection has been copied to your clipboard");
        event.stopPropagation();});
});

// HOVER/ZOOM ON IMAGES -------------------------------->
const images = document.querySelectorAll('img');
images.forEach(x => {
    x.addEventListener('mouseover', (event) => {
            event.target.style.transform = 'scale(1.5)';
            event.target.style.transition = 'transform .8s';
            event.stopPropagation();
    });
    x.addEventListener('mouseout', (event) => {
        event.target.style.transform = '';
        event.target.style.zIndex = '-999';
    })
});

// MAKING TEXT VISIBLE ON HOVER --------------------------------------->
const destinationPar = document.querySelectorAll('.destination p');
const destination = document.querySelectorAll('.destination *');
destinationPar.forEach(x => x.style.display = "none");
destination.forEach(x => x.addEventListener('mouseover', () => {
    destinationPar.forEach(x => x.style.display = "")
}))
destination.forEach(x => x.addEventListener('mouseout', () => {
    destinationPar.forEach(x => x.style.display = "none");
}));

//SCROLL ADDS HEADER BACKGROUND COLOR---------------------------------->
const header = document.querySelector('header');
setTimeout(function() {
    window.addEventListener('scroll', () => {
        header.style.backgroundColor = 'rgba(38, 191, 102, .5)';
    });

}, 1200);

// RESIZE NOTIFICATION
let wHeight = window.innerHeight;
let wWidth = window.innerWidth;

window.addEventListener('resize', () => {
    alert(`the new height is ${wHeight} and the new width is ${wWidth}`)
});

// CLICK CHANGE FOOTER TEXT
const footerPar = document.querySelector('footer p');
const footer = document.querySelector('footer');
footer.addEventListener('click', () => {
    footerPar.textContent = "clicked on footer"
});
footer.addEventListener('mouseout', () => {
    footerPar.textContent = "Copyright Fun Bus 2020"
});

// DOUBLE CLICK ANYWHERE CHANGE BACKGROUND COLOR
const outside = document.querySelector('body');
outside.addEventListener('dblclick', (event) => {
    let backColor = prompt('What background color?', 'type a color');
    event.target.style.backgroundColor = backColor;
    event.stopPropagation();
})