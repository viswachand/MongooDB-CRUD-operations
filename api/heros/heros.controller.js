var users = require('./heros.dao');

exports.createuser = function (req, res, next) {
    var user = {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        middlename: req.body.middlename,
        contact: req.body.contact,
        Address: req.body.Address
    };

    users.create(user, function(err, user) {
        if(err) {
            res.json({
                error : err
            })
        }
        res.json({
            message : "user created successfully"
        })
    })
}

exports.getuser = function(req, res, next) {
    users.get({}, function(err, user) {
        if(err) {
            res.json({
                error: err
            })
        }
        res.json({
            user: user
        })
    })
}

exports.getuser = function(req, res, next) {
    users.get({firstname: req.params.firstname}, function(err, user) {
        if(err) {
            res.json({
                error: err
            })
        }
        res.json({
            user: user
        })
    })
}

exports.updateuser = function(req, res, next) {
    var user = {
         firstname: req.body.firstname,
        lastname: req.body.lastname,
        middlename: req.body.middlename,
        contact: req.body.contact,
        Address: req.body.Address
    }
    users.update({_id: req.params.id}, user, function(err, user) {
        if(err) {
            res.json({
                error : err
            })
        }
        res.json({
            message : "user updated successfully"
        })
    })
}

exports.removeuser = function(req, res, next) {
    users.delete({_id: req.params.id}, function(err, user) {
        if(err) {
            res.json({
                error : err
            })
        }
        res.json({
            message : "user deleted successfully"
        })
    })
}