import React from 'react';
import { NavLink } from 'react-router-dom';

const Error = () => {
  return (
    <>
    <h2>Error 404</h2>
    <div>
      <NavLink to='/'>Go back</NavLink>
    </div>
    </>
  )
}

export default Error