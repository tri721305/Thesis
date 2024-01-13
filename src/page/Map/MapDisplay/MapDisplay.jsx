import React, { useRef, useEffect } from "react";
import { Paper, Typography, useMediaQuery } from "@material-ui/core";
import LocationOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import { Rating } from "@mui/material";
import Map, { GeolocateControl, NavigationControl, Marker } from "react-map-gl";
import "./style.scss";
import useStyles from "./styles";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken = "pk.eyJ1IjoibWluaHRyaTEyMDUiLCJhIjoiY2xvd2psOWhoMDE1ZjJ1cnZtYWRkcDk2NCJ9.NpJq11xojyIIjBlbw0zAbQ";

const MapDisplay = ({ setChildClicked, places, setCoordinates, setBounds, coordinates }) => {
     const classes = useStyles();

     const mapContainerRef = useRef(null);
     const geoControlRef = useRef();

     const isDesktop = useMediaQuery("(min-width: 600px)");

     const geolocateControlRef = React.useCallback((ref) => {
          if (ref) {
               (async () => {
                    while (!mapContainerRef.current) {
                         await (() => new Promise((resolve) => setTimeout(resolve, 200)))();
                         ref.trigger();
                    }
               })();
          }
     }, []);

     //event lấy vị trí hiện tại
     const onGeolocate = React.useCallback((event) => {
          console.log("event", event);
          const coords = event.coords;
          //   setViewState((prevState) => ({
          //        ...prevState,
          //        viewport: { ...prevState.viewport, ...coords },
          //   }));
     }, []);

     return (
          <div className="map-container">
               {/* <div className="map-container" ref={mapContainerRef} />; */}
               <Map
                    ref={mapContainerRef}
                    mapLib={import("mapbox-gl")}
                    initialViewState={coordinates}
                    // viewState={{
                    //      longitude: 106.660172,
                    //      latitude: 10.762622,
                    //      zoom: 10.5,
                    // }}
                    // viewState={coordinates}
                    mapboxAccessToken="pk.eyJ1IjoibWluaHRyaTEyMDUiLCJhIjoiY2xvd2psOWhoMDE1ZjJ1cnZtYWRkcDk2NCJ9.NpJq11xojyIIjBlbw0zAbQ"
                    style={{ width: "100%", position: "absolute", height: "100%" }}
                    mapStyle="mapbox://styles/mapbox/streets-v9"
                    // onResize={(e) => {
                    //      console.log("resize", e);
                    // }}
                    // onZoom={(e) => {
                    //      const bounds = mapContainerRef.current.getBounds();
                    //      console.log("bounds zoom", bounds);
                    //      //  setCoordinates({ lat: e.viewState.latitude, lng: e.viewState.longitude, zoom: e.viewState.zoom });
                    // }}
                    onDragEnd={(e) => {
                         console.log("kéo", e.viewState);
                         //  get bound của khung map
                         const bounds = mapContainerRef.current.getBounds();
                         console.log("bounds", bounds);
                         setCoordinates({
                              latitude: e.viewState.latitude,
                              longitude: e.viewState.longitude,
                              zoom: e.viewState.zoom,
                         });
                         setBounds(bounds);
                    }}
               >
                    <NavigationControl position="bottom-right" showCompass={false} />
                    <GeolocateControl position="bottom-right" onGeolocate={onGeolocate} ref={geolocateControlRef} />
                    <div>
                         {places &&
                              places?.map((place, i) => {
                                   if (place.latitude && place.longitude) {
                                        console.log("place", place.latitude, place.longitude);

                                        return (
                                             <div className="abc">
                                                  <Marker
                                                       key={i}
                                                       onClick={() => {
                                                            setChildClicked(i);
                                                       }}
                                                       latitude={place?.latitude}
                                                       longitude={place?.longitude}
                                                       anchor="bottom"
                                                       children={
                                                            <Paper elevation={3} className={classes.paper}>
                                                                 <Typography className={classes.typography} variant="subtitle1">
                                                                      {place?.name}
                                                                 </Typography>
                                                                 <img
                                                                      className={classes.pointer}
                                                                      src={
                                                                           place?.photo
                                                                                ? place.photo.images.large.url
                                                                                : "https://assets.architecturaldigest.in/photos/61db1eed472e5c4d0d4c8dd8/3:2/w_5973,h_3982,c_limit/Main%20seating%20area%20Ekaa.jpg"
                                                                      }
                                                                      alt={place?.name}
                                                                 />
                                                                 <Rating size="small" value={Number(place.rating)} readOnly />
                                                            </Paper>
                                                       }
                                                  ></Marker>
                                             </div>
                                        );
                                   }
                              })}
                    </div>
                    {/* <Marker className={classes.markerContainer} latitude="10.84411" longitude="106.7713" anchor="bottom">
                         <Paper elevation={3} className={classes.paper}>
                              <Typography className={classes.typography} variant="subtitle1">
                                   hihi
                              </Typography>
                         </Paper>
                    </Marker> */}
               </Map>
               ;
          </div>
     );
};

export default MapDisplay;
