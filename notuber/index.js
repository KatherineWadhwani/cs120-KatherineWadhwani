let map;

// Create the script tag, set the appropriate attributes
var script = document.createElement('script');
script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBhXJr5eCkwhUUWGi7t1Hpi8Uo8PRHkH64&callback=initMap&v=weekly';
script.async = true;


// Attach your callback function to the `window` object
window.initMap = function () {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 42.352271, lng: -71.05524200000001 },
    zoom: 8,
  });
  new google.maps.Marker({
    position: { lat: 42.3453, lng: -71.0464 },
    map: map,
    id: "mXfkjrFw",
    icon: "car.png"
  });
  new google.maps.Marker({
    position: { lat: 42.3662, lng: -71.0621},
    map: map,
    id: "nZXB8ZHz",
    icon: "car.png"
  });
  new google.maps.Marker({
    position: { lat: 42.3603, lng: -71.0547},
    map: map,
    id: "Tkwu74WC",
    icon: "car.png"
  });
  new google.maps.Marker({
    position: { lat: 42.3472, lng: -71.0802},
    map: map,
    id: "5KWpnAJN",
    icon: "car.png"
  });
  new google.maps.Marker({
    position: { lat: 42.3663, lng: -71.0544},
    map: map,
    id: "uf5ZrXYw",
    icon: "car.png"
  });
  new google.maps.Marker({
    position: { lat: 42.3542, lng: -71.0704},
    map: map,
    id: "VMerzMH8",
    icon: "car.png"
  });
};

// Append the 'script' element to 'head'
document.head.appendChild(script);
