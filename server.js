const express = require('express');
const path =  require('path');
const app = express();
app.use(express.stactic(__dirname + '/dist/fxTeam'));

app.get('/*', function (req, res) {
res.sendfile(path.join(__dirname + '/dist/fxTeam/index.html'));
});
app.listen(process.env.PORT || 8080);

