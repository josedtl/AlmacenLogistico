import { IMarca } from "@models/IMarca";
import { useState } from "react";

export const getItemMarcas = () => {
    const [items, setItems] = useState<IMarca[]>([]);
    try {


        fetch(`${URL}/api/General/Get_MarcaItemsAlter/`)
            .then((response) => response.json())
            .then((ResponseData) => {
                if (ResponseData.State) setItems(ResponseData.Value)
                else console.log(ResponseData)
            }
            )
            .catch((err) => console.log(err));
    }
    catch (e) {
        console.log(e)
    }
    return items;
};