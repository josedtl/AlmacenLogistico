from fastapi import APIRouter
from BusinessLayer.ProveedorPersonaNatural import *
from EntityLayer.ProveedorPersonaNaturalEntity import *
from fastapi.encoders import jsonable_encoder
from Utilidades.Entidades.ResponseAPI import ResponseAPI, ResponseAPIError

ProveedorPersonaNaturalRouter = APIRouter()
ApiName = "ProveedorPersonaNatural"


@ProveedorPersonaNaturalRouter.post(f"/api/{ApiName}/Save", tags=[ApiName])
def Save(Ent: ProveedorPersonaNaturalSaveModel):
    try:
        Ent = ProveedorPersonaNatural.Save(Ent)
        return jsonable_encoder(ResponseAPI.Response(Ent))
    except Exception as e:
        print(e)
        return jsonable_encoder(ResponseAPIError.Error())


@ProveedorPersonaNaturalRouter.get(f"/api/{ApiName}/GetItems/", tags=[ApiName])
def GetItems():
    try:
        jsonData = ProveedorPersonaNatural.GetItems()
        return jsonable_encoder(ResponseAPI.Response(jsonData))
    except Exception as e:
        print(e)
        return jsonable_encoder(ResponseAPIError.Error())


@ProveedorPersonaNaturalRouter.get(f"/api/{ApiName}/GetItem/{{Id}}/", tags=[ApiName])
def GetItem(Id: int):
    try:
        jsonData = ProveedorPersonaNatural.GetItem(Id)
        return jsonable_encoder(ResponseAPI.Response(jsonData))
    except Exception as e:
        print(e)
        return jsonable_encoder(ResponseAPIError.Error())


@ProveedorPersonaNaturalRouter.delete(f"/api/{ApiName}/Delete/{{Id}}", tags=[ApiName])
def Delete(Id: int):
    try:
        jsonData = ProveedorPersonaNatural.Delete(Id)
        return jsonable_encoder(ResponseAPI.Response(jsonData))
    except Exception as e:
        print(e)
        return jsonable_encoder(ResponseAPIError.Error())


