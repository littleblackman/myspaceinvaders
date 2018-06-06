window.onload = function () {

    
    let myMap = new MyMap();
    

    var map;
    function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
            center: {lat: -myMap.lat, lng: myMap.long},
            zoom: MyMap.zoom
        });
    }


};