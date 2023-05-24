import react, { ChangeEvent, FC, useState } from "react";
import styled from "styled-components";
import { IMarca } from '../../Models/General/IMarca'
import { Label } from "reactstrap";

import {
  AutoCompleteContainer,
  AutoCompleteItem,
  AutoCompleteItemButton
} from "./styles";
const Root = styled.div`
  position: relative;
`;


interface autoCompleteProps {
  placeholder?: string,
  headerItem?: string,
  Id?: any,
  GetText: string,
  SetTextNom :any
}
export const AutoCompleteMarca: FC<autoCompleteProps> = ({
  placeholder,
  headerItem,
  Id,
  GetText,
  SetTextNom
}) => {


  const [dataItems, setdataItems] = useState<IMarca[]>([]);
  const API = import.meta.env.VITE_REACT_API_URL
  const [isComponentVisible, setIsComponentVisible] = useState(true);


  const onTextChanged = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    SetTextNom(e.target.value);
    var Cont: number = e.target.value.length;
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
    setIsComponentVisible(true);
};
  const suggestionSelected = (value: IMarca) => {
    setIsComponentVisible(false);
    Id(value.MarcaId);
    SetTextNom(value.Nombre);
   
  };


  return (
    <Root>
   
      <div>

        <Label for="exampleFormControlInput1" className="form-label">{headerItem}</Label>

        <input className="form-control"
          id="input"
          autoComplete="off"
          value={GetText}
          onChange={onTextChanged}
          type={"text"}
          placeholder={placeholder}
        />
   
      </div>
      {dataItems.length > 0 && isComponentVisible && (
        <AutoCompleteContainer >
          {dataItems.map((item: IMarca) => (
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
