# NUSRoutes

Orbital 2021  
Level of Achievement: Apollo 11  
By: Alvin Tay & Tan De Shao.

[NUSRoutes](https://nusroutes.vercel.app/) is a web app with an intuitively clear and concise UI for NUS Shuttle Bus Services, including a route recommendation feature.

<img src="https://github.com/atmh/NUSRoutes/blob/main/Website/Client/src/images/Bus.png" width="250">

## Features
 - Route recommendation of shortest bus route from one place to another within NUS.
 - Proximity Alarm.
 - Nearest Bus Stops.
 - Arrival Time of busses.
 - Bus services infographic.

## How are we different from NUSNextBUS?
* Route recommendation
  * Manual route planning with NUSNextBUS is a thing of the past.
  * Let NUSRoutes do it for you!

* Proximity Alarm
  * Tired and want to take a quick nap?
  * NUSRoutes got you covered and notifies when your destination is nearing.

* Web app
  * No download required!
  * Runs on the browser and is cross-platform.

* Elegant and intuitive user interface
  * A few clicks is all it takes.
  * We put in our best effort to make NUSRoutes modern yet super intuitive.

## Platforms
[Website](https://nusroutes.vercel.app/)  
[Telegram](https://t.me/NUSRoutesBot)

## Documentations
[Report](https://docs.google.com/document/d/1ST9wCioqsFDxzsIwjOdqEbzw3Zaoa-8I9pfsdZLDI5o/edit?usp=sharing)  
[Poster](https://drive.google.com/file/d/1_tzlforHaoxKiEV4nuW5nt0g87nc7dZ8/view?usp=sharing)  
[Video](https://drive.google.com/file/d/1boZCia2O9JQTUlC4LnREeJ1QCbJKnUOq/view?usp=sharing)  


## Getting Started 

* Clone the github repo.
* There are three folders, Client, server and Telegram.
* For each folder, run “npm install” to install the required dependencies.
* Create a .env file in each folder. Include these details (Your own credentials)
  * Client (Firebase): 
    * REACT_APP_UNSPLASH_APIKEY=
    * REACT_APP_UNSPLASH_AUTHDOMAIN=
    * REACT_APP_UNSPLASH_PROJECTID=
    * REACT_APP_UNSPLASH_STORAGEBUCKET=
    * REACT_APP_UNSPLASH_MESSAGINGSENDERID=
    * REACT_APP_UNSPLASH_APPID=
  * Server (Google Map API):
    * API_KEY=
    * AUTH_KEY=
  * Server => repo folder (Google Map API):
    * Same as above, API_KEY and AUTH_KEY
* To run locally:
  * Client: npm start
  * Server: node server.js
  * Telegram: 
    * Open git bash
    * cd to Telegram folder 
    * $ BOT_TOKEN='TOKEN' npm start
      * Replace 'TOKEN' with the API Token of your bot
* For deployment, Vercel was used to deploy the Client (Frontend). Heroku was used to deploy the server (backend) and Telegram.
