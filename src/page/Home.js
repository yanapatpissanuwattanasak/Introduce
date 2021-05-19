import React from 'react';
import {Card,Button,Image} from 'react-bootstrap'
import Intro from '../component/intro'
import FadeInSection from '../component/fadeIn'
import Header from '../component/Header'
import AboutMe from '../component/aboutMe'
import Educations from '../component/Educations'
import Footer from '../component/Footer'
import Award from '../component/Award'
import Certificate from '../component/certificate'
function Home() {
  return (
    <div >
         <Intro/>
         <Header/>
         <AboutMe/>
         <Educations/>
         <Award/>
         <Certificate/>
         <Footer/>
    </div>
  );
}

export default Home;
