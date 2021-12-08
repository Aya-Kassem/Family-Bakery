// GLOBAL VARIABLES .............
let header = document.querySelector('header'),
logo = document.querySelector('.logo'),
smallScreen, navbarToggler, togglerIcon,
bodyElement = document.body;


// COUNTING FUNCTION .....
function counting(el,from,to){
    $(el).counter({ 
        countFrom: from,
        countTo: to
    })
}
if(bodyElement.getAttribute('id') == 'about'){ 
    let sectionLocation = $('.our-info').offset().top;
    $(window).scroll( ()=>{
        let WindowScroll = $(this).scrollTop();
        if(WindowScroll >= sectionLocation - 500){
            counting("#counter-one", 0, 1430);
            counting("#counter-two", 0, 64);
            counting("#counter-three", 0, 960);
            counting("#counter-four", 0, 420);
        }
    } )
    
}

// BACK TO TOP........
function BackToTop(){
    window.addEventListener('scroll', ()=>{
        let WindowScroll = window.scrollY;
        if( WindowScroll > 150 ){
            document.querySelector('.back-btn').classList.add('d-flex');
        }else{
            document.querySelector('.back-btn').classList.remove('d-flex');
        }
    });

    document.querySelector('.back-btn').addEventListener('click', function(e){
        if(e.hash != ""){
            e.preventDefault();
            let hash = this.hash;
            let Top = document.querySelector(hash).offsetTop;
            let Left = document.querySelector(hash).offsetLeft;
            window.scrollTo({
                top: Top,
                left: Left,
                behavior: "smooth"
            });
        }
    })

}
// NAVBAR ON SCROLL ..........
function navbarOnScroll(){
    window.addEventListener('scroll', function (){
        let WindowScroll = window.scrollY;
        if( WindowScroll > 50 ){
            header.classList.add('scrollDown');
            logo.setAttribute('src', 'images/bakery-color.png');
        }
        else{
            header.classList.remove('scrollDown');
            logo.setAttribute('src', 'images/bakery-light-1.png');
        }
    });
}
// CHANGING NAVBAR ICONS ............
function flipNavbarIcon(){
    navbarToggler = document.querySelector('.navbar-toggler');
    navbarToggler.addEventListener('click', function () {

        togglerIcon = document.querySelector('.justify');
        if(  togglerIcon.classList.contains('close')  ){
            togglerIcon.classList.remove('close');
        }
        else
        {
            togglerIcon.classList.add('close');
        }

    })
}

// CHANGING SITE COLORS ...............
function colorTheme(){
    // COLORS ............
    let AllColors = document.querySelectorAll('.color');
    AllColors.forEach(color => {
        color.addEventListener('click', ()=>{
            let colorName = window.getComputedStyle(color).getPropertyValue('background-color');
            let root = document.querySelector(':root');
            root.style.setProperty('--main-color', colorName);
        })
    })

    // COLORS LIST.
    let colorOptions= document.querySelector('.color-options');
    let colorIcon = document.querySelector('.color-options i');
    let colorWrapper = document.querySelector('.color-wrapper');
    colorOptions.addEventListener('click', ()=> {
        
        // CHANGE ICON .
        if( colorIcon.classList.contains('fa-cogs') ){
            colorIcon.setAttribute('class', 'fa fa-times text-danger');
        }else{
            colorIcon.setAttribute('class', 'fa fa-cogs');
        }
        // OPEN LIST.
        if(colorWrapper.style.right == '0px'){
            colorWrapper.style.right = '-200px'
        }else{
            colorWrapper.style.right = '0px';
        }
    })
}

// CALLING FUNCTIONS IN ALL PAGES............
if( bodyElement.getAttribute('id') != "" ){
    flipNavbarIcon();
    BackToTop();
    colorTheme();
};

if(bodyElement.getAttribute('id') == 'homePage'){
    navbarOnScroll();
}







