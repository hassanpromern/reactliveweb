import web from "../src/images/download3.jpg";

import Common from "./Common";


const About = () => {

    return ( 
       <Common name="Welcome To About Page" 
        imgsrc={web}
         visit="/contact" 
         btnname="Contact Now"/>
     );
}
 
export default About;