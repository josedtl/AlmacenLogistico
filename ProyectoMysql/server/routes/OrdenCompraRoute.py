from fastapi import APIRouter
from BusinessLayer import OrdenPedido
from BusinessLayer.OrdenCompra import *
from BusinessLayer.OrdenCompraDetalle import OrdenCompraDetalle
from EntityLayer.OrdenCompraEntity import *
from fastapi.encoders import jsonable_encoder
from Utilidades.Entidades.ResponseAPI import ResponseAPI, ResponseAPIError

OrdenCompraRouter = APIRouter()
ApiName = "OrdenCompra"

@OrdenCompraRouter.get(f"/api/{ApiName}/ObtenerMain", tags=[ApiName])
def ObtenerMain():
    try:
        jsonData = OrdenCompra.ObtenerMain()
        return jsonable_encoder(ResponseAPI.Response(jsonData))
    except Exception as e:
        print(e)
        return jsonable_encoder(ResponseAPIError.Error())
    
@OrdenCompraRouter.get(f"/api/{ApiName}/ObtenerItem/{{OrdenCompraId}}", tags=[ApiName])
def ObtenerItem(OrdenCompraId: int):
    try:
        jsonData = OrdenCompra.ObtenerItem(OrdenCompraId)
        return jsonable_encoder(ResponseAPI.Response(jsonData))
    except Exception as e:
        print(e)
        return jsonable_encoder(ResponseAPIError.Error())


@OrdenCompraRouter.post(f"/api/{ApiName}/Registrar", tags=[ApiName])
def Registrar(Ent: OrdenCompraSaveModel):
    try:
        Ent = OrdenCompra.Registrar(Ent)
        return jsonable_encoder(ResponseAPI.Response(Ent))
    except Exception as e:
        print(e)
        return jsonable_encoder(ResponseAPIError.Error())


    
@OrdenCompraRouter.get(f"/api/{ApiName}/ObtenerDetalleItem/{{OrdenCompraId}}", tags=[ApiName])
def ObtenerDetalleItem(OrdenCompraId: int):
    try:
        jsonData = OrdenCompraDetalle.ObtenerItem(OrdenCompraId)
        return jsonable_encoder(ResponseAPI.Response(jsonData))
    except Exception as e:
        print(e)
        return jsonable_encoder(ResponseAPIError.Error())
    
# @OrdenCompraRouter.get(f"/api/{ApiName}/ObtenerMain", tags=[ApiName])
# def ObtenerMain():
#     try:
#         jsonData = OrdenPedido.ObtenerFiltro()
#         return jsonable_encoder(ResponseAPI.Response(jsonData))
#     except Exception as e:
#         print(e)
#         return jsonable_encoder(ResponseAPIError.Error())