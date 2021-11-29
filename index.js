import express from 'express';
import bodyParser from 'body-parser';

import usersRoutes from './routes/bulgaria.js'; // This will include all exports from users.js file

const app = express();  // Initialise express application. Whole application live thrgough this variable app
const PORT = 5000;  //port for application

app.use(bodyParser.json());  // bodyParser will bw function for parsing json from http response

app.use('/bulgaria', usersRoutes); //This is route path which is common for all routes. When people visit /users we want to run usersRoutes which we imported from users.js

app.get('/', (req, res) => {   //This is a route for get request, it is expected get requst to home page 
    res.send('Hello from home page.');
}); //The fuirst parameter '/' is home page, the second is callback function

app.listen(PORT, () => console.log(`Server running on PORT: http://localhost:${PORT}`));  //Applicatin will leasin for http requests when app start