import React from 'react';
import Header from './Header';
import Main from './Main';
import SelectedBeast from './SelectedBeast';
import Footer from './Footer';
import hbarray from './hbarray';
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props)
    this.changeColor = this.changeColor.bind(this);
    this.updateElement = this.updateElement.bind(this);
    this.state = {
        currentColor: 'blue',
        showModal: false,
        beastObject: {}
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
    cardButtonArr.forEach(hornedAnimal => hornedAnimal.style.backgroundColor = this.state.currentColor)
  }

  toggleModal = () => {
    this.setState({
      showModal: this.state.showModal === false ? true : false 
    })
  }

  updateBeastObj = (beast) => {
    this.setState({beastObject: beast})
  }

  render() {
    return (
      <div className="App">
        <Header 
          stateColor={this.state.currentColor} 
          onClick={this.changeColor} />
        <Main 
          update={this.updateElement} 
          stateColor={this.state.currentColor} 
          toggleModal={this.toggleModal} 
          updateBeast={this.updateBeastObj}
          data={hbarray}/>
        <SelectedBeast 
          showModal={this.state.showModal} 
          toggleModal={this.toggleModal}
          beast={this.state.beastObject} />
        <Footer 
          stateColor={this.state.currentColor} 
          onClick={this.changeColor} />
      </div>
    );
  }
}

export default App;
