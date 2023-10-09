from fastapi import APIRouter
from BusinessLayer.Area import *
from EntityLayer.AreaEntity import *
from fastapi.encoders import jsonable_encoder
from Utilidades.Entidades.ResponseAPI import ResponseAPI, ResponseAPIError

AreaRouter = APIRouter()
ApiName = "Area"


@AreaRouter.post(f"/api/{ApiName}/Save", tags=[ApiName])
def Save(Ent: AreaSaveModel):
    try:
        Ent = Area.Save(Ent)
        return jsonable_encoder(ResponseAPI.Response(Ent))
    except Exception as e:
        print(e)
        return jsonable_encoder(ResponseAPIError.Error())


@AreaRouter.get(f"/api/{ApiName}/GetItems/", tags=[ApiName])
def GetItems():
    try:
        jsonData = Area.GetItems()
        return jsonable_encoder(ResponseAPI.Response(jsonData))
    except Exception as e:
        print(e)
        return jsonable_encoder(ResponseAPIError.Error())


@AreaRouter.get(f"/api/{ApiName}/GetItem/{{Id}}/", tags=[ApiName])
def GetItem(Id: int):
    try:
        jsonData = Area.GetItem(Id)
        return jsonable_encoder(ResponseAPI.Response(jsonData))
    except Exception as e:
        print(e)
        return jsonable_encoder(ResponseAPIError.Error())


@AreaRouter.delete(f"/api/{ApiName}/Delete/{{Id}}", tags=[ApiName])
def Delete(Id: int):
    try:
        jsonData = Area.Delete(Id)
        return jsonable_encoder(ResponseAPI.Response(jsonData))
    except Exception as e:
        print(e)
        return jsonable_encoder(ResponseAPIError.Error())


