import React from 'react';
import {Card,Button,Image,Navbar,Carousel} from 'react-bootstrap'
import Intro from '../component/intro'
import FadeInSection from '../component/fadeIn'
import Header from '../component/Header'
import AboutMe from '../component/aboutMe'
import Educations from '../component/Educations'
import Footer from '../component/Footer'
import Award from '../component/Award'
import Certificate from '../component/certificate'

function Topgun() {
  return (
    <div  >
      <div className='d-flex justify-content-center' style={{}}>
     
        <Navbar  className='d-flex justify-content-center text-center' style={{background:'#c0fefc',height:100,width:600}} expand="lg">
          <Image  src="https://storage.cloud.google.com/node-bright/medal.png" rounded style={{width:80,}} />
          7th place , Thailand <br/>
         
          
          </Navbar>
        
      </div>
      <div >
      <br/>
      <p style={{backgroundColor:''}}><a  target="_blank" > TESA Top Gun 2021 At Siam University</a></p><br/>
      <br/>
      <div style={{backgroundColor:'#F7F7F7'}} >
      <span style={{fontSize:20 , color:'gray'}}>ลงเเข่งในชื่อทีม </span>
      <span  style={{fontSize:40 , color:'red'}} >เเตงโมเเตงโมเเตงโม</span>
      <br/>
      <br/>
      <Image  src="https://storage.cloud.google.com/node-bright/award.jpg" rounded style={{width:1300,padding:20}} />
      <br/>
      </div>
     
      
      </div>
      <span style={{fontSize:50,width:'100%'}}> ภาพบรรยากาศการอบรมของมหาวิทยาลัยเเละการเเข่ง</span>
      <div className='d-flex justify-content-center' >
      
      <br/>
      <br/>
     
      <Carousel style={{width:1500,}}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://storage.cloud.google.com/node-bright/top_1.jpg"
            alt=""
          />
          <Carousel.Caption>
            <h3></h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://storage.cloud.google.com/node-bright/top_2.jpg"
            alt=""
          />

          <Carousel.Caption>
            <h3></h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://storage.cloud.google.com/node-bright/top_3.jpg"
            alt=""
          />

          <Carousel.Caption>
            <h3></h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://storage.cloud.google.com/node-bright/top_4.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3></h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
</Carousel>

<br/>
</div>
<div style={{backgroundColor:'#EAE8E8'}}>
<br/>
      <br/>
      <span style={{fontSize:50}}>ตารางผลคะเเนน</span>
      <br/>
      <br/>
<Image  src="https://storage.cloud.google.com/node-bright/top_score.jpg" rounded style={{width:1300,padding:20,}} />
    </div>
    </div>
  );
}

export default Topgun;
