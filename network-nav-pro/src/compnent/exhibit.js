// import React from "react";
import "./exhibit.css";
import IPFetcherComponent from "./IPFetcherComponent";

const Exhibit = () => {
  return (
    <div className="continer">
      <div className="Scard1">
        <h2> Speed Test </h2>
       
        <iframe
            className="speed-test-iframe"
            title="Speed Test Iframe"
            src="//openspeedtest.com/speedtest"
          />
      
        
       
      </div>
      <div className="Scard2">
        <h2> Network Test </h2>
        <p>
          {/* Display IP addresses fetched by IPFetcherComponent */}
          <IPFetcherComponent />
        </p>
        
      </div>
    </div>
  );
};

export default Exhibit;
