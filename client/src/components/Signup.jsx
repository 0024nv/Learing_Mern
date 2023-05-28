import React,{useState} from 'react'
import { NavLink ,useNavigate} from 'react-router-dom'

const Signup = () => {
    const navigate = useNavigate();
    const [user,setUser] = useState({
        name:"",email:"",phone:"",work:"",password:"",cpassword:""
    })

    const [checkUser,Cuser] = useState('');
    const inputEvent=(e)=>{
        let name,value;
        name= e.target.name;
        value = e.target.value;
        setUser({...user,[name]:value});
    }

    const postRegister =async(e)=>{
        e.preventDefault();

        const {name,email,phone,work,password,cpassword} = user;

       const res = await fetch('/register',{
            method:'POST',
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                name,email,phone,work,password,cpassword
            })
        });

        console.log(res);
        console.log(res.status);
        console.log(res.body);
        const data =await res.json();
        console.log(data);
        console.log(data.error);
        Cuser(data.error);
        if(res.status === 422 || !data){
            window.alert("Registration Unsuccessful");
            console.log("Registration Unsuccessful");
            Cuser(data.error);
        }
        else{
            window.alert("Registration successful");
            console.log("Registration successful");
            navigate('/login');        // To redirect to login after successfull registration
        }
    }

  return (
    <>
    <div>I am Signup</div>
    <div>
        <form method='POST'>
            <div>
                <label htmlFor="name"></label>
                <input type="text" name='name' autoComplete='off' placeholder='Full name'
                value={user.name}
                onChange={inputEvent}
                />
            </div>
            <div>
                <label htmlFor="email"></label>
                <input type="email" name='email' autoComplete='off' placeholder='abc@gmail.com' 
                value={user.email}
                onChange={inputEvent}
                />
                <div>
                    {checkUser}
                </div>
            </div>
            <div>
                <label htmlFor="phone"></label>
                <input type="number" name='phone' autoComplete='off' placeholder='Phone number' 
                value={user.phone}
                onChange={inputEvent}
                />
            </div>
            <div>
                <label htmlFor="work"></label>
                <input type="text" name='work' autoComplete='off' placeholder='Profession'
                value={user.work}
                onChange={inputEvent}
                />
            </div>
            <div>
                <label htmlFor="password"></label>
                <input type="password" name='password' autoComplete='off' placeholder='password' 
                value={user.password}
                onChange={inputEvent}
                />
            </div>
            <div>
                <label htmlFor="cpassword"></label>
                <input type="password" name='cpassword' autoComplete='off' placeholder='confirm password'
                value={user.cpassword}
                onChange={inputEvent}
                />
            </div>
            <button type='submit' name='signup' onClick={postRegister} >Submit</button>
        </form>
    </div>
    <div>
        <NavLink to={'/login'}>
            I am already registered
        </NavLink>
    </div>
    </>
    
  )
}
export default Signup