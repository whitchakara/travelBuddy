const mongoose = require("mongoose");
const TravelerSchema = new mongoose.Schema({
    firstName: {
        type:String,
        required:[true, "Must have a name entered"],
        minlength:[3, "Traveler's name must be at least 3 characters long!"]
    },
    lastName: {
        type:String,
        required:[true, "Must have a last name entered"],
        minlength:[2, "Traveler's last name must be at least 2 characters long!"]

    },
    imageUrl: {
        type:String,
        required:[true, "Must Have an image!"]
    }, 
    screenName: {
        type:String,
        required:[true, "Must have a screen name"],
        minlength: [3, "your screen name must be at least 3 characters long!"]
    },
    password: {
        type:String,
        required:[true, "Must enter a password"],
        minlingth:[6, "Must be at least 6 characters long"]
    }

},
{timestamps:true}
)
const Traveler= mongoose.model("Traveler", TravelerSchema);
module.exports = Traveler;