from fastapi import APIRouter
from BusinessLayer.ClientePersonaNatural import *
from EntityLayer.ClientePersonaNaturalEntity import *
from fastapi.encoders import jsonable_encoder
from Utilidades.Entidades.ResponseAPI import ResponseAPI, ResponseAPIError

ClientePersonaNaturalRouter = APIRouter()
ApiName = "ClientePersonaNatural"


@ClientePersonaNaturalRouter.post(f"/api/{ApiName}/Save", tags=[ApiName])
def Save(Ent: ClientePersonaNaturalSaveModel):
    try:
        Ent = ClientePersonaNatural.Save(Ent)
        return jsonable_encoder(ResponseAPI.Response(Ent))
    except Exception as e:
        print(e)
        return jsonable_encoder(ResponseAPIError.Error())


@ClientePersonaNaturalRouter.get(f"/api/{ApiName}/GetItems/", tags=[ApiName])
def GetItems():
    try:
        jsonData = ClientePersonaNatural.GetItems()
        return jsonable_encoder(ResponseAPI.Response(jsonData))
    except Exception as e:
        print(e)
        return jsonable_encoder(ResponseAPIError.Error())


@ClientePersonaNaturalRouter.get(f"/api/{ApiName}/GetItem/{{Id}}/", tags=[ApiName])
def GetItem(Id: int):
    try:
        jsonData = ClientePersonaNatural.GetItem(Id)
        return jsonable_encoder(ResponseAPI.Response(jsonData))
    except Exception as e:
        print(e)
        return jsonable_encoder(ResponseAPIError.Error())


@ClientePersonaNaturalRouter.delete(f"/api/{ApiName}/Delete/{{Id}}", tags=[ApiName])
def Delete(Id: int):
    try:
        jsonData = ClientePersonaNatural.Delete(Id)
        return jsonable_encoder(ResponseAPI.Response(jsonData))
    except Exception as e:
        print(e)
        return jsonable_encoder(ResponseAPIError.Error())


