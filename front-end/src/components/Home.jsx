import React from "react";
import Header from "./Header";
import Body from "./Body";

function Home() {
    
  return (
    <div className="container">
        <div>
            <Header/>
        </div>
        <div>
            <Body/> 
        </div>
        
    </div>
  );
}

export default Home;
