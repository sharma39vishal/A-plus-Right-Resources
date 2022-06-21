import React from 'react'
import { Carousel } from "react-bootstrap";
export default function Carousels() {
  return (
    <div>
     

        <Carousel>
  <Carousel.Item >
    <img     className="d-block  w-100 "     src="      https://elements-cover-images-0.imgix.net/7cd7ec50-9c04-40d1-90c6-524d3e032b7b?auto=compress%2Cformat&fit=max&w=900&s=b6d42458b5d6747943080ea0d83376fe"      alt="First slide" width={"600px"} height={"520px"}   />
    <Carousel.Caption>
      <h3 style={{color:"gray"}}>Best Quality</h3>
      <p style={{color:"black",fontFamily:"Roboto Mono"}}>Resources are provided by one who has ecperienced it.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item >
    <img
      className="d-block w-100"
      src="https://static.vecteezy.com/system/resources/previews/001/270/244/original/studying-and-learning-online-concept-vector.jpg"
      alt="Second slide" width={"600px"} height={"520px"}
    />
    <Carousel.Caption>
      <h3  style={{color:"gray"}}>Effective</h3>
      <p style={{color:"black",fontFamily:"Roboto Mono"}}>Resource are used by many of them and multiple times.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://blog.tubikstudio.com/wp-content/uploads/2019/12/moonworkers_digital_illustration_tubik.png"
      alt="Third slide" width={"600px"} height={"520px"}
    />
    <Carousel.Caption>
      <h3  style={{color:"gray"}}>Practical</h3>
      <p style={{color:"black",fontFamily:"Roboto Mono"}}>Content has direct Application .</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    </div>
  )
}
