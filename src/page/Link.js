import React from 'react';
import {Card,Button,Image,Navbar} from 'react-bootstrap'
import Intro from '../component/intro'
import FadeInSection from '../component/fadeIn'
import Header from '../component/Header'
import AboutMe from '../component/aboutMe'
import Educations from '../component/Educations'
import Footer from '../component/Footer'
import Award from '../component/Award'
import Certificate from '../component/certificate'
function Links() {
  return (
    <div  >
      <div className='d-flex justify-content-center'>
     
        <Navbar className='d-flex justify-content-center text-center' style={{background:'#c0fefc',height:100,width:600}} expand="lg">
          <Image  src="https://storage.cloud.google.com/node-bright/medal.png" rounded style={{width:80}} />
          2nd place , Eastern <br/>
         
          
          </Navbar>
        
      </div>
      <br/>
      <p><a href='http://cablingandnetworkingcontest.com/home2.php' target="_blank" >Link Cabling Contest No.7</a></p><br/>
      
      <Image  src="https://storage.cloud.google.com/node-bright/Cabling-Contest-2019-01.jpg" rounded style={{width:1000,padding:20}} />
    </div>
  );
}

export default Links;
