import React from 'react';
import {Zoom,Slide,Roll} from 'react-reveal';
import * as TiIcons from 'react-icons/ti'
import * as DiIcons from 'react-icons/di'
import * as SiIcons from 'react-icons/si'
import HClose from '../assets/img3.jpg'
import {Row,Col,Container, Jumbotron, Image} from 'react-bootstrap';


const About = ()=>{


    return(

        <>
        <Jumbotron className="bg-white mt-5 mb-5" fluid>
        <Zoom>
        <h1 className="p-3 m-3 text-start font-weight-bold text-center">About Me</h1>
      </Zoom>
      <Roll>
      <Image className=" p-1 shadow-lg bg-dark rounded-circle ml-auto" src={HClose} style={{ width: '250px',height:'250px',marginLeft:'20%', marginTop: '10px', padding: '10px',objectFit:'cover'}} />
      </Roll>
      <Slide right>
        
        <p className="p-4 m-4  " style={{fontWeight:'bold'}}>
        A Final-year Computer Science undergraduate student at Dr.Bat University with an interest in cybersecurity, software development and Information Technology.
        I am greatly influenced by the web as well as Android technologies and have good experience working with them. Actively looking forward to join a firm where I can contribute to upcoming products and help me to upgrade myself to new level.
        </p>

      </Slide>
      <Container className="ml-4" fluid>
        <Row>
          <Col>
          <Slide left><h2>Languages</h2></Slide>
          <p><span><TiIcons.TiHtml5 size={30}/></span> HTML</p>
          <p><span><DiIcons.DiCss3 size={30}/></span> CSS</p>
          <p><span><DiIcons.DiPython size={30}/></span> Python</p>
          <p><span><DiIcons.DiJavascript size={30}/></span> JavaScript</p>
          <p><span><DiIcons.DiCreativecommons size={30}/></span> C </p>
          

          
          </Col>
          <Col>
          <Slide right><h2>FrameWorks</h2></Slide>
          <p><span><SiIcons.SiBootstrap size={30}/></span> Bootstrap</p>
          <p><span><SiIcons.SiReact size={30}/></span> ReactJS</p>
          <p><span><SiIcons.SiReact size={30}/></span> React-Native</p>
          <p><span><SiIcons.SiReact size={30}/></span> NodeJs(Express)</p>
          <p><span><SiIcons.SiReact size={30}/></span> MongoDB</p>
          </Col>
        </Row>
      </Container>
      
        </Jumbotron>

        </>
    );
}

export default About;



