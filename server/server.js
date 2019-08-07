// Require express - gives us a function
const express = require('express');
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer')

// Create an instance of express by calling the function returned above - gives us an object
const app = express();
const PORT = process.env.PORT || 3001

// express static file serving - public is the folder name
app.use(express.static('server/public'));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false}))

app.post('/api/form', (req, res) => {
    console.log(req.body)
})

// Start up our server
app.listen(PORT, function(){
  console.log(`listening on port ${PORT}`);
});