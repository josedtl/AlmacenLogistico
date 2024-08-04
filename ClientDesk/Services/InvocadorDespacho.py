import json
import requests
from typing import List
from pydantic import BaseModel, ValidationError
from datetime import datetime
from Entidades.Despacho import DespachoMainModel, DespachoCabeceraModel, DespachoDetalleModel, DespachoReservaOPModel
from envData import envData

class InvocadorDespacho:
    
    def ObtenerMain() -> List[DespachoMainModel]:
        try:
            url = f"{envData.servidor}api/Despacho/ObtenerMain"
            response = requests.get(url)
            response.raise_for_status()  
            data = response.json()
            datalist= data.get("Value", [])
            entities = [DespachoMainModel(**item) for item in datalist]
            return entities
        except requests.exceptions.RequestException as e:
            print(f"Error al obtener datos de la API: {e}")
            return []

    def ObtenerCabecera(OrdenPedidoId: int) -> List[DespachoCabeceraModel]:
        try:
            url = f"{envData.servidor}api/Despacho/ObtenerCabecera/" + OrdenPedidoId
            response = requests.get(url)
            response.raise_for_status()  # Verifica si la solicitud fue exitosa
            data = response.json()
            datalist= data.get("Value", [])
            entities = [DespachoCabeceraModel(**item) for item in datalist]
            return entities
        except requests.exceptions.RequestException as e:
            print(f"Error al obtener datos de la API: {e}")
            return []

    def ObtenerDetalle(OrdenPedidoId: int) -> List[DespachoDetalleModel]:
        try:
            url = f"{envData.servidor}api/Despacho/ObtenerDetalle/" + OrdenPedidoId
            response = requests.get(url)
            response.raise_for_status()  # Verifica si la solicitud fue exitosa
            data = response.json()
            datalist= data.get("Value", [])
            entities = [DespachoDetalleModel(**item) for item in datalist]
            return entities
        except requests.exceptions.RequestException as e:
            print(f"Error al obtener datos de la API: {e}")
            return []

    def ObtenerReservaOPItem(OrdenPedidoId: int) -> List[DespachoReservaOPModel]:
        try:
            url = f"{envData.servidor}api/Despacho/ObtenerReservaOPItem/" + OrdenPedidoId
            response = requests.get(url)
            response.raise_for_status()  # Verifica si la solicitud fue exitosa
            data = response.json()
            datalist= data.get("Value", [])
            entities = [DespachoReservaOPModel(**item) for item in datalist]
            return entities
        except requests.exceptions.RequestException as e:
            print(f"Error al obtener datos de la API: {e}")
            return []
        
    def Registrar(Item : DespachoCabeceraModel) -> any:
        try:
            url = f"{envData.servidor}api/Despacho/Registrar"
            headers = {'Content-Type': 'application/json'}
            dict_data = Item.dict()
            json_output = json.dumps(dict_data, indent=4)
            print(json_output)
            response = requests.post(url, data=json_output, headers=headers)
            # response.raise_for_status()  # Verifica si la solicitud fue exitosa
            data = response.json()
            datalist= data.get("Value", [])
            print(data)
            # entities = DespachoCabeceraModel(**datalist) 
            return data
        except requests.exceptions.RequestException as e:
            print(f"Error al obtener datos de la API: {e}")
            return []
