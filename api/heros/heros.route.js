var users = require('./heros.controller');

module.exports = function (router) {
    router.post('/create', users.createuser);
    router.get('/get', users.getuser);
    router.get('/get/:firstname', users.getuser);
    router.put('/update/:id', users.updateuser);
    router.delete('/remove/:id', users.removeuser);
}