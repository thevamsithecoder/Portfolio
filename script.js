let typed = new Typed('.auto-input',{
    strings: ['Frontend Developer!', 'Backend Developer!','Full Stack Developer!'],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true //it will run infinitely
})

document.addEventListener("DOMContentLoaded", function () {
    const videos = document.querySelectorAll("video");
  
    videos.forEach((video) => {
      video.addEventListener("play", function (event) {
        // Pause all other videos when one video plays
        videos.forEach((v) => {
          if (v !== event.target) {
            v.pause();
          }
        });
      });
    });
  });
  