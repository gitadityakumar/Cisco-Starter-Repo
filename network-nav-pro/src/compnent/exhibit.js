// import React from "react";
import "./exhibit.css";

const Exhibit = () => {
  return (
    <div className="continer">
      <div className="Scard">
        <h2> speed test </h2>
        <p>
          Here a internet speed test meter , ip of user , latency , jitter,will
          be available <br /> We know that the site needs to display two primary
          data points: the user's public IP and latency metrics.
        </p>
      </div>
      <div className="Scard">
        <h2> speed test </h2>
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
