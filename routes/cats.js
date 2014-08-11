var express = require('express');
var router = express.Router();
var mongoDbConnection = require('../lib/connection');

router.get('/add', function(req, res) {
    res.render('add', { title: 'Express' });
});

router.post('/add_cat', function(req, res){
    
    mongoDbConnection(function(qdDb) {
        qdDb.collection('docker_users').insert({
            name: req.body.cat_name
        }, function(err, data){
            if(err){
                console.log(err);
                res.send("Error occurred");
            } else {
                res.redirect('/cats/list_cats');
            }
        });
    });

})

router.get('/list_cats', function(req, res){
    mongoDbConnection(function(qdDb) {
        qdDb.collection('docker_users').find().toArray(function(err, cats){
            if(err){
                console.log(err);
                res.send("Error occurred");
            } else {
                res.render('list_cats', {cats: cats});
            }
        });
    });
})

module.exports = router;
