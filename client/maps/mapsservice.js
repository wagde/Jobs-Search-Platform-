mod.service('autoComp', autoComp)


function autoComp() {
    this.aoutocomp = function () {
        let autocompleteFormField = document.getElementById('address');
        let autocomplete = new google.maps.places.Autocomplete((autocompleteFormField), {
            types: ['(cities)'],
        });
        google.maps.event.addListener(autocomplete, 'place_changed', () => {

        })
    }

}

mod.service('maps', maps)



function maps(getDataService) {
    ctrl = this

     this.runmap =function() {


        var mapOptions = {
            zoom: 10,
            center: new google.maps.LatLng(32.017136, 34.745441),
            mapTypeId: google.maps.MapTypeId.TERRAIN
        }
        ctrl.map = new google.maps.Map(document.getElementById('map'), mapOptions);


        var infoWindow = new google.maps.InfoWindow();


        var createMarker = function (info) {

            var marker = new google.maps.Marker({
                map: ctrl.map,
                position: new google.maps.LatLng(info.lat, info.long),
                title: info.city
            });
            marker.content = '<div class="infoWindowContent">' + info.desc + '</div>';

            google.maps.event.addListener(marker, 'click', function () {
                infoWindow.setContent('<h2>' + marker.title + '</h2>' + marker.content);
                infoWindow.open(ctrl.map, marker);
            });


            ctrl.markers.push(marker);

        }


        ctrl.openInfoWindow = function (e, selectedMarker) {
            e.preventDefault();
            google.maps.event.trigger(selectedMarker, 'click');
        }
        ctrl.getlatlung = function (place, desc,jobname) {

            placeName = { place };
            console.log(placeName)
            getDataService.getlunglat(placeName, function (res) {
                ctrl.markers = [];

                var placeinfo = {
                    city: jobname,
                    desc,
                    lat: res.data[0],
                    long: res.data[1]
                }

                createMarker(placeinfo);

                ctrl.openInfoWindow(event, ctrl.markers[0]);
                console.log(res.data);
            })

        }
    }
}

// var cities = [
//     {
//         city: 'Toronto',
//         desc: 'This is the best city in the world!',
//         lat: 43.7000,
//         long: -79.4000
//     },
//     {
//         city: 'New York',
//         desc: 'This city is aiiiiite!',
//         lat: 40.6700,
//         long: -73.9400
//     },
//     {
//         city: 'Chicago',
//         desc: 'This is the second best city in the world!',
//         lat: 41.8819,
//         long: -87.6278
//     },
//     {
//         city: 'Los Angeles',
//         desc: 'This city is live!',
//         lat: 34.0500,
//         long: -118.2500
//     },
//     {
//         city: 'Las Vegas',
//         desc: 'Sin City...\'nuff said!',
//         lat: 36.0800,
//         long: -115.1522
//     }
// ];

// mod.component('mapsComponent', {
//     templateUrl: '/maps/mapstemplates.html',
//     controller: ['maps', function (maps) {
//         // this.$onInit = function () {
//         this.maps = maps;

//     }]
// });