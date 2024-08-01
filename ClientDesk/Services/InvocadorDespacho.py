import requests
from typing import List
from pydantic import BaseModel, ValidationError
from datetime import datetime
from Entidades.PersonaNatural import EntListaEntity, PersonaNaturalEntity, PersonaNaturalSaveModel

class InvocadorDespacho:

    def Get_PersonaLista() -> List[PersonaNaturalEntity]:
        try:
            url = "http://localhost/AlmacenLogisticoService/api/PersonaNatural/ObtenerMain/"
            response = requests.get(url)
            response.raise_for_status()  # Verifica si la solicitud fue exitosa
            data = response.json()
            datalist= data.get("Value", [])
            entities = [PersonaNaturalEntity(**item) for item in datalist]
            return entities
        except requests.exceptions.RequestException as e:
            print(f"Error al obtener datos de la API: {e}")
            return []

