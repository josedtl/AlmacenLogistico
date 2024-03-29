from Utilidades.Entidades.ResponseAPI import ResponseAPIError
from Utilidades.Entidades.ResponseAPI import ResponseAPI
from Utilidades.Arreglos.ListError import error_entities
from .configMysql import get_connection
from EntityLayer.ProductoEntity import *
import pymysql


class ProductoDB:
    def GetItems():
        try:
            conn = get_connection()
            with conn.cursor() as cursor:
                cursor = conn.cursor(pymysql.cursors.DictCursor)
                cursor.callproc("sp_ProductoAllItems")
                resulset = cursor.fetchall()
            conn.close()
            list = []

            for row in resulset:
                Data_ent = ProductoItemModel.Cargar(row)
                list.append(Data_ent)
            return list
        except Exception as e:
            print(e)

    def GetItem(Id: int):
        try:
            conn = get_connection()
            with conn.cursor() as cursor:
                cursor = conn.cursor(pymysql.cursors.DictCursor)
                args = (Id,)
                cursor.callproc("sp_ProductoAllItem", args)
                resulset = cursor.fetchall()
            conn.close()
            list = []

            for row in resulset:
                Data_ent = ProductoItemModel.Cargar(row)
                list.append(Data_ent)
            return list
        except Exception as e:
            print(e)

    def Save(Ent: ProductoSaveModel):
        try:
            Store: str
            Store = "sp_Producto_Save"
            if Ent.Action == ProcessActionEnum.Update:
                Store = "sp_Producto_Update"
            conn = get_connection()
            with conn.cursor() as cursor:
                cursor = conn.cursor(pymysql.cursors.DictCursor)
                args = []
                args.append(Ent.ProductoId)
                args.append(Ent.Codigo)
                args.append(Ent.CategoriaId)
                args.append(Ent.TipoProductoId)
                args.append(Ent.MarcaId)
                args.append(Ent.ModeloId)
                args.append(Ent.Nombre)
                args.append(Ent.Descripcion)
                args.append(Ent.UnidadMedidaId)
                args.append(Ent.Reserva)
                args.append(Ent.Stock)
                args.append(Ent.FechaRegistro)
                args.append(Ent.CodUsuario)
                args.append(Ent.EstadoRegistro)
                cursor.callproc(Store, args)
                Ent.ProductoId = int(cursor.fetchone()["v_ProductoId"])

            conn.commit()
            return Ent
        except Exception as e:
            print(e)
            conn.rollback()
        finally:
            cursor.close()
            conn.close()

    def Delete(Id: int):
        try:
            conn = get_connection()
            with conn.cursor() as cursor:
                cursor = conn.cursor(pymysql.cursors.DictCursor)
                args = (Id,)
                cursor.callproc("sp_Producto_Delete", args)
                conn.commit()
            return ResponseAPI.Response(True)
        except Exception as e:
            error_code = e.args[0]
            error_entity = next(
                (entity for entity in error_entities if entity["code"] == error_code),
                None,
            )

            if error_entity:
                print(error_entity["message"])
                return ResponseAPIError.ErrorMensaje(error_entity["messageuser"])
            else:
                error_message = "Ocurrio un error al eliminar el Registro"
                print(e)
                return ResponseAPIError.ErrorMensaje(error_message)
        finally:
            cursor.close()
            conn.close()

    def GetItemLike(Nombre: str):
        try:
            conn = get_connection()
            with conn.cursor() as cursor:
                cursor = conn.cursor(pymysql.cursors.DictCursor)
                args = (Nombre,)
                cursor.callproc("sp_Producto_SelectLike", args)
                resulset = cursor.fetchall()
            conn.close()
            list = []

            for row in resulset:
                Data_ent = ProductoItemModel.CargarLike(row)
                list.append(Data_ent)
            return list
        except Exception as e:
            print(e)

    def GetItemLikeOP(Nombre: str, CategoriaId: int):
        try:
            conn = get_connection()
            with conn.cursor() as cursor:
                cursor = conn.cursor(pymysql.cursors.DictCursor)
                args = (Nombre,CategoriaId)
                cursor.callproc("sp_Producto_OP_Like", args)
                resulset = cursor.fetchall()
            conn.close()
            list = []

            for row in resulset:
                Data_ent = ProductoItemModel.CargarOPLike(row)
                list.append(Data_ent)
            return list
        except Exception as e:
            print(e)


    def GetProductoItemOP(Id: int):
        try:
            conn = get_connection()
            with conn.cursor() as cursor:
                cursor = conn.cursor(pymysql.cursors.DictCursor)
                args = (Id,)
                cursor.callproc("sp_Producto_OP_Item", args)
                resulset = cursor.fetchall()
            conn.close()
            list = []

            for row in resulset:
                Data_ent = ProductoItemModel.CargarOPLike(row)
                list.append(Data_ent)
            print(resulset)
            return list
        except Exception as e:
            print(e)