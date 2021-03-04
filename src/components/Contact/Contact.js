import React,{useState} from 'react';
import {Zoom,Slide} from 'react-reveal';
import {Form,Col,Button, Jumbotron} from 'react-bootstrap';
import * as SiIcons from 'react-icons/si';
import * as FaIcons from 'react-icons/fa';


const Contact = ()=>{
       const [data,setdata] = useState(
      {
        Name:'',
        Email:'',
        Message:'',
      }
    );
    const handleForm=(event)=>{
     console.log(event.target.value)
     const {name,value} = event.target;
      setdata((preValue)=>{
        return{
          ...preValue,
      [name]:value,
        }
      });

    }
  var Wphelper = `https://api.whatsapp.com/send/?phone=%2B+919284797835&text=Name:${data.Name}%0aEmail:${data.Email}%0aMessage:${data.Message}`;
  var GmailHelper = `https://mail.google.com/mail/?view=cm&fs=1&to=vyankateshgadpallewar12@gmail.com&su=Hi.. I'm ${data.Name} From%20Portfolio&body=${data.Message}`;
    return(
        <>
        <Jumbotron style={{marginTop:'10%'}} className="bg-white" fluid>
        <Zoom top>
        <h1 className="p-3 m-3 text-center font-weight-bold">Contact Me</h1>
      </Zoom>

      
    
 <Form onSubmit={onsubmit}>
 <Form.Row > 
    <Col sm  className=" mb-2 p-4">
     <Form.Control onChange={handleForm} value={data.name} name="Name" placeholder="Enter Name" required="" />
    </Col>
    <Col   className="d-sm-block d-lg-none d-md-none mb-2 p-4">
      <Form.Control onChange={handleForm} value={data.email} name="Email" placeholder="Email" required="" />
    </Col>
    <Col   className="d-lg-block d-md-block d-sm-none d-none mb-2 p-4">
      <Form.Control onChange={handleForm} disabled value={'vyankateshgadpallewar12@gmail.com'} name="Email" placeholder="Email" />
    </Col>
    <Col sm  className=" mb-2 p-4">
        <Form.Group >
    <Form.Label style={{fontWeight:'bold'}} required="">Enter Message</Form.Label>
    <Form.Control onChange={handleForm} value={data.message} name="Message" as="textarea" rows={4} />
  </Form.Group>
    </Col>
  </Form.Row>

 </Form>
  <Col sm className="d-lg-block d-md-block d-none d-sm-none mb-2 p-4" style={{marginLeft:'50%'}}>
  <Slide left><Button type="submit" target="blank" href={GmailHelper} rel="noopner" sm style={{alignSelf:'center',alignContent:'center',justifyContent:'center'}} variant="dark"><span> <SiIcons.SiGmail color="dark" className="anything" style={{paddingRight:'10px',}} size={30}/></span>G-Mail</Button></Slide>
  </Col>
  <Col sm className="mb-2 p-4 d-lg-none d-md-none d-xs-flex d-sm-flex">
      <Slide bottom>
      <Button variant="success" className="col-md-1" href={Wphelper} target="black" rel="noopner"><FaIcons.FaWhatsapp color="#4ac959" className="anything" size={20} color="white"/><span className="p-2">WhatsApp</span></Button>
      </Slide>
  </Col>
        </Jumbotron>
        </> 
    )
}


export default  Contact;