import json
import requests
from typing import List
from pydantic import BaseModel, ValidationError
from datetime import datetime
from Entidades.Despacho import DespachoDetalleSaveModel, DespachoMainModel, DespachoReservaOPModel, DespachoSaveModel
from Services.Acceso import Acceso
from envData import envData
import jsonpickle

class InvocadorDespacho:
    
    def ObtenerMain() -> List[DespachoMainModel]:
        try:
            url = f"{envData.servidor}api/Despacho/ObtenerMain"
            headers = Acceso.headers()
            response = requests.get(url, headers=headers)
            response.raise_for_status()  
            data = response.json()
            datalist= data.get("Value", [])
            entities = [DespachoMainModel(**item) for item in datalist]
            return entities
        except requests.exceptions.RequestException as e:
            print(f"Error al obtener datos de la API: {e}")
            return []

    def ObtenerCabecera(OrdenPedidoId: int) -> List[DespachoSaveModel]:
        try:
            url = f"{envData.servidor}api/Despacho/ObtenerCabecera/" + OrdenPedidoId
            headers = Acceso.headers()
            response = requests.get(url, headers=headers)
            response.raise_for_status()  # Verifica si la solicitud fue exitosa
            data = response.json()
            datalist= data.get("Value", [])
            entities = [DespachoSaveModel(**item) for item in datalist]
            return entities
        except requests.exceptions.RequestException as e:
            print(f"Error al obtener datos de la API: {e}")
            return []

    def ObtenerDetalle(OrdenPedidoId: int) -> List[DespachoDetalleSaveModel]:
        try:
            url = f"{envData.servidor}api/Despacho/ObtenerDetalle/" + OrdenPedidoId
            headers = Acceso.headers()
            response = requests.get(url, headers=headers)
            response.raise_for_status()  # Verifica si la solicitud fue exitosa
            data = response.json()
            datalist= data.get("Value", [])
            entities = [DespachoDetalleSaveModel(**item) for item in datalist]
            return entities
        except requests.exceptions.RequestException as e:
            print(f"Error al obtener datos de la API: {e}")
            return []

    def ObtenerReservaOPItem(OrdenPedidoId: int) -> List[DespachoReservaOPModel]:
        try:
            url = f"{envData.servidor}api/Despacho/ObtenerReservaOPItem/" + OrdenPedidoId
            headers = Acceso.headers()
            response = requests.get(url, headers=headers)
            response.raise_for_status()  # Verifica si la solicitud fue exitosa
            data = response.json()
            datalist= data.get("Value", [])
            entities = [DespachoReservaOPModel(**item) for item in datalist]
            return entities
        except requests.exceptions.RequestException as e:
            print(f"Error al obtener datos de la API: {e}")
            return []
        
    def Registrar(Item : DespachoSaveModel) -> DespachoSaveModel:
        try:
            url = f"{envData.servidor}api/Despacho/Registrar"
            headers = Acceso.headers()
            response = requests.get(url, headers=headers)
            dict_data = Item.json()
            print(dict_data)
            response = requests.post(url, data=dict_data, headers=headers)
            response.raise_for_status()  # Verifica si la solicitud fue exitosa
            data = response.json()
            datalist= data.get("Value", [])
            entities = DespachoSaveModel(**datalist) 
            return entities
        except requests.exceptions.RequestException as e:
            print(f"Error al obtener datos de la API: {e}")
            return []
