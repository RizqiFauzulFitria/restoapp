/* eslint-disable func-names */
/* eslint-disable prefer-arrow-callback */
const iconToggler = document.getElementsByClassName('icon-toggler')[0];
const navbarNav = document.getElementsByClassName('navbar-nav')[0];
const nav = document.getElementsByTagName('nav')[0];

const app = () => {
  iconToggler.addEventListener('click', function () {
    navbarNav.classList.toggle('active');
    nav.classList.toggle('nav-active');
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 900) {
      navbarNav.classList.remove('active');
      nav.classList.remove('nav-active');
    }
  });
};

export default app;
