import React from "react";
import headerImage from "./header2.jpg";
import matthewMurrayImage from "./Matthew Murray.png";
import Menu from "./Menu.js" 

const bgStyle = {
  background: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.7)), url(${headerImage})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  "max-height": "350px",
};

const imageStyle = {
  "margin-top": "25px",
  "margin-left": "auto",
  "margin-right": "auto",
  padding: "5px",
  background: "white",
  borderRadius: "50%",
  width: 200,
  height: 200,
  display: "block",
};
function Header() {
  return (
    <div>
      <div
        className="jumbotron jumbotron-fluid text-white mb-0"
        style={bgStyle}
      >
        <div className="container text-center">
          <h1 className="display-3" style={{ "font-family": "Parisienne" }}>
            Matthew Murray Dev
          </h1>
          <p className="lead">A Variety of Projects Can Be Found</p>
          <div className="mx-auto" style={{"max-width":"500px"}}><Menu /></div>
          
          <img src={matthewMurrayImage} style={imageStyle} alt="Profile" />
        </div>
      </div>
      <div className="container " style={{"min-height":"150px"}}>
        <div className="row"><div className="col col 4 text-center">
          text here
        </div><div className="col 4"></div>
        <div className="col col 4 " >
          <p style={{"font-size":"15px", "margin-top":"50px",}}>Email: matthewc.murraydev94@gmail.com Phone: (805)769-7511</p>
        </div></div>
        
        
      </div>
      
    </div>
  );
}

export default Header;
