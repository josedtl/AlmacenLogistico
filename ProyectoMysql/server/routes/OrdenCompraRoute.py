from fastapi import APIRouter
from BusinessLayer.OrdenCompra import *
from EntityLayer.OrdenCompraEntity import *
from fastapi.encoders import jsonable_encoder
from Utilidades.Entidades.ResponseAPI import ResponseAPI, ResponseAPIError

OrdenCompraRouter = APIRouter()
ApiName = "OrdenCompra"


@OrdenCompraRouter.get(f"/api/{ApiName}/GetItem/{{Id}}", tags=[ApiName])
def GetItem(Id: int):
    try:
        jsonData = OrdenCompra.GetItem(Id)
        return jsonable_encoder(ResponseAPI.Response(jsonData))
    except Exception as e:
        print(e)
        return jsonable_encoder(ResponseAPIError.Error())


@OrdenCompraRouter.post(f"/api/{ApiName}/Registrar", tags=[ApiName])
def Save(Ent: OrdenCompraSaveModel):
    try:
        Ent = OrdenCompra.Registrar(Ent)
        return jsonable_encoder(ResponseAPI.Response(Ent))
    except Exception as e:
        print(e)
        return jsonable_encoder(ResponseAPIError.Error())

@OrdenCompraRouter.get(f"/api/{ApiName}/GetItemMain", tags=[ApiName])
def GetItemMain():
    try:
        jsonData = OrdenCompra.GetItemMain()
        return jsonable_encoder(ResponseAPI.Response(jsonData))
    except Exception as e:
        print(e)
        return jsonable_encoder(ResponseAPIError.Error())