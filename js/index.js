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

// HOVER/ZOOM ON IMAGES
const images = document.querySelectorAll('img');
images.forEach(x => {
    x.addEventListener('mouseover', (event) => {
        setTimeout(() => {
            event.target.style.transform = 'scale(1.5)';
            event.target.style.transition = 'transform .8s';
            event.stopPropagation();
        }, 1000)
    });
    x.addEventListener('mouseout', (event) => {
        event.target.style.transform = 'scale(1)';
        event.target.style.zIndex = '-999';
    })
});

//DBLCLICK
