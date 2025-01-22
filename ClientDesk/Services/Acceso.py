import json
import requests
from typing import List
from pydantic import BaseModel, ValidationError
from datetime import datetime
from Entidades.Usuario import UsuarioModel
from envData import envData
import jsonpickle

class Acceso:

    def Auth() -> str:
        try:
            Item = UsuarioModel(username='adm', password='123')

            url = f"{envData.servidor}api/Auth/token"
            print(url) 
            headers = {'Content-Type': 'application/json'}
            dict_data = Item.json()
            response = requests.post(url, data=dict_data, headers=headers)
            response.raise_for_status()  # Verifica si la solicitud fue exitosa
            data = response.json()
            datalist= data.get("token", [])
            return datalist
        except requests.exceptions.RequestException as e:
            print(f"Error al obtener datos de la API: {e}")
            return []


    def headers() -> dict:
        try:
            headers = {
                "Authorization": f"Bearer {Acceso.Auth()}",
                "Content-Type": "application/json",  # Opcional
                "apiKey": f"{envData.apiKey}"
            }
            return headers
        except requests.exceptions.RequestException as e:
            print(f"Error al obtener datos de la API: {e}")
            return []