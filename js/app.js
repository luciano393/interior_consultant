import responsiveNavbar from "./navbar.js";

const d = document;

d.addEventListener('DOMContentLoaded', (e) => {
    responsiveNavbar('.btn-menu', '.close-menu','.menu', '.menu a');
})