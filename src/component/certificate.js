import React from 'react';
import Typical from 'react-typical'
import FadeInSection from '../component/fadeIn'
import {Image,Button} from 'react-bootstrap'
function Certificate() {
  return (
      <div >
          <br/>
        <div className="row">
            
            <div id='certificate' className="col-9"><h3> Certificate </h3> </div><br/><br/>
            
        </div>
        <br/>
        <FadeInSection>
        <div className=" row d-flex justify-content-start" style={{height:150,background:''}}>
            
            <div className="col-4 "></div>
            <div className="col text-left" style={{background:''}}> 
                <div className="row">
                    <div className="col-1">
                        <Image src="https://storage.cloud.google.com/node-bright/certificate.png" rounded style={{marginTop:10,width:90}} />
                    </div>
                    <div className="col" style={{marginTop:10,marginLeft:20}}> 
                    
                    <span>  10/06/2019 - 14/06/2019 </span> <br/>
                    <span><a href="https://storage.cloud.google.com/node-bright/exceed.jpg" target="_blank" >  Exceed Camp at Kasetsart University Campus </a></span><br/>
                    <span style={{color:'gray'}}>  Moblie Application at Kasetsart University Campus </span>
                    </div>
                </div>
               
            </div>
            
        </div>
        </FadeInSection>
        <FadeInSection>
        <div className=" row d-flex justify-content-start" style={{ height:150,background:''}}>
            
            <div className="col-4 "></div>
            <div className="col text-left" style={{background:''}}> 
                <div className="row">
                    <div className="col-1">
                        <Image src="https://storage.cloud.google.com/node-bright/certificate.png"  rounded style={{marginTop:10,width:90}} />
                    </div>
                    <div className="col" style={{marginTop:10,marginLeft:20}}> 
                    
                    <span>  19/09/2020 - 20/09/2020</span> <br/>
                    <span> <a href="https://storage.cloud.google.com/node-bright/dat.jpg" target="_blank" >  Moblie e Application at Kasetsart University Campus </a></span><br/>
                    <span style={{color:'gray'}} >   Building Mobile Application With React Native </span>
                    </div>
                </div>
               
            </div>
            
        </div>
        </FadeInSection>
       
       
      </div>
  );
}

export default Certificate;
