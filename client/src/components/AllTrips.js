import React, {useState,useEffect} from "react";
import axios from "axios";
import { navigate } from "@reach/router";
//import AddTraveler from "./AddTraveler";
//import Header from "./Header";

const AllTrips = (props)=> {
    const[tripList, setTripList]= useState([]);
  //const[traveler, setTraveler]= useState("");
    useEffect(()=>{
        axios.get('http://localhost:8000/api/trips')
        .then((res)=>{
            console.log(res);
            console.log(res.data);
            setTripList(res.data);
            localStorage.user = JSON.stringify(res.data.userLoggedIn.screenName)
            //setTraveler(res.data);
            //localStorage.setItem("userName", userName);
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
            {/* <Header link={} linkText=""/> */}
            <h1 > Welcome {localStorage.user}Join A trip</h1>
            <button  style={{backgroundColor:"blue", color:"white"}} onClick ={(e)=>{navigate('/trip/add')}} >Create a Trip</button>
            {/* <table style ={{margin:"auto", border:"1px solid black"}}>
                <thead style={{backgroundColor:"lightgray", color:"white"}}>
                    <tr>
                        <th>Pirate</th>
                        <th>Action Available</th>
                    </tr>
                </thead>
                <tbody> */}
                <div>
                    {
                        tripList?
                        // eslint-disable-next-line array-callback-return
                        tripList.map((trip,index)=> (
                            <ul key={index}>
                                <p>{trip.imageUrl && (<img className="table-img" src={trip.imageUrl} alt="" />) }</p>
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