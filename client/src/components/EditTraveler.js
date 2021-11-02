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
                {/* <h1>{updatingPirate.pirateName}</h1>
                <p>Position:{updatingPirate.crewPosition}</p>
                <p>Treasures:{updatingPirate.treasureChests}</p>
                <p>Peg Leg:{updatingPirate.hasPegLeg ? <p>Yes</p> : <p>No</p>}</p>
                <p>Eye Patch:{updatingPirate.hasEyePatch ? <p>Yes</p> : <p>No</p>}</p>
                <p>Hook Hand:{updatingPirate.hasHookHand ? <p>Yes</p> : <p>No</p>}</p>
                <p>{updatingPirate.imageUrl && (
                    <img src={updatingPirate.imageUrl} alt="" />
                    )}</p>
                <p>{updatingPirate.catchPhrase}</p> */}

        </div>
    )
}
export default EditTraveler;