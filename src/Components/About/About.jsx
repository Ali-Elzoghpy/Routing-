import React, { useEffect } from 'react'
import Star from './../Star/Star';
import "./About.css"

export default function About() {

  useEffect(()=>{
      document.title = "About"
    },[])
  return (

<>
<div className='home-bg hight d-flex justify-content-center align-items-center '>
  <div className='te'>
  <div className='text-center text-white'>
  <h1>About Component
  </h1>
  <Star/>
  </div>
  <div className='container d-flex text-white fonts '>
  <p className='me-4 ps-4'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.

</p>
<p className='pe-4'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.

</p>
</div>
</div>
</div>

</>
  )
}
