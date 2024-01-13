import axios from "axios";

export const getPlacesData = async (type, sw, ne) => {
     try {
          const {
               data: { data },
          } = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
               params: {
                    bl_latitude: sw.lat,
                    bl_longitude: sw.lng,
                    tr_longitude: ne.lng,
                    tr_latitude: ne.lat,
                    // bl_latitude: "10.893360714815941",
                    // tr_latitude: "10.803791932843112",
                    // bl_longitude: "106.89477630677828",
                    // tr_longitude: "106.69992390631575",
               },
               headers: {
                    "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
                    "x-rapidapi-key": "038c620fc9msh3c400cfc9143936p1cbca4jsn9b71e534914a",
               },
          });

          return data;
     } catch (error) {
          console.log(error);
     }
};

export const getPlacesDataByLatLng = async (type, lat, lng) => {
     try {
          const {
               data: { data },
          } = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-by-latlng`, {
               params: {
                    latitude: lat,
                    longitude: lng,
               },
               headers: {
                    "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
                    "x-rapidapi-key": "038c620fc9msh3c400cfc9143936p1cbca4jsn9b71e534914a",
               },
          });

          return data;
     } catch (error) {
          console.log(error);
     }
};
