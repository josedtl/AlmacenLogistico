from EntityLayer.Producto.ProductoMainModel import *
from EntityLayer.Producto.ProductoItemMainEntity import *
from .configMysql import get_connection
from EntityLayer.Catalogo.ProductoEntity import *
from EntityLayer.Producto.ProductoEntity import *
import pymysql


class Producto_Data:
    def Get_ProductoItems():
        try:
            conn = get_connection()
            with conn.cursor() as cursor:
                cursor = conn.cursor(pymysql.cursors.DictCursor)
                cursor.callproc("sp_ProductosAll")
                resulset = cursor.fetchall()
            conn.close()

            list = []

            for row in resulset:
                Data_ent = ProductoEntity.Cargar(row)
                list.append(Data_ent)
            return list
        except Exception as e:
            print(e)

    def SaveProducto(Ent: ProductoSaveEntity):
        try:
            conn = get_connection()
            Store: str
            if Ent.Action == 1:
                Store = "sp_ProductoInsert"
            else:
                Store = "sp_ProductoUpdate"

            with conn.cursor() as cursor:
                cursor = conn.cursor(pymysql.cursors.DictCursor)
                args = (
                    Ent.ProductoId,
                    Ent.Codigo,
                    Ent.CodigoInterno,
                    Ent.TipoProductoId,
                    Ent.MarcaId,
                    Ent.ModeloId,
                    Ent.Descripcion,
                    Ent.UnidadMedidaId,
                    Ent.PrecioVenta,
                    Ent.PrecioCompra,
                    Ent.MonedaId,
                    Ent.FechaRegistro,
                    Ent.CodUsuario,
                    Ent.Estado,
                )

                result_args = cursor.callproc(Store, args)
                print(result_args[0])
                for result in cursor.fetchall():
                    Ent.ProductoId = result["v_ProductoId"]
            print(Ent.ProductoId)
            conn.commit()
            print(result_args[0])
            return Ent.ProductoId
        except Exception as e:
            print(e)
        finally:
            cursor.close()
            conn.close()

    def Get_ProductoMainItems():
        try:
            conn = get_connection()
            with conn.cursor() as cursor:
                cursor = conn.cursor(pymysql.cursors.DictCursor)

                cursor.callproc("sp_ProductosMainAll")
                resulset = cursor.fetchall()
            conn.close()

            list = []

            for row in resulset:
                Data_ent = ProductoMainModel.Cargar(row)
                list.append(Data_ent)
            return list
        except Exception as e:
            print(e)

    def Get_ProductoMainItem(ProductoId: int):
        try:
            conn = get_connection()
            with conn.cursor() as cursor:
                cursor = conn.cursor(pymysql.cursors.DictCursor)
                args = (ProductoId,)
                cursor.callproc("sp_ProductosItemMain", args)
                resulset = cursor.fetchall()
            conn.close()

            list = []
            for row in resulset:
                Data_ent = ProductoItemMainEntity.Cargar(row)
                list.append(Data_ent)
            return list
        except Exception as e:
            print(e)
    
    def Get_ProductoConcatenadoItemsLike( v_Nombre:str):
        try:
            conn = get_connection()
            with conn.cursor() as cursor:
                cursor = conn.cursor(pymysql.cursors.DictCursor)
                args = (  v_Nombre,)
                cursor.callproc("sp_ProductoConcatenadoItemsLike",args)
                resulset = cursor.fetchall()
            conn.close()
           
            list = []

            for row in resulset:
                Data_ent = ProductoLikeModel.CargarLike(row)
                list.append(Data_ent)
            return list
        except Exception as e:
            print(e)