import React from 'react'
import ReactDOM from 'react-dom';

const App =() =>{
  return <h1>Hvor fort oppdateres dette? Test 7 bibloteket. </h1>
}

const Tall =(
  <h1> 1 + 1 = { 1 + 1 } </h1>);


class Car {
  constructor(){
    this.wheels = 4;
    this.type = 'Mercedes'
  }
}

const car = new Car();
console.log(Car.wheels)

ReactDOM.render(Tall, document.getElementById('root'))
