window.onload = function() {

  var audio = document.getElementById('audioID');

  document.getElementById('container').addEventListener('mouseenter', autoplay(), false)
  
  function autoplay(){
    setTimeout(() => {
      audio.play();
    }, 500);
  }

}