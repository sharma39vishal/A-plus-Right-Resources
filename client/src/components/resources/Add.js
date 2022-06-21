import React, { useState } from 'react'
import {Button} from 'react-bootstrap'
import axios from "axios"
import { useNavigate } from "react-router-dom"

export default function Add() {
    const history = useNavigate()

    const [ resources, setresources] = useState({
        topic: "",
        content:""
    })
    const handleChange = e => {
        const { name, value } = e.target
        setresources({
            ...resources,
            [name]: value
        })
    }

    const add = () => {
        const { topic,content } = resources
        if( topic&&content){
         axios.post("/addresource", resources)
          .then( res => {
              alert(res.data.message)
               history("/resourcescategory")
         })
    } else {
        alert("invlid input")
    }
        
    }
  return (
    <div>
<div class="mb-3 mx-2 my-2">
    <h3>Add Resource</h3>
    <select className="form-select my-2" aria-label="Default select example" name="topic" onChange={ handleChange }>
    <option value="">Select Option</option>        
  <option value="web">Web-devlopment</option>
  <option value="android">Android-devlopment</option>
</select>

  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Your small effort can help other's" name="content" value={resources.content } onChange={ handleChange } />
</div>      
   <Button className='mx-4 my-2' variant="primary" type="submit" style={{height:"50px",width:"200px",background:"gray"}} onClick={add}>
      Add Resource
    </Button>
  </div>
  )
}
