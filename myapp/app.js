const express = require('express');// Importing express
const app = express(); // Creating an express app
const port = 3000 // Setting the port
// Creating a route that listens for GET requests to the root URL, and responds with a message
app.get('/', (req, res) => { // this line of code is a route that listens for GET requests to the root URL, and responds with a message
  res.send('Hello Peppa World!') // Sending a response
})
// Starting the server and listening on port 3000 
app.listen(port, () => { // this line of code starts the server and listens on port 3000
  console.log(`Example app listening on port ${port}`)}); // Logging a message to the console