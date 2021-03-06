import React, {Component} from 'react';
import './App.css';
import {AddTask} from './AddTask.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      running: false,
      minute: 0,
      second: 0,
      minten: '0',
      secten: '0',
      items: [],
      text: '',
      list: '',
      time: '25',
      counter: 0
    }
    this.gotoNext = this.gotoNext.bind(this)
  }
  handleStopBtn=(e)=>{
    e.preventDefault();
    this.setState({running: false});
    clearInterval(this.clock);
  };
  handleStartBtn() {
    let m = this.state.minute;
    let s = this.state.second;
    if (!this.state.running) {
      this.setState({running: true});
      this.clock = setInterval(() => {
        if (this.state.second == 0 && m != 0) {
          this.setState({
            minute: m -= 1,
            second: 59
          });
          s = this.state.second;
        } else if (this.state.second != 0 && m != 0) {
          this.setState({
            second: s--
          });
        } else if (this.state.second != 0 && m == 0) {
          this.setState({
            second: s--
          });
        } else if (this.state.second == 0 && m == 0) {
          this.setState({running: false,
                          minute: 0,
                          second: 0});
          clearInterval(this.clock);
            this.state.items.shift();
          this.gotoNext();
        }

      }, 1000);
    }
  }
  show() {
    this.setState({show: true})
  }

  close() {
    this.setState({show: false})
  }

handleSubmit(e){
  e.preventDefault();
  if (!this.state.text.length) {
    return;
  }
  const newItem = {
    text: this.state.text,
    time: this.state.time,
    key: Date.now()
  };

  this.state.items.push(newItem);
  this.setState({
      text: '',
      counter: this.counter++
  });
  this.gotoNext();
}
gotoNext(){
  if(this.state.minute == 0 && this.state.items.length>0){

    this.setState({minute: this.state.items[0].time,
                  list: this.state.items[0].text});


  }
  else if(this.state.minute==0 && this.state.items.length==0){

  this.setState({items:[],
              minute: 0,
            list: '',
          text:''});
    alert("No task to execute!");
  }
}
handleChange(e){
  this.setState({ text: e.target.value });
}
handleChangeOption(event){
    this.setState({time: event.target.value});

}
  pad = (number) => {

    return (
      number < 10
      ? '0'
      : '') + number
}
handleFinish=(e)=>{
clearInterval(this.clock);
this.state.items.shift();
if(this.state.items.length>0){
this.setState({minute: this.state.items[0].time, second:0, list:this.state.items[0].text, running:false});
this.gotoNext();
this.handleStartBtn();
}
else{
this.setState({minute:0, second:0, list:'', running:false});
}

}
  render() {
    return (<div className='genericBody'>
      <div className='nav1'><span>To do</span></div>
      <div className='nav2'><span> Pomodoro</span></div>
      <div className='controlTask'>
        <div className='tasks'>
          <form className='addTask' onSubmit={(e)=>this.handleSubmit(e)}>

            <button type='submit' className='addBtn'>+</button>
            <input type='text' classname='inputTxt' placeholder='Add Task' onChange={(e)=>this.handleChange(e)} value={this.state.text}/>

            <select className='chooseOpt' onChange={(e)=>this.handleChangeOption(e)}>
              <option value="25">Time</option>
              <option value="30">30</option>
              <option value="25">25</option>
              <option value="20">20</option>
              <option value="15">15</option>
              <option value="10">10</option>
              <option value="5">5</option>
            </select>
        </form >
        <div className='taskList'>
          <TodoList items={this.state.items}/>
        </div>
        </div>
        <div className='btnGroups'>
        <button className='startBtn' onClick={()=>this.handleStartBtn()}>Start</button>
        <button className='stopBtn' onClick={(e)=>this.handleStopBtn(e)}>Stop</button>
      </div>
      </div>
      <div className='timeChild'>
        <div className='clock'>{this.pad(this.state.minute)}:{this.pad(this.state.second)}</div>
        <div className='task'>{this.state.list} </div>
        <button className='finish' onClick={(e)=> this.handleFinish(e)}>Finish</button>
      </div>
    </div>);
  }
}
class TodoList extends React.Component {

  render() {

    return (
      <ul>
        {this.props.items.map(item => (
          <div className='list'>
              <div>-</div>
              <div>{item.text}</div>
              <div>{item.time}.00</div>
          </div>


        ))}
      </ul>
    );
  }
}

export default App;
