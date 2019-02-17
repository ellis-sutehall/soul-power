// Run script for home only
// Get home class
let homePage = document.querySelector('.home');

if( homePage ) {

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
    // Local File
    // xhttp.open('GET', '/assets/video/showreel.txt', true);
    // YouTube
    xhttp.open('GET', '/assets/video/showreel-yt.txt', true);
    xhttp.send();
  }
  // Showreel Video Swap End



  // Loop for Presenting Soul Power
  let presenting = document.querySelector('.presenting');

  const bandMembers = ['name','name','name','name','name','name','name','name','name','name','name','name',];

  let presentingInner = '';

  for( let i = 0; i < bandMembers.length; i++ ) {
    presentingInner += `
    <div data-aos="zoom-in-up" data-aos-delay="0" class="cell small-6 medium-3 large-2">
      <img class="artist-image" src="../../assets/img/profile/low-key-saxophone.jpg"></img>
      <p class="artist-name"><small>${bandMembers[i]}</small></p>
    </div>
    `;
  };

  presenting.innerHTML = presentingInner;

}
