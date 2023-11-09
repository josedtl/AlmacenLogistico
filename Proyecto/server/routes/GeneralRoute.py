from fastapi import APIRouter
from BusinessLayer.Categoria import *
from BusinessLayer.TipoProducto import *
from BusinessLayer.Marca import *
from BusinessLayer.Modelo import *
from BusinessLayer.Producto import *
from BusinessLayer.PersonaNatural import *
from BusinessLayer.TipoDocumentoIdentidad import *
from EntityLayer.CategoriaEntity import *
from EntityLayer.TipoProductoEntity import *
from EntityLayer.MarcaEntity import *
from EntityLayer.ModeloEntity import *

from fastapi.encoders import jsonable_encoder
from Utilidades.Entidades.ResponseAPI import ResponseAPI, ResponseAPIError
from Utilidades.Entidades.EntidadLikeModel import EntidadLikeModel

GeneralRouter = APIRouter()
ApiName = "General"


# @AreaRouter.post(f"/api/{ApiName}/Save", tags=[ApiName])
# def Save(Ent: AreaSaveModel):
#     try:
#         Ent = Area.Save(Ent)
#         return jsonable_encoder(ResponseAPI.Response(Ent))
#     except Exception as e:
#         print(e)
#         return jsonable_encoder(ResponseAPIError.Error())


@GeneralRouter.post(f"/api/{ApiName}/GetCategoriaItemLike", tags=[ApiName])
def GetCategoriaItemLike(DataLike: EntidadLikeModel):
    try:
        jsonData = Categoria.GetItemLike(DataLike.Nombre)
        return jsonable_encoder(ResponseAPI.Response(jsonData))
    except Exception as e:
        print(e)
        return jsonable_encoder(ResponseAPIError.Error())


@GeneralRouter.get(f"/api/{ApiName}/GetCategoriaItem/{{Id}}/", tags=[ApiName])
def GetCategoriaItem(Id: int):
    try:
        jsonData = Categoria.GetItem(Id)
        return jsonable_encoder(ResponseAPI.Response(jsonData))
    except Exception as e:
        print(e)
        return jsonable_encoder(ResponseAPIError.Error())


@GeneralRouter.post(f"/api/{ApiName}/GetTipoProductoItemLike", tags=[ApiName])
def GetTipoProductoItemLike(DataLike: EntidadLikeModel):
    try:
        jsonData = TipoProducto.GetItemLike(DataLike.Nombre)
        return jsonable_encoder(ResponseAPI.Response(jsonData))
    except Exception as e:
        print(e)
        return jsonable_encoder(ResponseAPIError.Error())


@GeneralRouter.get(f"/api/{ApiName}/GetTipoProductoItem/{{Id}}/", tags=[ApiName])
def GetTipoProductoItem(Id: int):
    try:
        jsonData = TipoProducto.GetItem(Id)
        return jsonable_encoder(ResponseAPI.Response(jsonData))
    except Exception as e:
        print(e)
        return jsonable_encoder(ResponseAPIError.Error())


@GeneralRouter.post(f"/api/{ApiName}/GetMarcaItemLike", tags=[ApiName])
def GetMarcaItemLike(DataLike: EntidadLikeModel):
    try:
        jsonData = Marca.GetItemLike(DataLike.Nombre)
        return jsonable_encoder(ResponseAPI.Response(jsonData))
    except Exception as e:
        print(e)
        return jsonable_encoder(ResponseAPIError.Error())


@GeneralRouter.get(f"/api/{ApiName}/GetMarcaItem/{{Id}}/", tags=[ApiName])
def GetMarcaItem(Id: int):
    try:
        jsonData = Marca.GetItem(Id)
        return jsonable_encoder(ResponseAPI.Response(jsonData))
    except Exception as e:
        print(e)
        return jsonable_encoder(ResponseAPIError.Error())


@GeneralRouter.post(f"/api/{ApiName}/GetModeloItemLike", tags=[ApiName])
def GetModeloItemLike(NDataLike: EntidadLikeModel):
    try:
        jsonData = Modelo.GetItemLike(NDataLike.Nombre)
        return jsonable_encoder(ResponseAPI.Response(jsonData))
    except Exception as e:
        print(e)
        return jsonable_encoder(ResponseAPIError.Error())


@GeneralRouter.get(f"/api/{ApiName}/GetModeloItem/{{Id}}/", tags=[ApiName])
def GetModeloItem(Id: int):
    try:
        jsonData = Modelo.GetItem(Id)
        return jsonable_encoder(ResponseAPI.Response(jsonData))
    except Exception as e:
        print(e)
        return jsonable_encoder(ResponseAPIError.Error())



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

@GeneralRouter.get(f"/api/{ApiName}/GetTipoDocumentoIdentidadPorEstadoItems/", tags=[ApiName])
def GetTipoDocumentoIdentidadPorEstadoItems():
    try:
        jsonData = TipoDocumentoIdentidad.GetTipoDocumentoIdentidadPorEstadoItems()
        return jsonable_encoder(ResponseAPI.Response(jsonData))
    except Exception as e:
        print(e)
        return jsonable_encoder(ResponseAPIError.Error())