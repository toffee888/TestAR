navigator.mediaDevices.getUserMedia({audio: false, video: true})
  .then(stream => {
    let $video = document.querySelector('#webcam')
    $video.srcObject = stream
    $video.onloadedmetadata = () => {
      $video.play()
    }
  })

AFRAME.registerComponent('switchcamera', {
      init: function () {

      this.el.addEventListener('click', function (evt) {
      visible(menu, f);  
      });
      }
      });
