import React, { useState, useEffect } from "react";
import { getPlacesData, getPlacesDataByLatLng } from "../../api/map";
import { CssBaseline, Grid } from "@mui/material";
import Header from "./Header/Header";
import List from "./List/List";
import MapDisplay from "./MapDisplay/MapDisplay";
import axios from "axios";
const Map = () => {
     const [places, setPlaces] = useState();
     const [filteredPlaces, setFilteredPlaces] = useState([]);
     const [coordinates, setCoordinates] = useState({});
     const [bounds, setBounds] = useState();
     const [childClicked, setChildClicked] = useState();
     const [isLoading, setIsLoading] = useState(false);
     const [type, setType] = useState("restaurants");
     const [rating, setRating] = useState(0);
     useEffect(() => {
          navigator.geolocation.getCurrentPosition((e) => {
               console.log("location", e);
               setCoordinates({
                    latitude: e.coords.latitude,
                    longitude: e.coords.longitude,
                    zoom: 6,
               });
          });
     }, []);

     useEffect(() => {
          const filterData = places?.filter((place) => place?.rating > rating);
          setFilteredPlaces(filterData);
     }, [rating]);

     useEffect(() => {
          setIsLoading(true);
          //   Chuyển map đến Quận 2
          getPlacesData(type, bounds?._sw, bounds?._ne).then((data) => {
               setPlaces(data);
               setFilteredPlaces([]);

               setIsLoading(false);
          });
          //   getPlacesDataByLatLng("restaurants", coordinates?.latitude, coordinates?.longitude).then((data) => {
          //        console.log("data", data);
          //        setPlaces(data);
          //   });
     }, [coordinates, bounds, type]);
     console.log("childClick", childClicked);
     return (
          <>
               <CssBaseline />
               <Header />
               <Grid container spacing={3} style={{ width: "100%" }}>
                    <Grid item xs={12} md={4}>
                         <List
                              rating={rating}
                              setRating={setRating}
                              type={type}
                              setType={setType}
                              isLoading={isLoading}
                              childClicked={childClicked}
                              places={filteredPlaces?.length > 0 ? filteredPlaces : places}
                         />
                    </Grid>
                    <Grid item xs={12} md={8}>
                         <MapDisplay
                              setChildClicked={setChildClicked}
                              places={filteredPlaces.length ? filteredPlaces : places}
                              setCoordinates={setCoordinates}
                              setBounds={setBounds}
                              coordinates={coordinates}
                         />
                    </Grid>
               </Grid>
          </>
     );
};

export default Map;
