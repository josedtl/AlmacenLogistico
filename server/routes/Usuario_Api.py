from fastapi import APIRouter
from BusinessLayer.Usuario_Business import *

Usuario = APIRouter()


@Usuario.get('/api/Usuario/GetAcceso/{v_COD_ID}/{v_PWD}', tags=["Usuario"])
def Get_Acceso(v_COD_ID: str, v_PWD: str):
    try:
        jsonData = Usuario_Business.Get_Acceso(v_COD_ID,v_PWD)
        return jsonData
    except:
        print("An exception occurred")