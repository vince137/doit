var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var router = express.Router();
router.get('/', function(req, res) { 
    res.json({ message: 'DoIt! API' });   
});

router.route('/user')
  .post(function(req, res){
      console.log("post made on user");
  });
app.use('/api', router);

app.listen(3000, function () {
  console.log('The API server is running on the port 3000 !');  
}); 