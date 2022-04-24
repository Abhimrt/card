import React from "react";

const TopCard = (props) => {
  // as per demo I hardcore this portion
  if (props.offert === "Weekly Plan") {
    return (
      <div className="TopCard">
        <h2>FLAT {props.save} OFF</h2>
        <div className="Card-top-box center">
          <div>
            <h4>Offer Closed</h4>
            <p>Weekend Plan Booked 100% Within 20 Minutes</p>
          </div>
          <div style={{ backgroundColor: "red" }}>
            <div className="centerC">
              100% <p>Booked</p>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    // else working according to api
    let bc = "#FAFAFA"; // by default color
    if (props.offert === "Best Value") {
      //setting the green color
      bc = "#DDFED9";
    }
    // calculation the booked according the sessions as no info was there in api
    let cir = 100 - parseInt(props.session);
    
    return (
      <div className="TopCard" style={{ backgroundColor: bc }}>
        <h2>FLAT {props.save} OFF</h2>
        <div className="Card-top-box center">
          <div>
            <h4>Offer ends in</h4>
            <span>
              <span>
                {props.day} <span>days</span>
              </span>
              |
              <span>
                {props.hrs} <span>hrs</span>
              </span>
              |
              <span>
                {props.min} <span>mins</span>
              </span>
              |
              <span>
                {props.sec} <span>secs</span>
              </span>
            </span>
          </div>
          <div
            style={{
              background: `conic-gradient(rgb(30, 77, 142) 0deg , rgb(30, 77, 142) ${cir}%,${bc} ${cir}%)`,
            }}
          >
            <div className="centerC" style={{ background: bc }}>
              {cir}% <p>Booked</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default TopCard;
