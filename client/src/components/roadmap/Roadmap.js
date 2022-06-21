import React from 'react'
import "./roadmap.css"
import { useNavigate } from "react-router-dom"

export default function Roadmap() {

  const history = useNavigate()

  const cs =()=>{
    history('/commingsoon');
    }

  return (
    <>
    
  <div class="main-holder d-flex flex-wrap justify-content-center align-items-center">
  <h3 className=" justify-content-md-center my-2" style={{fontFamily:'Ms Modi',fontSize:"25px"}}>"Shortest Path to Reach Your Goal Faster"</h3>
      <div class="d-flex flex-wrap col-12">

        <div class="category category-1 d-flex flex-column justify-content-center align-item-center" onClick={cs}>
          <div class="category-header category-header-1"></div>
          <img src="https://png.pngtree.com/png-vector/20190611/ourlarge/pngtree-web-development-illustration-modern-can-be-used-for-landing-pages-web-png-image_1496210.jpg" class="img-responsive card-img" />
          <p class="card-text">Web development</p>
        </div>
        
        <div class="category category-2 d-flex flex-column justify-content-center align-item-center" onClick={cs}>
          <div class="category-header category-header-2"></div>
          <img src="https://www.kindpng.com/picc/m/393-3933309_andro-app-development-services-inner-native-android-app.png" class="img-responsive card-img" />
          <p class="card-text">Android development</p>
        </div>

        <div class="category category-3 d-flex flex-column justify-content-center align-item-center" onClick={cs}>
          <div class="category-header category-header-3"></div>
          <img src="https://www.pngitem.com/pimgs/m/346-3460443_machine-learning-course-near-me-machine-learning-logo.png" class="img-responsive card-img" />
          <p class="card-text">Machine Learning</p>
        </div>

        <div class="category category-4 d-flex flex-column justify-content-center align-item-center" onClick={cs}>
          <div class="category-header category-header-4"></div>
          <img src="https://w7.pngwing.com/pngs/427/819/png-transparent-data-science-data-mining-predictive-analytics-scientist-infographic-people-symmetry.png" class="img-responsive card-img" />
          <p class="card-text">Data Science</p>
        </div>

        <div class="category category-5 d-flex flex-column justify-content-center align-item-center" onClick={cs}>
          <div class="category-header category-header-5"></div>
          <img src="https://www.nicepng.com/png/detail/380-3801129_glider-offers-a-clean-and-elegant-way-to.png" class="img-responsive card-img" />
          <p class="card-text">Programming Language</p>
        </div>

        <div class="category category-6 d-flex flex-column justify-content-center align-item-center" onClick={cs}>
          <div class="category-header category-header-6"></div>
          <img src="https://img.favpng.com/0/17/24/graph-theory-data-structure-vertex-directed-graph-png-favpng-h9TxPsE8QJc4EbL1u7NhPR4w0.jpg" class="img-responsive card-img" />
          <p class="card-text">Data Structure And Algo.</p>
        </div>


      </div>
    </div>
    </>
  )
}
