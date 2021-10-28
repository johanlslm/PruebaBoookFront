import React from "react";
import "./Welcome.scss";

const Welcome = () => {
   return (
    <section className="Welcome">
        <div className="text">
            <h2>Hi. This is Lorem.</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum, expedita? Error veritatis et consectetur ullam impedit ducimus? Numquam ducimus autem sequi laborum praesentium veniam recusandae? Repudiandae cum quam atque molestiae?</p>
        </div>
        <div className="links">
            <a href=".">Ok let's go 
                <span>
                    <i className="fa fa-arrow-right" aria-hidden="true"></i>
                </span>
            </a>
            <a href=".">More info 
                <span>
                    <i className="fa fa-question" aria-hidden="true"></i>
                </span>
            </a>
        </div>
    </section>
   );
};

export default Welcome;