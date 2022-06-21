import React from "react"
import "./homepage.css"
import Carousels from "./Carousels"
import Category from "./Category"
const Homepage = (props) => {
    return (<div>
    <Carousels/>
    <br/>
    { props.user&& props.user._id ? <div><Category/></div> :<> </>}
    
    </div>
    )
}

export default Homepage