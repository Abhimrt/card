import React, { useState } from "react";

const TopCard = (props) => {
  const [hrs, setHrs] = useState(17);
  const [min, setMin] = useState(49);
  const [sec, setSec] = useState(49);

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
    let bc = "rgba(232, 249, 251)";
    if (props.offert === "Best Value"){
      bc = "rgb(126, 250, 143)"
    } var offer = "Offer ends in";
    setInterval(() => {
      if (sec !== 1) setSec(sec - 1);
      else if (hrs !== 0) {
        setSec(59);
        if (min !== 1) setMin(min - 1);
        else {
          setMin(59);
          setHrs(hrs - 1);
        }
      }
    }, 1000);
    let cir = 100-parseInt(props.session)
    return (
      <div className="TopCard" style={{backgroundColor:bc}}>
        <h2>FLAT {props.save} OFF</h2>
        <div className="Card-top-box center">
          <div>
            <h4>{offer}</h4>
            <span>
              <span>
                0 <span>days</span>
              </span>
              |
              <span>
                {hrs} <span>hrs</span>
              </span>
              |
              <span>
                {min} <span>mins</span>
              </span>
              |
              <span>
                {sec} <span>secs</span>
              </span>
            </span>
          </div>
          <div
            style={{
              background: `conic-gradient(rgb(30, 77, 142) 0deg , rgb(30, 77, 142) ${cir}%,${bc} ${cir}%)`,
            }}
          >
            <div className="centerC" style={{background:bc}}>
              {cir}% <p>Booked</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default TopCard;
