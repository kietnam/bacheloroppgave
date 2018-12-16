import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../src/components/header'

const App =() =>{
  return <h1> Hvor fort oppdateres dette? Test 7 bibloteket. </h1>
}

const Tall =() => {
  return (
  <div>
      <h1> 1 + 1 = { 1 + 1 } </h1>
      <Header/>
  </div>
  )
}

ReactDOM.render(<Tall/>, document.getElementById('root'))

/*BasicDBObject Users = new BasicDBObject();
documentDetail.put("user", ***);
documentDetail.put("email, "***");
documentDetail.put("time", "***");
*/
