// Your original API endpoint
let apiEndpoint =
  "https://backend.delhimetrorail.com/api/v2/en/station_route/KE/NFGH/least-distance/2023-06-04T12:14:46.695";

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
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((e) => console.log(e));
