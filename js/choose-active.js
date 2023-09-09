let menuItems = document.getElementsByClassName('nav__menu-item');
let onClick = function(event) {
  event.preventDefault();

  for (var i = 0; i < menuItems.length; i++) {
    menuItems[i].classList.remove('nav__menu-item-active');
  }

  event.currentTarget.classList.add('nav__menu-item-active');
};

for (var i = 0; i < menuItems.length; i++) {
  menuItems[i].addEventListener('click', onClick, false);
}