import React from 'react'
import './resources.css'
import { useNavigate } from "react-router-dom"

export default function Resources() {
const navigation = useNavigate()  
  return (
    <div>
<div class="container">
  <div class="plans">
    <div class="title"></div>

    <label class="plan basic-plan" for="basic" >
    <input type="radio" id="basic" name="plan" />
      <div class="plan-content" onClick={()=>{navigation('/webdevlopment')}}>
        <img loading="lazy" src="https://img.freepik.com/free-vector/web-developers-courses-computer-programming-web-design-script-coding-study-computer-science-student-learning-interface-structure-components_335657-2542.jpg?w=826&t=st=1655371968~exp=1655372568~hmac=d955516260dd905829036bf1016f3f22e05824f55235004bcc5ce99fa923a20f" alt="" />
        <div class="plan-details">
          <span>Web-Development</span>
          <p>1. Road Map · 2. Freecodecamp · 3. Codecademy ·  4. Scrimba · 5. Codepen · 6. W3Schools </p>
        </div>
      </div>
    </label>
    
    <label class="plan complete-plan" for="complete"  >
      <input type="radio" id="complete" name="plan" />
      <div class="plan-content" onClick={()=>{navigation('/androiddevlopment')}}>
        <img loading="lazy" src="https://img.freepik.com/free-vector/appointment-booking-design_23-2148557730.jpg?t=st=1655371861~exp=1655372461~hmac=30daa091eb7fcdde3a4ff142cee97de4bc9d8e15c2d36a90dc47c0663f61807b&w=826" alt="" />
        <div class="plan-details">
          <span>Android-devlopment</span>
          <p>Awesome Android Learning Resources aims to be the starting point for Android App Developers </p>
        </div>
      </div>
    </label>
  </div>
</div>
    </div>
  )
}
 