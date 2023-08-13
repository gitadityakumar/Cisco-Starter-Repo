// import React from "react";
import "./exhibit.css";

const Exhibit = () => {
  return (
    <div className="continer">
      <div className="Scard1">
        <h2> Speed test </h2>
       
        <iframe
            className="speed-test-iframe"
            title="Speed Test Iframe"
            src="//openspeedtest.com/speedtest"
          />
      
        
       
      </div>
      <div className="Scard2">
        <h2> Network test </h2>
        <p>
          Here We also know that these requirements are likely to change
          frequently in the future - and additional data points will need to be
          displayed. While we don't know what these data points will be, we can
          prepare for them by investing in the extensibility of our site. 
          
        </p>
      </div>
    </div>
  );
};

export default Exhibit;
