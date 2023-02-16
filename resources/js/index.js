const hamburgerIcon = document.getElementById('hamburgerIcon');
const sideNavWidth = document.getElementById('sideNavWidth');

const openNav = () => {
  sideNavWidth.style.width = '100%';
  hamburgerIcon.style.display = 'none';
};

const closeNav = () => {
  sideNavWidth.style.width = 0;
  hamburgerIcon.style.display = 'block';
};
