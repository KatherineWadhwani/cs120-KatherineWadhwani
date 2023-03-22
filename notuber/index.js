let map;
let myLat = 0;
let myLng = 0;
var marker;
let cars = [];
// Create the script tag, set the appropriate attributes
var script = document.createElement('script');
script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBhXJr5eCkwhUUWGi7t1Hpi8Uo8PRHkH64&libraries=geometry&callback=initMap&v=weekly';
script.async = true;

// Attach your callback function to the `window` object
window.initMap = function () {

    //Find my position and add it to the map
    navigator.geolocation.getCurrentPosition(function loc(position) {
        myLat = position.coords.latitude;
        myLng = position.coords.longitude;

        map = new google.maps.Map(document.getElementById("map"), {
            center: { lat: myLat, lng: myLng },
            zoom: 8,
        });
        marker = new google.maps.Marker({
            position: { lat: myLat, lng: myLng },
            map: map,
            title: ""
        });
        //Add cars
        connectToServerAndAddCars();

        //Add pop-up indicating closest car to me
        onClick();
    })
}

function connectToServerAndAddCars() {
    var url = "https://jordan-marsh.herokuapp.com/rides";
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status == 200) {
            resultingData = xhr.responseText;
            message = JSON.parse(resultingData);

            for (numLines = 0; numLines < message.length; numLines++) {
                //Create car markers and add them to the array of cars
                carMarker = new google.maps.Marker({
                    lat: message[numLines].lat,
                    lng: message[numLines].lng,
                    position: { lat: message[numLines].lat, lng: message[numLines].lng },
                    map: map,
                    id: message[numLines].id,
                    username: message[numLines].username,
                    createdOn: message[numLines].created_on,
                    icon: "car.png",
                    distance: ""
                })
                cars.push(carMarker);
            }
            //Call function to determine closest car to me
            closestCar(cars);
        }
    }

    //Sending username and location to server
    latStr = myLat.toString();
    lngStr = myLng.toString();
    text1 = "username=lZzlNkup&lat=";
    text1 = text1.concat(latStr);
    text1 = text1.concat("&lng=");
    text1 = text1.concat(lngStr);

    xhr.send(text1);
}

function onClick() {
    var infowindow = new google.maps.InfoWindow();

    // Open info window on click of marker
    google.maps.event.addListener(marker, 'click', function () {
        infowindow.setContent(marker.title);
        infowindow.open(map, marker);
    })
}

function closestCar(cars) {
    let minDist = Infinity;
    let car;

    //Iterate through all cars to find closest
    for (numLines = 0; numLines < cars.length; numLines++) {
        distance = google.maps.geometry.spherical.computeDistanceBetween(marker.position, cars[numLines].position);
        if (distance < minDist) {
            minDist = distance;
            car = cars[numLines];
        }
    }

    //Convert distance to miles
    distance = 0.00062137 * distance;

    //Construct pop-up window message
    carIdString = car.username.toString();
    distanceString = distance.toString();
    message = "Car: ";
    message = message.concat(carIdString);
    message = message.concat(", Distance: ");
    message = message.concat(distanceString);
    message = message.concat(" miles");

    marker.title = message;

    //Draw polyline to closest car
    polyline(car);
}

function polyline(car) {
    //Construct polyline
    var polylineCoordinates = [
        { lat: myLat, lng: myLng },
        car.position
    ];

    var polyline = new google.maps.Polyline({
        path: polylineCoordinates,
        geodesic: true,
        strokeColor: "#FF0000",
        strokeOpacity: 1.0,
        strokeWeight: 2,
    })
    polyline.setMap(map);
}

// Append the 'script' element to 'head'
document.head.appendChild(script);