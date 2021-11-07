import React, {useState,useEffect} from "react";
import axios from "axios";
import { navigate } from "@reach/router";

const AllTrips = (props)=> {
    const[tripList, setTripList]= useState([]);
    useEffect(()=>{
        axios.get('http://localhost:8000/api/trips')
        .then((res)=>{
            console.log(res);
            console.log(res.data);
            setTripList(res.data);
        } )
        .catch((err)=> {
            console.log(err);
        })

    },[])
    const deleteHandler =(id)=> {
        axios.delete(`http://localhost:8000/api/trips/${id}`)
        .then((res)=> {
            console.log(res.data);
            setTripList(tripList.filter((trip) => trip._id!== id));
        })
        .catch((err)=> {
            console.log(err);
        })
    }
    return(
        <div>
            {/* <Header link={'/add'} linkText="Add Pirate"/> */}
            <h1 >Join A trip</h1>
            <button  style={{backgroundColor:"blue", color:"white"}} onClick ={(e)=>{navigate('/trip/add')}} >Create a Trip</button>
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
                        tripList?
                        // eslint-disable-next-line array-callback-return
                        tripList.map((trip,index)=> (
                            <ul key={index}>
                                <li>{trip.imageUrl && (<img className="table-img" src={trip.imageUrl} alt="" />) }</li>
                                <h2>{trip.location}</h2>
                                <button style={{backgroundColor:"blue", color:"white"}} onClick ={(e)=>{navigate(`/trip/${trip._id}`)}}>View</button>
                                <button style={{backgroundColor:"red", color:"white"}} onClick={(e)=> deleteHandler(trip._id)}>delete</button>
                                <button style={{backgroundColor:"red", color:"white"}} onClick={(e)=> {navigate(`/edit/trip/${trip._id}`)}}>Edit</button>
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
export default AllTrips;