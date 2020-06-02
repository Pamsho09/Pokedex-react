import React, { Component } from 'react'

export default class type extends Component {
  

    render() { 
        
      
        return (
           
                this.props.type.map(types=> {return   <option value={types.url}>  {types.name} </option> }) 
            
        )
    }
}
