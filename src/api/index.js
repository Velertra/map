import axios from "axios";

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'

export const getPlacesData = async (sw, ne) => {
    try {
        const { data: { data } } = await axios.get(URL, {
                params: {
                  bl_latitude: 'sw.lat',
                  tr_latitude: 'ne.lat',
                  bl_longitude: 'sw.lng',
                  tr_longitude: 'ne.lng',
                },
                headers: {
                  'X-RapidAPI-Key': '9a579e3592msh212bae63cda165fp1960fdjsn7f20361261c6',
                  'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
             
              }
            });
        
        return data;
    } catch (error) {
        console.log(error)
    }
}