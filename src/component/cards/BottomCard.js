import React from "react";

const BottomCard = (props) => {
  // settinf default text and style
  let style = { backgroundColor: "rgb(30, 77, 142)", cursor: "pointer" };
  let text = "Buy Now"
  // as per demo I hardcore the things
  if (props.offert === "Weekly Plan") {
    style = {
      backgroundColor: "#D2D2D3",
      cursor: "not-allowed",
      color:"black"
    };
    text = "100% Booked"
  }


  return (
    <div className="BottomCard" style={{ backgroundColor: props.bc }}>
      <div className="card-type" style={{ backgroundColor: props.offerc }}>
        {props.offert}
      </div>
      <div className="card-details">
        <h3>{props.detailHeading}</h3>
        {props.detailContent.map((e, i) => {
          return (
            <p key={i}>
              <i>✔️ </i>
              {e}
            </p>
          );
        })}
      </div>
      <div className="after-detail">
        <p className="bulb" >{props.suit}</p>
        <h5>Flat {props.save} off for being reffered by Saurabh</h5>
      </div>
      <hr />
      <div className="card-most-bottom centerC">
        <div className="center">
          <div>
            {parseInt(
              parseInt(props.price) -
                (parseInt(props.price) * parseInt(props.save.substr(0, 2))) /
                  100
            )}{" "}
            <span>Save {props.save}</span>
          </div>
          <div>{props.price}</div>
        </div>
        <button style={style}>{text}</button>
      </div>
    </div>
  );
};

export default BottomCard;
