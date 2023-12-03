from fastapi import APIRouter
from BusinessLayer.ProcesoSecuencia import *
from EntityLayer.ProcesoSecuenciaEntity import *
from fastapi.encoders import jsonable_encoder
from Utilidades.Entidades.ResponseAPI import ResponseAPI, ResponseAPIError

ProcesoSecuenciaRouter = APIRouter()
ApiName = "ProcesoSecuencia"


@ProcesoSecuenciaRouter.post(f"/api/{ApiName}/Save", tags=[ApiName])
def Save(Ent: ProcesoSecuenciaSaveModel):
    try:
        Ent = ProcesoSecuencia.Save(Ent)
        return jsonable_encoder(ResponseAPI.Response(Ent))
    except Exception as e:
        print(e)
        return jsonable_encoder(ResponseAPIError.Error())


@ProcesoSecuenciaRouter.get(f"/api/{ApiName}/GetItems/", tags=[ApiName])
def GetItems():
    try:
        jsonData = ProcesoSecuencia.GetItems()
        return jsonable_encoder(ResponseAPI.Response(jsonData))
    except Exception as e:
        print(e)
        return jsonable_encoder(ResponseAPIError.Error())


@ProcesoSecuenciaRouter.get(f"/api/{ApiName}/GetItem/{{Id}}/", tags=[ApiName])
def GetItem(Id: int):
    try:
        jsonData = ProcesoSecuencia.GetItem(Id)
        return jsonable_encoder(ResponseAPI.Response(jsonData))
    except Exception as e:
        print(e)
        return jsonable_encoder(ResponseAPIError.Error())


@ProcesoSecuenciaRouter.delete(f"/api/{ApiName}/Delete/{{Id}}", tags=[ApiName])
def Delete(Id: int):
    try:
        jsonData = ProcesoSecuencia.Delete(Id)
        return jsonable_encoder(ResponseAPI.Response(jsonData))
    except Exception as e:
        print(e)
        return jsonable_encoder(ResponseAPIError.Error())


