
let layer1 = document.getElementById('parallaxLayer1');
let layer2 = document.getElementById('parallaxLayer2');
let layer3 = document.getElementById('parallaxLayer3');
let layer4 = document.getElementById('parallaxLayer4');
let layer7 = document.getElementById('parallaxLayer7');
let moon = document.getElementById('moon');

window.addEventListener('scroll', function () {
    let value = window.scrollY;
    layer1.style.top = value * 0.1+ 'px';
    layer2.style.top = value * 0.3 + 'px';
    layer3.style.top = value * 0.4 + 'px';
    layer4.style.top = value * 0.5 + 'px';
      // Set moon position
    if (value >= window.innerHeight * 0.7) { // 100vh in pixels
        moon.style.top = value * 0.1 + 'px'; // Reset to 0px when scrolled past 100vh
    } else {
        moon.style.top = value * 1 + 'px'; // Otherwise, move with scroll
    }
})


/*---------------------------toggle darkmode onclick------------------------------*/
var toggleButtonDarkMode = document.getElementById('nightmodeContainer');

 