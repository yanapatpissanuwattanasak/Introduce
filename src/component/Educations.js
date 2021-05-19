import React from 'react';
import Typical from 'react-typical'
import FadeInSection from '../component/fadeIn'
import {Image,Button} from 'react-bootstrap'
function Educations() {
  return (
      <div >
          <br/><br/>
        <div id='education' className="row">
            
            <div className="col-9"><h3> Educations </h3> </div><br/><br/>
            
        </div>
        <br/>
        <FadeInSection>
        <div className=" row d-flex justify-content-start" style={{height:150,background:''}}>
            
            <div className="col-4 "></div>
            <div className="col text-left" style={{background:''}}> 
                <div className="row">
                    <div className="col-1">
                        <Image src="https://storage.cloud.google.com/node-bright/online-course.png" rounded style={{width:50}} />
                    </div>
                    <div className="col" style={{marginTop:10}}> 
                    
                    <span>  2006-2012 </span> <br/><br/>
                    <span>  Anubanwatpituratiratrangsarit Chacheongsao </span>
                    </div>
                </div>
               
            </div>
            
        </div>
        </FadeInSection>
        <FadeInSection>
        <div className=" row d-flex justify-content-start" style={{height:150,background:''}}>
            
            <div className="col-4 "></div>
            <div className="col text-left" style={{background:''}}> 
                <div className="row">
                    <div className="col-1">
                        <Image src="https://storage.cloud.google.com/node-bright/online-course.png" rounded style={{width:50}} />
                    </div>
                    <div className="col" style={{marginTop:10}}> 
                    
                    <span>  2012-2018 </span> <br/><br/>
                    <span>  Benchamaratcharangsarit Chacheongsao </span>
                    </div>
                </div>
               
            </div>
            
        </div>
        </FadeInSection>
        <FadeInSection>
        <div className=" row d-flex justify-content-start" style={{height:170,background:''}}>
            
            <div className="col-4 "></div>
            <div className="col text-left" style={{background:''}}> 
                <div className="row">
                    <div className="col-1">
                        <Image src="https://storage.cloud.google.com/node-bright/online-course.png" rounded style={{width:50}} />
                    </div>
                    <div className="col" style={{marginTop:10}}> 
                    
                    <span>  2018-2021 </span> <br/><br/>
                    <span>  Kasetsart University Siracha Campus </span><br/><br/>
                    <a href="https://storage.cloud.google.com/node-bright/%E0%B9%81%E0%B8%AA%E0%B8%94%E0%B8%87%E0%B8%9C%E0%B8%A5%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%80%E0%B8%A3%E0%B8%B5%E0%B8%A2%E0%B8%99%E0%B8%99%E0%B8%B4%E0%B8%AA%E0%B8%B4%E0%B8%95.pdf" 
                        target="_blank">
                        <Button variant="outline-success">GPA</Button>
                    </a>
                    </div>
                </div>
               
            </div>
            
        </div>
        </FadeInSection>
      </div>
  );
}

export default Educations;
