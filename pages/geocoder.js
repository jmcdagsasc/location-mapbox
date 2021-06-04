import Geocoder from "react-mapbox-gl-geocoder";

const GeocoderPage = () => {
  return (
    <div>
      <Geocoder
        mapboxApiAccessToken={mapboxApiKey}
        onSelected={this.onSelected}
        viewport={viewport}
        hideOnSelect={true}
        value=""
        queryParams={params}
      />
    </div>
  );
};

export default GeocoderPage;
