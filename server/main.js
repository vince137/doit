var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var router = express.Router();
router.get('/', function (req, res) {
  res.json({ message: 'DoIt! API' });
});

// Allow CORS
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// User route
router.route('/user')
  .post(function (req, res) {
    res.json({ alert: true, message: 'Unable to send request' });
  });

// Define API path
app.use('/api', router);

// Listen the port
app.listen(3000, function () {
  console.log('The API server is running on the port 3000 !');
}); 