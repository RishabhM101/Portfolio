                        //Toggle Menu

function toggleMenuOff(){
  toggleMenu()
}
function toggleMenu() {

  // Toggle overlay
  var overlay = document.getElementById('menu-overlay');
  var menucont = document.getElementById('menu-container');

  if (overlay) {
    if (overlay.style.opacity == 0) {
        overlay.style.visibility = 'visible';
        overlay.style.opacity = 1;
        menucont.style.visibility = 'visible';
        
    } else {
        
        overlay.style.opacity = 0;
        overlay.style.visibility = 'hidden';
        menucont.style.visibility = 'hidden';
    }
}

  const menuToggle = document.querySelector('.menu-toggle');
  menuToggle.classList.toggle('active');
  
  const menuContainer = document.getElementById('menu-container');
  menuContainer.classList.toggle('hidden');
  menuContainer.style.opacity = 1;

 
  const menuItems = document.querySelectorAll('.menu-item');
  menuItems.forEach((item, index) => {
      setTimeout(() => {
          item.classList.toggle('active');
      }, index * 100);
  });
}
