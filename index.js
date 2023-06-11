// // The URL you want to fetch data from
// // options:
// // 1. service_information
// // 2. line_list
// // 3. station_list
// // 4. station_route/origin/destination/least-distance/date-time
// // 5. station_route/origin/destination/minimum-interchange/date-time
// // 7. station_by_line/LN[number]
// // 8. station/[code]
// // 9. passenger/facilities
// // 10. passenger/facilities-for-women-passengers
// // 11. passenger/facilities-for-differently-abled-passengers/
// // 12. passenger/parking-bicycle-facilities/

// let url1 = 'https://backend.delhimetrorail.com/api/v2/en/service_information';
// let url2 = 'https://backend.delhimetrorail.com/api/v2/en/line_list';
// let url3 = 'https://backend.delhimetrorail.com/api/v2/en/station_list';
// let url4 = 'https://backend.delhimetrorail.com/api/v2/en/station_route/origin/destination/least-distance/date-time';
// let url5 = 'https://backend.delhimetrorail.com/api/v2/en/station_route/origin/destination/minimum-interchange/date-time';
// let url6 = 'https://backend.delhimetrorail.com/api/v2/en/station_by_line/LN5';
// let url7 = 'https://backend.delhimetrorail.com/api/v2/en/station/KG';
// let url8 = 'https://backend.delhimetrorail.com/api/v2/en/passenger/facilities';
// let url9 = 'https://backend.delhimetrorail.com/api/v2/en/passenger/facilities-for-women-passengers';
// let url10 = 'https://backend.delhimetrorail.com/api/v2/en/passenger/facilities-for-differently-abled-passengers/';
// let url11 = 'https://backend.delhimetrorail.com/api/v2/en/passenger/parking-bicycle-facilities/';

let apiEndpoint =
  "https://backend.delhimetrorail.com/api/v2/en/station_route/UDB/NFGH/least-distance/2023-06-04T12:14:46.695";

// The Heroku proxy URL
let proxyUrl = "https://bypass-sop.herokuapp.com/";

// Combine them
let finalUrl = proxyUrl + apiEndpoint;

fetch(finalUrl, {
  headers: {
    Referer: "https://www.delhimetrorail.com/",
    Origin: "https://www.delhimetrorail.com",
  },
})
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => {
    let outputDiv = document.getElementById("output");
    outputDiv.textContent = JSON.stringify(data, null, 2);
  })
  .catch((e) => console.log(e));