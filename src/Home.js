import React from "react";
import Common from "./Common";
import web from "../src/images/img2.jpg";


const Home = () => {
    return ( 
        <>
            <Common  name="Grow Your Buisnes" 
        imgsrc={web}
         visit="/service" 
         btnname="Get Started" /> 
        </>
      );
}
 
export default Home;