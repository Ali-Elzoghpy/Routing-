import React from 'react'
import "./NotFound.css"
import notFound from   "../../assets/download.jpg"
import { Link } from 'react-router-dom';
export default function NotFound() {
  return (
    <>
    <div className='  text-center my-5 '>
      <img src={notFound} alt="" />
      </div>
      <Link  to=""  className='text-center d-block text-decoration-none text-success'> back to home</Link> 

      </>

  )
}
