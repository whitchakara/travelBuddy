const Trip = require('../models/trips.model');
module.exports = {
    createTrip: (req,res)=> {
        Trip.create(req.body)
        .then((newTrip)=> {
            res.json(newTrip);
        })
        .catch((err)=> {
            console.log(err);
            res.status(400).json(err);
        })
    },
    getOneTrip:(req,res)=>{
        Trip.findById({_id:req.params.id})
        .then((oneTrip)=> {
            res.json(oneTrip);
        })
        .catch((err)=> {
            console.log(err);
            res.status(400).json(err);
        })

    },
    getAllTrips: (req,res)=> {
        Trip.find({}).collation({locale:'en', strength:2}).sort({location:1})
        .then((allTrips)=> {
            res.json(allTrips);
        })
        .catch((err)=> {
            console.log(err);
            res.status(400).json(err);
        })
    },
    deleteTrip: (req,res)=> {
        Trip.deleteOne({_id:req.params.id})
        .then((deletedTrip)=> {
            res.json(deletedTrip);
        })
        .catch((err)=> {
            console.log(err);
            res.status(400).json(err);
        })
    },
    editTrip:(req,res)=> {
        Trip.findByIdAndUpdate({_id:req.params.id 
        }, req.body,
        {
            new:true,
            runValidators:true
        })
        .then((updatedTrip)=> {
            res.json(updatedTrip)
        })
        .catch((err)=> {
            console.log(err);
            res.status(400).json(err);
        })
    }
}