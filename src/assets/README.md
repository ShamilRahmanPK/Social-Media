
# MERN Stack - Steps To Build MERN Project

# Front End - React Application

# React - To design application & make api call to server

1. Create react app using Vite : npm create vite@latest project-name -- --template react
2. Remove unwanted code from exisiting project (App.jsx, App.css, index.css)
3. Install & configure Libraries we need for our project (styling libraries : react bootstrap / tailwind css)
4. Create pages & components for designing the project
5. Set route for each pages / Components : install & configure library - 'react-router-dom' (BrowserRouter, Routes, Route)
6. Set up API Call to server inorder to resolve user request - Install axios (serverUrl,commonAPI,allAPI files create) method used to make api call using axios is : 'axios(reqConfig) method' according to 'reqConfig' it can can make get,post,put & delete request. project only have a single api then use axios.http-request() method.
7. To get/access result of api call using axios : check status of api call result, if it is 200 /success then use result.data as server response otherwise result.response.data is the server response

# Back End - Express JS & MongoDB 

# MongoDB Atlas - Data permanently stored in cloud 

1. Create database in the exisiting cluster, Inside Atlas dashboard, go to clusters -> Browse collections -> create database -> provide db name & a collection name -> click create button
2. Get the connection string MongoDB Atlas Database: Inside Atlas dashboard, go to clusters -> connect -> Connect to your application 'Drivers' -> copy connection string to use in node application
connection string ex: mongodb+srv://<db-username>:<db_password>@cluster0.uw2u0.mongodb.net/<database_name>?retryWrites=true&w=majority&appName=Cluster0

# Express JS - Used to create server for web application and resolve Client/Frontend request with help of Database

1. Create folder for server
2. Create package.json file using : npm init -y
3. Install all necessary packages for server creation : express, cors, dotenv, mongoose, jsonwebtoken (if authentication/login feature is available in project)
4. Create file .env & .gitignore
5. Create index.js file for running your server application
6. Steps to do in index.js file for creating express server
    - import dotenv,express,cors, database connection file , object of express.Router class
    - Create express server using method : express()
    - Use cors() , express.json() , object of express.Router class  in express server
    - Create PORT number where express app can view in browser
    - Listen the port of express server for client request 
    - Run the express server app using command : node / nodemon index.js
    - Set up for MongoDB Atlas connection with Express server
        - Paste mongodb atlas connection string in .env file
        - Create folder for defining db connection and create a js file inside it
        - Inside js file , define steps to connect mongodb with express js
            - import mongodb
            - Get mongodb atlas connection_string from .env file
            - connect mongodb with express js using method : mongoose.connect(connection_string)
    - Set up url / route for client request / api call in express server app
        - Create a folder in server app , and create js file to define url for client api call
        - inside js file , Import express, controllers 
        - To create route / url in express : create object for express.Router class
        - Define url / route using the object of express.Router class
        - route using object of express.Router class ex : router-class-object.http-method(path,controller-name)
        - export object of express.Router class and import in index.js 
    - Set up For controller ( controllers are asynchronous function with 2 arguments first one is 'request' object and another is 'response' object. Controllers used to define logic to resolve client request & communicate with database model )
    - Set up Model for Mongodb database collection in express server
        - Import mongoose
        - Create schema / structure of the data to be stored in mongodb collection , for that create object of mongoose.Schema class
        - Create Model with schema using method mongoose.model(model-name,schema-name)
        - export model



        front end user -> api call -> routes in server -> controller -> model -> model reponse to controller -> controller response to front end user
