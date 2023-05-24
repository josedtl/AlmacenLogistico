import react, { ChangeEvent, FC, useState } from "react";
import styled from "styled-components";
import { ITipoProducto } from '../../Models/General/ITipoProducto'
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
export const AutoCompleteTipoProducto: FC<autoCompleteProps> = ({
  placeholder,
  headerItem,
  Id,
  GetText,
  SetTextNom
}) => {


  const [dataItems, setdataItems] = useState<ITipoProducto[]>([]);
  const API = import.meta.env.VITE_REACT_API_URL
  const [isComponentVisible, setIsComponentVisible] = useState(true);


  const onTextChanged = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    SetTextNom(e.target.value);
    var Cont: number = e.target.value.length;
    if (Cont > 0) {

        fetch(`${API}/api/General/Post_TipoProductoItemsLikePost/`, {
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
  const suggestionSelected = (value: ITipoProducto) => {
    setIsComponentVisible(false);
    Id(value.TipoProductoId);
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
          {dataItems.map((item: ITipoProducto) => (
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
