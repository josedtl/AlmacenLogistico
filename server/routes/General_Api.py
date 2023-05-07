from fastapi import APIRouter
from BusinessLayer.Producto_Business import *
from BusinessLayer.Marca_Business import *
from EntityLayer.Catalogo.MarcaSaveEntity import *
from BusinessLayer.Modelo_Business import *
from EntityLayer.Catalogo.ModeloSaveEntity import *
from BusinessLayer.TipoProducto_Business import *
from EntityLayer.Catalogo.TipoProductoSaveEntity import *
from EntityLayer.Catalogo.ParametrolikeModel import *

General = APIRouter()


@General.get("/api/General/Get_ProductoItems/", tags=["General"])
def Get_ProductoItems():
    try:
        jsonData = Producto_Business.Get_ProductoItems()
        return jsonData
    except:
        print("An exception occurred")


@General.get("/api/General/Get_MarcaItems/", tags=["General"])
def Get_MarcaItems():
    try:
        jsonData = Marca_Business.Get_MarcaItems()
        return jsonData
    except:
        print("An exception occurred")


@General.post("/api/General/Marca_Insert", tags=["General"])
def Horario_Insert(Ent: MarcaSaveEntity):
    try:
        Ent.FechaRegistro = datetime.now()
        Ent.Estado = True
        Ent.MarcaId = Marca_Business.SaveMarca(Ent)
        return Ent

    except Exception as e:
        print(e)


@General.delete("/api/General/Marca_Delete/{id}", tags=["General"])
def Marca_Delete(id):
    try:
        jsonData = Marca_Business.DeleteMarca(id)
        return True
    except Exception as e:
        print(e)


@General.get("/api/General/Get_ModeloItems/", tags=["General"])
def Get_ModeloItems():
    try:
        jsonData = Modelo_Business.Get_ModeloItems()
        return jsonData
    except:
        print("An exception occurred")


@General.post("/api/General/Modelo_Insert", tags=["General"])
def Horario_Insert(Ent: ModeloSaveEntity):
    try:
        Ent.FechaRegistro = datetime.now()
        Ent.Estado = True
        Ent.ModeloId = Modelo_Business.SaveModelo(Ent)
        return Ent

    except Exception as e:
        print(e)


@General.delete("/api/General/Modelo_Delete/{id}", tags=["General"])
def Modelo_Delete(id):
    try:
        jsonData = Modelo_Business.DeleteModelo(id)
        return True
    except Exception as e:
        print(e)


@General.get("/api/General/Get_TipoProductoItems/", tags=["General"])
def Get_TipoProductoItems():
    try:
        jsonData = TipoProducto_Business.Get_TipoProductoItems()
        return jsonData
    except:
        print("An exception occurred")


@General.get("/api/General/Get_TipoProductoItemsLike/{v_Nombre}", tags=["General"])
def Get_TipoProductoItemsLike(v_Nombre: str):
    try:
        jsonData = TipoProducto_Business.Get_TipoProductoItemsLike(v_Nombre)
        return jsonData
    except:
        print("An exception occurred")



@General.post("/api/General/TipoProducto_Insert", tags=["General"])
def Horario_Insert(Ent: TipoProductoSaveEntity):
    try:
        Ent.FechaRegistro = datetime.now()
        Ent.Estado = True
        Ent.TipoProductoId = TipoProducto_Business.SaveTipoProducto(Ent)
        return Ent

    except Exception as e:
        print(e)


@General.delete("/api/General/TipoProducto_Delete/{id}", tags=["General"])
def TipoProducto_Delete(id):
    try:
        jsonData = TipoProducto_Business.DeleteTipoProducto(id)
        return True
    except Exception as e:
        print(e)

@General.post("/api/General/Get_MarcaItemsLike", tags=["General"])
def Get_MarcaItemsLike(Ent: ParametrolikeModel):
    try:
        jsonData = Marca_Business.Get_MarcaItemsLike(Ent.Nombre)
        return jsonData
    except:
        print("An exception occurred")

@General.post("/api/General/Get_ModeloItemsLike", tags=["General"])
def Get_ModeloItemsLike(Ent: ParametrolikeModel):
    try:
        jsonData = Modelo_Business.Get_ModeloItemsLike(Ent.Nombre)
        return jsonData
    except:
        print("An exception occurred")

@General.post("/api/General/Post_TipoProductoItemsLikePost", tags=["General"])
def Post_TipoProductoItemsLikePost(Ent: ParametrolikeModel):
    try:
        jsonData = TipoProducto_Business.Get_TipoProductoItemsLike(Ent.Nombre)
        return jsonData
    except:
        print("An exception occurred")
