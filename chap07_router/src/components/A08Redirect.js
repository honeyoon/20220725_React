import React from 'react'
import { Navigate } from 'react-router-dom';

function A08Redirect() {
  const isChecked = false;

  if(!isChecked) { 
    return <Navigate to="/" replace={true} />
  }

  return (
    <div>
      <h1>A08Redirect</h1>
    </div>
  )
}

export default A08Redirect