import React from "react";
import hbarray from "./hbarray";
import HornedBeast from "./HornedBeast";
import './HornedBeasts.css';

class Main extends React.Component {
    render() {

        return (
            <div className="hornedBeasts">
                {/* <HornedBeast title={hbarray[0].title} image_url={hbarray[0].image_url} description={hbarray[0].description} update={this.props.update} stateColor={this.props.currentColor} />
                <HornedBeast title={hbarray[1].title} image_url={hbarray[1].image_url} description={hbarray[1].description} update={this.props.update} stateColor={this.props.currentColor} />
                <HornedBeast title={hbarray[2].title} image_url={hbarray[2].image_url} description={hbarray[2].description} update={this.props.update} stateColor={this.props.currentColor} /> */}
                {hbarray.map(beast => 
                    <HornedBeast
                        title={beast.title}
                        image_url={beast.image_url}
                        description={beast.description}
                        update={this.props.update}
                        stateColor={this.props.currentColor}
                    />
                )}
             </div>
        )
    }
};

export default Main;