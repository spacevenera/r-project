import React, { Component } from 'react';



class RForm extends Component {

  constructor(props) {
      super(props);
     
     this.state = {inputs:[{name:"input1",value:''},{name:"input2", value:''}]};

      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleChange = this.handleChange.bind(this);
     
    }
   
  handleSubmit(event) {
      event.preventDefault();
      console.log("inputs:");
      this.state.inputs.map( function(item, i) {
        console.log(item.name+"="+item.value);
      });
    }


  handleChange(event) {
    this.state.inputs.map(function(item,i) {
        if(item.name==event.target.name){
          item.value=event.target.value;
        }
      });
    }

 
   
  render() {
      return (
        <form onSubmit={this.handleSubmit}>
        {this.state.inputs.map((item, i) => (
          <input key={i} type="text" name={item.name} onChange={this.handleChange}/>
        ))}
        <input type="submit" value="Submit" />
        </form>
      );
    }
 

}

export {RForm};