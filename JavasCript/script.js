function iniciarMap(){
    var coord = {lat:-34.8340232 ,lng: -58.6465016};
    var map = new google.maps.Map(document.getElementById('mapa'),{
      zoom: 10,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}