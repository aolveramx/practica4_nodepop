const axios = require('axios');


exports.homeRoutes = (req, res) => {
    axios.get('http://localhost:3000/api/ads')
        .then(function(response){
            res.render('index', { ads : response.data });
        })
        .catch(err =>{
            res.send(err);
        })
}

exports.homeFilter = async function(req, res, next) {
    try {
        const article = req.query.article;
        const operationType = req.query.operationType;
        const price = parseInt(req.query.price);
        const category = req.query.category;
  
      const filtro = {};
  
      if (article) {
        filtro.article = article
      }
  
      if (operationType) {
        filtro.operationType = operationType
      }
  
      const result = await Ad.filter(filtro, limit, skip, fields, sort);
      res.json(result);
    } catch (err) {
      next(err);
    }
  };

exports.newAd = (req, res) =>{
    res.render('newAd');
}

exports.update_ad = (req, res) =>{
    axios.get('http://localhost:3000/api/ads', { params : { id : req.query.id }})
        .then(function(adInfo){
            res.render("update_ad", { ad : adInfo.data})
        })
        .catch(err =>{
            res.send(err);
        })
}