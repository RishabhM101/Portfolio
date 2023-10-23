


window.addEventListener('load', function() {
  var overlay = document.querySelector('.overlay');

  function hideOverlay() {
      overlay.style.display = 'none';
      document.body.classList.add('loaded');
  }

  var img1 = new Image();
  img1.src = "images/Earth.webp"
  img1.onload = hideOverlay;
});


window.addEventListener('scroll', function () {
  var menuContainer = document.querySelector('.menu-toggle')
 
  if (window.scrollY >= window.innerHeight) {
      menuContainer.style.opacity = 1;}
   

});



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


                        //Animated Text

window.onload = function() {

  let animationContainer = document.querySelector('.animated-title');
  let textData = animationContainer.getAttribute('aria-label');

  function splitWords() {
    let splitedText = textData.split(' ');
  
    splitedText.join('& &').split('&').forEach(function(e){
      let span = document.createElement('span');
      span.classList.add('animated-word');
      span.setAttribute('data-text', e); 
      animationContainer.appendChild(span);
    });
    splitLetters();
  }

  function splitLetters() {
    let animatedWords = document.querySelectorAll('.animated-word');
    animatedWords.forEach(function(e, i){
      e.getAttribute('data-text').split('').forEach(function(f, j) {
        f = f == ' ' ? '&#32;' : f;
        let span = document.createElement('span');
        span.classList.add('animated-element');
        span.setAttribute('aria-hidden', 'true'); 
        span.innerHTML = f;
        e.appendChild(span);
      });
      animate(e, i);
    })
  }

  function animate(e, i) {
    let wordCount = e.getAttribute('data-text').length;
    e.style.opacity = 1;
    e.classList.add('animate');
  }
 
  splitWords();

                        
  
                                //Animated Paragraph

  function animateParagraphs() {
    let paragraphs = document.querySelectorAll('.animated-paragraph');
    let delay = 0;

    paragraphs.forEach(function(p, i){
        setTimeout(function() {
            p.style.opacity = 1;
        }, delay);
        delay += 1200; 
    });
}


setTimeout(function() {
    animateParagraphs();
}, 4000); //
}





                      // hidden my work box
window.onscroll = function() {
  var logo = document.querySelector('.logo');
  var textBox = document.querySelector('.text-box');
  var logoPosition = logo.getBoundingClientRect().top;
  var screenPosition = window.innerHeight / 1.3; // Adjust as needed

  if(logoPosition < screenPosition) {
      textBox.style.opacity = '1';
  } else {
      textBox.style.opacity = '0';
  }
};

 