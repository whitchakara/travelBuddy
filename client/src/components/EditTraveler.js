import React,{useState,useEffect} from 'react';
//import {Link} from '@reach/router';
import axios from 'axios';
import { navigate } from '@reach/router';
//import Header from "./Header";

const EditTraveler = (props)=> {
    const {id} = props;
    const [updatingTraveler, setUpdatingTraveler] = useState({});
    //const [errors, setErrors] = useState({});
    useEffect(()=> {
        axios.get(`http://localhost:8000/api/travelers/${id}`)
        .then((res)=> {
            console.log(res.data);
            setUpdatingTraveler(res.data);
        })
        .catch((err)=> {
            console.log(err);
            navigate('/error')

        })

    },[id])



    return(
        <div>
            
            <h1>{updatingTraveler.screenName}</h1>
            <p>{updatingTraveler.imageUrl && (
                    <img src={updatingTraveler.imageUrl} alt="" />
                    )}</p>
            

        </div>
    )
}
export default EditTraveler;