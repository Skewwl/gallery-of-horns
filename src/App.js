import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props)
    this.changeColor = this.changeColor.bind(this);
    this.updateElement = this.updateElement.bind(this);
    this.state = {
        currentColor: 'blue'
    }
  }

  changeColor = () => {
    if (this.state.currentColor === 'blue'){
      this.setState({
      currentColor: 'red'
      })
    } else if (this.state.currentColor === 'red'){
      this.setState({
      currentColor: 'purple'
      })
    } else {
      this.setState({
        currentColor: 'blue'
        })
    }
    this.updateElement();
  }

  updateElement = () => {
    let cardButtonArr = document.querySelectorAll('#bigbutton');
    cardButtonArr[0].style.backgroundColor = this.state.currentColor;
    cardButtonArr[1].style.backgroundColor = this.state.currentColor;
    cardButtonArr[2].style.backgroundColor = this.state.currentColor;
  }

  render() {
    return (
      <div className="App">
        <Header stateColor={this.state.currentColor} onClick={this.changeColor} />
        <Main update={this.updateElement} stateColor={this.state.currentColor}/>
        <Footer stateColor={this.state.currentColor} onClick={this.changeColor} />
      </div>
    );
  }
}

export default App;
