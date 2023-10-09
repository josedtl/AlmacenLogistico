from fastapi import APIRouter
from BusinessLayer.OrdenCompraControlProceso import *
from EntityLayer.OrdenCompraControlProcesoEntity import *
from fastapi.encoders import jsonable_encoder
from Utilidades.Entidades.ResponseAPI import ResponseAPI, ResponseAPIError

OrdenCompraControlProcesoRouter = APIRouter()
ApiName = "OrdenCompraControlProceso"


@OrdenCompraControlProcesoRouter.post(f"/api/{ApiName}/Save", tags=[ApiName])
def Save(Ent: OrdenCompraControlProcesoSaveModel):
    try:
        Ent = OrdenCompraControlProceso.Save(Ent)
        return jsonable_encoder(ResponseAPI.Response(Ent))
    except Exception as e:
        print(e)
        return jsonable_encoder(ResponseAPIError.Error())


@OrdenCompraControlProcesoRouter.get(f"/api/{ApiName}/GetItems/", tags=[ApiName])
def GetItems():
    try:
        jsonData = OrdenCompraControlProceso.GetItems()
        return jsonable_encoder(ResponseAPI.Response(jsonData))
    except Exception as e:
        print(e)
        return jsonable_encoder(ResponseAPIError.Error())


@OrdenCompraControlProcesoRouter.get(f"/api/{ApiName}/GetItem/{{Id}}/", tags=[ApiName])
def GetItem(Id: int):
    try:
        jsonData = OrdenCompraControlProceso.GetItem(Id)
        return jsonable_encoder(ResponseAPI.Response(jsonData))
    except Exception as e:
        print(e)
        return jsonable_encoder(ResponseAPIError.Error())


@OrdenCompraControlProcesoRouter.delete(f"/api/{ApiName}/Delete/{{Id}}", tags=[ApiName])
def Delete(Id: int):
    try:
        jsonData = OrdenCompraControlProceso.Delete(Id)
        return jsonable_encoder(ResponseAPI.Response(jsonData))
    except Exception as e:
        print(e)
        return jsonable_encoder(ResponseAPIError.Error())


