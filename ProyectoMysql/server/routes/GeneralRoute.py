from fastapi import APIRouter
from BusinessLayer.PorcentajeImpuesto import * 
from BusinessLayer.Moneda import * 
from BusinessLayer.EstadoProceso import *
from BusinessLayer.TipoEntidad import *
from BusinessLayer.RecepLista import *
from BusinessLayer.Entidad import *
from BusinessLayer.Proceso import *
from BusinessLayer.UnidadMedida import * 
from BusinessLayer.Ubigeo import Ubigeo
from EntityLayer.EmpresaEntity import *
from fastapi.encoders import jsonable_encoder
from Utilidades.Entidades.ResponseAPI import ResponseAPI, ResponseAPIError
from Utilidades.Entidades.EntidadLikeModel import EntidadLikeModel

GeneralRouter = APIRouter()
ApiName = "General"



@GeneralRouter.get(f"/api/{ApiName}/UnidadMedidaObtenerItems", tags=[ApiName])
def UnidadMedidaObtenerItems():
    try:
        jsonData = UnidadMedida.ObtenerItems()
        return jsonable_encoder(ResponseAPI.Response(jsonData))
    except Exception as e:
        print(e)
        return jsonable_encoder(ResponseAPIError.Error())

@GeneralRouter.get(f"/api/{ApiName}/UnidadMedidaObtenerItem/{{UnidadMedidaId}}", tags=[ApiName])
def UnidadMedidaObtenerItem(UnidadMedidaId: int):
    try:
        jsonData = UnidadMedida.ObtenerItem(UnidadMedidaId)
        return jsonable_encoder(ResponseAPI.Response(jsonData))
    except Exception as e:
        print(e)
        return jsonable_encoder(ResponseAPIError.Error())
  
@GeneralRouter.get(f"/api/{ApiName}/UbigeoObtenerItem/{{UbigeoId}}/", tags=[ApiName])
def UbigeoObtenerItem(UbigeoId: int):
    try:
        jsonData = Ubigeo.ObtenerItem(UbigeoId)
        return jsonable_encoder(ResponseAPI.Response(jsonData))
    except Exception as e:
        print(e)
        return jsonable_encoder(ResponseAPIError.Error())



@GeneralRouter.post(f"/api/{ApiName}/UbigeoBuscarItem", tags=[ApiName])
def UbigeoBuscarItem(NDataLike: EntidadLikeModel):
    try:
        jsonData = Ubigeo.BuscarItem(NDataLike.Valor1)
        return jsonable_encoder(ResponseAPI.Response(jsonData))
    except Exception as e:
        print(e)
        return jsonable_encoder(ResponseAPIError.Error())

@GeneralRouter.get(f"/api/{ApiName}/ProcesoObtenerTipo/{{Codigo}}/", tags=[ApiName])
def ProcesoObtenerTipo(Codigo: str):
    try:
        jsonData = Proceso.ObtenerTipo(Codigo)
        return jsonable_encoder(ResponseAPI.Response(jsonData))
    except Exception as e:
        print(e)
        return jsonable_encoder(ResponseAPIError.Error())



@GeneralRouter.post(f"/api/{ApiName}/EntidadBuscarNombreCompletoItem", tags=[ApiName])
def EntidadBuscarNombreCompletoItem(NDataLike: EntidadLikeModel):
    try:
        jsonData = Entidad.EntidadBuscarNombreCompletoItem(NDataLike.Valor1)
        return jsonable_encoder(ResponseAPI.Response(jsonData))
    except Exception as e:
        print(e)
        return jsonable_encoder(ResponseAPIError.Error())


@GeneralRouter.get(f"/api/{ApiName}/EntidadObtenerNombreCompletoItem/{{EntidadId}}/", tags=[ApiName])
def EntidadObtenerNombreCompletoItem(EntidadId: int):
    try:
        jsonData = Entidad.EntidadObtenerNombreCompletoItem(EntidadId)
        return jsonable_encoder(ResponseAPI.Response(jsonData))
    except Exception as e:
        print(e)
        return jsonable_encoder(ResponseAPIError.Error())


@GeneralRouter.get(f"/api/{ApiName}/RecepListaObtenerItem/{{ListaId}}/", tags=[ApiName])
def RecepListaObtenerItem(ListaId: int):
    try:
        jsonData = RecepLista.ObtenerItem(ListaId)
        return jsonable_encoder(ResponseAPI.Response(jsonData))
    except Exception as e:
        print(e)
        return jsonable_encoder(ResponseAPIError.Error())

@GeneralRouter.get(f"/api/{ApiName}/RecepListaObtenerItems/{{Codigo}}/", tags=[ApiName])
def RecepListaObtenerItems(Codigo: str):
    try:
        jsonData = RecepLista.ObtenerItems(Codigo)
        return jsonable_encoder(ResponseAPI.Response(jsonData))
    except Exception as e:
        print(e)
        return jsonable_encoder(ResponseAPIError.Error())


@GeneralRouter.get(f"/api/{ApiName}/TipoEntidadObtenerItems", tags=[ApiName])
def TipoEntidadObtenerItems():
    try:
        jsonData = TipoEntidad.ObtenerItems()
        return jsonable_encoder(ResponseAPI.Response(jsonData))
    except Exception as e:
        print(e)
        return jsonable_encoder(ResponseAPIError.Error())

@GeneralRouter.post(f"/api/{ApiName}/EntidadRegistrarEnlace", tags=[ApiName])
def EntidadRegistrarEnlace(Item: DatosClienteItemModel):
    try:
        if Item.TipoEntidadId == 1:
            Item.EntidadId = Entidad.PersonaNaturalRegistrarEnlace(Item)
        elif Item.TipoEntidadId == 2:
            Item.EntidadId = Entidad.EmpresaRegistrarEnlace(Item)

        return jsonable_encoder(ResponseAPI.Response(Item))
    except Exception as e:
        print(e)
        return jsonable_encoder(ResponseAPIError.Error())

@GeneralRouter.get(f"/api/{ApiName}/EstadoProcesoObtenerItems", tags=[ApiName])
def EstadoProcesoObtenerItems():
    try:
        jsonData = EstadoProceso.ObtenerItems()
        return jsonable_encoder(ResponseAPI.Response(jsonData))
    except Exception as e:
        print(e)
        return jsonable_encoder(ResponseAPIError.Error())


@GeneralRouter.get(f"/api/{ApiName}/MonedaObtenerItems", tags=[ApiName])
def MonedaObtenerItems():
    try:
        jsonData = Moneda.ObtenerItems()
        return jsonable_encoder(ResponseAPI.Response(jsonData))
    except Exception as e:
        print(e)
        return jsonable_encoder(ResponseAPIError.Error())

@GeneralRouter.get(f"/api/{ApiName}/MonedaObtenerItem/{{MonedaId}}", tags=[ApiName])
def MonedaObtenerItem(MonedaId : int):
    try:
        jsonData = Moneda.ObtenerItem(MonedaId)
        return jsonable_encoder(ResponseAPI.Response(jsonData))
    except Exception as e:
        print(e)
        return jsonable_encoder(ResponseAPIError.Error())

@GeneralRouter.get(f"/api/{ApiName}/PorcentajeImpuestoObtenerItems", tags=[ApiName])
def PorcentajeImpuestoObtenerItems():
    try:
        jsonData = PorcentajeImpuesto.ObtenerItems()
        return jsonable_encoder(ResponseAPI.Response(jsonData))
    except Exception as e:
        print(e)
        return jsonable_encoder(ResponseAPIError.Error())

@GeneralRouter.get(f"/api/{ApiName}/PorcentajeImpuestoObtenerItem/{{PorcentajeImpuestoId}}", tags=[ApiName])
def PorcentajeImpuestoObtenerItem(MonedaId : int):
    try:
        jsonData = PorcentajeImpuesto.ObtenerItem(MonedaId)
        return jsonable_encoder(ResponseAPI.Response(jsonData))
    except Exception as e:
        print(e)
        return jsonable_encoder(ResponseAPIError.Error())