import React from 'react';
import Typical from 'react-typical'
import FadeInSection from '../component/fadeIn'
import {Button,Image} from 'react-bootstrap'
import Ztext from "react-ztext";
import  { useEffect, useState } from 'react';
import '../index.css'
function  Intro()  {
  async function fetchdata() {
    const res = await fetch('/')
    res
    .json()
    .then(res => setdata(res))
    .then(console.log(data))
  }
  const [data, setdata] = useState("asdasd");
  const eiei= ""
  useEffect( () =>{

    fetchdata()
    console.log(data)
  },[""]
  )
  
  
  return (
     
            <div id='intro' className="row d-flex justify-content-center" style={{fontSize:50,height:970,background:'#c0fefc',/*backgroundImage: `url(${'https://storage.cloud.google.com/node-bright/bg.png'})`*/}}>
                  
                <div style={wrapperStyle}>
              <Ztext
                depth="100px"
                direction="both"
                event="pointer"
                eventRotation="30deg"
                eventDirection="default"
                fade={false}
                layers={50}
                perspective="500px"
              >
               
                <span role="img" aria-label="emoji" >
                😺
                </span>
              </Ztext>
            </div>
         
                <div className="align-middle" style={{}}>
                <br/><br/><br/><br/><br/>
                
                <FadeInSection>
                    <h1>{JSON.stringify(data.data)}</h1>
                    
               
               
               
             <Typical 
                steps={[" I'am Yanapat Pissanuwattanasak", 4000, ]}
                loop={Infinity}
                wrapper="p"
            />
            
            <p style={{fontSize:20}}> I’m a Senior at Kasetsart University Sriracha Campus </p>
           
            <a href="https://storage.cloud.google.com/node-bright/yanapatResume.pdf" target="_blank"><Button variant="outline-success" >Resume</Button></a><br/><br/><br/><br/>
            
             </FadeInSection>
             <Image className='blink' src="https://storage.cloud.google.com/node-bright/down-arrow.png" rounded style={{width:50}} />
            
            </div>
            <br/>
            
            </div>


    
  


    
  );
}

const wrapperStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  height: 100,
  marginTop: "100px",
  textAlign: "center",
  fontSize: "10rem",
  
};

export default Intro;
