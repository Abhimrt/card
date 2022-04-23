import React from 'react'
import "./mainCard.css"
import TopCard from "./TopCard"
import BottomCard from "./BottomCard"

const MainCard = (props) => {
  return (
    <>
      <div className="mainCard centerC">
        <TopCard save={props.save} offert={props.offert} session={props.session} />
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
}

export default MainCard