import React from "react";
import Welcome from "../Welcome/Welcome"
import CardImage from "../CardImage/CardImage"
import Aside from '../Aside/Aside'
import "./Home.scss";

const Home = () => {
   return (
      <div className="Home">
         <div className="container">
            <Welcome/>
            <CardImage/>
         </div>
         <Aside/>
      </div>
   );
};

export default Home;