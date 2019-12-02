var express = require('express');
var router = express.Router();
var axios = require('axios').default;

router.get('/', function(req, res, next) {
  var data = {
    data_event: null,
    iklan: null
  }

  axios.get('https://fierce-savannah-72244.herokuapp.com/events').then(result =>{
    data.data_event = result.data;
    return axios.get('https://arta.ruangkarya.id/service/ads/img-ads');
  }).then(result => {
    data.iklan = result.data.data;
    res.render('index', {data: data.data_event, iklan: data.iklan})
  }).catch(error =>{
    return res.status(500).send({ error: error.message })
  });
});

module.exports = router;
