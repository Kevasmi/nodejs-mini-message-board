var express = require('express');
var moment = require('moment');
var router = express.Router();

const messages = [
  {
    text: 'Hi there!',
    user: 'Amando',
    added: moment().format('MMMM Do YYYY, h:mm a'),
  },
  {
    text: 'Hello World!',
    user: 'Charles',
    added: moment().format('MMMM Do YYYY, h:mm a'),
  },
];

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Mini Messageboard', messages: messages });
});

module.exports = router;
