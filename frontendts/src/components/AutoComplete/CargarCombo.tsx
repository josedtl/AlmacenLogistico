import { render } from "react-dom";
import React, { useState, useEffect } from "react";
import { AutoComplete } from "./AutoComplete";
import data from "./data.json";



function CargarCombo() {
  const [Codigo, setCodigo] = useState('');


  const IdItemFromState = (id: string) => {
    setCodigo(id);
  };
  const toggle = () => {
    console.log(Codigo);

  };

 
  return (<div>
    <h2>Simple-React Autocomplete Functional-component Tsx</h2>

    <AutoComplete
      inputStyle={{ backgroundColor: "while" }}
      optionsStyle={{ backgroundColor: "while" }}
      data={data}
      iconColor="Turquoise"
      IdItemFromState={IdItemFromState}
    />
     <button className="close" onClick={toggle}>
      &times;
    </button>

  </div>)
}
export default CargarCombo;