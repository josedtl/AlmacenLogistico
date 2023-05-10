import react, { ChangeEvent, FC, useState } from "react";
import styled from "styled-components";
import { IModelo } from '../../Models/General/IModelo'
import { Label } from "reactstrap";
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
`;


interface autoCompleteProps {
  iconColor?: string,
  inputStyle?: react.CSSProperties,
  optionsStyle?: react.CSSProperties,
  placeholder?: string,
  headerItem?: string,
  Id?: any
}
export const AutoCompleteModeloo: FC<autoCompleteProps> = ({
  iconColor,
  inputStyle,
  optionsStyle,
  placeholder,
  headerItem,
  Id
}) => {
  const [search, setSearch] = useState({
    suggestions: [],
    text: ""
  });
  const API = import.meta.env.VITE_REACT_API_URL
  const [isComponentVisible, setIsComponentVisible] = useState(true);
  const [dataItems, setdataItems] = useState<IModelo[]>([]);


  const onTextChanged = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    var Cont: number = e.target.value.length;
    const value = e.target.value;

    if (Cont > 0) {

      fetch(`${API}/api/General/Get_ModeloItemsLike/`, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          Nombre: e.target.value
        })
      }).then((response) => response.json())
        .then((items) => setdataItems(items))
        .catch((err) => console.log(err));



    } else {
      setdataItems([])
    }


    let suggestions = [];
    // if (value.length > 0) {
    //   const regex = new RegExp(`^${value}`, "i");
    //   suggestions = dataTipoProducto.sort().filter((v: ITipoProducto) => regex.test(v.name));
    // }
    suggestions = dataItems;
    setIsComponentVisible(true);
    setSearch({ suggestions, text: value });
  };

  const suggestionSelected = (value: IModelo) => {
    setIsComponentVisible(false);
    // console.log(value.code);
    Id(value.ModeloId);
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

        <Label for="exampleFormControlInput1" className="form-label">{headerItem}</Label>

        <input className="form-control"
          id="input"
          autoComplete="off"
          value={search.text}
          onChange={onTextChanged}
          type={"text"}
          placeholder={placeholder}
        />
        <AutoCompleteIcon color={iconColor} isOpen={isComponentVisible}>
          {/* <FaArrowDown /> */}
        </AutoCompleteIcon>
      </div>
      {suggestions.length > 0 && isComponentVisible && (
        <AutoCompleteContainer style={optionsStyle}>
          {suggestions.map((item: IModelo) => (
            <AutoCompleteItem key={item.ModeloId}>
              <AutoCompleteItemButton
                key={item.ModeloId}
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
