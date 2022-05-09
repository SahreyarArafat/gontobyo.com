var activePage = window.location.pathname;
document.querySelectorAll('.nav-btn').
forEach(link => {
    if (link.href.includes(activePage)) {
        link.classList.add('active');
    }
})

console.log(activePage);







document.querySelector('.small_device_nav').addEventListener('click', function() {
    document.querySelector('.mobile_nav').style.display = 'flex';
    this.style.display = 'none';
    document.querySelector('.fa-xmark').style.display = 'block';
    document.querySelector('.close').style.display = 'block';
    document.querySelector('.logo').classList.add('logo-2');
    document.body.style.overflow = 'hidden';


    document.querySelector('.close').addEventListener('click', function() {
        document.querySelector('.fa-xmark').style.display = 'none';
        document.querySelector('.mobile_nav').style.display = 'none';
        document.querySelector('.small_device_nav').style.display = 'flex';
        document.querySelector('.logo').classList.remove('logo-2');
        document.body.style.overflowY = 'scroll';
        this.style.display = 'none';
    })

    document.querySelector('.fa-xmark').addEventListener('click', function() {
        document.querySelector('.close').style.display = 'none';
        document.querySelector('.mobile_nav').style.display = 'none';
        document.querySelector('.small_device_nav').style.display = 'flex';
        document.querySelector('.logo').classList.remove('logo-2');

        document.body.style.overflowY = 'scroll';
        this.style.display = 'none';
    })
})