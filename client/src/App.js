import './App.css'
import Homepage from "./components/homepage/Homepage"
import Login from "./components/login/Login"
import Register from "./components/register/Register"
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import { useEffect, useState } from 'react';
import Navbar from './components/navbar/Navbar';
import Resources from './components/resources/Resources';
// import Roadmap from './components/roadmap/Roadmap';
import CommingSoon from './components/homepage/CommingSoon';
import Footer from './components/footer/Footer';
import Alert from 'react-bootstrap/Alert';
import Web from './components/resources/Web';
import Android from './components/resources/Android';
import Add from './components/resources/Add';

function App() {

  const [ user, setLoginUser] = useState({})
useEffect(()=>{
  setLoginUser(JSON.parse(localStorage.getItem("MyUser")))
},[])

  const updateUser=(user)=>{
    localStorage.setItem("MyUser",JSON.stringify(user))
    setLoginUser(user)
  }
  return (
    <>
    <Navbar user={user} updateUser={updateUser} />

    { user && user._id ?  <Alert variant='warning' style={{fontFamily:'Ms Modi',fontSize:"20px"}}>
          Hi, "{user.name}"  Welcome to Stack
        </Alert>
        :  <Alert variant='danger'>
       Hi, folk Login to get Roadmap, doubt support and Resources 
      </Alert> }   
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={  <Homepage user={user} updateUser={updateUser} /> } />
          {/* <Route exact path="/roadmap" element={ user && user._id ? <Roadmap/>: <Login updateUser={updateUser}/> } /> */}
          <Route exact path="/commingsoon" element={ user && user._id ? <CommingSoon/>: <Login updateUser={updateUser}/> } />
          <Route exact path="/resourcescategory" element={  user&& user._id ? <Resources/> : <Login updateUser={updateUser}/> } />
          <Route path="/login" element={<Login updateUser={updateUser}/> } />
          <Route path="/register" element={ <Register />} />
          <Route path="/webdevlopment" element={ user&& user._id ? <div><Web /><Add/></div> : <Login updateUser={updateUser}/>} />
          <Route path="/androiddevlopment" element={ user&& user._id ? <div><Android /><Add/></div> : <Login updateUser={updateUser}/>} />
        </Routes>
      </Router>
    </div>
    <Footer/>
    </>

  );
}

export default App;