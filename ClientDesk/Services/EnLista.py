import requests
from typing import List
from pydantic import BaseModel, ValidationError
from datetime import datetime
from Entidades.PersonaNatural import EntListaEntity, PersonaNaturalEntity, PersonaNaturalSaveModel
from envData import envData
class EnLista:
    def Get_EntListaCodigo(Codigo: str) -> List[EntListaEntity]:
        try:
            url = f"{envData.servidor}api/EntLista/ObtenerItems/" + Codigo
            response = requests.get(url)
            response.raise_for_status()  # Verifica si la solicitud fue exitosa
            data = response.json()
            datalist= data.get("Value", [])
            entities = [EntListaEntity(**item) for item in datalist]
            return entities
        except requests.exceptions.RequestException as e:
            print(f"Error al obtener datos de la API: {e}")
            return []

    def Get_PersonaLista() -> List[PersonaNaturalEntity]:
        try:
            url = f"{envData.servidor}api/PersonaNatural/ObtenerMain/"
            response = requests.get(url)
            response.raise_for_status()  # Verifica si la solicitud fue exitosa
            data = response.json()
            datalist= data.get("Value", [])
            entities = [PersonaNaturalEntity(**item) for item in datalist]
            return entities
        except requests.exceptions.RequestException as e:
            print(f"Error al obtener datos de la API: {e}")
            return []

    def ObtenerItemPersonaNatural(PersonaNaturalId: int) -> List[PersonaNaturalSaveModel]:
        try:
            url = f"{envData.servidor}api/PersonaNatural/ObtenerItem/" + PersonaNaturalId
            response = requests.get(url)
            response.raise_for_status()  # Verifica si la solicitud fue exitosa
            data = response.json()
            datalist= data.get("Value", [])
            entities = [PersonaNaturalSaveModel(**item) for item in datalist]
            return entities
        except requests.exceptions.RequestException as e:
            print(f"Error al obtener datos de la API: {e}")
            return []