
var toggle = false
function audioControl(){
  var audio = document.getElementById('audio')
  if (!toggle){
    toggle = true
    audio.play()
  }else{
    toggle = false
    audio.pause()
  }

}
$(function() {
    var panoramaview = pannellum.viewer('panorama', {
        "default": {
            "firstScene": "pos_depan",
            "type": "equirectangular",
            "autoRotate": -5,
          "autoLoad": true,
          "border": false,
          "backgroundColor": ([0,0,0]),
          "compass": false,
          "escapeHTML": "true",
        },
    
        
        "scenes": {
            
            
            "lapangan_tengah": {
            "panorama": "img/360img2.JPG",
            "hotSpots": [
              {
                  "pitch": 4.267,
                  "yaw": -133.337,
                  "type": "scene",
                  "text": "Kamar Perempuan",
                  "sceneId": "kamar_perempuan"
              },{
                  "pitch": 4.877,
                  "yaw": -6.287,
                  "type": "scene",
                  "text": "Pos Depan",
                  "sceneId": "pos_depan"
              }]
            },
            
            "pos_depan": {
            "panorama": "img/360img3.JPG",
            "hotSpots": [
              {
                  "pitch": 4.109,
                  "yaw": 1.242,
                  "type": "scene",
                  "text": "Lapangan Tengah",
                  "sceneId": "lapangan_tengah"
              }]
            },
    
            "kamar_perempuan": {
            "panorama": "img/360img4.JPG",
            "hotSpots": [
              {
                  "pitch": 17.236,
                  "yaw": 10.263,
                  "type": "scene",
                  "text": "Lapangan Tengah",
                  "sceneId": "lapangan_tengah"
              }]
            }
        }

      });


    document.getElementById('sound').addEventListener('click', function(e) {
      audioControl()
    });
    document.getElementById('information').addEventListener('click', function(e) {
      $('#infoModal').modal()
    });
    document.getElementById('mapbutton').addEventListener('click', function(e) {
      $('#mapModal').modal()
    });
      console.log(panoramaview)
});