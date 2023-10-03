const mobBtn=document.querySelector('.mobile-navbar-btn');
const navHeader=document.querySelector('.header');
const toggleNavbar = ()=>{
    navHeader.classList.toggle("active");
};

mobBtn.addEventListener('click', () => toggleNavbar());