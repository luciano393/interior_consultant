export default function responsiveNavbar(btn, btnClose, menu, link) {
    const d = document;
    
    d.addEventListener('click', (e) => {
        if(e.target.matches(btn)) {
            d.querySelector(menu).classList.toggle('active');
            d.querySelector(btn).classList.toggle('disable-btn-menu');
            d.querySelector(btnClose).classList.toggle('active-close');
        }
        if(e.target.matches(link)) {
            d.querySelector(menu).classList.toggle('active');
            d.querySelector(btn).classList.toggle('disable-btn-menu');
            d.querySelector(btnClose).classList.toggle('active-close');
        }
        if(e.target.matches(btnClose)) {
            d.querySelector(menu).classList.remove('active');
            d.querySelector(btn).classList.remove('disable-btn-menu');
            d.querySelector(btnClose).classList.remove('active-close');
        }
    })
}