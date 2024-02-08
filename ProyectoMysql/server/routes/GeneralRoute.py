from fastapi import APIRouter
from BusinessLayer.Producto import *
from BusinessLayer.PersonaNatural import *
from BusinessLayer.Empresa import *
from EntityLayer.EmpresaEntity import *
from fastapi.encoders import jsonable_encoder
from Utilidades.Entidades.ResponseAPI import ResponseAPI, ResponseAPIError
from Utilidades.Entidades.EntidadLikeModel import EntidadLikeModel

GeneralRouter = APIRouter()
ApiName = "General"

@GeneralRouter.post(f"/api/{ApiName}/GetProductoItemLike", tags=[ApiName])
def GetProductoItemLike(NDataLike: EntidadLikeModel):
    try:
        jsonData = Producto.GetItemLike(NDataLike.Nombre)
        return jsonable_encoder(ResponseAPI.Response(jsonData))
    except Exception as e:
        print(e)
        return jsonable_encoder(ResponseAPIError.Error())

@GeneralRouter.get(f"/api/{ApiName}/GetBuscardocumento/{{NumDocumento}}/", tags=[ApiName])
def GetBuscardocumento(NumDocumento: str):
    try:
        jsonData = PersonaNatural.GetBuscardocumento(NumDocumento)
        return jsonable_encoder(ResponseAPI.Response(jsonData))
    except Exception as e:
        print(e)
        return jsonable_encoder(ResponseAPIError.Error())

    
@GeneralRouter.get(f"/api/{ApiName}/GetEmpresaBuscaDocumento/{{NumDocumento}}/", tags=[ApiName])
def GetEmpresaBuscaDocumento(NumDocumento: str):
    try:
        jsonData = Empresa.GetEmpresaBuscaDocumento(NumDocumento)
        return jsonable_encoder(ResponseAPI.Response(jsonData))
    except Exception as e:
        print(e)
        return jsonable_encoder(ResponseAPIError.Error())
    
