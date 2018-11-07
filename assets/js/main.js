
// Import ScrollMagic library
import ScrollMagic from 'scrollmagic';
import 'imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap';
// import 'imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators'; // comment out on biuld
// init controller
var controller = new ScrollMagic.Controller();

// Count for Years Experience start

// check Page is Experience
let experiencePage = document.querySelector('.experience');

if(experiencePage) {
  var counter = {
    var: 0
  };

  var count = new TimelineMax({
    delay: 0,
    repeat: 0,
    repeatDelay: 0,
  });

  count.to(counter, 3, {
    var: 125, // Number of Years Experience
    onUpdate: function() {
      var nwc = numberWithCommas(counter.var);
      yearsExperience.innerHTML = nwc;
    },
    ease: Power1.easeOut
  })

  function numberWithCommas(n) {
    var parts = n.toString().split(".");
    return parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  var countScene = new ScrollMagic.Scene({
      triggerElement: "#decadesOfExperience",
      triggerHook: 100,
    })
    .setTween(count)
    .addIndicators({
      name: 'count',
    })
    .addTo(controller);

    // Pin the Masthead start

    var pinIntroScene = new ScrollMagic.Scene({
        triggerElement: '#intro',
        triggerHook: 0,
        duration: '30%',
      })
      .setPin('#intro', {
        pushFollowers: false
      })
      .addTo(controller);

    // Pin the Masthead End

  // Count for Years Experience End
}


// Footer Logo annimation start

var soulpowerFooterLogo = new TimelineMax({
  delay: 0,
  repeat: 0,
  repeatDelay: 0,
});

soulpowerFooterLogo
.from(".soulpower-soul-s", 0.2, {
  y: 20,
  opacity: 0,
}, "-=0.1")

.from(".soulpower-soul-o", 0.2, {
  y: 20,
  opacity: 0,
}, "-=0.1")

.from(".soulpower-soul-u", 0.2, {
  y: 20,
  opacity: 0,
}, "-=0.1")

.from(".soulpower-soul-l", 0.2, {
  y: 20,
  opacity: 0,
})

.from(".soulpower-soul-syllable", 0.2, {
  y: -20,
  opacity: 0,
}, "-=0.1")

.from(".soulpower-power-p", 0.2, {
  y: -20,
  opacity: 0,
}, "-=0.1")

.from(".soulpower-power-o", 0.2, {
  y: -20,
  opacity: 0,
}, "-=0.1")

.from(".soulpower-power-syllable-one", 0.2, {
  y: 20,
  opacity: 0,
}, "-=0.1")

.from(".soulpower-power-w", 0.2, {
  y: -20,
  opacity: 0,
}, "-=0.1")

.from(".soulpower-power-e", 0.2, {
  y: -20,
  opacity: 0,
}, "-=0.1")

.from(".soulpower-power-syllable-two", 0.2, {
  y: 30,
  opacity: 0,
}, "-=0.1")

.from(".soulpower-power-r", 0.2, {
  y: -20,
  opacity: 0,
}, "-=0.1")

var soulpowerFooterLogoScene = new ScrollMagic.Scene({
  triggerElement: '#footerLogo',
  triggerHook: 100,
})

.setTween(soulpowerFooterLogo)
.addTo(controller);


// Footer Logo annimation End

// Testimonials Start

$('.fade').slick({
  arrows: false,
  autoplay: true,
  dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear'
});

// testimonials End

// Showreel Video Swap Start
let playVideo = document.getElementById('play-video');
if(playVideo) {
  playVideo.addEventListener('click', videoSwap);
}

function videoSwap() {
  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if( this.readyState == 4 && this.status == 200 ) {
      let video = document.getElementById('video');
      let branding = document.getElementById('branding');
      video.innerHTML = this.responseText;
      branding.style.display = 'none';
      video.style.zIndex = '99999';
    }
  };
  xhttp.open('GET', '/assets/video/showreel.txt', true);
  xhttp.send();
}
// Showreel Video Swap End

// Nav Bar
let menuButton = document.querySelector('.menu-icon');
let titleBar = document.querySelector('.title-bar');
menuButton.addEventListener('click', function() {
  if( titleBar.classList.contains('title-bar-bg-js') ) {
    titleBar.classList.remove('title-bar-bg-js');
  } else {
    titleBar.classList.add('title-bar-bg-js');
  }
});
