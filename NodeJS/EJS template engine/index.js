// Import the express module
const express = require('express');

// Initialize the app object
const app = express();

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Define a simple route
app.get('/', (req, res) => {
  const data = {
    title : "First message" ,
    heading : "This is heading" ,
    description : "This is Description"
  };

  res.render('index' , data);
});


app.get("/card" , (req , res) => {
  res.render('card');
})

// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
