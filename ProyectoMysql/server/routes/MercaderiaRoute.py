from fastapi import APIRouter
from BusinessLayer.Mercaderia import *
from EntityLayer.MercaderiaEntity import *
from fastapi.encoders import jsonable_encoder
from Utilidades.Entidades.EntidadLikeModel import EntidadLikeModel
from Utilidades.Entidades.ResponseAPI import ResponseAPI, ResponseAPIError

MercaderiaRouter = APIRouter()
ApiName = "Mercaderia"


@MercaderiaRouter.post(f"/api/{ApiName}/Registrar", tags=[ApiName])
def Registrar(Ent: MercaderiaSaveModel):
    try:
        Ent = Mercaderia.Registrar(Ent)
        return jsonable_encoder(ResponseAPI.Response(Ent))
    except Exception as e:
        print(e)
        return jsonable_encoder(ResponseAPIError.Error())


@MercaderiaRouter.get(f"/api/{ApiName}/ObtenerMain", tags=[ApiName])
def ObtenerMain():
    try:
        jsonData = Mercaderia.ObtenerMain()
        return jsonable_encoder(ResponseAPI.Response(jsonData))
    except Exception as e:
        print(e)
        return jsonable_encoder(ResponseAPIError.Error())


@MercaderiaRouter.get(f"/api/{ApiName}/ObtenerItem/{{Id}}", tags=[ApiName])
def ObtenerItem(Id : int):
    try:
        jsonData = Mercaderia.ObtenerItem(Id)
        return jsonable_encoder(ResponseAPI.Response(jsonData))
    except Exception as e:
        print(e)
        return jsonable_encoder(ResponseAPIError.Error())

@MercaderiaRouter.post(f"/api/{ApiName}/BuscarCategoriaItem", tags=[ApiName])
def BuscarCategoriaItem(NDataLike: EntidadLikeModel):
    try:
        jsonData = Mercaderia.BuscarCategoriaItem(NDataLike.Valor1, NDataLike.ValorInt1)
        return jsonable_encoder(ResponseAPI.Response(jsonData))
    except Exception as e:
        print(e)
        return jsonable_encoder(ResponseAPIError.Error())

@MercaderiaRouter.get(f"/api/{ApiName}/ObtenerItemOP/{{MercaderiaId}}", tags=[ApiName])
def ObtenerItemOP(MercaderiaId : int):
    try:
        jsonData = Mercaderia.ObtenerItemOP(MercaderiaId)
        print(jsonData)
        return jsonable_encoder(ResponseAPI.Response(jsonData))
    except Exception as e:
        print(e)
        return jsonable_encoder(ResponseAPIError.Error())