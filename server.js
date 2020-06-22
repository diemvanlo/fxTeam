const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static('./dist/realEstate'));

app.get('/*', function(req,res) {

  if(req.url === '/') {
    res.sendFile(path.join(__dirname,'/dist/realEstate/index.html'));
  }
  else {
    res.sendFile(path.join(__dirname, '/dist/realEstate' + req.url))
  }

});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);

