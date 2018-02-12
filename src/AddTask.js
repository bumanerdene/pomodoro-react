import React from 'react'
import './addtask.css';
export class AddTask extends React.Component {
  render() {
    return (<div className='modalAdd'>
      <div className='inputTask'>
        <input type="text"/>
        <button className='taskAdd'>+</button>
      </div>
      <div className='inputClock'>

          <input type="text"/>
          <input type="text"/>

      </div>

    </div>);
  }
}
