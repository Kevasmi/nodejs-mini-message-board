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

/* Get new message page */
router.get('/new', function (req, res, next) {
  res.render('new');
});

router.post('/new', function (req, res, next) {
  const user = req.body.user;
  const messageText = req.body.messageText;

  messages.push({
    user: user,
    text: messageText,
    added: moment().format('MMMM Do YYYY, h:mm a'),
  });

  res.redirect('/');
});

module.exports = router;
