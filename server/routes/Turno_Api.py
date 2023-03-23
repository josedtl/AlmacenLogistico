from fastapi import APIRouter
from BusinessLayer.Turno_Business import *

Turno = APIRouter()


@Turno.get('/api/Turno/GetTurnoItems/', tags=["Turno"])
def Get_Acceso():
    try:
        jsonData = Turno_Business.Get_TurnoItems()
        return jsonData
    except:
        print("An exception occurred")