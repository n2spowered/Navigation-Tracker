  var directionsDisplay;
  var directionsService = new google.maps.DirectionsService();
  var map;
  var oldDirections = [];
  var currentDirections = null;

  function initialize() {
    var myOptions = {
      zoom: 17,
      center: new google.maps.LatLng(41.3164779,-74.1259843),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);


    directionsDisplay = new google.maps.DirectionsRenderer({
        'map': map,
        'preserveViewport': true
    });

    directionsDisplay.setPanel(document.getElementById("directions_panel"));

    calcRoute();
  }

  function calcRoute() {
    var start = '332 Red Apple Ct Central Valley, NY 10917W';
    var end = '1173 Marigold Ct, Central Valley, NY 10917';
    var request = {
        origin:start,
        destination:end,
        travelMode: google.maps.DirectionsTravelMode.DRIVING
    };
    directionsService.route(request, function(response, status) {
      if (status == google.maps.DirectionsStatus.OK) {
        console.log(response);
        directionsDisplay.setDirections(response);
      }
    });
  }