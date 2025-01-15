import React, { useEffect } from "react";
import "./Contact.css";
import Star from './../Star/Star';

export default function Contact() {
  useEffect(()=>{
    document.title = "Contact"
  },[])
  return (
    <>
      <div className="my-container text-center mt-5 ">
        <br />
        <h1 className="mt-3 contact-bg fw-bolder mt-5">Conatct Section</h1>
        <div className='position-relative contact-bg d-inline-flex mb-5'>
    <i className="fa-solid fa-star py-3  after-bef2"></i>
    <div className='before2'> </div>
    </div>        <input type="text" className="form-control rounded-bottom-2  mb-5" placeholder="userName" />
        <input type="text" className="form-control mb-5"placeholder="userAge" />
        <input type="email" className="form-control mb-5" placeholder="userEmail" />
        <input type="password" className="form-control" placeholder="userPass"/>
        <button className="btn  p-3 py-2  btn-success d-flex fonts my-4 ">Send Massege</button>
      </div>
    
    </>
  );
}
