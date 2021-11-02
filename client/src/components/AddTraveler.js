import React,{useState} from 'react';
//import {Link} from '@reach/router';
import { navigate } from '@reach/router';
import axios from 'axios';
//import Header from './Header';


const AddTraveler = ()=> {
    
    
    const [errors, setErrors] = useState([]);
    
    const onChangeHandler = (e)=> {
        // let newStateObject = {...newPirate};
        // newStateObject[e.target.name] = e.target.value 
        // setNewPirate(newStateObject);


    }
    const newSubmitHandler = (e)=> {
        e.preventDefault();
        const newTraveler = {
            
        };
        axios.post('http://localhost:8000/api/travelers/',
        newTraveler
        )
        .then((res)=> {
            console.log(res.data);
            navigate('/');
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
            
            
        </div>
    )
};

export default AddTraveler;