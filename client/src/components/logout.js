import React,{useState, useEffect} from "react";
import axios from "axios";
import { navigate } from "@reach/router";
//import 'bootstrap/dist/css/bootstrap.min.css';
import { baseUrl } from '../assets/js/helpers';

const Logout = ()=> {
    window.localStorage.clear();
    window.location.href = baseUrl + "login";
        }




export default Logout;