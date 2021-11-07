import React,{useState,useEffect} from 'react';
//import {Link} from '@reach/router';
import axios from 'axios';
import { navigate } from '@reach/router';
//import Header from "./Header";

const EditTrip = (props)=> {
    const {id} = props;
    const [updatingTrip, setUpdatingTrip] = useState({});
    //const [loaded,setLoaded]=useState("false")
    //const [errors, setErrors] = useState({});
    useEffect(()=> {
        axios.get(`http://localhost:8000/api/trips/${id}`)
        .then((res)=> {
            console.log(res.data);
            setUpdatingTrip(res.data);
            //setLoaded("true")
        })
        .catch((err)=> {
            console.log(err);
            navigate('/errors')

        })

    },[id])
    const onChangeHandler = (e)=> {
        let newStateObject = {...updatingTrip};
        newStateObject[e.target.name] = e.target.value 
        setUpdatingTrip(newStateObject);

    }
    const updateSubmitHandler = (e)=> {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/trips/${id}`,
        updatingTrip,
        )
        .then((res)=> {
            console.log(res.data);
            navigate('/dashboard');
        })
        .catch((err)=> {
            console.log(err);
            // setErrors(err.response.data.setErrors)
        })
    }



    return(
        <div>
            <form onSubmit = {updateSubmitHandler}>
                <label>location</label>
                <input onChange={onChangeHandler} name="location" value={updatingTrip.location}/>
                <label>duration</label>
                <input onChange={onChangeHandler} name="duration" value={updatingTrip.duration}/>
                <label>Add an Image</label>
                <input onChange={onChangeHandler} name="imageUrl" value={updatingTrip.imageUrl && (<img src={updatingTrip.imageUrl} alt="" /> )}/>
                <label>itinerary</label>
                <input onChange={onChangeHandler} name="itinerary" value={updatingTrip.itinerary} />
                <button>Submit</button>
            </form>
        </div>
    )
}
export default EditTrip;