import React, { useEffect } from "react";
import myImage from "../../assets/avataaars.svg"
import "./Home.css"
import Star from "../Star/Star";
export default function Home() {
    useEffect(()=>{
        document.title = "Home"
      },[])
  return (
    <>
      <div className="home-bg py-3 text-center text-white mt-5">
        <img src={myImage}  className="col-2 mt-5 mb-3" alt="" />
        <h1>start Framework 
        </h1>
        <Star/>
        <p>Graphic Artist - Web Designer - Illustrator
        </p>
      </div>
    </>
  );
}
