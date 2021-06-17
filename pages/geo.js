import React, { useState, useEffect } from "react";

import Image from "next/image";
import ReactMapGL, { Marker } from "react-map-gl";
import Geocoder from "react-mapbox-gl-geocoder";
import { Container, Col, Row } from "reactstrap";
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

const MapPage = () => {
  const [viewport, setViewport] = useState({
    latitude: 19.341511737775104,
    longitude: -99.09983885959429,
    zoom: 16,
  });
  const [address, setAddress] = useState("Dirección");
  const [prevViewport, setPrevViewport] = useState(viewport);
  const [prevLatitude, setPrevLatitude] = useState(19.341511737775104);
  const [prevLongitude, setPrevLongitude] = useState(-99.09983885959429);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      setPrevViewport({ latitude, longitude });
      setViewport(prevViewport);
      setPrevLatitude(latitude);
      setPrevLongitude(longitude);
    });
  }, [viewport]);

  const onSelected = (viewport, item) => {
    setViewport({
      viewport,
    });
    console.log(item);
    setPrevLatitude(item.center[1]);
    setPrevLongitude(item.center[0]);
    setAddress(item.place_name);
  };

  return (
    <div>
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
            <br />
            <h2>{address}</h2>
            <br />
            <Geocoder
              mapboxApiAccessToken={mapboxApiKey}
              onSelected={onSelected}
              viewport={viewport}
              hideOnSelect={false}
              updateInputOnSelect
              value=""
              queryParams={params}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            {/* <ReactMapGL
              mapboxApiAccessToken={mapboxApiKey}
              mapStyle="mapbox://styles/mapbox/streets-v11"
              {...viewport}
              {...mapStyle}
              onViewportChange={(viewport) => setViewport({ viewport })}
            >
              <Marker
                offsetLeft={0}
                offsetTop={-24}
                latitude={prevLatitude}
                longitude={prevLongitude}
              >
                <Image
                  alt="Marker Icon"
                  width={48}
                  height={48}
                  className="class"
                  src="/farmazone-marker-icon.png"
                />
              </Marker>
            </ReactMapGL> */}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MapPage;
