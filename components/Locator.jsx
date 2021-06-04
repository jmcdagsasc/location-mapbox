const Locator = () => {
  const TOKEN =
    "pk.eyJ1Ijoiam9yZ2VkYWdzYXNjIiwiYSI6ImNrcGhnMDEwbzBzNW0ydnF4eGxpdTN4bGoifQ.h_owhjWx6lSGkwxoaVUkBw";
  mapboxgl.accessToken = TOKEN;
  const map = new mapboxgl.Map({
    container: "map", // container id
    style: "mapbox://styles/mapbox/streets-v11",
    center: [-96, 37.8], // starting position
    zoom: 3, // starting zoom
  });

  // Add geolocate control to the map.
  map.addControl(
    new mapboxgl.GeolocateControl({
      positionOptions: {
        enableHighAccuracy: true,
      },
      trackUserLocation: true,
    })
  );
  return <div id="map"></div>;
};

export default Locator;
