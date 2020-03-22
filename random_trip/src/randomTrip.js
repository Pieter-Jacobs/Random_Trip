const axios = require('axios');

/*
const getCountry = async () => {
   return await axios.get('https://www.promovendum.nl/blog/afkortingen-landen-europa-handig-de-auto')
  .then(
    (response) => {

      const afkortingen =  response.data.match(/<strong>[A-Z]+?<\/strong>/g);
      for (let i = 0; i < afkortingen.length; i++) {
        afkortingen[i] = afkortingen[i].replace(/<strong>/, "").replace(/<\/strong>/, "");
      }
      return afkortingen[Math.floor(Math.random() * afkortingen.length)]
    },
    (error) => {
      console.log(error);
    }
  );
}
*/
var findObjectByLabel = function(obj,label) {
  if(Object.keys(obj).length === 0){
    return "No Flights";
  }
  else{
  for(let i = 0; i < Object.getOwnPropertyNames(obj).length; i++) {
    let property = Object.getOwnPropertyNames(obj)[i];
    if(label in obj){
      return obj[label];
    }
    return findObjectByLabel(obj[property],label);
  }
  }
}


const getAirport = async () => {
   return await axios.get('https://cors-anywhere.herokuapp.com/https://www.vliegveldinfo.nl/vlieginfo/luchthavencodes-europese-vliegvelden/')
  .then(
    (response) => {
      const afkortingen =  response.data.match(/<td>[A-Z]*?<\/td>/g);
      let airport_array = []
      let counter = 0;
      for (let i = 0; i < afkortingen.length; i+=2) {
        airport_array[counter] = afkortingen[i].replace(/<td>/, "").replace(/<\/td>/, "");
        counter += 1;
      }
      return airport_array[Math.floor(Math.random() * airport_array.length)];
    },
    (error) => {
      console.log(error);
    }
  );
}

const getFlights = async (country,depart_date,arrival_date,origin) => {
  return await axios.get(`https://cors-anywhere.herokuapp.com/http://api.travelpayouts.com/v1/prices/cheap?origin=${origin}&currency=EUR&destination=${country}&depart_date=${depart_date}&return_date=${arrival_date}&token=f90b69b87092e386720496f32f5264e2`)
  .then(
    (response) => {
      let price = findObjectByLabel(response.data.data,"price");
      let departure = findObjectByLabel(response.data.data,"departure_at");
      let arrival = findObjectByLabel(response.data.data,"return_at");
      return {price,departure,arrival};
    },
    (error) => {
      console.log(error);
    }
  );
}

const findBestFlight = async (origin) => {
  let country = await getAirport();
  //let max_flightprice = 300;
  let depart_date = "2020-03";
  let arrival_date = "2020-04";
  //let best_flight;
  let flight_information = await getFlights(country,depart_date,arrival_date,origin);
  /*
  while (flight_information.price > max_flightprice) {
    flight_information = await getFlights(country,depart_date,arrival_date);
    console.log(flight_information);
  }

  let closest_price_difference = 5000000;
  for (let i = 0; i < countries.length; i++) {
      flight_information = await getFlights(countries[i],depart_date,arrival_date);
    if(flight_information.price != null && Math.abs(max_flightprice - flight_information.price) < closest_price_difference){
      closest_price_difference = Math.abs(max_flightprice - flight_information.price)
      best_flight = flight_information;
    }
  }
  */
  return flight_information;
}

export {findBestFlight,getFlights,getAirport,findObjectByLabel};
