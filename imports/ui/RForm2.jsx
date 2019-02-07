import React, { Component } from 'react';



class RForm2 extends Component {

  constructor(props) {
      super(props);
     
     this.state = {input1:'',input2:''};

      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleChange = this.handleChange.bind(this);
     
    }
   
  handleSubmit(event) {
      event.preventDefault();
      console.log("inputs:");
      console.log("input1="+this.state.input1);
      console.log("input2="+this.state.input2);
      
    }


  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
    }

 
   
  render() {
      return (
        <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.input1} onChange={this.handleChange} name="input1"/>
        <input type="text" value={this.state.input2} onChange={this.handleChange} name="input2"/>
        <input type="submit" value="Submit" />
        </form>
      );
    }
 

}

export {RForm2};