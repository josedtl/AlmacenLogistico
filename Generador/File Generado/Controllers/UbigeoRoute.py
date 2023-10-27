from fastapi import APIRouter
from BusinessLayer.Ubigeo import *
from EntityLayer.UbigeoEntity import *
from fastapi.encoders import jsonable_encoder
from Utilidades.Entidades.ResponseAPI import ResponseAPI, ResponseAPIError

UbigeoRouter = APIRouter()
ApiName = "Ubigeo"


@UbigeoRouter.post(f"/api/{ApiName}/Save", tags=[ApiName])
def Save(Ent: UbigeoSaveModel):
    try:
        Ent = Ubigeo.Save(Ent)
        return jsonable_encoder(ResponseAPI.Response(Ent))
    except Exception as e:
        print(e)
        return jsonable_encoder(ResponseAPIError.Error())


@UbigeoRouter.get(f"/api/{ApiName}/GetItems/", tags=[ApiName])
def GetItems():
    try:
        jsonData = Ubigeo.GetItems()
        return jsonable_encoder(ResponseAPI.Response(jsonData))
    except Exception as e:
        print(e)
        return jsonable_encoder(ResponseAPIError.Error())


@UbigeoRouter.get(f"/api/{ApiName}/GetItem/{{Id}}/", tags=[ApiName])
def GetItem(Id: int):
    try:
        jsonData = Ubigeo.GetItem(Id)
        return jsonable_encoder(ResponseAPI.Response(jsonData))
    except Exception as e:
        print(e)
        return jsonable_encoder(ResponseAPIError.Error())


@UbigeoRouter.delete(f"/api/{ApiName}/Delete/{{Id}}", tags=[ApiName])
def Delete(Id: int):
    try:
        jsonData = Ubigeo.Delete(Id)
        return jsonable_encoder(ResponseAPI.Response(jsonData))
    except Exception as e:
        print(e)
        return jsonable_encoder(ResponseAPIError.Error())


