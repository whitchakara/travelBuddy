const TripController = require("../controllers/trip.controllers.js");
//const {authenticate} = require ('../config/mongoose.config');
module.exports = (app)=> {
    app.get('/api/trips', TripController.getAllTrips);
    app.post('/api/trips' ,TripController.createTrip);
    app.put('/api/trips/:id', TripController.editTrip);
    app.delete('/api/trips/:id', TripController.deleteTrip);
    app.get('/api/trips/:id', TripController.getOneTrip);
}