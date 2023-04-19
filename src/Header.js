import React from "react";

class Header extends React.Component{
    render(){
        return(
            <h1 onClick={this.props.onClick}>Gallery Of Horns</h1>
        )
    }
};

export default Header;