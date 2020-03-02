import React from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import Card from './Components/Card'
import data from './data'
import Button from './Components/Button'


class App extends React.Component {
  constructor(){
    super();
    this.state = {
      data: data,
      index: 0
    }
    this.increment = this.increment.bind(this)
  }
  increment(){
    const { index } = this.state
    if(index < data.length - 1){
      this.setState({ index: index + 1 })
    } else {
      this.setState({index: 0})
    }
  }
  decrement = () => {
    const {index} = this.state
    if(index > 0){
      this.setState({ index: index - 1 })
    } else {
      this.setState({index: data.length - 1})
    }
    
  }
  render(){
    const {data, index} = this.state
    return (
      <div className="App">
        <NavBar />
        <Card info={data[index]} />
        <Button increment={this.increment} decrement={this.decrement}/>
      </div>
    );
  }
}

export default App;
