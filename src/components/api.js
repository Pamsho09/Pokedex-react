import React, { Component } from "react";
import Type from './type'
export class api extends Component {
  
    state={
        type:[]
    }
      async  componentDidMount(){
    const res =await fetch("https://pokeapi.co/api/v2/type")
    
    const date =await res.json();
    
    this.setState({type:date.results})
    console.log(this.state)
}
    render() {
        return (
           
                <Type type={this.state.type}/>
           
        )
    }
}


export default api
