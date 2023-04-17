import React from "react";
import hbarray from "./hbarray";
import HornedBeast from "./HornedBeast";

class Main extends React.Component{
    render(){
        return(
            <div>
                <HornedBeast title={hbarray[0].title} imageURL={hbarray[0].imageurl} description={hbarray[0].description} />
                <HornedBeast title={hbarray[1].title} imageURL={hbarray[1].imageurl} description={hbarray[1].description} />
                <HornedBeast title={hbarray[2].title} imageURL={hbarray[2].imageurl} description={hbarray[2].description} />
            </div>
        )
    }
};

export default Main;