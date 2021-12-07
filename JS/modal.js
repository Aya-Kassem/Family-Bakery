
let AllGalleryItems = document.querySelectorAll('.gallery-item'),
modal = document.querySelector('.image-modal'),
modalImage = modal.querySelector('img'),
imageSrc, currentIndex = 0,
allImages = document.querySelectorAll('.gallery-item img'),
nextArrow = document.querySelector('.nextArrow'),
prevArrow = document.querySelector('.prevArrow'),
closeIcon = document.querySelector('.closeIcon');

AllGalleryItems.forEach(item => {
    item.addEventListener('click', ()=> {
        imageSrc = item.querySelector('img').getAttribute('src');
        modalImage.setAttribute('src', imageSrc);
        modal.classList.add('d-flex');
    })
})


// CLOSING MODAL ..........
function closeModal(){
    modal.classList.remove('d-flex');
}
closeIcon.addEventListener( 'click', closeModal );
document.addEventListener('click', function (e){
    if(e.target.classList.contains('image-modal')){
        closeModal();
    }
})


// HANDLE KEYBOARD KEYS ........
document.addEventListener('keydown', function(e){
    if(e.key == 'Escape'){
        closeModal();
    }
    if(e.key == 'ArrowRight'){
        nextImage()
    }
    if(e.key == 'ArrowLeft'){
        prevImage()
    }
})


// NEXT IMAGE ........
nextArrow.addEventListener( 'click', nextImage );
function nextImage(){
    console.log(currentIndex);
    currentIndex++;
    if( currentIndex >= allImages.length ) currentIndex = 0;
    imageSrc = allImages[currentIndex].getAttribute('src');
    modalImage.setAttribute('src', imageSrc);

}


// PREV IMAGE ........
prevArrow.addEventListener( 'click', prevImage );
function prevImage(){
    console.log(currentIndex);
    currentIndex--;
    if( currentIndex < 0 ) currentIndex = allImages.length -1;
    imageSrc = allImages[currentIndex].getAttribute('src');
    modalImage.setAttribute('src', imageSrc);

}