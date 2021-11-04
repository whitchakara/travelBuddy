import React,{useState,useEffect} from 'react';
//import {Link} from '@reach/router';
import axios from 'axios';
import { navigate } from '@reach/router';
//import Header from "./Header";

const EditTrip = (props)=> {
    const {id} = props;
    const [updatingTrip, setUpdatingTrip] = useState({});
    //const [errors, setErrors] = useState({});
    useEffect(()=> {
        axios.get(`http://localhost:8000/api/trips/${id}`)
        .then((res)=> {
            console.log(res.data);
            setUpdatingTrip(res.data);
        })
        .catch((err)=> {
            console.log(err);
            navigate('/error')

        })

    },[id])



    return(
        <div>
                <h1>{updatingTrip.location}</h1>
                <p>{updatingTrip.duration}</p>
                {/* <p>Treasures:{updatingPirate.treasureChests}</p>
                <p>Peg Leg:{updatingPirate.hasPegLeg ? <p>Yes</p> : <p>No</p>}</p>
                <p>Eye Patch:{updatingPirate.hasEyePatch ? <p>Yes</p> : <p>No</p>}</p>
                <p>Hook Hand:{updatingPirate.hasHookHand ? <p>Yes</p> : <p>No</p>}</p> */}
                <p>{updatingTrip.imageUrl && (
                    <img src={updatingTrip.imageUrl} alt="" />
                    )}</p>
                {/* <p>{updatingTrip.catchPhrase}</p>  */}

        </div>
    )
}
export default EditTrip;