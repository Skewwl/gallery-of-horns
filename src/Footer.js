import React from "react";

class Footer extends React.Component{
    render() {
        return (
            <p onClick={this.props.onClick} >Author: Rhett Beardemphl</p>
        )
    }
};

export default Footer;