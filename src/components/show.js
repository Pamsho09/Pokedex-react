import React, { Component } from 'react'

export default class show extends Component {
    state={
pokemons:[]

    }
    async  componentDidMount(){
        const res =await fetch("https://pokeapi.co/api/v2/type/15")
        
        const date =await res.json();
        
        this.setState({pokemons:date.pokemon[0].pokemon.name})
        console.log(this.state)}
    render() {
        return (
            <div>
                <div>{ this.state.pokemons}
          </div>
            </div>
        )
    }
}
