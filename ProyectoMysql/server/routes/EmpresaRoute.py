from fastapi import APIRouter
from BusinessLayer.Entidad import *
from EntityLayer.EmpresaEntity import *
from fastapi.encoders import jsonable_encoder
from Utilidades.Entidades.ResponseAPI import ResponseAPI, ResponseAPIError

EmpresaRouter = APIRouter()
ApiName = "Empresa"

@EmpresaRouter.get(f"/api/{ApiName}/ObtenerMain/", tags=[ApiName])
def ObtenerMain():
    try:
        jsonData = Entidad.EmpresaObtenerMain()
        return jsonable_encoder(ResponseAPI.Response(jsonData))
    except Exception as e:
        print(e)
        return jsonable_encoder(ResponseAPIError.Error())

@EmpresaRouter.get(f"/api/{ApiName}/ObtenerItem/{{EmpresaId}}/", tags=[ApiName])
def ObtenerItem(EmpresaId: int):
    try:
        jsonData = Entidad.EmpresaObtenerItem(EmpresaId)
        return jsonable_encoder(ResponseAPI.Response(jsonData))
    except Exception as e:
        print(e)
        return jsonable_encoder(ResponseAPIError.Error())


@EmpresaRouter.post(f"/api/{ApiName}/Registrar", tags=[ApiName])
def Registrar(Ent: EmpresaSaveModel):
    try:
        Ent = Entidad.EmpresaRegistrar(Ent)
        return jsonable_encoder(ResponseAPI.Response(Ent))
    except Exception as e:
        print(e)
        return jsonable_encoder(ResponseAPIError.Error())



