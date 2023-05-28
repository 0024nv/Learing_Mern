import React,{ useState,useContext }from 'react';
import { NavLink ,useNavigate} from 'react-router-dom';

import { tglContext } from '../App';


const Login = () => {

    const {state,dispatch} = useContext(tglContext);

    const navigate = useNavigate();
    const [user, Luser] = useState({
        name: "",
        password: ""
    })

    const inputEvent = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        Luser({ ...user, [name]: value });
    }

    const userLogin = async (e) => {
        e.preventDefault();
        const {email,password} = user;
        console.log('Hello');
        const res = await fetch('/login',{
            method:'POST',
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                email,password
            })
        });
        console.log('Hello1');
        console.log(res);
        console.log(res.status);
        const data = await res.json();
        console.log(data);
        
        if(res.status === 400 || !data){
            console.log('Hello2');
            window.alert(data.error);
            console.log("Login unsuccessful");
        }
        else{
            console.log('Hello3');
            dispatch({type:"USER",payload:true});
            window.alert(data.message);
            console.log("Login successful");
            navigate('/')
        }
    }
    return (
        <>
            <div>
                <div>
                    I am login page
                </div>
                <div>
                    <form method='POST'>
                        <div>
                            <label htmlFor="email"></label>
                            <input type="email" name='email' placeholder='abc@gmail.com'
                                value={user.email}
                                onChange={inputEvent}
                            />
                        </div>
                        <div>
                            <label htmlFor="password"></label>
                            <input type="text" name='password' placeholder='Enter your password'
                                value={user.password}
                                onChange={inputEvent}
                            />
                        </div>
                        <button type='submit' name='login' onClick={userLogin} >Submit</button>
                    </form>
                </div>
                <div>
                    <NavLink to={'/signup'}>Create new Account</NavLink>
                </div>
            </div>
        </>
    )
}

export default Login