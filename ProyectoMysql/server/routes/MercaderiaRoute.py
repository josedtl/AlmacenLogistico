from fastapi import APIRouter
from BusinessLayer.Mercaderia import *
from EntityLayer.MercaderiaEntity import *
from fastapi.encoders import jsonable_encoder
from Utilidades.Entidades.ResponseAPI import ResponseAPI, ResponseAPIError

MercaderiaRouter = APIRouter()
ApiName = "Mercaderia"


@MercaderiaRouter.post(f"/api/{ApiName}/Save", tags=[ApiName])
def Save(Ent: MercaderiaSaveModel):
    try:
        Ent = Mercaderia.Save(Ent)
        return jsonable_encoder(ResponseAPI.Response(Ent))
    except Exception as e:
        print(e)
        return jsonable_encoder(ResponseAPIError.Error())


@MercaderiaRouter.get(f"/api/{ApiName}/GetMainItems", tags=[ApiName])
def GetMainItems():
    try:
        jsonData = Mercaderia.GetMainItems()
        return jsonable_encoder(ResponseAPI.Response(jsonData))
    except Exception as e:
        print(e)
        return jsonable_encoder(ResponseAPIError.Error())
