import MapGL, { Marker, NavigationControl, Popup } from "react-map-gl";

import CityInfo from "../demos/map/city-info";
import CityPin from "../demos/map/city-pin";
import Head from "next/head";
import fetch from "../lib/fetch";
import useSWR from "swr";
import { useState } from "react";

const MapMarkers = () => {
  const { data, error } = useSWR(`${process.env.baseUrl}api/cities`, fetch);
  const [viewport, setViewport] = useState({
    latitude: 37.785164,
    longitude: -100,
    zoom: 3.5,
    bearing: 0,
    pitch: 0
  });
  const [popupInfo, setPopupInfo] = useState(null);

  const _updateViewport = viewport => {
    setViewport(viewport);
  };

  const _renderCityMarker = (city, index) => {
    return (
      <Marker
        key={`marker-${index}`}
        longitude={city.longitude}
        latitude={city.latitude}
      >
        <CityPin size={20} onClick={() => setPopupInfo(city)} />
      </Marker>
    );
  };

  const _renderPopup = () =>
    popupInfo && (
      <Popup
        tipSize={5}
        anchor="top"
        longitude={popupInfo.longitude}
        latitude={popupInfo.latitude}
        onClose={() => setPopupInfo(null)}
      >
        <CityInfo info={popupInfo} />
      </Popup>
    );

  if (error) return <div>Failed to load media data</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <>
      <Head>
        <link
          href="https://api.tiles.mapbox.com/mapbox-gl-js/v1.6.0/mapbox-gl.css"
          rel="stylesheet"
        />
      </Head>
      <MapGL
        {...viewport}
        width="100%"
        height="100%"
        mapStyle="mapbox://styles/mapbox/dark-v9"
        onViewportChange={_updateViewport}
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
        {data.map(_renderCityMarker)}
        {_renderPopup()}
        <NavigationControl onViewportChange={_updateViewport} />
      </MapGL>
    </>
  );
};

export default MapMarkers;
