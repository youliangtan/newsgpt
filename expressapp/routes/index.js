var express = require('express');
var router = express.Router();
var axios = require('axios');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index');
});

router.get('/api/last_update', async function (req, res, next) {
  try {
    const response = await axios.get('https://newsgpt-ai.azurewebsites.net/api/last_update');
    res.json(response.data);
  } catch (error) {
    console.log(error);
    res.status(500).send('An error occurred while fetching data from the API');
  }
});

router.post('/api/submit_news_form', async function (req, res, next) {
  try {
    const response = await axios.post('https://newsgpt-ai.azurewebsites.net/api/submit_news_form', req.body);
    res.json(response.data);
  } catch (error) {
    console.log(error);
    res.status(500).send('An error occurred while fetching data from the API');
  }
});

module.exports = router;
