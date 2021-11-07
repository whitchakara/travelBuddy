import React,{useState,useEffect} from 'react';
//import {Link} from '@reach/router';
import axios from 'axios';
import {navigate} from '@reach/router';
//import Header from './Header';

const AllTravelers = (props)=> {
    const[travelerList, setTravelerList]= useState([]);
    useEffect(()=>{
        axios.get('http://localhost:8000/api/travelers')
        .then((res)=>{
            console.log(res);
            console.log(res.data);
            setTravelerList(res.data);
        } )
        .catch((err)=> {
            console.log(err);
        })

    },[])
    const deleteHandler =(id)=> {
            axios.delete(`http://localhost:8000/api/travelers/${id}`)
            .then((res)=> {
            console.log(res.data);
            setTravelerList(travelerList.filter((traveler) => traveler._id!== id));
        })
        .catch((err)=> {
            console.log(err);
        })
    }
    return(
        <div>
            {/* <Header link={'/add'} linkText="Add Pirate"/> */}
            <h1 style={{backgroundColor:"saddlebrown", color:"white"}} >Travelers</h1>
            <button  style={{backgroundColor:"blue", color:"white"}} onClick ={(e)=>{navigate('/')}} >Add a Traveler</button>
            {/* <table style ={{margin:"auto", border:"1px solid black"}}>
                <thead style={{backgroundColor:"lightgray", color:"white"}}>
                    <tr>
                        <th>Pirate</th>
                        <th>Action Available</th>
                    </tr>
                </thead>
                <tbody> */}
                <div style={{backgroundColor:"white"}}>
                    {
                        travelerList?
                        // eslint-disable-next-line array-callback-return
                        travelerList.map((traveler,index)=> (
                            <ul key={index}>
                                <li>{traveler.imageUrl && (<img className="table-img" src={traveler.imageUrl} alt="" />) }</li>
                                <h2>{traveler.screenName}</h2>
                                <button style={{backgroundColor:"blue", color:"white"}} onClick ={(e)=>{navigate(`/traveler/${traveler._id}`)}}>View Profile</button>
                                <button style={{backgroundColor:"red", color:"white"}} onClick={(e)=> {navigate(`edit/traveler/{traveler._id}`)}}>Edit Profile</button>
                            </ul>
                        ))
                        :null
                    }
                    
                {/* </tbody>
            </table> */}
            </div>
        </div>
    )
}
export default AllTravelers;