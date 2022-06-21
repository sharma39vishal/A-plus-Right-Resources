import React, { Component } from 'react'
import {Alert} from 'react-bootstrap'
export default class Android extends Component {
    

    constructor(){
        super();
        this.state={
          error:null,
          data:[]
        };
      }
      componentDidMount() {
        fetch("/resources")
          .then(res => res.json())
          .then(
            (ans) => {
              this.setState({
                data:ans
              });
            },
            (error) => {
              this.setState({
                error
              });
            }
          )
      }
  render() {
    const { error,data } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    }
     else {
    return (
<div className='mx-2 my-1'>
<div>
{data.map(data=>(
 <div className='mx-2'>
 {data.topic==='android' ? <Alert key={data.id} variant='secondary'>
 {data.content}
</Alert>:<></>}

</div>
))}
</div>

</div>
    )
       }
      }
}
