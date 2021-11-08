const TravelerController = require("../controllers/traveler.controller.js");
module.exports = (app)=> {
    app.get('/api/travelers', TravelerController.getAllTravelers);
    //registration will create user
    app.post('/api/travelers', TravelerController.createTraveler);
    app.put('/api/travelers/:id', TravelerController.editTraveler);
    app.delete('/api/travelers/:id', TravelerController.deleteTraveler);
    app.get('/api/travelers/:id', TravelerController.getOneTraveler);
    // logout and login will logout and login users already created
    app.post('/api/travelers/logout', TravelerController.logout);
    app.post('/api/travelers/login', TravelerController.login);
}