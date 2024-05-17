from fastapi import APIRouter
from BusinessLayer.Mercaderia import *
from EntityLayer.MercaderiaEntity import *
from fastapi.encoders import jsonable_encoder
from Utilidades.Entidades.EntidadLikeModel import EntidadLikeModel
from Utilidades.Entidades.ResponseAPI import ResponseAPI, ResponseAPIError

MercaderiaRouter = APIRouter()
ApiName = "Mercaderia"


@MercaderiaRouter.post(f"/api/{ApiName}/Registrar", tags=[ApiName])
def Save(Ent: MercaderiaSaveModel):
    try:
        Ent = Mercaderia.Save(Ent)
        return jsonable_encoder(ResponseAPI.Response(Ent))
    except Exception as e:
        print(e)
        return jsonable_encoder(ResponseAPIError.Error())


@MercaderiaRouter.get(f"/api/{ApiName}/ObtenerMain", tags=[ApiName])
def GetMainItems():
    try:
        jsonData = Mercaderia.GetMainItems()
        return jsonable_encoder(ResponseAPI.Response(jsonData))
    except Exception as e:
        print(e)
        return jsonable_encoder(ResponseAPIError.Error())


@MercaderiaRouter.get(f"/api/{ApiName}/ObtenerItem/{{Id}}", tags=[ApiName])
def GetCabeceraItem(Id : int):
    try:
        jsonData = Mercaderia.GetCabeceraItem(Id)
        return jsonable_encoder(ResponseAPI.Response(jsonData))
    except Exception as e:
        print(e)
        return jsonable_encoder(ResponseAPIError.Error())

@MercaderiaRouter.post(f"/api/{ApiName}/BuscarCategoriaItem", tags=[ApiName])
def GetMercaderiaLikeCategoria(NDataLike: EntidadLikeModel):
    try:
        jsonData = Mercaderia.GetMercaderiaLikeCategoria(NDataLike.Valor1, NDataLike.ValorInt1)
        return jsonable_encoder(ResponseAPI.Response(jsonData))
    except Exception as e:
        print(e)
        return jsonable_encoder(ResponseAPIError.Error())

@MercaderiaRouter.get(f"/api/{ApiName}/ObtenerItemOP/{{Id}}", tags=[ApiName])
def GetMercaderia_ItemOP(Id : int):
    try:
        jsonData = Mercaderia.GetMercaderia_ItemOP(Id)
        return jsonable_encoder(ResponseAPI.Response(jsonData))
    except Exception as e:
        print(e)
        return jsonable_encoder(ResponseAPIError.Error())