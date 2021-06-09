import React, { PureComponent } from "react";
import Image from "next/image";
import ReactMapGL, { Marker } from "react-map-gl";
import Geocoder from "react-mapbox-gl-geocoder";
import { Container, Col, Row } from "reactstrap";
import StoreFinder from "../components/StoreFinder";
import Link from "next/link";

const mapStyle = {
  width: "100%",
  height: 600,
};

const mapboxApiKey =
  "pk.eyJ1Ijoiam9yZ2VkYWdzYXNjIiwiYSI6ImNrcGhnMDEwbzBzNW0ydnF4eGxpdTN4bGoifQ.h_owhjWx6lSGkwxoaVUkBw";

const params = {
  country: "mx",
};

class MapView extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        latitude: 19.341511737775104,
        longitude: -99.09983885959429,
        zoom: 15,
      },
    };
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition((position) => {
      this.setState((prevState) => ({
        viewport: {
          ...prevState.viewport,
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        },
      }));
    });
  }

  onSelected = (viewport, item) => {
    this.setState({
      viewport,
    });
  };

  render() {
    const { viewport } = this.state;
    return (
      <Container fluid={true}>
        <Row>
          <Col>
            <h2>Ingresa dirección de envío</h2>
          </Col>
          <br />
          <Link href="/">Inicio</Link>
        </Row>
        <Row className="py-4">
          <Col xs={2}>
            <Geocoder
              mapboxApiAccessToken={mapboxApiKey}
              onSelected={this.onSelected}
              viewport={viewport}
              hideOnSelect={true}
              value=""
              queryParams={params}
              updateInputOnSelect
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <ReactMapGL
              mapboxApiAccessToken={mapboxApiKey}
              mapStyle="mapbox://styles/mapbox/streets-v11"
              {...viewport}
              {...mapStyle}
              onViewportChange={(viewport) => this.setState({ viewport })}
            >
              <Marker
                latitude={this.state.viewport.latitude}
                longitude={this.state.viewport.longitude}
              >
                <Image
                  alt="manolo.jpg"
                  width={48}
                  height={48}
                  className="class"
                  src="/farmazone-marker-icon.png"
                />
              </Marker>
            </ReactMapGL>
          </Col>
        </Row>
        {/* <StoreFinder
          location={[
            this.state.viewport.latitude,
            this.state.viewport.longitude,
          ]}
        /> */}
      </Container>
    );
  }
}

export default MapView;
