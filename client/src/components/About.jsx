import {React,useState,useEffect} from 'react'
import { useNavigate, useRouteLoaderData } from 'react-router-dom';

const About = () => {

const [userDet,funUserDet] = useState({});
const navigate = useNavigate();
const callAboutPage = async ()=>{
  try {
    const res = await fetch('/about',{
      method:"GET",
      headers:{
        Accept:"application/json",
        "Content-Type":"application/json"
      },
      credentials:'include'
    })

    const data = await res.json();
    console.log(`res.status: ${res.status}`);
    console.log(`Data: ${data}`);
    console.log(`Name: ${data.name}`);
    funUserDet(data);
  
    if(res.status !== 200){
      console.log("In If of about");
      window.alert("Error in log in");
    }
    
  } catch (err) {
    console.log("In catch of about");
    console.log(err);
    navigate('/login');
  }
}

  useEffect(()=>{
    callAboutPage();
  },[]);

   const  [swap,Fswap] = useState(1);
   const toggleAbout = (e)=>{
    e.preventDefault();
    Fswap(1);
   }
   const toggleTimeline = (e)=>{
    e.preventDefault();
    Fswap(0);
   }

  return (
    <>
      <h4>
        I am About You
      </h4>
      <div>
        <form method='GET'>
          <div>
            <div >
              <img src={userDet.name === "test10"?'./images/img2.jpg':'./images/img1.jpg'} alt="Profile" style={{ width: '100px' }} />
            </div>
            <div>
              <h4>
                {userDet.name}
              </h4>
              <h6>
              {userDet.work} <span>Rating: 5/10</span>
              </h6>
              <div>
                <input type="submit" value={"Edit Profile"} />
              </div>
            </div>
            <div>
             <div>
              <button onClick={toggleAbout} >About</button>
             </div>
             <div>
              <button onClick={toggleTimeline}>Timeline</button>
             </div>
            </div>
            <div>
              {/* left side url */}
              <div>
                  <h5>WORK LINK</h5>
                  <a href="https://www.youtube.com/" target="_youtube">Youtube</a> <br />
                  <a href="https://www.youtube.com/" target="_youtube">Instagram</a> <br />
                  <a href="https://www.youtube.com/" target="_youtube">Facebook</a> <br />
                  <a href="https://www.youtube.com/" target="_youtube">Youtube</a> <br />
              </div>
              <p> swpa: {swap}</p>
        
              {/* Right side data toggle */}
              <div>
                {swap?<><h3>About Toggle</h3>
                <div className="home">
                  <div>
                    <span>User Id: </span>  {userDet._id}
                  </div>
                  <div>
                    <span>Name: </span>  {userDet.name}
                  </div>
                </div></>:<><div className="timeline">
                  <h3>Timeline Toggle</h3>
                  <div>
                  <span>Experience: </span> 10yrs
                  </div>
                  <div>
                  <span>Email: </span>  {userDet.email}
                  </div>
                  <div>
                  <span>Projects: </span> 130
                  </div>
                </div></> 
}  
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default About