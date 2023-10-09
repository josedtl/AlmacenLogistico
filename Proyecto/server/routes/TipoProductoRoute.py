from fastapi import APIRouter
from BusinessLayer.TipoProducto import *
from fastapi.encoders import jsonable_encoder
from Utilidades.Entidades.ResponseAPI import ResponseAPI , ResponseAPIError

TipoProductoRouter = APIRouter()
ApiName = "TipoProducto"

@TipoProductoRouter.post(f"/api/{ApiName}/Save", tags=[ApiName])
def Save(Ent: TipoProductoEntity):
    try:
        Ent.FechaRegistro = datetime.now()
        Ent = TipoProducto.Save(Ent)
        return jsonable_encoder(ResponseAPI.Response(Ent))
    except Exception as e:
        print(e)
        return jsonable_encoder(ResponseAPIError.Error())


@TipoProductoRouter.get(f"/api/{ApiName}/GetMainItems/", tags=[ApiName])
def GetMainItems():
    try:
        jsonData = TipoProducto.GetMainItems()
        return jsonable_encoder(ResponseAPI.Response(jsonData))
    except Exception as e:
        print(e)
        return jsonable_encoder(ResponseAPIError.Error())




@TipoProductoRouter.delete(f"/api/{ApiName}/Delete/{{Id}}", tags=[ApiName])
def Delete(Id):
    try:
        jsonData=TipoProducto.Delete(Id)
        return jsonable_encoder(jsonData)
    except Exception as e:
        print(e)
    