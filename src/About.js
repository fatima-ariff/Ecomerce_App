import React  from 'react'
import HeroSection from './components/HeroSection'
import {  useProdContext } from './components/conext/ProductContext';
const About = () => {

const {mname}=useProdContext();

  const data={
    name:"E-Shop About 📓",
  };
  return(
  <>
  {mname}
   <HeroSection  myData={data}/>{" "};

   </>
   )
}
 

export default About;