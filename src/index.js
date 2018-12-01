import React from 'react'
import ReactDOM from 'react-dom';

const App =() =>{
  return <h1>Test????, this </h1>
}

class Car {
  constructor(){
    this.wheels = 4;
    this.type = 'Mercedes'
  }
}

const car = new Car();
console.log(Car.wheels)

ReactDOM.render(<App/>, document.getElementById('root'))
