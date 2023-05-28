import React from 'react';
import { useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

import { useContext } from 'react';
import { tglContext } from '../App';

const Logout = () => {
   const {state,dispatch} = useContext(tglContext);

    const navigate = useNavigate();
    const logoutUser = async ()=>{
        try {
            const res = await fetch('/logout',{
                method:"GET",
                headers:{
                  Accept:"application/json",
                  "Content-Type":"application/json"
                },
                credentials:'include'
              })
              
              const data = await res.json();
              if(res.status !== 200 || !data){
                    console.log("Error in signout")
              }

        } catch (error) {
            console.log(error);
        }
        dispatch({type:"USER",payload:false})
        navigate('/login');
    }
    useEffect(()=>{
        logoutUser();
    },[])
  return (
    <>
    <p>
        I am log out page
    </p>
    
    </>
  )
}

export default Logout