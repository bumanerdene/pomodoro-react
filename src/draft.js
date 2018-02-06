

import Modal from 'simple-react-modal';
import './materialize-css/dist/css/materialize.min.css';
import 'materialize-css';
  <div className='controlChild'>
    <div className='navbar'>
    <span>To do</span>
    </div>
    <div className='taskBoard'>
        <div className='btnGroups'>
        <button className='startBtn' onClick={this.handleStartBtn}>Start</button>
        <button className='stopBtn' onClick={this.handleStopBtn}>Stop</button>
      </div>
    </div>
  </div>
  <div className='time'>
    <div className='navbar1'>
      <span> Pomodoro</span>
    </div>
    <div className='timeChild'>
    <div className='clock'>{this.pad(this.state.minute)}:{this.pad(this.state.second)}</div>
    <div className='task'>Coding with ReactJS </div>
    <button className='finish' onClick={()=>alert('Next Task')}>Finish</button>
  </div>
</div>
.genericBody{
display: flex;
flex-direction: row;
height: 100vh;
}
.controlChild{
display: flex;
flex-direction: column;
width: 30%;
background-color: #fff;

}
.navbar{

  height: 45px;
  background-color: #00857B;
  padding: 0;
  box-shadow: 0 3px 3px rgba(0,0,0,0.1);
}
div span{
display: inline-block;
margin-left: 20px;
margin-top: 10px;
  color: #fff;
}
.taskBoard{
display: flex;
flex-direction: column;
height: 100%;
border:none;
border-right: 1px solid rgba(0,0,0,0.1);
padding: 0;
margin:0;
}

.startBtn{
border: none;
background-color: #00C06E;
width: 100px;
height:35px;
border-radius: 30px;
color: #fff;
margin-right: 10px;
}
.stopBtn{
border: none;
background-color: #FC6076;
width: 100px;
height:35px;
border-radius: 30px;
color: #fff;
}
button:focus{
outline: none;
}
.time{
display: flex;
flex-direction: column;
width: 70%;
}
.navbar1{
  height: 45px;
  background-color: #00B1A4;
  box-shadow: 0 3px 3px rgba(0,0,0,0.1);

}
.timeChild{
display: flex;
flex-direction: column;
height: 100vh;
justify-content: center;
align-items: center;
}
.clock{
font-size: 120px;
}
.task{
color: #585858;
padding-left: 5px;
border-left: 4px solid #0F99CD;
}
.finish{
margin-top: 30px;
border: none;
background-color: #0F99CD;
width: 100px;
height:35px;
border-radius: 30px;
color: #fff;
}
