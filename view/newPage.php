<h1>NEW PAGE</h1>

<style>
    /* Always set the map height explicitly to define the size of the div
     * element that contains the map. */
    #map {
        height: 100%;
    }
    /* Optional: Makes the sample page fill the window. */
    html, body {
        height: 100%;
        margin: 0;
        padding: 0;
    }
</style>

<script type="text/javascript">
    var map;
    function init() {
        map = new google.maps.Map(document.getElementById('map'), {
            center: {lat: -34.397, lng: 150.644},
            zoom: 8
        });
    }
</script>



<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBTUHSPvr0DJrHjyejdy-CbnQkqXswJEsU&callback=init"
        async defer></script>

<div id="map"></div>


<!-- <script type="text/javascript" src="<?= JS;?>loadMap.js"></script>-->
