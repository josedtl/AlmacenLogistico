import react, { ChangeEvent, FC, useState } from "react";
import styled from "styled-components";
import { IMarca } from '../../Models/General/IMarca'
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
export const AutoCompleteMarcaa: FC<autoCompleteProps> = ({
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
  const [dataItems, setdataItems] = useState<IMarca[]>([]);


  const onTextChanged = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    var Cont: number = e.target.value.length;
    const value = e.target.value;

    if (Cont > 0) {

      fetch(`${API}/api/General/Get_MarcaItemsLike/`, {
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

    suggestions = dataItems;;
    setIsComponentVisible(true);
    setSearch({ suggestions, text: value });
  };

  const suggestionSelected = (value: IMarca) => {
    setIsComponentVisible(false);
    // console.log(value.code);
    Id(value.MarcaId);
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
          {suggestions.map((item: IMarca) => (
            <AutoCompleteItem key={item.MarcaId}>
              <AutoCompleteItemButton
                key={item.MarcaId}
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
