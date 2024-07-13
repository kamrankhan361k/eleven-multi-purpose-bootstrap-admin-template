import MapGL, { GeolocateControl } from "react-map-gl";

import Head from "next/head";
import { useState } from "react";

const MapLocation = () => {
  const [viewport, setViewport] = useState({
    latitude: 37.8,
    longitude: 46,
    zoom: 3,
    bearing: 0,
    pitch: 0
  });

  const _onViewportChange = viewport => setViewport(viewport);

  return (
    <>
      <Head>
        <link
          href="https://api.tiles.mapbox.com/mapbox-gl-js/v1.6.0/mapbox-gl.css"
          rel="stylesheet"
        />
      </Head>
      <div className="app-map" style={{ height: "100%" }}>
        <MapGL
          {...viewport}
          width="100%"
          height="100%"
          mapStyle="mapbox://styles/mapbox/satellite-v9"
          onViewportChange={_onViewportChange}
          mapboxApiAccessToken={process.env.mapBoxApi}
          style={{
            position: "absolute",
            top: "0px",
            left: "0px",
            right: "0px",
            bottom: "0px",
            overflow: "hidden",
            flex: "1 1 auto",
            flexDirection: "row",
            display: "flex"
          }}
        >
          <GeolocateControl
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              margin: 10
            }}
            positionOptions={{ enableHighAccuracy: true }}
            trackUserLocation={true}
          />
        </MapGL>
      </div>
    </>
  );
};

export default MapLocation;
