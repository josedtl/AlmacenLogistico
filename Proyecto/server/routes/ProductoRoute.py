from fastapi import APIRouter
from BusinessLayer.Producto import *
from fastapi.encoders import jsonable_encoder
from Utilidades.Entidades.ResponseAPI import ResponseAPI, ResponseAPIError

ProductoRouter = APIRouter()
ApiName = "Producto"


@ProductoRouter.post(f"/api/{ApiName}/Save", tags=[ApiName])
def Save(Ent: ProductoEntity):
    try:
        Ent.FechaRegistro = datetime.now()
        Ent = Producto.Save(Ent)
        return jsonable_encoder(ResponseAPI.Response(Ent))
    except Exception as e:
        print(e)
        return jsonable_encoder(ResponseAPIError.Error())


@ProductoRouter.get(f"/api/{ApiName}/GetMainItems/", tags=[ApiName])
def GetMainItems():
    try:
        jsonData = Producto.GetMainItems()
        return jsonable_encoder(ResponseAPI.Response(jsonData))
    except Exception as e:
        print(e)
        return jsonable_encoder(ResponseAPIError.Error())


@ProductoRouter.delete(f"/api/{ApiName}/Delete/{{Id}}", tags=[ApiName])
def Delete(Id):
    try:
        jsonData = Producto.Delete(Id)
        return jsonable_encoder(jsonData)
    except Exception as e:
        print(e)
