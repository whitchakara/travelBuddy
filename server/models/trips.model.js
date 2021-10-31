const mongoose = require("mongoose");
const TripSchema = new mongoose.Schema({
    location:{
        type:String,
        required:[true, "Must have a screen name"],
        minlength: [3, "your screen name must be at least 3 characters long!"]
    },
    travelerId: {
        type: mongoose.Types.ObjectId,
        ref:"Traveler"
    },
    
    locationImg: {
        type:String,
        required:[true, "Must Have an image!"]
    },
    duration: {
        type:String,
        required:[true],
    },
    itenerary: {
        type:String,
        required:[true, "Must have an itenerary"],
        minlength:[100, "Your itenerary must be at least 100 characters long."]
    }

},
{timestamps:true}
)
const Trip= mongoose.model("Trip", TripSchema);
module.exports = Trip;