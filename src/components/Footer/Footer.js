import React from 'react'
import {Row,Container} from 'react-bootstrap';
import {Slide,Roll} from 'react-reveal';
import * as  FaIcons from 'react-icons/fa';



function Footer(){

return(
    <>
<Row className="bg-dark p-5 justify-content-center">
    <Slide left>
        <Container fluid>
            <Row className="justify-content-between" >   
                
                <Roll>
                <a href="https://www.facebook.com/people/V-G/100009313535177" target="blank"  rel="noopener noreferrer"><FaIcons.FaFacebookF className="anything m-2 m-2" size={30} color="#3b5998"/></a>
                </Roll>
                
                
                <Roll top>
                <a href="https://www.instagram.com/vyankateshgadpallewar/" target="blank"  rel="noopener noreferrer"><FaIcons.FaInstagram color="#bc2a8d" className="anything m-2" size={30}/></a>

                </Roll>
                <Roll bottom>
                <a href="https://www.linkedin.com/in/vyankatesh-gadpallewar-48310b19b/" target="blank"  rel="noopener noreferrer"><FaIcons.FaLinkedinIn color="#0e76a8" className="anything m-2" size={30}/></a>
                </Roll>
  
                <Roll top>
                    
                        <a href="https://api.whatsapp.com/send/?phone=%2B+919284797835&text=none" target="blank"  rel="noopener noreferrer"><FaIcons.FaWhatsapp color="#4ac959" className="anything m-2" size={30}/></a>
                </Roll>
            </Row>
        </Container>
      </Slide>

</Row>
    </>
)

}

export default Footer;