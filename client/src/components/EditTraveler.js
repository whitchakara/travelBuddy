import React,{useState,useEffect} from 'react';
//import {Link} from '@reach/router';
import axios from 'axios';
import { navigate } from '@reach/router';
import Header from "./Header";

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
            navigate('/errors')

        })

    },[id])
    const onChangeHandler = (e)=> {
        let newStateObject = {...updatingTraveler};
        newStateObject[e.target.name] = e.target.value 
        setUpdatingTraveler(newStateObject);

    }
    const updateSubmitHandler = (e)=> {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/travelers/${id}`,
        updatingTraveler
        )
        .then((res)=> {
            console.log(res.data);
            navigate('/');
        })
        .catch((err)=> {
            console.log(err);
            //setErrors(err.response.data.setErrors)
        })}



    return(
        <div>
            <Header link={'/'}linkText="Home"  subText="Edit Your Profile" />
            <form onSubmit = {updateSubmitHandler}>
                <label>ScreenName</label>
                <input onChange={onChangeHandler} name="screenName" value={updatingTraveler.screenName}/>
                {/* {
                    errors.screenName?
                    <span>{errors.screenName.message}</span>
                        :null
                } */}
                <button>Submit</button>
                <button onClick = {(e)=> navigate("/")}>Cancel</button>
            </form>
            

        </div>
    )
}
export default EditTraveler;