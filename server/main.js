var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Connect to the database
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/todolist');


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
    var User = require(__dirname + '/models/User');
    User.methods.findByEmail(req.body.email).exec(function (err, user_email) {

      // Check if the email is empty
      if (req.body.email == "") {
        return res.json({alert: true, message : 'The email can\'t be empty.'});
      } 

      // Check if the email adress exists
      if (user_email) {
        return res.json({ alert: true, message: 'This email is already register.' });
      }

      // Insert the user into the database
      var user_data = {};
      user_data.first_name = req.body.first_name;
      user_data.last_name = req.body.last_name;
      user_data.password = req.body.password;
      user_data.email = req.body.email;
      user = new User(user_data).save();
      return res.json({ success: true, message: 'Successful register !' });
    });
  });

// Define API path
app.use('/api', router);

// Listen the port
app.listen(3000, function () {
  console.log('The API server is running on the port 3000 !');
}); 