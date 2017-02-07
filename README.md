# Interview-Sample-App

## Architecture

> This is an AngularJS application, it also contains some server-side **node.js** stuff to serve zipcode data.

- Angular app is as :
    - Scripts/app.js defines the angular app
    - mainController and detailController are the controllers of the 2 routes defined in app.js
    - weatherService stands as an ng factory, contains functions which makes http requests to get specific datas and also returns promises
    - Views/*.html files are the 2 different partial pages used for 2 routes

- Server side is as :
    - **server-app** folder contains the server side stuff
        - **data.json** contains all zipcodes of the Dallas city
        - **dataService.js** contains a simple restify app that reads data from the json file and stands as a RESTful service to serve that data
    - You need to run the restify app so that the angular app can get data from the backend service, to do this, **cd into server-app folder**, type `node dataService.js` on your cli

- Other things you should know :
    - ignored **node_modules** folder and it's contents that you'll need to run the app, to install these, type `npm install` on your cli
    - index.html is the entry point of the app.

## Other Third Party Stuff
- Zipcode Api
    - I use the free plan which restricts me to make **only 50** get requests. More info [here](https://www.zipcodeapi.com/)
    - To Get location information by zipcode : https://www.zipcodeapi.com/rest/APP_ID/info.json/ZIP/degrees
    - To Get all the zipcodes according to a city/state : https://www.zipcodeapi.com/rest/APP_ID/city-zips.json/CITY/STATE
    - > I also included my own api_key, exposed to public, which should be noted

