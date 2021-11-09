const Traveler = require('../models/traveler.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
module.exports = {
    createTraveler: (req,res)=> {
        Traveler.create(req.body)
        //Traveler.save()
        .then((newTraveler)=> {
            res.json(newTraveler);
        })
        .catch((err)=> {
            console.log(err);
            res.status(400).json(err);
        })
    },
    login:(req,res)=> {
        Traveler.findOne({screenName:req.body.screenName})
        .then((userRecord)=> {
            if(userRecord === null){
                res.sendStatus(401)
            } else {
                console.log(req.body.password, userRecord.password);
                bcrypt.compare(req.body.password, userRecord.password)
                    .then((isPasswordValid)=> {
                        if(isPasswordValid){
                            console.log("password is valid")
                            // const userToken = jwt.sign(
                            //     {
                            //     user_id: userRecord._id
                            //     },
                            //     process.env.JWT_SECRET
                            //   );
                
                            //   res
                            //     .cookie("usertoken", userToken, process.env.JWT_SECRET, {
                            //       httpOnly: true,
                            //       expires: new Date(Date.now() + 900000),
                            //     })
                            //     .json({
                            //       msg: "successfully Logged In!",
                            //       userLoggedIn: {
                            //         user_id: userRecord._id
                            //       },
                            //     });
                            res.cookie(
                                "userToken",
                                jwt.sign({
                                    _id: userRecord._id
                                },
                                process.env.JWT_SECRET),
                                {
                                    httpOnly:true,
                                    expires: new Date(Date.now()+ 900000)
                                }
                                )
                            .json({
                                message:"Successfully logged in",
                                userLoggedIn: userRecord.screenName
                            })
                        }else {
                            //res.status(400).json(err)
                            res.sendStatus(401)
                        }
                    })
                    .catch((err)=> {
                        console.log("error with compare")
                        res.status(400).json(err)
                
                    })

            }
        }) 
        .catch((err)=> {
            console.log("error with findOne")
            res.status(400).json(err)
        })
    },
    logout:(req,res)=> {
        console.log("logging out");
        res.clearCookie("userToken")
        res.json(err,{message: "You have successfully logged out"})
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
    },

}