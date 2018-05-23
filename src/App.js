import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
   constructor(props){
    super(props)
    this.state={
      title:"This is React Title",
      act:0,
      index:'',
      datas:[]
    }
   }
   componentDidMount(){
     this.refs.name.focus();
   }
   submitButton(e){
    e.preventDefault();
    let name=this.refs.name.value;
    let address=this.refs.address.value;
    let datas=this.state.datas;
    if(this.state.act===0){
      let data={
        name,address
      }
      datas.push(data);
    }else{
      let index=this.state.index;
      datas[index].name=name;
      datas[index].address=address;
    }
    this.setState({
      index:'',
      act:0
    })
    this.setState({
      datas:datas
    })
    this.refs.formSubmit.reset();
    this.refs.name.focus();
   }
   remove(i){
    let datas=this.state.datas;
    datas.splice(i,1);
    this.setState({
      datas:datas
    })
   }
   edit(i){
    let data=this.state.datas[i]
    this.refs.name.value=data.name;
    this.refs.address.value=data.address;
    this.refs.name.focus();
    this.setState({
      index:i,
      act:1
    })
  }
  render() {
    return (
      <div className="App">
      <h2>{this.state.title}</h2>
      <br/>
      <form ref="formSubmit">
      <input type="text" ref="name" placeholder="Your Name" className="formField"/>
      <input type="text" ref="address" placeholder="Enter Address" className="formField"/>
      <button  onClick={(e)=>this.submitButton(e)}>Submit</button>
      </form>
      <pre>
        {this.state.datas.map((data,i)=>
          <li key={i}>{i+1},{data.name},{data.address}
          <button onClick={(e)=>{this.remove(i)}}>Remove</button>
          <button onClick={(e)=>{this.edit(i)}}>Edit</button>
          </li>
        )}
      </pre>
      </div>
    );
  }
}

export default App;
