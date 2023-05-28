import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const Home = () => {

  const [udata, Fudata] = useState({
    name: "",
    work: ""
  })
  const homeData = async () => {
    try {
      const res = await fetch('/getdata', {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      })
      const data = await res.json();
      console.log(data);

      Fudata({ ...udata, name: data.name, work: data.work });
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    homeData();
  }, [])
  return (
    <>
      <div>I am Home</div>
      {udata.name &&<div>

        <p>
          I am {udata.name}
        </p>
        <h2>I am {udata.work}</h2>
      </div>}
    </>
  )
}

export default Home