from fastapi import APIRouter
from BusinessLayer.Cargo import *
from EntityLayer.CargoEntity import *
from fastapi.encoders import jsonable_encoder
from Utilidades.Entidades.ResponseAPI import ResponseAPI, ResponseAPIError

CargoRouter = APIRouter()
ApiName = "Cargo"


@CargoRouter.post(f"/api/{ApiName}/Save", tags=[ApiName])
def Save(Ent: CargoSaveModel):
    try:
        Ent = Cargo.Save(Ent)
        return jsonable_encoder(ResponseAPI.Response(Ent))
    except Exception as e:
        print(e)
        return jsonable_encoder(ResponseAPIError.Error())


@CargoRouter.get(f"/api/{ApiName}/GetItems/", tags=[ApiName])
def GetItems():
    try:
        jsonData = Cargo.GetItems()
        return jsonable_encoder(ResponseAPI.Response(jsonData))
    except Exception as e:
        print(e)
        return jsonable_encoder(ResponseAPIError.Error())


@CargoRouter.get(f"/api/{ApiName}/GetItem/{{Id}}/", tags=[ApiName])
def GetItem(Id: int):
    try:
        jsonData = Cargo.GetItem(Id)
        return jsonable_encoder(ResponseAPI.Response(jsonData))
    except Exception as e:
        print(e)
        return jsonable_encoder(ResponseAPIError.Error())


@CargoRouter.delete(f"/api/{ApiName}/Delete/{{Id}}", tags=[ApiName])
def Delete(Id: int):
    try:
        jsonData = Cargo.Delete(Id)
        return jsonable_encoder(ResponseAPI.Response(jsonData))
    except Exception as e:
        print(e)
        return jsonable_encoder(ResponseAPIError.Error())


