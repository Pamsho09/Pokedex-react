import React, { Component } from "react";
import Buscador from "./components/buscador";
import Names from "./components/show"

class App extends Component {
  state = {
    pokemons: [],
  };

  mostrar =(stateCheck,value)=>{
if(stateCheck){
  // eslint-disable-next-line no-unused-expressions
  <Names value={value}/>

}else{

// eslint-disable-next-line no-unused-expressions
<p>esperando datos</p>

}


  }
  render() {
    return (
      <div className="container alert alert-info">
        <div className="row">
          <div className="col-12 alerte-success ">
            {" "}
            <Buscador />
          </div>{" "}
        </div>{" "}
        <div className="row">
          <div className="col-12 alert alert-success ">
            <div className="col-12 alert-success ">
              <Names/>

              
            </div>
          </div>{" "}
        </div>
      </div>
    );
  }
}

export default App;
