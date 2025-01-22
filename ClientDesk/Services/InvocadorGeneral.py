import json
from typing import List
import requests
from Entidades.General import EntidadNombreCompletoModel,EntidadLikeModel
from Services.Acceso import Acceso
from envData import envData


class InvocadorGeneral:    
    def EntidadBuscarNombreCompletoItem(search_text : str) -> List[EntidadNombreCompletoModel]:
            try:
                Itemdb =EntidadLikeModel () 
                Itemdb.Valor1= search_text
                url = f"{envData.servidor}api/General/EntidadBuscarNombreCompletoItem"
                headers = Acceso.headers()
                response = requests.get(url, headers=headers)
                dict_data = Itemdb.dict()
                json_output = json.dumps(dict_data, indent=4)
                response = requests.post(url, data=json_output, headers=headers)
                data = response.json()
                datalist= data.get("Value", [])
                entities = [EntidadNombreCompletoModel(**item) for item in datalist]
                return entities
                return ''
            except requests.exceptions.RequestException as e:
                print(f"Error al obtener datos de la API: {e}")
                return []
