import React from 'react'
import "./Star.css"
export default function Star() {
  return (
    <>
    <div className='position-relative  d-inline-flex'>
    <i className="fa-solid fa-star py-3  after-bef"></i>
    <div className='before'> </div>
    </div>
    </>
  )
}
