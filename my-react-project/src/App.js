import React from "react";
import logo from './logo.svg';
import './App.css';
import{Login,Register} from "./components/login/index";
import { render } from "react-dom/cjs/react-dom.production.min";

class App extends React.Component{
  constructor(props){
  super(props);
  this.state={
    isLoggingActive: true,
  }
}

changeState(){
  const{isLogginActive}=this.state;
  if(isLogginActive){
    this.rightSide.clasList.remove("right");
    this.rightSide.classList.add("left");
  }else{
    this.rightSide.clasList.remove("left");
    this.rightSide.classList.add("right");
  }
}

render(){
  const{ isLoggingActive}=this.state;
  const current=isLoggingActive ? "Register" : "Login";
  const currentActive=isLogginActive ? "login" : "register";
  return (
    <div className="App">
    <div className="login">
      <div className="container">
      {isLogginActive&&<Login containerRef={(ref)=>this.current=ref}/>}
      {!isLogginActive && <Register containerRef={(ref)=>this.current=ref}/>}
      </div>
      <RightSide current={current} containerRef={ref=>this.rightSide=ref} onClick={this.changeState.bind(this)}/>
      </div>
    </div>
  )
}
}

const RightSide = props => {
  return <div className="right-side" ref={props.containerRef}onClick={props.onClick}>
    <div className="inner-container">
      <div className="text">{props.current}</div>
    </div>
  </div>
}


export default App;
