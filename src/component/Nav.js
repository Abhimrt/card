import React from 'react'

const Nav = () => {
  return (
    // ========== if we want to navigate we can add Link tag but for not I am adding simple list
    <div className="Nav center">
        {/* logo ============ */}
      <div className="logo center">
        <h1>CARD</h1>
      </div>
        {/* links========= */}
      <ul className="center">
        <li>Home</li>
        <li style={{color:"black"}}>Plans & Pricing</li>
        <li>FAQ's</li>
        <li>Contact us</li>
      </ul>
        {/* button =========== */}
      <div className="btn center">
        <button>Login</button>
        <button>SignUp</button>
      </div>
    </div>
  );
}

export default Nav