import React,{useState} from 'react';
//import {Link} from '@reach/router';
import { navigate } from '@reach/router';
import axios from 'axios';
//import Header from './Header';


const AddTrip = ()=> {
    const[location, setLocation] = useState("");
    const [locationImg, setLocationImg] = useState("");
    const[duration, setDuration] = useState("");
    const [itinerary, setItinerary] = useState("");
    
    
    const [errors, setErrors] = useState([]);
    
    const newSubmitHandler = (e)=> {
        e.preventDefault();
        const newTrip = {
            location,
            locationImg,
            duration,
            itinerary,
            
        };
        axios.post('http://localhost:8000/api/trips/',
        newTrip
        )
        .then((res)=> {
            console.log(res.data);
            navigate('/dashboard');
        })
        .catch((err)=> {
            const errorResponse = err.response.data.errors;
            console.log(err);
            console.log(err.response.data.errors.message);
            const errorArr = [];
            for (const key of Object.keys(errorResponse)){
                errorArr.push(errorResponse[key].message)
            }
            
            setErrors(errorArr);
        })
    }
    




    return(
        <div>
            <form  className= "reg-form" onSubmit = {newSubmitHandler}>
            {errors.map((err,index)=> <p key={index}>{err}</p>)}
            <h2>Add A Trip</h2>
                <div className="mb-3">
                    <label>Location</label><br/>
                    <input onChange={(e) => setLocation(e.target.value)} name="location" value={location}/>
                </div>
                <div className="mb-3">
                    <label>Add an Image</label><br/>
                    <input onChange={(e) => setLocationImg(e.target.value)} name="locationImg" value={locationImg}/>
                </div>
                <div className="mb-3">
                    <label>Duration</label><br/>
                    <input onChange={(e) => setDuration(e.target.value)} name="duration" value={duration}/>
                </div>
                <div className="mb-3">
                    <label>Itinerary</label><br/>
                    <input onChange={(e) => setItinerary(e.target.value)} name="itinerary" value={itinerary}/>
                </div>
                <button className="btn btn-dark">Add a trip</button>

            </form>
            
        </div>
    )
};

export default AddTrip;