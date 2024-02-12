from Utilidades.Entidades.ResponseAPI import ResponseAPIError
from Utilidades.Entidades.ResponseAPI import ResponseAPI
from Utilidades.Arreglos.ListError import error_entities
from .configMysql import get_connection
from EntityLayer.ProductoEntity import *
import pymysql


class MercaderiaDB:
    def GetMainItems():
        try:
            conn = get_connection()
            with conn.cursor() as cursor:
                cursor = conn.cursor(pymysql.cursors.DictCursor)
                cursor.callproc("sp_Mercaderia_Main")
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
            Store = "sp_Mercaderia_Main"
            if Ent.Action == ProcessActionEnum.Update:
                Store = "sp_Mercaderia_Update"
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
