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
            <form onSubmit = {newSubmitHandler}>
            {errors.map((err,index)=> <p key={index}>{err}</p>)}
                <div>
                    <label>First Name</label>
                    <input onChange={(e) => setFirstName(e.target.value)} name="firstName" value={firstName}/>
                </div>
                <div>
                    <label>Last Name</label>
                    <input onChange={(e) => setLastName(e.target.value)} name="lastName" value={lastName}/>
                </div>
                <div>
                    <label>Upload a Picture</label>
                    <input onChange={(e) => setImageUrl(e.target.value)} name="imageUrl" value={imageUrl}/>
                </div>
                <div>
                    <label>Screen Name</label>
                    <input onChange={(e) => setScreenName(e.target.value)} name="screenName" value={screenName}/>
                </div>
                <div>
                    <label>Password</label>
                    <input onChange={(e) => setPassword(e.target.value)} name="password" value={password}/>
                </div>
                <div>
                    <label> Confirm Password</label>
                    <input onChange={(e) => setConfirmPassword(e.target.value)} name="confirmPassword" value={confirmPassword}/>
                </div>
                <button>Create An Account</button>
            </form>
            
        </div>
    )
};

export default AddTraveler;