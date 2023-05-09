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
