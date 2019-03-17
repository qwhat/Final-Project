# AIR IQ - bringing Air Quality info, to you : React-based Mobile App

<img src="https://github.com/cepholopoddreamz/AirIQ/blob/560e41eb3ffe84afd4c760aab4b4b8f54629a7a7/client/public/readme3.png" width="250">

!["screen cap of front page with alternative city location look up"](https://github.com/cepholopoddreamz/AirIQ/blob/560e41eb3ffe84afd4c760aab4b4b8f54629a7a7/client/public/readme2.png)

!["screen cap of front page MOBILE View"](https://github.com/cepholopoddreamz/AirIQ/blob/560e41eb3ffe84afd4c760aab4b4b8f54629a7a7/client/public/readme5.png)

An app designed to make accessing Air Quality Information, more accessible, legible, and customizes recommendations based on user profiles. Built for mobiles, in React, React Router DOM, Express, Postgres, React Bootstrap.

!["screen cap of front page with alternative city location look up"](https://github.com/cepholopoddreamz/AirIQ/blob/560e41eb3ffe84afd4c760aab4b4b8f54629a7a7/client/public/readme4.png)

!["screen cap of front page with alternative city location look up"](https://github.com/cepholopoddreamz/AirIQ/blob/560e41eb3ffe84afd4c760aab4b4b8f54629a7a7/client/public/readme5.png)

# INSTALL DEPENDENCIES

1. cd into the */server* folder.
2. From the */server* folder, run ```npm install``` (server dependencies).
3. Open a second terminal and cd into the */client* folder.
4. From the */client* folder, run ```npm install``` (React dependencies).
5. Use ```npm run server``` from the */server* terminal to start the server on ```http://localhost:3000/```
6. User ```npm start``` from the */client* terminal to start the client on 3001

## CREATING THE KNEX DATABASE

1. From the */Final_Project* folder, run ```psql```.
2. From the psql terminal, run ```CREATE DATABASE air_iq;```.
3. Use ```\q``` to leave the psql terminal.
4. Run ```knex migrate:currentVersion``` to check if a table already exists (It should say *Current Version: none*).
5. If a current version exists, run ```knex migrate:rollback``` then repeat from step 4 until it says *none*.
  - Most versions of knex will only need you to rollback once to clear all of them
6. Run ```knex migrate:latest``` to create the empty migration tables.
7. To populate the database with "false" data, run ```knex seed:run```
