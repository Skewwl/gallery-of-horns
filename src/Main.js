import React from "react";
import hbarray from "./hbarray";
import HornedBeast from "./HornedBeast";
import './HornedBeasts.css';

class Main extends React.Component {
    render() {

        return (
            <div className="hornedBeasts">
                {hbarray.map((beast, idx) => 
                    <HornedBeast
                        title={beast.title}
                        image_url={beast.image_url}
                        description={beast.description}
                        update={this.props.update}
                        entireBeast={beast}
                        stateColor={this.props.currentColor}
                        updateBeast={this.props.updateBeast}
                        toggleModal={this.props.toggleModal}
                        key={idx}
                    />
                )}
             </div>
        )
    }
};

export default Main;