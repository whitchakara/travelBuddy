import React,{useState} from "react";
import axios from "axios";
import { navigate } from "@reach/router";
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = ()=> {
    // const[firstName, setFirstName] = useState("");
    // const[lastName, setLastName] = useState("");
    // const[imageUrl, setImageUrl] = useState("");
    const[screenName, setScreenName] = useState("");
    const[password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);
    
    const newSubmitHandler = (e)=> {
        e.preventDefault();
        const newTraveler = {
            // firstName,
            // lastName,
            // imageUrl,
            screenName,
            password,
        };
        axios.post('http://localhost:8000/api/travelers/login',
        newTraveler, {
            withCredentials: true,
        }
        )
        .then((res)=> {
            console.log(res.data);
            localStorage.user = JSON.stringify(res.data.userLoggedIn);
            navigate('/dashboard');
        })
        .catch((err)=> {
            const errorResponse = err;
            console.log(err);
            //console.log(err.response);
            const errorArr = [];
            for (const key of Object.keys(errorResponse)){
                errorArr.push(errorResponse[key].message);
                console.log("inside of catch" +key);
                }
            
                setErrors(errorArr);
        })
    }
    




    return(
        <div>
            <form  className="reg-form" onSubmit = {newSubmitHandler}>
            {errors.map((err,index)=> <p key={index}>{err}</p>)}
                
                <div className="mb-3">
                    <label>Screen Name</label><br/>
                    <input  onChange={(e) => setScreenName(e.target.value)} name="screenName" value={screenName}/>
                </div>
                <div>
                    <label className="form-label">Password</label><br/>
                    <input  onChange={(e) => setPassword(e.target.value)} name="password" value={password}/>
                </div>
                <button className="btn btn-dark" >Login</button>
            </form>
            
        </div>
    )
};

export default Login;