import React from "react";
import FadeInSection from "../component/fadeIn";
import { Card, Button, Image } from "react-bootstrap";
function AboutMe() {
  return (
    <div id="aboutMe" className="row container-fulid">
      <div
        className="col-6 d-flex flex-row-reverse container-fulid"
        style={{ marginTop: 30 }}
      >
        <Image
          src="https://storage.cloud.google.com/node-bright/bright.png"
          rounded
          style={{ width: 650, marginRight: -25 }}
        />
      </div>
      <div className="col" style={{ marginLeft: 30 }}>
        <FadeInSection>
          <div>
            <br />
            <br />
            <br />
            <h2 className="text-left">About Me</h2>
            <br />
            <br />
            <br />

            <div className="row text-left">
              <div className="col-3 ">
                <h4>Name</h4>
                <br />
              </div>
              <div className="col " style={{ marginTop: 3 }}>
                <p>Yanpat Pissanuwattanasak</p>
                <br />
              </div>
            </div>
            <div className="row text-left">
              <div className="col-3 ">
                <h4>Date of birth</h4>
                <br />
              </div>
              <div className="col " style={{ marginTop: 3 }}>
                <p>February 1,2000</p>
                <br />
              </div>
            </div>
            <div className="row text-left">
              <div className="col-3 ">
                <h4>Address</h4>
                <br />
              </div>
              <div className="col " style={{ marginTop: 3 }}>
                <p>
                  38/20 Village No. 3 &nbsp;&nbsp;&nbsp;&nbsp; Sub-District :
                  Banhkaw
                </p>

                <p>District : Muang Chachoengsao </p>
                <p>Provice : Chachoengsao</p>
                <br />
              </div>
            </div>
            <div className="row text-left">
              <div className="col-3 ">
                <h4>Zip code</h4>
                <br />
              </div>
              <div className="col " style={{ marginTop: 3 }}>
                <p>24000</p>
                <br />
              </div>
            </div>
            <div className="row text-left">
              <div className="col-3 ">
                <h4>Email</h4>
                <br />
              </div>
              <div className="col " style={{ marginTop: 3 }}>
                <p>ynp.bright@gmail.com</p>
                <br />
              </div>
            </div>
            <div className="row text-left">
              <div className="col-3 ">
                <h4>Phone</h4>
                <br />
              </div>
              <div className="col " style={{ marginTop: 3 }}>
                <p>086 846 4543</p>
                <br />
              </div>
            </div>

            {/* <div className="row text-left">
                    <div className="col-3 ">
                        <h4>Name</h4><br/>
                        <h4>Date of birth</h4><br/>
                        <h4>Address</h4><br/>
                        
                      
                       
                        <h4>Zip code</h4><br/>
                        <h4>Email</h4><br/>
                        <h4>Phone</h4><br/>
                    </div>
                    <div className="col">
                        <h4>Yanpat Pissanuwattanasak</h4><br/>
                        <h4>February 1,2000</h4><br/>
                        <h4>38/20 No. 3 ,Banhkaw ,Muang Chachoengsao, Chachoengsao</h4><br/>
                       
                        <h4>24000</h4><br/>
                        <h4>ynp.bright@gmail.com</h4><br/>
                        <h4>086 846 4543</h4><br/>
                    </div>
            </div> */}
          </div>
        </FadeInSection>
      </div>
    </div>
  );
}

export default AboutMe;
