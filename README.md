# Delhi Metro Explorer

This is testing playground for Delhi Metro Explorer website. [Delhi Metro Rail Website](delhimetrorail.com) website has some open endpoints on their backend api. This project is to explore those endpoints and see what data can be fetched from them. Using that data I plan to make a website which will provide some useful features to the those who want to use delhi metro more than just a means of transportation.

***Please note that there is no official documentation available for the backend API of Delhi Metro Rail. Therefore, there are no specified rules or laws regarding its usage. The information provided in this README is for testing and informational purposes only. The usage of this API or the URLs mentioned herein may not be allowed or supported by Delhi Metro Rail or its authorities.***

***By using this API or accessing the provided endpoints, you acknowledge that you are solely responsible for your actions. The owner of this repository and the information provided in this README are not liable for any consequences or damages that may arise from the usage of this site or the utilization of these endpoints.***


## Available Endpoints

Main URL: `https://backend.delhimetrorail.com/api/v2/en/(OPTION)`

1. **Service Information**
   - URL: `https://backend.delhimetrorail.com/api/v2/en/service_information`


2. **Line List**
   - URL: `https://backend.delhimetrorail.com/api/v2/en/line_list`


3. **Station List**
   - URL: `https://backend.delhimetrorail.com/api/v2/en/station_list`


4. **Station Route (Least Distance)**
   - URL: `https://backend.delhimetrorail.com/api/v2/en/station_route/origin/destination/least-distance/date-time`
   - Note: Replace `origin` and `destination` with the desired station codes. The `date-time` format should be specified.
   - *Currently this api endpoints requires to be only called from the official site*

5. **Station Route (Minimum Interchange)**
   - URL: `https://backend.delhimetrorail.com/api/v2/en/station_route/origin/destination/minimum-interchange/date-time`
   - Note: Replace `origin` and `destination` with the desired station codes. The `date-time` format should be specified.
   - *Currently this api endpoints requires to be only called from the official site*

6. **Station by Line**
   - URL: `https://backend.delhimetrorail.com/api/v2/en/station_by_line/LN[number]`
   - Note: Replace `[number]` with the desired line number (0-9). Example: LN1, LN2, ...

7. **Station Details**
   - URL: `https://backend.delhimetrorail.com/api/v2/en/station/[code]`
   - Note: Replace `[code]` with the desired station code.

8. **Passenger Facilities**
   - URL: `https://backend.delhimetrorail.com/api/v2/en/passenger/facilities`

9. **Passenger Facilities for Women Passengers**
   - URL: `https://backend.delhimetrorail.com/api/v2/en/passenger/facilities-for-women-passengers`

10. **Passenger Facilities for Differently-Abled Passengers**
    - URL: `https://backend.delhimetrorail.com/api/v2/en/passenger/facilities-for-differently-abled-passengers/`

11. **Passenger Parking and Bicycle Facilities**
    - URL: `https://backend.delhimetrorail.com/api/v2/en/passenger/parking-bicycle-facilities/`

