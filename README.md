# Neiborhood map project

This is a project made for the completion of the nanodegree udacity front end developer - advanced course.
It aims to consummate the google maps API with a foursquare API. The project is to demarcate regions of interest of the user and to bring some data about the place, to see the operation of the project online click [here](https://confident-yalow-21bab5.netlify.com/).

## How to run on my machine ?

Clone this repository or download it and extract to a local of your desire and open the folder "neighborhoodmap-udacity" on the selected path.

You need NPM installed on your machine, if you don't, see this tutorial:<br>
[For Windows](https://www.guru99.com/download-install-node-js.html)
[For Linux](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

With NPM installed and with the folder "neighborhoodmap-udacity" open the terminal on this folder and type "npm install", wait the install finish, then on the terminal enter "npm start", the browser will popup a window on localhost, click on the page and enjoy the APP.

## How to use ?

After opened the project, you'll see a map with some pre-made markers, on the "Insira um local que deseja adicionar" on the input above, you should insert a location and click "Adicionar", doing this, will add a new marker on the map and if you click on this marker you'll see the name of the place, a picture (if have one) and you can click on "aqui" to know more about this place.

You should see a list down the map, if you click on a item of this list, the map will be focused on the respective marker with the same location of item that you've selected and will open a infowindow with some informations.

On the "Digite para filtrar os locais", you can enter a some term to filter and check if exists on the list right down the map.

## Obs

This project wasn't bootstraped with create-react-app this means that all configurations of webpack was createad by me.

## The project is avaliable on netlify

Click [here](https://confident-yalow-21bab5.netlify.com/).
