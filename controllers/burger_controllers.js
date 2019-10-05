let express = require('express');
let burger = require('../models/burger');

let router = express.Router();

router.get('/', function(req,res){
    burger.all(function(data){
        let object = {
            burger:data
        };
    })
    console.log(object);
    res.render('index',object);
});

router.post('/api/burgers', function(req,res){
    burger.create(['name'],[req.body.name]), function(result){
        res.json({id:result.insertId});
    };
});
router.put('/api/burgers/:id', function(req, res){
    let condition = "id = "+ req.params.id;
    burger.update({
        devoured: req.body.devoured
    },
    condition,
    function(result){
        if (result.changedRows === 0){
            throw err;
        } 
        res.status(200).end();

    })
})





module.exports = router;