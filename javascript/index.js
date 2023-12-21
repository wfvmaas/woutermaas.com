
window.addEventListener('scroll', function(e) {
    const target = this.document.querySelector('.scroll');
    let scrolled = window.scrollY;
    let rate = scrolled * 0.5;
    
    target.style.transform = 'translate3d(0px, '+ rate +'px, 0px)';

});