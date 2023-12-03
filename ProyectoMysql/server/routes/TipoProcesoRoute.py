from fastapi import APIRouter
from BusinessLayer.TipoProceso import *
from EntityLayer.TipoProcesoEntity import *
from fastapi.encoders import jsonable_encoder
from Utilidades.Entidades.ResponseAPI import ResponseAPI, ResponseAPIError

TipoProcesoRouter = APIRouter()
ApiName = "TipoProceso"


@TipoProcesoRouter.post(f"/api/{ApiName}/Save", tags=[ApiName])
def Save(Ent: TipoProcesoSaveModel):
    try:
        Ent = TipoProceso.Save(Ent)
        return jsonable_encoder(ResponseAPI.Response(Ent))
    except Exception as e:
        print(e)
        return jsonable_encoder(ResponseAPIError.Error())


@TipoProcesoRouter.get(f"/api/{ApiName}/GetItems/", tags=[ApiName])
def GetItems():
    try:
        jsonData = TipoProceso.GetItems()
        return jsonable_encoder(ResponseAPI.Response(jsonData))
    except Exception as e:
        print(e)
        return jsonable_encoder(ResponseAPIError.Error())


@TipoProcesoRouter.get(f"/api/{ApiName}/GetItem/{{Id}}/", tags=[ApiName])
def GetItem(Id: int):
    try:
        jsonData = TipoProceso.GetItem(Id)
        return jsonable_encoder(ResponseAPI.Response(jsonData))
    except Exception as e:
        print(e)
        return jsonable_encoder(ResponseAPIError.Error())


@TipoProcesoRouter.delete(f"/api/{ApiName}/Delete/{{Id}}", tags=[ApiName])
def Delete(Id: int):
    try:
        jsonData = TipoProceso.Delete(Id)
        return jsonable_encoder(ResponseAPI.Response(jsonData))
    except Exception as e:
        print(e)
        return jsonable_encoder(ResponseAPIError.Error())


