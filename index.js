const navBtnElement = document.getElementById('nav-btn');

const navBarElement = document.getElementById('nav-bar');

const xmarkElement = document.getElementById('xmark');

navBtnElement.addEventListener('click', () => {

    openNav();

 });

xmarkElement.addEventListener('click', () => {

    closeNav();

});

function openNav(){
    
    navBarElement.classList.add('show-nav');

}

function closeNav(){

    navBarElement.classList.remove('show-nav');
}

openNav();
closeNav();
