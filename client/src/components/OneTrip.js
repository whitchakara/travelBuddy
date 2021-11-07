import React,{useState,useEffect} from 'react';
//import {Link} from '@reach/router';
import axios from 'axios';
import { navigate } from '@reach/router';
import Header from "./Header";

const OneTrip = (props)=> {
    const {id} = props;
    const [oneTrip, setOneTrip] = useState({});
    //const [errors, setErrors] = useState({});
    useEffect(()=> {
        axios.get(`http://localhost:8000/api/trips/${id}`)
        .then((res)=> {
            console.log(res.data);
            setOneTrip(res.data);
        })
        .catch((err)=> {
            console.log(err);
            navigate('/error')

        })

    },[id])
    // const onChangeHandler = (e)=> {
    //     let newStateObject = {...updatingAuthor};
    //     newStateObject[e.target.name] = e.target.value 
    //     setUpdatingAuthor(newStateObject);

    // }
    // const updateSubmitHandler = (e)=> {
    //     e.preventDefault();
    //     axios.put(`http://localhost:8000/api/authors/${id}`,
    //     updatingAuthor
    //     )
    //     .then((res)=> {
    //         console.log(res.data);
    //         navigate('/');
    //     })
    //     .catch((err)=> {
    //         console.log(err);
    //         setErrors(err.response.data.setErrors)
    //     })
    // }



    return(
        <div>
            <Header link={'/'}linkText="Dashboard"  subText="" />
            {/* <form onSubmit = {updateSubmitHandler}>
                <label>Name</label>
                <input onChange={onChangeHandler} name="authorName" value={updatingAuthor.authorName}/>
                {
                    errors.authorName?
                    <span>{errors.authorName.message}</span>
                        :null
                }
                <button>Submit</button>
                <button onClick = {(e)=> navigate("/")}>Cancel</button>
            </form> */}
            <p></p>
        </div>
    )
}
export default OneTrip;