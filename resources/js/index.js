const hamburgerIcon = document.querySelector('.openbtn');
const crossIcon = document.getElementById('sideNavWidth');

const openNav = () => {
  crossIcon.style.width = '100%';
  hamburgerIcon.style.display = 'none';
};

const closeNav = () => {
  crossIcon.style.width = 0;
  hamburgerIcon.style.display = 'block';
};
