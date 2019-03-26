// Import ScrollMagic library
import ScrollMagic from 'scrollmagic';
import 'imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap';
import whatInput from 'what-input';
// import 'imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators'; // comment out on biuld
// init controller
var controller = new ScrollMagic.Controller();

$( document ).ready(function() {


// check Page is Experience
let experiencePage = document.querySelector('.experience');

// check Page is Our Sound
let ourSoundPage = document.querySelector('.our-sound');

// Experience start
if (experiencePage) {

  // Artistes Grid
  let experienceGrid = document.querySelector('.experience-grid');

  // Array of Artistes
  const artistes = {

    james_brown: [ 'James Brown', 'james-brown' ],
    elton_john: ['Elton John', 'elton-john' ],
    lionel_richie: ['Lionel Richie', 'lionel-richie' ],
    kylie_minogue: ['Kylie Minogue', 'kylie-minogue' ],
    sophie: ['Sophie Ellis Bextor', 'sophie-ellis-bextor' ],
    diana: ['Diana Krall', 'diana-krall' ],
    buble: ['Michael Buble', 'michael-buble' ],
    goerge_michael: ['George Michael', 'george-michael' ],
    tom_jones: ['Tom Jones', 'tom-jones' ],
    amy_winehouse: ['Amy Winehouse', 'amy-winehouse' ],
    robbie_williams: ['Robbie Williams', 'robbie-williams' ],
    westlife: ['Westlife', 'westlife' ],
    mos_def: ['Mos Def', 'mos-def' ],
    daniel_bedingfield: ['Daniel Bedingfield', 'daniel-bedingfield' ],
    the_supremes: ['The Supremes', 'the-supremes' ],
    jamie_cullum: ['Jamie Cullum', 'jamie-cullum' ],
    all_saints: ['All Saints', 'all-saints' ],
    the_feeling: ['The Feeling', 'the-feeling' ]

  };

  // Convert Object to Array
  const artistesEntries = Object.entries(artistes);

  // Declare empty var for innerHTML
  let experienceGridInner = '';

  // Loop all arrays from object
  for( const [artistes, values] of artistesEntries ) {
    experienceGridInner += `
    <div data-aos="zoom-in-up" data-aos-delay="0" class="cell small-4 medium-3 large-2">
      <img class="artist-image" src="../../assets/img/artistes/${values[1]}-colour.jpg">
      <p class="artist-name"><small>${values[0]}</small></p>
    </div>
    `;
  };

  // Add loop result to var
  experienceGrid.innerHTML = experienceGridInner;

  // TV Shows Start
  // Get ul
  let shows = document.querySelector('.shows-js');

  // Build array for shows
  const showArray = ['The Charlotte Church Show', 'GM:TV', 'This Morning', 'Alan Titchmarsh', 'Later With Jools Holland', 'Justin Lee Collins Show', 'Parkinson', 'Top Of The Pops', 'National Lottery', 'Strictly Come Dancing', 'Pop Idol', 'Friday Night With Jonathan Ross'];

  // Declare empty var for innerHTML
  let showsInner = '';

  // Loop array entries and output HTML
  for( let i = 0; i < showArray.length; i++ ) {

    showsInner += `

      <li class="small-12 medium-6 large-4">${showArray[i]}</li>

    `;

  };

  // Add loop result to var
  shows.innerHTML = showsInner;

  // TV Shows End

  // Brands Start
  // Get Brands Container
  let brands = document.querySelector('.brands-js');

  // Build array for Brands
  const brandsArray = ['virgin-atlantic', 'hilton-hotels', 'bp', 'isle-of-wight-festival', 'jcb', 'aveva', 'pwc', 'bank-of-scotland', 'claridges', 'phizer', 'university-of-cambridge', 'bayer', 'rics', 'glastonbury', 'royal-college-of-music', 'halifax', 'courage-brewery', 'monsanto'];

  // Declare empty var for innerHTML
  let brandsInner = '';

  // Loop array and output HTML

  // Declare var for data counter
  let ii = 0;
  for( let i = 0; i < brandsArray.length; i++ ) {
    // Increment by 50
    ii+=50;

    brandsInner += `

    <div data-aos="zoom-in-up" data-aos-delay="${[ii]}" class="cell small-4 medium-3 large-2">
      <img class="brand-logo" src="../../assets/img/brands/${brandsArray[i]}-logo.svg">
    </div>

    `;

  };

  // Add loop result to var
  brands.innerHTML = brandsInner;

  // Brands End

  for (var i = 0; i <= 850; i+= 50) {
    console.log(i);
  }

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
    //.addIndicators({
    //  name: 'count',
    //})
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

// Nav Bar ////  Still required?? ////
// let menuButton = document.querySelector('.menu-icon');
// let titleBar = document.querySelector('.title-bar');
// menuButton.addEventListener('click', function() {
//   if (titleBar.classList.contains('title-bar-bg-js')) {
//     titleBar.classList.remove('title-bar-bg-js');
//   } else {
//     titleBar.classList.add('title-bar-bg-js');
//   }
// });


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
    playBtn = document.getElementById("playHeader"),
    pauseBtn = document.getElementById("pauseHeader");


  playBtn.addEventListener('click', function() {
    if (playBtn.classList.contains('show')) {
      playBtn.classList.remove('show');
      playBtn.classList.add('hide');
      pauseBtn.classList.remove('hide');
      pauseBtn.classList.add('show');
    }
  });

  pauseBtn.addEventListener('click', function() {
    if (playBtn.classList.contains('hide')) {
      playBtn.classList.remove('hide');
      playBtn.classList.add('show');
      pauseBtn.classList.remove('show');
      pauseBtn.classList.add('hide');
    }
  });

  rotateVinyl = new TweenMax.to('.vinyl', 8.0, {
    rotation: "360",
    ease: Linear.easeNone,
    repeat: -1,
    paused: true
  }).timeScale(0);


  playHeader.onclick = function() {
    rotateVinyl.play();
    TweenLite.to(rotateVinyl, 2, {
      timeScale: 1,
    });
  };


  pauseHeader.onclick = function() {
    TweenLite.to(rotateVinyl, 2, {
      timeScale: 0,
      onComplete: function() {
        this.pause()
      }
    })
  };



  // play.onclick = function() {
  //   rotateVinyl.paused(!rotateVinyl.paused());
  //   TweenLite.to(rotateVinyl, 2, {
  //     timeScale: 1,
  //   });
  //   play.innerHTML = rotateVinyl.paused() ? "Play" : "Pause"
  // };


}

// Vinyle Animation End

// Force album height = to width

if (ourSoundPage) {
  var albumWidth = $('.album').width();
  $('.album').css({
    'height': albumWidth + 'px'
  });
}



// $( document ).ready(function() {
//   $('.album-slick').slick({
//     dots: true,
//     infinite: true,
//     speed: 300,
//     slidesToShow: 1,
//     centerMode: true,
//     focusOnSelect: true,
//     variableWidth: true,
//     arrows: false,
//   });
// });
// Audio player carousel





// Audio player button controls for first carousel

// if (ourSoundPage) {
//
//   audioPlayer();
//
//   function audioPlayer() {
//     var currentSong = 0;
//     $("#audioPlayer")[0].src = $("#playlist li a")[0];
//     $("#playlist li a").click(function(e) {
//       e.preventDefault();
//       $("#audioPlayer")[0].src = this;
//       $("#audioPlayer")[0].play();
//       $("#playlist li").removeClass("current-song");
//       currentSong = $(this).parent().index();
//       $(this).parent().addClass("current-song");
//       console.log(currentSong);
//     });
//
//     var currentSong = 0;
//     $("#audioPlayer")[0].src = $("#playlist li a")[0];
//     $("#playlist li a").click(function(e) {
//       e.preventDefault();
//       $("#audioPlayer")[0].src = this;
//       $("#audioPlayer")[0].play();
//
//
//
//     });
//
//     $("#audioPlayer")[0].addEventListener("ended", function() {
//       currentSong++;
//       if (currentSong == $("#playlist li a").length)
//         currentSong = 0;
//       $("#playlist li").removeClass("current-song");
//       $("#playlist li:eq(" + currentSong + ")").addClass("current-song");
//       $("#audioPlayer")[0].src = $("#playlist li a")[currentSong].href;
//       $("#audioPlayer")[0].play();
//     });
//
//     $('#audioPlayer').on('timeupdate', function() {
//       $('#seekbar').attr("value", this.currentTime / this.duration);
//     });
//   }
//
// }


////////////////////////////
////////// DUKEBOX ////////
//////////////////////////

  // Object for Tracks and info
  const dukebox = {

    stevie_wonder: ['SignedSealedDelivered', 'I\'m Yours!', 'Stevie Wonder', 'Signed, Sealed, Delivered'],

    wilson_pickett: ['6345789', '634-5789', 'Wilson Pickett',  'The Exciting Wilson Pickett'],

    sam_dave: ['HoldOnImComing', 'Hold On, I\'m Comin\'', 'Sam & Dave', 'Hold On, I\'m Comin\'' ],

    wilson_pickett_midnight: ['TheMidnightHour', 'The Midnight Hour', 'Wilson Pickett', 'The Exciting Wilson Pickett'],

    arthur_conley: ['SweetSoulMusic', 'Sweet Soul Music', 'Arthur Conley', 'Sweet Soul Music'],

    wilson_pickett_mustang: ['MustangSally', 'Mustang Sally', 'Wilson Pickett', 'The Wicked Pickett'],

    smokey_robinson: ['MyGirl', 'My Girl', 'Smokey Robinson', 'Time Out for Smokey Robinson & The Miracles'],

    otis_redding: ['HardToHandle', 'Hard To Handle', 'Otis Redding', 'The Immortal Otis Redding'],

    james_brown: ['JBrownMix', 'Soul Power 74', 'James Brown', 'Instrumental'],

    wild_cherry: ['FunkyMusic', 'Play That Funky Music', 'Wild Cherry', 'Wild Cherry'],

    stevie_wonder_wish: ['IWish', 'I Wish', 'Stevie Wonder', 'Songs in the Key of Life']

  }

  // Check page == Our Sound
  if(ourSoundPage) {

    // Get Parent
    let albumSlick = document.querySelector('.album-slick');
    // console.log(albumSlick);

    // Convert Object to Array
    const entries = Object.entries(dukebox);

    // Dynamically build Dukebox HTML

    let dukeboxLoop = '';

    for(const [dukebox, values] of entries) {
    // console.log(dukebox[0], values[1]);
      dukeboxLoop += `<li class="current-song album-cover">
        <a href="../../assets/media/${dukebox[0], values[0]}.mp3">
        <div class="album-wrapper">
          <!-- album artwork -->
          <div class="album-cover-artwork">
            <!-- <progress id="seekbar" value="0" max="1"></progress> -->
            <div class="album-cover-artwork-highlight"></div>
          </div>
          <!-- album info -->
          <div class="album-info">
            <div class="grid-container grid-y cover-info text-center">
              <!-- padding  top -->
              <div class="cell auto"></div>
              <!-- album info -->
              <div class="cell shrink">
                <p>${dukebox[0], values[1]}</p>
                <h2>${dukebox[0], values[2]}</h2>
              </div>
              <!-- padding  bottom -->
              <div class="cell auto"></div>
              <div class="cell shrink">
                <p><small>${dukebox[0], values[3]}</small>
              </div>
            </div>
          </div>
        </div>
        </a>
      </li>
      `;

    };

    albumSlick.innerHTML = dukeboxLoop;

    // Init slick on completed HTML
    $('.album-slick').slick({
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      centerMode: true,
      focusOnSelect: true,
      variableWidth: true,
      arrows: false,
    });

    // Get Remaining Variables after JS Builds HTML
    let audioPlayer = document.getElementById('audioPlayer');
    // console.log(audioPlayer);
    let playList = document.getElementById('playlist');
    // console.log(playList);
    let playListItem = document.querySelectorAll('#playlist li');
    // console.log(playListItem);
    let playListLink = document.querySelectorAll('#playlist .album-cover > a');
    // console.log(playListLink);
    let slickActive = document.querySelector('.slick-slide.slick-active li a');
    // console.log(slickActive);
    let albumCoverFirst = document.querySelector('.slick-slide.slick-active .album-cover-artwork');
    // console.log(albumCoverFirst);
    let playButton = document.querySelector('.play');
    // console.log(playButton);
    let playButtonIcon = document.querySelector('.play > .fa-play-circle');
    // console.log(playButtonIcon);
    let vUp = document.querySelector('.v-up');
    // console.log(vUp);
    let vDown = document.querySelector('.v-down');
    // console.log(vDown);

    // Play Songs on click / touch

    // Set var for input type
    let inputType = '';
    if( whatInput.ask() === 'touch' ) {
      inputType = 'touchstart';
    } else {
      inputType = 'click';
    }


    // Set Default audio track before clicked
    audioPlayer.setAttribute('src', slickActive);
    // Run loop for link count
    for( let i = 0; i < playListLink.length; i ++ ) {
      // Add Eventlistener on click
      playListLink[i].addEventListener(inputType, function(e) {
        // Prevent Audio player loading
        e.preventDefault();
        // Set src of audio player to clicked link
        audioPlayer.setAttribute('src', playListLink[i]);

        // Change icon on play button
        if( playButtonIcon.classList.contains('fa-play-circle') ) {
          playButtonIcon.classList.remove('fa-play-circle');
          playButtonIcon.classList.add('fa-pause-circle');
        }

        // Finally, play newly set src
        audioPlayer.play();

      });

    }

    // Assign Seekbar to Active slide

    // Hook into native slick function 'afterChange'
    $('.album-slick').on('afterChange', function(){
      // console.log('slide changed');
      // Get album art work div
      let albumCover = $('.slick-current .album-cover-artwork')[0];
      // console.log(albumCover);
      for(let i = 0; i < playListItem.length; i ++) {
        if( !playListItem[i].classList.contains('current-song') ) {
          playListItem[i].classList.add('current-song');
        }
      }
      if(albumCover.childElementCount < 2) {
        // Create progress element and append to DOM
        let progress = document.createElement('PROGRESS');
        progress.setAttribute('id', 'seekbar');
        progress.setAttribute('value', '0');
        progress.setAttribute('max', '1');
        albumCover.appendChild(progress);
        // Play progress
        $('#audioPlayer').on('timeupdate', function() {
          $('.slick-current #seekbar').attr("value", this.currentTime / this.duration);
        });

      }

    });

      let slickDots = document.querySelectorAll('.album-slick .slick-dots li');
      // console.log(slickDots);

      for(let i = 0; i < slickDots.length; i++) {
        slickDots[i].addEventListener('click', function() {
          audioPlayer.setAttribute('src', playListLink[i]);

          // Change icon on play button
          if( playButtonIcon.classList.contains('fa-play-circle') ) {
            playButtonIcon.classList.remove('fa-play-circle');
            playButtonIcon.classList.add('fa-pause-circle');
          }

          audioPlayer.play();
        });
      }


      // Play / Pause Button
      playButton.addEventListener('click', function() {
        audioPlayer.play();
        if( playButtonIcon.classList.contains('fa-play-circle') ) {
          playButtonIcon.classList.remove('fa-play-circle');
          playButtonIcon.classList.add('fa-pause-circle');
        } else {
          playButtonIcon.classList.remove('fa-pause-circle');
          playButtonIcon.classList.add('fa-play-circle');
          audioPlayer.pause();
        }
      });

      // Volume Up / Down Buttons
      vUp.addEventListener('click', function() {
        audioPlayer.volume+=0.1;
      });

      vDown.addEventListener('click', function() {
        audioPlayer.volume-=0.1;
      });

  }



// What We Do Page header
let whatWeDo = document.querySelector('.what-we-do');
if(whatWeDo) {

  // Loop for circlie

  let whatWeDoMhImg = document.querySelector('.what-we-do > .masthead-images');

  // Count of elements
  let circlieCount = 37;

  // Blank var for innerHTML
  let imgInner = ''

  for( let i = 0; i < circlieCount; i++ ) {
    imgInner += `
      <div class="circlie"></div>
    `;
  };

  whatWeDoMhImg.innerHTML = imgInner;

}

// center elements
TweenMax.set(".circlie", {
  left: "50%",
  top: "50%",
  xPercent: -50,
  yPercent: -50,
  alpha: 0
});

// random scale, or I can use cycle here
// TweenMax.staggerTo(".circlie", 1, {cycle: {scale:[1, .25, .5, .75]}});

var scales = [0.25, 0.5, 0.75, 1];
var colors = ["#f81acc", "#E00E4E", "#5219AA", "#C90D77", "#CF368D"];

TweenLite.set(".circlie", {
  scale: sample(scales)
});

var tl = new TimelineMax({
  repeat: -1
});

for (var i = 0; i < 100; i++) {

  tl.to(".circlie", 1, {
    backgroundColor: sample(colors),
    x: random(-300, 300),
    y: random(-300, 300),
    alpha: random(1),
    repeat: 1,
    repeatDelay: 0.1,
    yoyo: true,
    ease: Expo.easeOut
  });
}

function sample(list) {
  return function() {
    return list[Math.floor(Math.random() * list.length)];
  }
}

function random(min, max) {
  if (max == null) {
    max = min;
    min = 0;
  }
  return function() {
    return Math.random() * (max - min) + min;
  }
}


});
