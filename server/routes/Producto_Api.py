from fastapi import APIRouter
from EntityLayer.Catalogo.ProductoEntity  import *
from BusinessLayer.Producto_Business import *

Producto = APIRouter()



@Producto.post("/api/Producto/Producto_Insert", tags=["Producto"])
def Producto_Insert(Ent: ProductoSaveEntity):
    try:
        Ent.FechaRegistro = datetime.now()
        Ent.Estado = True
        Ent.ProductoId = Producto_Business.SaveProducto(Ent)
        return Ent

    except Exception as e:
        print(e)

@Producto.get("/api/Producto/Get_ProductoMainItems/", tags=["Producto"])
def Get_ProductoItems():
    try:
        jsonData = Producto_Business.Get_ProductoMainItems()
        return jsonData
    except:
        print("An exception occurred")

@Producto.get("/api/Producto/Get_ProductoMainItem/{ProductoId}", tags=["Producto"])
def Get_ProductoMainItem(ProductoId : int):
    try:
        jsonData = Producto_Business.Get_ProductoMainItem(ProductoId)
        return jsonData
    except:
        print("An exception occurred")  