import {apikey, apiKey} from './api';

export const fetchData = async (endPoint, params) => { 
    console.log('entro');
    const response = await fetch(`https://api.themoviedb.org/3/${endPoint}?api_key=${apiKey}&${params}`);
    if (response.ok) { // if HTTP-status is 200-299
        // get the response body (the method explained below)
        const data = await response.json()
        console.log(data);
        return data
      } else {
        alert("HTTP-Error: " + response.status);
      }
}