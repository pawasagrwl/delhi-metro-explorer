// The URL you want to fetch data from
// options: 
// 1. service_information
// 2. line_list
// 3. station_list
// 4. station_route/origin/destination/least-distance/date-time
// 5. station_route/origin/destination/minimum-interchange/date-time
// 7. station_by_line/LN[number]
// 8. station/[code]

// let url = 'https://backend.delhimetrorail.com/api/v2/en/line_list';

let url = 'https://backend.delhimetrorail.com/api/v2/en/station_route/UDB/NFGH/least-distance/2023-06-04T12:14:46.695'


// Use Fetch API to get data
fetch(url, {
    method: 'GET',
    headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/113.0',
        'Accept': '*/*',
        'Accept-Language': 'en-US,en;q=0.5',
        'Accept-Encoding': 'gzip, deflate, br',
        'Referer': 'https://www.delhimetrorail.com/',
        'Origin': 'https://www.delhimetrorail.com',
        'Connection': 'keep-alive',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-site',
        'TE': 'trailers',
        'content-type': 'application/json',
    }
})
.then(response => {
    // Check if response is OK
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    // Parse JSON data from response
    return response.json();
})
.then(data => {
    // Get the div where we will output data
    let outputDiv = document.getElementById('output');
    console.log((data[0]['station_facility']));
    // Convert data to a string and output it
    // Here we simply convert the whole data object to a string for simplicity
    // In a real scenario, you would likely want to access specific properties of the data object
    outputDiv.textContent = JSON.stringify(data, null, 2);
})
.catch(error => {
    console.error('There has been a problem with your fetch operation:', error);
});
