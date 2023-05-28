import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Error from "./components/Error";
import { Route, Routes } from "react-router-dom";
import Logout from "./components/Logout";
import { createContext } from "react";
import { useReducer } from "react";


// working on toggling login/logout

// useReducer for state tracking
const initialState = null;
const reducer = (state,action)=>{
  if(action.type ==="USER"){
    return action.payload;
  }

  return state;

}


// create contextAPI
const tglContext = createContext();



const App = () => {
  const [state,dispatch] = useReducer(reducer,initialState);
  return <>
    <tglContext.Provider value={{state,dispatch}}>
      <Navbar />
      <Routes>
        <Route exact path={'/'} element={<Home />} />
        <Route exact path={'/about'} element={<About />} />
        <Route exact path={'/contact'} element={<Contact />} />
        <Route exact path={'/login'} element={<Login />} />
        <Route exact path={'/signup'} element={<Signup />} />
        <Route exact path={'/logout'} element={<Logout />} />
        <Route path="*" element={<Error />} />
      </Routes>

    </tglContext.Provider>
  </>
}
export default App;
export { tglContext };