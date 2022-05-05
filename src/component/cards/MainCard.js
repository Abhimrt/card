import React, { useEffect, useState } from "react";
import "./mainCard.css";
import TopCard from "./TopCard";
import BottomCard from "./BottomCard";

const MainCard = (props) => {
  //time calculation starts here
  const [day, setDay] = useState(0);
  const [hrs, setHrs] = useState(0);
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(0);

  let interval;
  const countDown= ()=> {
    interval = setInterval(() => {
      const till = new Date(2023, 3, 26).getTime();
      const now = till - new Date().getTime();
      const days = Math.floor(now / (1000 * 60 * 60 * 24));
      const hours = Math.floor((now % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minute = Math.floor((now % (1000 * 60 * 60)) / (1000 * 60));
      const second = Math.floor(now % (1000 * 60) / 1000);
      // console.log(days, hours, minute, second);
      if (now < 0) clearInterval(interval.current);
      else {
        setDay(days);
        setHrs(hours)
        setMin(minute)
        setSec(second)
      }
    }, 1000);
    
  }
  useEffect(() => {
    countDown();
  });//time calculation ends here

  return (
    <>
      <div className="mainCard centerC">
        <TopCard
          save={props.save}
          offert={props.offert}
          session={props.session}
          day={day}
          min={min}
          hrs={hrs}
          sec={sec}
        />
        <BottomCard
          bc={props.bc}
          offerc={props.offerc}
          offert={props.offert}
          detailHeading={props.detailHeading}
          detailContent={props.detailContent}
          suit={props.suit}
          price={props.price}
          save={props.save}
        />
      </div>
    </>
  );
};

export default MainCard;
