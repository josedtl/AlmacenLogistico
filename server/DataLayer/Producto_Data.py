from .configMysql import get_connection
from EntityLayer.Catalogo.ProductoEntity import *
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
            with conn.cursor() as cursor:
                cursor = conn.cursor(pymysql.cursors.DictCursor)
                args = (
                    Ent.ProductoId,
                    Ent.TipoProductoId,
                    Ent.MarcaId,
                    Ent.ModeloId,
                    Ent.NombreProducto,
                    Ent.UnidadMedidaId,
                    Ent.PrecioVenta,
                    Ent.PrecioCompra,
                    Ent.FechaRegistro,
                    Ent.CodUsuario,
                    Ent.Estado,
                )

                result_args = cursor.callproc("sp_ProductoInsert", args)
                for result in cursor.fetchall():
                    Ent.ProductoId = result["v_ProductoId"]

            conn.commit()
            print(result_args[0])
            return Ent.ProductoId
        except Exception as e:
            print(e)
        finally:
            cursor.close()
            conn.close()
