import React from "react";
import hbarray from "./hbarray";
import HornedBeast from "./HornedBeast";
import './HornedBeasts.css';

class Main extends React.Component {

    fillHornedBeasts() {
        let renderedBeasts = [];
        renderedBeasts = hbarray.filter((beast) => {
            if (this.props.stateHorns === 'all') {
                return true;
            } else if (this.props.stateHorns === '1' || this.props.stateHorns === '2' || this.props.stateHorns === '3' || this.props.stateHorns === '100') {
                if (this.props.stateHorns === beast.horns.toString()) {
                    return true;
                } else {
                    return false;
                }
            };
            console.log(renderedBeasts);

        });
        return renderedBeasts.map((beast, idx) =>
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
        )
    }

    render() {
        return (
            <div className="hornedBeasts">
                {this.fillHornedBeasts()}
            </div>
        )
    }
};

export default Main;