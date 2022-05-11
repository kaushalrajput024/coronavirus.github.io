mapboxgl.accessToken = 'pk.eyJ1Ijoia2F1c2hhbHJhanB1dCIsImEiOiJja3hmb2hjZzYwaGt1MnZueGptc3JmcWV4In0.5hV4KQ5DpO29IkBXQA4mvg';
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    // center: [12.550343, 55.665957],
    zoom: 1
});

function plot() {

    fetch(
        "/data.json"
    )
        .then(response => response.json())
        .then(rsp => {
            rsp.data.forEach(element => {
                longitude = element.longitude;
                latitude = element.latitude;

                // Create a default Marker and add it to the map.
                const marker1 = new mapboxgl.Marker({ color: 'red' })
                    .setLngLat([longitude, latitude])
                    .addTo(map);
            });
        }).catch((Error) => console.log(Error))
}
plot();