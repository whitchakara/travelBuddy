const TravelerController = require("../controllers/traveler.controller.js");
module.exports = (app)=> {
    app.get('/api/travelers', TravelerController.getAllTravelers);
    app.post('/api/travelers', TravelerController.createTraveler);
    app.put('/api/travelers/:id', TravelerController.editTraveler);
    app.delete('/api/travelers/:id', TravelerController.deleteTraveler);
    app.get('/api/travelers/:id', TravelerController.getOneTraveler);
}