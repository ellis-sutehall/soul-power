// Import ScrollMagic library
import ScrollMagic from 'scrollmagic';
import 'imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap';
// import 'imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators'; // comment out on biuld
// init controller
var controller = new ScrollMagic.Controller();

// check Page is Experience
let experiencePage = document.querySelector('.experience');

// check Page is What We Do
let ourSoundPage = document.querySelector('.ourSound');

// Count for Years Experience start
if (experiencePage) {
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

  // Count for Years Experience End
}


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
if (playVideo) {
  playVideo.addEventListener('click', videoSwap);
}

function videoSwap() {
  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
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
  if (titleBar.classList.contains('title-bar-bg-js')) {
    titleBar.classList.remove('title-bar-bg-js');
  } else {
    titleBar.classList.add('title-bar-bg-js');
  }
});


// SoulFro Animation

if (experiencePage) {

  var hair1 = createSoulFro({
    element: document.querySelector("#hair1"),
    numPoints: 80,
    centerX: 500,
    centerY: 500,
    minRadius: 360,
    maxRadius: 380,
    minDuration: 1,
    maxDuration: 2
  });

  var hair2 = createSoulFro({
    element: document.querySelector("#hair2"),
    numPoints: 70,
    centerX: 500,
    centerY: 540,
    minRadius: 330,
    maxRadius: 350,
    minDuration: 2,
    maxDuration: 3
  });

  var hair3 = createSoulFro({
    element: document.querySelector("#hair3"),
    numPoints: 70,
    centerX: 500,
    centerY: 540,
    minRadius: 310,
    maxRadius: 330,
    minDuration: 2,
    maxDuration: 3
  });

  var hair3 = createSoulFro({
    element: document.querySelector("#hair3"),
    numPoints: 70,
    centerX: 500,
    centerY: 540,
    minRadius: 310,
    maxRadius: 330,
    minDuration: 2,
    maxDuration: 3
  });

  var hair4 = createSoulFro({
    element: document.querySelector("#hair4"),
    numPoints: 60,
    centerX: 500,
    centerY: 540,
    minRadius: 280,
    maxRadius: 300,
    minDuration: 2,
    maxDuration: 3
  });

  var hair5 = createSoulFro({
    element: document.querySelector("#hair5"),
    numPoints: 50,
    centerX: 500,
    centerY: 540,
    minRadius: 260,
    maxRadius: 290,
    minDuration: 2,
    maxDuration: 4
  });

  var hair6 = createSoulFro({
    element: document.querySelector("#hair6"),
    numPoints: 60,
    centerX: 500,
    centerY: 540,
    minRadius: 240,
    maxRadius: 280,
    minDuration: 2,
    maxDuration: 3
  });

  var hair7 = createSoulFro({
    element: document.querySelector("#hair7"),
    numPoints: 60,
    centerX: 500,
    centerY: 540,
    minRadius: 240,
    maxRadius: 260,
    minDuration: 2,
    maxDuration: 3
  });

  var hair8 = createSoulFro({
    element: document.querySelector("#hair8"),
    numPoints: 50,
    centerX: 500,
    centerY: 560,
    minRadius: 210,
    maxRadius: 230,
    minDuration: 2,
    maxDuration: 3
  });

  var face1 = createSoulFro({
    element: document.querySelector("#face1"),
    numPoints: 90,
    centerX: 500,
    centerY: 610,
    minRadius: 190,
    maxRadius: 200,
    minDuration: 2.50,
    maxDuration: 2.50
  });

  var face2 = createSoulFro({
    element: document.querySelector("#face2"),
    numPoints: 90,
    centerX: 500,
    centerY: 660,
    minRadius: 190,
    maxRadius: 200,
    minDuration: 3,
    maxDuration: 3
  });

  var face3 = createSoulFro({
    element: document.querySelector("#face3"),
    numPoints: 90,
    centerX: 500,
    centerY: 710,
    minRadius: 190,
    maxRadius: 200,
    minDuration: 3,
    maxDuration: 3
  });



  function createSoulFro(options) {

    var points = [];
    var path = options.element;
    var slice = (Math.PI * 2) / options.numPoints;
    var startAngle = random(Math.PI * 2);

    var tl = new TimelineMax({
      onUpdate: update
    });

    for (var i = 0; i < options.numPoints; i++) {

      var angle = startAngle + i * slice;
      var duration = random(options.minDuration, options.maxDuration);

      var point = {
        x: options.centerX + Math.cos(angle) * options.minRadius,
        y: options.centerY + Math.sin(angle) * options.minRadius
      };

      var tween = TweenMax.to(point, duration, {
        x: options.centerX + Math.cos(angle) * options.maxRadius,
        y: options.centerY + Math.sin(angle) * options.maxRadius,
        repeat: -1,
        yoyo: true,
        ease: Sine.easeInOut
      });

      tl.add(tween, -random(duration));
      points.push(point);
    }

    options.tl = tl;
    options.points = points;

    function update() {
      path.setAttribute("d", cardinal(points, true, 1));
    }

    return options;
  }

  // Cardinal spline - a uniform Catmull-Rom spline with a tension option
  function cardinal(data, closed, tension) {

    if (data.length < 1) return "M0 0";
    if (tension == null) tension = 1;

    var size = data.length - (closed ? 0 : 1);
    var path = "M" + data[0].x + " " + data[0].y + " C";

    for (var i = 0; i < size; i++) {

      var p0, p1, p2, p3;

      if (closed) {
        p0 = data[(i - 1 + size) % size];
        p1 = data[i];
        p2 = data[(i + 1) % size];
        p3 = data[(i + 2) % size];

      } else {
        p0 = i == 0 ? data[0] : data[i - 1];
        p1 = data[i];
        p2 = data[i + 1];
        p3 = i == size - 1 ? p2 : data[i + 2];
      }

      var x1 = p1.x + (p2.x - p0.x) / 6 * tension;
      var y1 = p1.y + (p2.y - p0.y) / 6 * tension;

      var x2 = p2.x - (p3.x - p1.x) / 6 * tension;
      var y2 = p2.y - (p3.y - p1.y) / 6 * tension;

      path += " " + x1 + " " + y1 + " " + x2 + " " + y2 + " " + p2.x + " " + p2.y;
    }

    return closed ? path + "z" : path;
  }

  function random(min, max) {
    if (max == null) {
      max = min;
      min = 0;
    }
    if (min > max) {
      var tmp = min;
      min = max;
      max = tmp;
    }
    return min + (max - min) * Math.random();
  }
}

// SoulFro Animation End




// Vinyle Animation Start

if (ourSoundPage) {

  var inTheGroove1 = createVinyle({
    element: document.querySelector("#inTheGroove1"),
    numPoints: 50,
    centerX: 500,
    centerY: 500,
    minRadius: 380,
    maxRadius: 400,
    minDuration: 1,
    maxDuration: 2
  });

  var inTheGroove2 = createVinyle({
    element: document.querySelector("#inTheGroove2"),
    numPoints: 50,
    centerX: 500,
    centerY: 500,
    minRadius: 360,
    maxRadius: 370,
    minDuration: 1,
    maxDuration: 2
  });

  var inTheGroove3 = createVinyle({
    element: document.querySelector("#inTheGroove3"),
    numPoints: 50,
    centerX: 500,
    centerY: 500,
    minRadius: 350,
    maxRadius: 360,
    minDuration: 1,
    maxDuration: 2
  });

  var inTheGroove4 = createVinyle({
    element: document.querySelector("#inTheGroove4"),
    numPoints: 50,
    centerX: 500,
    centerY: 500,
    minRadius: 340,
    maxRadius: 350,
    minDuration: 1,
    maxDuration: 2
  });

  var inTheGroove5 = createVinyle({
    element: document.querySelector("#inTheGroove5"),
    numPoints: 50,
    centerX: 500,
    centerY: 500,
    minRadius: 330,
    maxRadius: 340,
    minDuration: 1,
    maxDuration: 2
  });

  var inTheGroove6 = createVinyle({
    element: document.querySelector("#inTheGroove6"),
    numPoints: 50,
    centerX: 500,
    centerY: 500,
    minRadius: 320,
    maxRadius: 330,
    minDuration: 1,
    maxDuration: 2
  });

  var inTheGroove7 = createVinyle({
    element: document.querySelector("#inTheGroove7"),
    numPoints: 50,
    centerX: 500,
    centerY: 500,
    minRadius: 310,
    maxRadius: 320,
    minDuration: 1,
    maxDuration: 2
  });

  var inTheGroove8 = createVinyle({
    element: document.querySelector("#inTheGroove8"),
    numPoints: 50,
    centerX: 500,
    centerY: 500,
    minRadius: 300,
    maxRadius: 310,
    minDuration: 1,
    maxDuration: 2
  });

  var inTheGroove9 = createVinyle({
    element: document.querySelector("#inTheGroove9"),
    numPoints: 50,
    centerX: 500,
    centerY: 500,
    minRadius: 290,
    maxRadius: 300,
    minDuration: 1,
    maxDuration: 2
  });

  var inTheGroove10 = createVinyle({
    element: document.querySelector("#inTheGroove10"),
    numPoints: 50,
    centerX: 500,
    centerY: 500,
    minRadius: 280,
    maxRadius: 290,
    minDuration: 1,
    maxDuration: 2
  });

  var inTheGroove11 = createVinyle({
    element: document.querySelector("#inTheGroove11"),
    numPoints: 50,
    centerX: 500,
    centerY: 500,
    minRadius: 270,
    maxRadius: 280,
    minDuration: 1,
    maxDuration: 2
  });

  var inTheGroove12 = createVinyle({
    element: document.querySelector("#inTheGroove12"),
    numPoints: 50,
    centerX: 500,
    centerY: 500,
    minRadius: 270,
    maxRadius: 280,
    minDuration: 1,
    maxDuration: 2
  });

  var inTheGroove13 = createVinyle({
    element: document.querySelector("#inTheGroove13"),
    numPoints: 50,
    centerX: 500,
    centerY: 500,
    minRadius: 260,
    maxRadius: 270,
    minDuration: 1,
    maxDuration: 2
  });

  var inTheGroove14 = createVinyle({
    element: document.querySelector("#inTheGroove14"),
    numPoints: 50,
    centerX: 500,
    centerY: 500,
    minRadius: 250,
    maxRadius: 260,
    minDuration: 1,
    maxDuration: 2
  });

  var inTheGroove15 = createVinyle({
    element: document.querySelector("#inTheGroove15"),
    numPoints: 50,
    centerX: 500,
    centerY: 500,
    minRadius: 240,
    maxRadius: 250,
    minDuration: 1,
    maxDuration: 2
  });

  var inTheGroove16 = createVinyle({
    element: document.querySelector("#inTheGroove16"),
    numPoints: 50,
    centerX: 500,
    centerY: 500,
    minRadius: 230,
    maxRadius: 240,
    minDuration: 1,
    maxDuration: 2
  });

  var inTheGroove17 = createVinyle({
    element: document.querySelector("#inTheGroove17"),
    numPoints: 50,
    centerX: 500,
    centerY: 500,
    minRadius: 220,
    maxRadius: 230,
    minDuration: 1,
    maxDuration: 2
  });

  var inTheGroove18 = createVinyle({
    element: document.querySelector("#inTheGroove18"),
    numPoints: 50,
    centerX: 500,
    centerY: 500,
    minRadius: 210,
    maxRadius: 220,
    minDuration: 1,
    maxDuration: 2
  });

  var inTheGroove19 = createVinyle({
    element: document.querySelector("#inTheGroove19"),
    numPoints: 50,
    centerX: 500,
    centerY: 500,
    minRadius: 200,
    maxRadius: 210,
    minDuration: 1,
    maxDuration: 2
  });

  var inTheGroove20 = createVinyle({
    element: document.querySelector("#inTheGroove20"),
    numPoints: 50,
    centerX: 500,
    centerY: 500,
    minRadius: 170,
    maxRadius: 180,
    minDuration: 1,
    maxDuration: 2
  });

  var lable = createVinyle({
    element: document.querySelector("#lable"),
    numPoints: 50,
    centerX: 500,
    centerY: 500,
    minRadius: 155,
    maxRadius: 160,
    minDuration: 1,
    maxDuration: 2
  });

  var lableHole = createVinyle({
    element: document.querySelector("#lableHole"),
    numPoints: 20,
    centerX: 500,
    centerY: 500,
    minRadius: 10,
    maxRadius: 10,
    minDuration: 1,
    maxDuration: 2
  });


  function createVinyle(options) {

    var points = [];
    var path = options.element;
    var slice = (Math.PI * 2) / options.numPoints;
    var startAngle = random(Math.PI * 2);

    var tl = new TimelineMax({
      onUpdate: update
    });

    for (var i = 0; i < options.numPoints; i++) {

      var angle = startAngle + i * slice;
      var duration = random(options.minDuration, options.maxDuration);

      var point = {
        x: options.centerX + Math.cos(angle) * options.minRadius,
        y: options.centerY + Math.sin(angle) * options.minRadius
      };

      var tween = TweenMax.to(point, duration, {
        x: options.centerX + Math.cos(angle) * options.maxRadius,
        y: options.centerY + Math.sin(angle) * options.maxRadius,
        repeat: -1,
        yoyo: true,
        ease: Sine.easeInOut
      });

      tl.add(tween, -random(duration));
      points.push(point);
    }

    options.tl = tl;
    options.points = points;

    function update() {
      path.setAttribute("d", cardinal(points, true, 1));
    }

    return options;
  }

  // Cardinal spline - a uniform Catmull-Rom spline with a tension option
  function cardinal(data, closed, tension) {

    if (data.length < 1) return "M0 0";
    if (tension == null) tension = 1;

    var size = data.length - (closed ? 0 : 1);
    var path = "M" + data[0].x + " " + data[0].y + " C";

    for (var i = 0; i < size; i++) {

      var p0, p1, p2, p3;

      if (closed) {
        p0 = data[(i - 1 + size) % size];
        p1 = data[i];
        p2 = data[(i + 1) % size];
        p3 = data[(i + 2) % size];

      } else {
        p0 = i == 0 ? data[0] : data[i - 1];
        p1 = data[i];
        p2 = data[i + 1];
        p3 = i == size - 1 ? p2 : data[i + 2];
      }

      var x1 = p1.x + (p2.x - p0.x) / 6 * tension;
      var y1 = p1.y + (p2.y - p0.y) / 6 * tension;

      var x2 = p2.x - (p3.x - p1.x) / 6 * tension;
      var y2 = p2.y - (p3.y - p1.y) / 6 * tension;

      path += " " + x1 + " " + y1 + " " + x2 + " " + y2 + " " + p2.x + " " + p2.y;
    }

    return closed ? path + "z" : path;
  }

  function random(min, max) {
    if (max == null) {
      max = min;
      min = 0;
    }
    if (min > max) {
      var tmp = min;
      min = max;
      max = tmp;
    }
    return min + (max - min) * Math.random();
  }
}

if (ourSoundPage) {








  var rotateVinyl,
    playBtn = document.getElementById("play"),
    pauseBtn = document.getElementById("pause"),
    playPauseBtn = document.getElementById("test");


  rotateVinyl = new TweenMax.to('.vinyl', 8.0, {
    rotation: "360",
    ease: Linear.easeNone,
    repeat: -1,
    paused: true
  }).timeScale(0);


  play.onclick = function() {
    rotateVinyl.play();
    TweenLite.to(rotateVinyl, 2, {
      timeScale: 1,
    });
  };


  pause.onclick = function() {
    TweenLite.to(rotateVinyl, 2, {
      timeScale: 0,
      onComplete: function() {
        this.pause()
      }
    })
  };


/*
  play.onclick = function() {
    rotateVinyl.paused(!rotateVinyl.paused());
    TweenLite.to(rotateVinyl, 2, {
      timeScale: 1,
    });
    play.innerHTML = rotateVinyl.paused() ? "Play" : "Pause"
  };
*/

}

// Vinyle Animation End
