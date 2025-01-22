import json
import requests
from typing import List
from pydantic import BaseModel, ValidationError
from datetime import datetime
from Entidades.Despacho import DespachoDetalleSaveModel, DespachoMainModel, DespachoReservaOPModel, DespachoSaveModel
from Entidades.PersonaNatural import PersonaNaturalEntity
from envData import envData
import jsonpickle


class UsuarioModel(BaseModel):
    username: str = ''
    password: str = ''


Item = UsuarioModel(username='adm', password='123')

url = f"{envData.servidor}api/Auth/token"
print(url) 
headers = {'Content-Type': 'application/json'}
dict_data = Item.json()
response = requests.post(url, data=dict_data, headers=headers)
response.raise_for_status()  # Verifica si la solicitud fue exitosa
data = response.json()
datalist= data.get("token", [])
# entities = DespachoSaveModel(**datalist) 
print(datalist)


url = f"{envData.servidor}api/PersonaNatural/ObtenerMain/"
headers = {
    "Authorization": f"Bearer {datalist}",
    "Content-Type": "application/json",  # Opcional
    "apiKey": "gergjs5435s4fefefusfs2323"
}
response = requests.get(url, headers=headers)
# response = requests.get(url)
response.raise_for_status()  # Verifica si la solicitud fue exitosa
data = response.json()
datalist= data.get("Value", [])
entities = [PersonaNaturalEntity(**item) for item in datalist]
print(entities)