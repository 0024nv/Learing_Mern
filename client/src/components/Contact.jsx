import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';


const Contact = () => {


  const [user,Fuser] = useState({
    name:"",
    email:"",
    phone:"",
    message:""
  });
  
  //  fetch details from backend
  const getDetails = async()=>{
    try {
      
      const res = await fetch('/getdata',{
        method:"GET",
        headers:{
          "Content-Type":"application/json"
        },
      })
      const data = await res.json();
      Fuser({...user,name:data.name,email:data.email,phone:data.phone});
      
    } catch (error) {
      console.log(error);
      
    }
  }

  // fire fetch data from backend once
  useEffect(() => {
   getDetails();
  },[])


  // sacving tyoed data in react state
  const inputEvent = (e)=>{
    const name = e.target.name;
    const value = e.target.value;

    Fuser({...user,[name]:value});
  }
  

  // sending contact data to backend
  const sendData = async(e)=>{

    e.preventDefault();
    const {name,email,phone,message} = user;

    const res =await fetch('/contact',{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        name,email,phone,message
      })
    });

    const data = await res.json();
    if(res.status === 400 || !data){
      console.log("Message not send");
    }
    else{
      alert("Message successfully sent");
      Fuser({...user,message:""});
    }

  };

  return (
    <>
    <div>I am Contact</div>
    <div>
    <div>
      <h5>
        Phone : 9876543210
      </h5>
    </div>
    <div>
      <h5>
        Email : abc@gmail.com
      </h5>
    </div>
    <div>
      <h5>
        Address : Bihar
      </h5>
    </div>
{/* form */}
    <div>
      <form method='POST'>
        <div>
          <input type="text" name='name' placeholder='Enter your name' required='true' value={user.name}
          onChange={inputEvent}/>
        </div>
        <div>
          <input type="number" name='phone' placeholder='Enter phone number' required='true 'value={user.phone}
          onChange={inputEvent} />
        </div>
        <div>
          <input type="email" name='email' placeholder='Enter your email' required='true'value={user.email}
          onChange={inputEvent} />
        </div>
        <div>
          <textarea name="message" placeholder='Message' cols="80" rows="10"
          value={user.message}
          onChange={inputEvent}
          ></textarea>
        </div>

        <button type='submit' onClick={sendData} >
    Send Message
        </button>
      </form>

    </div>
    </div>
    </>
  )
}

export default Contact