import React,{useState} from 'react';
//import {Link} from '@reach/router';
import { navigate } from '@reach/router';
import axios from 'axios';
//import Header from './Header';


const AddTraveler = ()=> {
    const[firstName, setFirstName] = useState("");
    const[lastName, setLastName] = useState("");
    const[imageUrl, setImageUrl] = useState("");
    const[screenName, setScreenName] = useState("");
    const[password, setPassword] = useState("");
    const[confirmPassword,setConfirmPassword]= useState("");
    const [errors, setErrors] = useState([]);
    
    const newSubmitHandler = (e)=> {
        e.preventDefault();
        const newTraveler = {
            firstName,
            lastName,
            imageUrl,
            screenName,
            password,
            confirmPassword
        };
        axios.post('http://localhost:8000/api/travelers/',
        newTraveler
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
            <form  className ="reg-form" onSubmit = {newSubmitHandler}>
            {errors.map((err,index)=> <p key={index}>{err}</p>)}
                <div className="mb-3">
                    <label className="form-label" >First Name</label><br/>
                    <input  onChange={(e) => setFirstName(e.target.value)} name="firstName" value={firstName}/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Last Name</label><br/>
                    <input  onChange={(e) => setLastName(e.target.value)} name="lastName" value={lastName}/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Upload a Picture</label><br/>
                    <input  onChange={(e) => setImageUrl(e.target.value)} name="imageUrl" value={imageUrl}/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Screen Name</label><br/>
                    <input  onChange={(e) => setScreenName(e.target.value)} name="screenName" value={screenName}/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label><br/>
                    <input  onChange={(e) => setPassword(e.target.value)} name="password" value={password}/>
                </div>
                <div className="mb-3">
                    <label className="form-label"> Confirm Password</label> <br/>
                    <input onChange={(e) => setConfirmPassword(e.target.value)} name="confirmPassword" value={confirmPassword}/>
                </div>
                <button type="button" class="btn btn-dark">Create An Account</button>
            </form>
            
        </div>
    )
};

export default AddTraveler;