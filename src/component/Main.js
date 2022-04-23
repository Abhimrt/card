import React from 'react'
import MainCard from './cards/MainCard'
import "./component.css"
import Nav from './Nav'
import { data } from '../data'

const Main = () => {

  // // server was blocked my request
  // // fetching api
  // const detail = async () => {
  //   const response = await fetch("http://demo3755793.mockable.io/plans");
  //   const data = await response.json();
  //   // setArray(data)
  //     // console.log(array);
  // };detail()

  return (
    <div className="">
      <Nav />
      <div className="detail center">
        <h2>Buy a plan and be Interview ready!</h2>
      </div>
      <div className="grid">
        {
          data.map((e,i)=>{
            return (
              <div key={i}>
                <MainCard
                session={e.session}
                  bc={e.backgroundColor}
                  offerc={e.offerColor}
                  offert={e.saver}
                  detailHeading={e.heading}
                  detailContent={e.content}
                  suit={e.suit}
                  price={e.price}
                  save={e.save}
                />
              </div>
            );
          })
        }
      </div>
    </div>
  );
}

export default Main