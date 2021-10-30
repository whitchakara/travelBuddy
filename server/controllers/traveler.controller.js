const Traveler = require('../models/traveler.model');
module.exports = {
    createTraveler: (req,res)=> {
        Traveler.create(req.body)
        .then((newTraveler)=> {
            res.json(newTraveler);
        })
        .catch((err)=> {
            console.log(err);
            res.status(400).json(err);
        })
    },
    getOneTraveler:(req,res)=>{
        Traveler.findById({_id:req.params.id})
        .then((oneTraveler)=> {
            res.json(oneTraveler);
        })
        .catch((err)=> {
            console.log(err);
            res.status(400).json(err);
        })

    },
    getAllTravelers: (req,res)=> {
        Traveler.find({}).collation({locale:'en', strength:2}).sort({screenName:1})
        .then((allTravelers)=> {
            res.json(allTravelers);
        })
        .catch((err)=> {
            console.log(err);
            res.status(400).json(err);
        })
    },
    deleteTraveler: (req,res)=> {
        Traveler.deleteOne({_id:req.params.id})
        .then((deletedTraveler)=> {
            res.json(deletedTraveler);
        })
        .catch((err)=> {
            console.log(err);
            res.status(400).json(err);
        })
    },
    editTraveler:(req,res)=> {
        Traveler.findByIdAndUpdate({_id:req.params.id 
        }, req.body,
        {
            new:true,
            runValidators:true
        })
        .then((updatedTraveler)=> {
            res.json(updatedTraveler)
        })
        .catch((err)=> {
            console.log(err);
            res.status(400).json(err);
        })
    }
}