import homeImg from "../../assets/poert1.png";
import img2 from "../../assets/port2.png";
import img3 from "../../assets/port3.png";
import "./Portfolio.css";
import { useEffect, useState } from "react";
export default function Portfolio() {

//   const [imgSrs,setImgSrc]  =useState("")
//  const  [modalOpen,setModalOpen]  =useState(false)


  // useEffect(() => {
  //   let cards = document.querySelectorAll(".img-list");
  //   let modalInner = document.querySelector(".modal-inner");
  //   let modal = document.getElementById("modal");
  //   console.log(cards);

  //   cards.forEach((card) => {
  //     card.addEventListener("click", (e) => {
  //       modal.classList.remove("d-none");
  //       console.log(e.target.getAttribute("src"))
  //     });
  //   });

  //   modal.addEventListener("click", (e) => {
  //     if (e.target.getAttribute("id") == "modal") {
  //       modal.classList.add("d-none");
  //     }
  //   });
  //   modalInner.addEventListener("click", function (e) {
  //     e.stopPropagation();
  //   });
  // }, []);

  useEffect(()=>{
    document.title = "portfolio"
  },[])

  return (
    <>
      <div className="top-section text-center mt-3 contact-bg fw-bolder">
        <h1>Portfolio Component</h1>
        <div className="position-relative contact-bg d-inline-flex">
          <i className="fa-solid fa-star py-3  after-bef2 "></i>
          <div className="before2"> </div>
        </div>
      </div>
      <div className="container ">
        <div className="row g-5 mb-4">
          <div className="col-md-6 col-lg-4">
            <div className="position-relative parnt">
              <img src={homeImg}  alt="" className="w-100 rounded-3 " />
              <div className="layer position-absolute rounded-3  ">
                <i class="fa-solid fa-plus fw-bolder text-white  rounded-circle p-5 fa-6x img-list  "  data-bs-toggle="modal" data-bs-target="#exampleModal"   ></i>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="position-relative parnt">
              <img src={img2} alt="" className="w-100 rounded-3 " />
              <div className="layer position-absolute rounded-3 ">
                <i className="fa-solid fa-plus fw-bolder text-white  rounded-circle p-5 fa-6x img-list" data-bs-toggle="modal" data-bs-target="#exampleModal2"></i>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="position-relative parnt">
              <img src={img3} alt="" className="w-100 rounded-3  " />
              <div className="layer position-absolute rounded-3 ">
                <i class="fa-solid fa-plus fw-bolder text-white  rounded-circle p-5 fa-6x img-list" data-bs-toggle="modal" data-bs-target="#exampleModal3"></i>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="position-relative parnt">
              <img src={homeImg} alt="" className="w-100 rounded-3 img-list" />
              <div className="layer position-absolute rounded-3  ">
                <i class="fa-solid fa-plus fw-bolder text-white  rounded-circle p-5 fa-6x img-list" data-bs-toggle="modal" data-bs-target="#exampleModal4"></i>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="position-relative parnt">
              <img src={img2} alt="" className="w-100 rounded-3 img-list" />
              <div className="layer position-absolute rounded-3  ">
                <i className="fa-solid fa-plus fw-bolder text-white  rounded-circle p-5 fa-6x" data-bs-toggle="modal" data-bs-target="#exampleModal5"></i>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="position-relative parnt">
              <img src={img3} alt="" className="w-100 rounded-3 img-list" />
              <div className="layer position-absolute rounded-3 ">
                <i className="fa-solid fa-plus fw-bolder text-white  rounded-circle p-5 fa-6x" data-bs-toggle="modal" data-bs-target="#exampleModal6"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}


<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content bg-transparent border-0">
   
      <div class="modal-body " >
      <img src={homeImg}  alt="" className="w-100 rounded-3 " />

      </div>
     
    </div>
  </div>
</div>
<div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content bg-transparent border-0">
   
      <div class="modal-body " >
      <img src={img2} alt="" className="w-100 rounded-3 " />

      </div>
     
    </div>
  </div>
</div>
<div class="modal fade" id="exampleModal3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content bg-transparent border-0">
   
      <div class="modal-body " >
      <img src={img3} alt="" className="w-100 rounded-3  " />

      </div>
     
    </div>
  </div>
</div>
<div class="modal " id="exampleModal4" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content bg-transparent border-0">
   
      <div class="modal-body " >
      <img src={homeImg} alt="" className="w-100 rounded-3 img-list" />

      </div>
     
    </div>
  </div>
</div>
<div class="modal " id="exampleModal5" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content bg-transparent border-0">
   
      <div class="modal-body " >
      <img src={img2} alt="" className="w-100 rounded-3 img-list" />

      </div>
     
    </div>
  </div>
</div>
   
<div class="modal " id="exampleModal6" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content bg-transparent border-0">
   
      <div class="modal-body " >
      <img src={img3} alt="" className="w-100 rounded-3 img-list" />

      </div>
     
    </div>
  </div>
</div>
   

    </>
  );
}
   {/* <div id="modal" className="d-none">
        <div className="modal-inner "></div>
      </div> */}