/*
const {Geocoder} = await google.maps.importLibrary("geocoding")


export const GeocodeToll = (adresse) =>{
    var geocoder;


    var map;

    function initialize() {
      geocoder = new google.maps.Geocoder();
      var latlng = new google.maps.LatLng(-34.397, 150.644);
      var mapOptions = {
        zoom: 8,
        center: latlng
      }
      map = new google.maps.Map(document.getElementById('map'), mapOptions);
    }
  
    function codeAddress() {
    //   var address = document.getElementById('address').value;

      geocoder.geocode( { 'address': address}, function(results, status) {
        if (status == 'OK') {
          map.setCenter(results[0].geometry.location);
          var marker = new google.maps.Marker({
              map: map,
              position: results[0].geometry.location
          });
        } else {
          alert('Geocode was not successful for the following reason: ' + status);
        }
      });
    }
  
}

*/


/*
export const GeocodeToll = async (adresse) =>{
    const url = 'https://wft-geo-db.p.rapidapi.com/v1/geo/city=wavre';

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'e02bc8fa29msh9d0c33cc8c9507dp1dd155jsn0ee742843e4e',
            'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
  
}
*/
