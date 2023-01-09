import ReactMapBox, { Marker, GeolocateControl } from "react-map-gl";
// eslint-disable-next-line import/no-webpack-loader-syntax
mapboxgl.workerClass =
  require("worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker").default;
import styled from "styled-components";
import toilet from "./assets/toilet.png";
import { useState, useEffect } from "react";
import PopupComponent from "./PopupComponent";
import gendered from "./assets/gendered.png";

const MapContainer = ({ handleChange, setFormData, formData }) => {
  const [selectedBathroom, setSelectedBathroom] = useState(null);
  const [bathArr, setBathArr] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACKEND_URL}/bathrooms`)
      .then((res) => res.json())
      .then((data) => {
        setBathArr(data.data);
      });
  }, []);

  const mapClick = (e) => {
    e.preventDefault();
    setFormData({
      ...formData,
      lng: e.lngLat.lng,
      lat: e.lngLat.lat,
    });
  };
  const rightClick = () => {
    setFormData({
      ...formData,
      lng: null,
      lat: null,
    });
    setSelectedBathroom(null);
  };
  if (!bathArr.length) {
    return (
      <LoadingDiv>
        <div>
          <h1>Loading...</h1>
        </div>
        <div>This might take a minute...</div>
      </LoadingDiv>
    );
  }
  return (
    <StyledBox>
      <ReactMapBox
        className="mapboxgl-canvas"
        mapboxAccessToken="pk.eyJ1IjoiYWxsdGhlcmlnaHRoeXBlIiwiYSI6ImNsYm55cXMyeTBhYnYzcG1xazVsanpiZGUifQ.1qBx_PT7xzE-ryPmmsSTlA"
        initialViewState={{
          longitude: -73.585016,
          latitude: 45.516378,
          zoom: 12,
        }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        onClick={(e) => mapClick(e)}
        onContextMenu={rightClick}
      >
        <GeolocateControl showAccuracyCircle={false} />
        {bathArr.map((each) => {
          return (
            <Marker latitude={each.lat} longitude={each.lng} key={each.lat}>
              <StyledMarker>
                <h4>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setSelectedBathroom({
                        name: each.name,
                        lng: each.lng,
                        lat: each.lat,
                        details: each.details,
                        accessible: each.accessible,
                        gendered: each.gendered,
                      });
                    }}
                  >
                    {each.name}
                  </button>
                </h4>
                {each.gendered === true ? (
                  <StyledIcon
                    src={gendered}
                    alt="This is a gendered bathroom"
                  />
                ) : (
                  <StyledIcon src={toilet} />
                )}
              </StyledMarker>
            </Marker>
          );
        })}
        {formData.lat && (
          <Marker latitude={formData.lat} longitude={formData.lng}></Marker>
        )}
        {selectedBathroom && (
          <PopupComponent selectedBathroom={selectedBathroom} />
        )}
      </ReactMapBox>
    </StyledBox>
  );
};

const StyledMarker = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const StyledBox = styled.div`
  width: 800px;
  height: 500px;
  @media (max-width: 1000px) {
    width: 100%;
  }
  @media (max-width: 390px) {
  }
`;
const StyledIcon = styled.img`
  width: 35px;
`;
const LoadingDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export default MapContainer;
