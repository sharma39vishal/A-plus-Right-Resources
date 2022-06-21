import Nav from 'react-bootstrap/Nav';

function Footer() {
  return (
    <>
<br/>
    <div style={{backgroundColor:"#EED6D3"}}>
      <br/>
      <p className="text-center mt-4 mb-4">Follow Us:</p>
      <Nav className="justify-content-center" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="https://github.com/sharma39vishal/">
            <img src='https://img.icons8.com/clouds/344/github.png' width={"60px"} height={"60px"} alt='github' />
            
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1" href='https://www.linkedin.com/in/sharma39vishal'>
          <img src='https://img.icons8.com/nolan/344/linkedin.png' width={"60px"} height={"60px"} alt='LinkedIn' />
          
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2" href='mailto:sharma39vishal@gmail.com'><img src='https://img.icons8.com/clouds/344/gmail-new.png' width={"60px"} height={"60px"} alt='Gmail'/>
          </Nav.Link>
        </Nav.Item>
        </Nav>
<br/>
     
    </div>
    </>
  );
}

export default Footer;