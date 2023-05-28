import React,{useContext} from "react";
import { NavLink } from "react-router-dom";


import { tglContext } from "../App";

const Navbar = () => {

    const {state,dispatch} = useContext(tglContext);
    const RenderMenu =()=>{
        if(state){
            return <>
            <div >
            <NavLink to="/">Home</NavLink>
        </div>
        <div >
            <NavLink to="/about">About</NavLink>
        </div>
        <div >
            <NavLink to="/contact">Contact</NavLink>
        </div>
        <div >
            <NavLink to="/logout">Logout</NavLink>
        </div>
            </>
        }

        return <>
        <div >
            <NavLink to="/">Home</NavLink>
        </div>
        <div >
            <NavLink to="/about">About</NavLink>
        </div>
        <div >
            <NavLink to="/contact">Contact</NavLink>
        </div>
        <div >
            <NavLink to="/login">Login</NavLink>
        </div>
        <div >
            <NavLink to="/signup">Sign Up</NavLink>
        </div>
        
        </>
    }
    return <>
        <RenderMenu/>
    </>
}

export default Navbar;