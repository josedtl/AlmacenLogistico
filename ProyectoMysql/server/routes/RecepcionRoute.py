from fastapi import APIRouter
from BusinessLayer.Recepcion import *
from BusinessLayer.ReceptLista import *
from EntityLayer.RecepcionEntity import *
from fastapi.encoders import jsonable_encoder
from Utilidades.Entidades.ResponseAPI import ResponseAPI, ResponseAPIError

RecepcionRouter = APIRouter()
ApiName = "Recepcion"


@RecepcionRouter.post(f"/api/{ApiName}/Save", tags=[ApiName])
def Save(Ent: RecepcionSaveModel):
    try:
        Ent.FechaRegistro = datetime.now()
        Ent = Recepcion.Registrar(Ent)
        return jsonable_encoder(ResponseAPI.Response(Ent))
    except Exception as e:
        print(e)
        return jsonable_encoder(ResponseAPIError.Error())


@RecepcionRouter.get(f"/api/{ApiName}/GetItemMain", tags=[ApiName])
def GetItemOPMain():
    try:
        jsonData = Recepcion.GetItemMain()
        return jsonable_encoder(ResponseAPI.Response(jsonData))
    except Exception as e:
        print(e)
        return jsonable_encoder(ResponseAPIError.Error())

@RecepcionRouter.get(f"/api/{ApiName}/ObtenerItem/{{Id}}", tags=[ApiName])
def ObtenerItem(Id : int):
    try:
        jsonData = Recepcion.ObtenerItem(Id)
        return jsonable_encoder(ResponseAPI.Response(jsonData))
    except Exception as e:
        print(e)
        return jsonable_encoder(ResponseAPIError.Error())

@RecepcionRouter.get(f"/api/{ApiName}/ReceptListaObtenerLista/{{Codigo}}", tags=[ApiName])
def ObtenerLista(Codigo: str):
    try:
        jsonData = ReceptLista.ObtenerLista(Codigo)
        return jsonable_encoder(ResponseAPI.Response(jsonData))
    except Exception as e:
        print(e)
        return jsonable_encoder(ResponseAPIError.Error())
    
    
@RecepcionRouter.get(f"/api/{ApiName}/ReceptListaObtenerItem/{{Id}}", tags=[ApiName])
def ReceptListaObtenerItem(Id : int):
    try:
        jsonData = ReceptLista.ObtenerItem(Id)
        return jsonable_encoder(ResponseAPI.Response(jsonData))
    except Exception as e:
        print(e)
        return jsonable_encoder(ResponseAPIError.Error())
