import requests
from typing import List
from pydantic import BaseModel, ValidationError
from datetime import datetime

class EntListaEntity(BaseModel):
    ListaId: int
    CampoId: int
    Nombre: str
    Codigo: str

class PersonaNaturalEntity(BaseModel):
    PersonaNaturalId: int 
    NomDocumento: str 
    NumDocumento: str
    Nombres: str
    ApellidoPaterno: str 
    ApellidoMaterno: str 
    FechaRegistro: datetime
    CodUsuario: str 


class PersonaNaturalSaveModel(BaseModel):
    PersonaNaturalId: int
    TipoDocumentoIdentidadId: int
    NumDocumento: str
    FechaRegistro: datetime
    CodUsuario: str
    UbigeoId: int
    Nombres: str
    ApellidoPaterno: str
    ApellidoMaterno: str
    FechaNacimiento: datetime
    Direccion: str
    Telefono: str
    Correo: str
    SexoId: int
    EstadoCivilId: int
    Action: int
    EstadoRegistro: bool
class EnLista:
    def Get_EntListaCodigo(Codigo: str) -> List[EntListaEntity]:
        try:
            url = "http://localhost/AlmacenLogisticoService/api/EntLista/ObtenerItems/" + Codigo
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

    def ObtenerItemPersonaNatural(PersonaNaturalId: int) -> List[PersonaNaturalSaveModel]:
        try:
            url = "http://localhost/AlmacenLogisticoService/api/PersonaNatural/ObtenerItem/" + PersonaNaturalId
            response = requests.get(url)
            response.raise_for_status()  # Verifica si la solicitud fue exitosa
            data = response.json()
            datalist= data.get("Value", [])
            entities = [PersonaNaturalSaveModel(**item) for item in datalist]
            return entities
        except requests.exceptions.RequestException as e:
            print(f"Error al obtener datos de la API: {e}")
            return []