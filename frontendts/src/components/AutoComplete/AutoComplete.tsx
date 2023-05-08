import react, { ChangeEvent, FC, useState } from "react";
import styled from "styled-components";
import { ITipoProducto } from '../../Models/General/ITipoProducto'
// import { FaArrowDown } from "@react-icons/all-files/fa/FaArrowDown";

import {
  AutoCompleteContainer,
  AutoCompleteIcon,
  Input,
  AutoCompleteItem,
  AutoCompleteItemButton
} from "./styles";
const Root = styled.div`
  position: relative;
  width: 320px;
`;


interface autoCompleteProps {
  iconColor?: string;
  inputStyle?: react.CSSProperties;
  optionsStyle?: react.CSSProperties;
  IdItemFromState: any
}
export const AutoComplete: FC<autoCompleteProps> = ({
  iconColor,
  inputStyle,
  optionsStyle,
  IdItemFromState
}) => {
  const [search, setSearch] = useState({
    text: "",
    suggestions: []
  });
  const API = import.meta.env.VITE_REACT_API_URL
  const [isComponentVisible, setIsComponentVisible] = useState(true);
  const [dataTipoProducto, setdataTipoProducto] = useState<ITipoProducto[]>([]);

    
//   const onChangeTipoProducto = (event: any) => {
//     event.preventDefault();
//     const select = document.getElementById("list")

//    console.log(event.target.key);
//     var Cont: number = event.target.value.length;


//     if (Cont > 0    ) {

//         fetch(`${API}/api/General/Post_TipoProductoItemsLikePost/`, {
//             method: 'post',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({
//                 Nombre: event.target.value
//             })
//         }).then((response) => response.json())
//             .then((items) => setdataTipoProducto(items))
//             .catch((err) => console.log(err));



//     } else {
//         setdataTipoProducto([])
//     }

//     setText(event.target.value);
// }


  const onTextChanged = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    var Cont: number = e.target.value.length;
    const value = e.target.value;

    if (Cont > 0    ) {

      fetch(`${API}/api/General/Post_TipoProductoItemsLikePost/`, {
          method: 'post',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              Nombre: e.target.value
          })
      }).then((response) => response.json())
          .then((items) => setdataTipoProducto(items))
          .catch((err) => console.log(err));



  } else {
      setdataTipoProducto([])
  }


    let suggestions = [];
    // if (value.length > 0) {
    //   const regex = new RegExp(`^${value}`, "i");
    //   suggestions = dataTipoProducto.sort().filter((v: ITipoProducto) => regex.test(v.name));
    // }
    suggestions=dataTipoProducto;
    setIsComponentVisible(true);
    setSearch({ suggestions, text: value });
  };

  const suggestionSelected = (value: ITipoProducto) => {
    setIsComponentVisible(false);
    // console.log(value.code);
    IdItemFromState(value.TipoProductoId);
    setSearch({
      text: value.Nombre,
      suggestions: []
    });
  };

  const { suggestions } = search;

  return (
    <Root>
      <div
        onClick={() => setIsComponentVisible(false)}
        style={{
          display: isComponentVisible ? "block" : "none",
          width: "200vw",
          height: "200vh",
          backgroundColor: "transparent",
          position: "fixed",
          zIndex: 0,
          top: 0,
          left: 0
        }}
      />
      <div>
        <input  className="form-control"
          id="input"
          autoComplete="off"
          value={search.text}
          onChange={onTextChanged}
          type={"text"}
          style={inputStyle}
        />
        <AutoCompleteIcon color={iconColor} isOpen={isComponentVisible}>
          {/* <FaArrowDown /> */}
        </AutoCompleteIcon>
      </div>
      {suggestions.length > 0 && isComponentVisible && (
        <AutoCompleteContainer style={optionsStyle}>
          {suggestions.map((item: ITipoProducto) => (
            <AutoCompleteItem key={item.TipoProductoId}>
              <AutoCompleteItemButton
                key={item.TipoProductoId}
                onClick={() => suggestionSelected(item)}
              >
                {item.Nombre}
              </AutoCompleteItemButton>
            </AutoCompleteItem>
          ))}
        </AutoCompleteContainer>
      )}
    </Root>
  );
};
