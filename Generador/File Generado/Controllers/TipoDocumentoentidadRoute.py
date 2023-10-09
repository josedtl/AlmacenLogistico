from fastapi import APIRouter
from BusinessLayer.TipoDocumentoentidad import *
from EntityLayer.TipoDocumentoentidadEntity import *
from fastapi.encoders import jsonable_encoder
from Utilidades.Entidades.ResponseAPI import ResponseAPI, ResponseAPIError

TipoDocumentoentidadRouter = APIRouter()
ApiName = "TipoDocumentoentidad"


@TipoDocumentoentidadRouter.post(f"/api/{ApiName}/Save", tags=[ApiName])
def Save(Ent: TipoDocumentoentidadSaveModel):
    try:
        Ent = TipoDocumentoentidad.Save(Ent)
        return jsonable_encoder(ResponseAPI.Response(Ent))
    except Exception as e:
        print(e)
        return jsonable_encoder(ResponseAPIError.Error())


@TipoDocumentoentidadRouter.get(f"/api/{ApiName}/GetItems/", tags=[ApiName])
def GetItems():
    try:
        jsonData = TipoDocumentoentidad.GetItems()
        return jsonable_encoder(ResponseAPI.Response(jsonData))
    except Exception as e:
        print(e)
        return jsonable_encoder(ResponseAPIError.Error())


@TipoDocumentoentidadRouter.get(f"/api/{ApiName}/GetItem/{{Id}}/", tags=[ApiName])
def GetItem(Id: int):
    try:
        jsonData = TipoDocumentoentidad.GetItem(Id)
        return jsonable_encoder(ResponseAPI.Response(jsonData))
    except Exception as e:
        print(e)
        return jsonable_encoder(ResponseAPIError.Error())


@TipoDocumentoentidadRouter.delete(f"/api/{ApiName}/Delete/{{Id}}", tags=[ApiName])
def Delete(Id: int):
    try:
        jsonData = TipoDocumentoentidad.Delete(Id)
        return jsonable_encoder(ResponseAPI.Response(jsonData))
    except Exception as e:
        print(e)
        return jsonable_encoder(ResponseAPIError.Error())


