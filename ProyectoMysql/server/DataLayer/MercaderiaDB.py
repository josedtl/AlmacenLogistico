from EntityLayer.MercaderiaEntity import MercaderiaItemCategoriaModel, MercaderiaItemModel, MercaderiaItemOPModel, MercaderiaMainModel, MercaderiaSaveModel
from EntityLayer.ProductoEntity import ProductoSaveModel
from Utilidades.Entidades.ResponseAPI import ResponseAPI
from Utilidades.Conexion.ErrorData import ErrorData
from Utilidades.Conexion.configMysql import DBProcedure, Restore
from EntityLayer.PersonaNaturalEntity import *


class MercaderiaDB:

            
    def GetMainItems():
        try:
            resulset = DBProcedure().DBProcedureConsult("sp_Mercaderia_Main", [])
            list = [MercaderiaMainModel.Cargar(row) for row in resulset]
            return list
        except Exception as e:
            print(e)

    def Save(Ent: MercaderiaSaveModel):
        try:
            store_mapping = {
                ProcessActionEnum.Update: "sp_Mercaderia_Update",
                ProcessActionEnum.Add: "sp_Mercaderia_Insert",
            }
            Store = store_mapping.get(Ent.Action, "sp_Mercaderia_Insert")
            args = []
            args.append(Ent.MercaderiaId)
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
            Ent.MercaderiaId = DBProcedure().DBProcedureInsertUpdate(
                Store, args, "v_MercaderiaId"
            )
            return Ent
        except Exception as e:
            print(e)
            Restore()

    def GetCabeceraItem(Id : int):
        try:
            args = (Id,)
            resulset = DBProcedure().DBProcedureConsult("sp_Mercaderia_Item",args)
            list = [MercaderiaItemModel.Cargar(row) for row in resulset]
            return list
        except Exception as e:
            print(e)

    def GetMercaderiaLikeCategoria(Nombre : str, CategoriaId :int):
        try:
            args = (Nombre, CategoriaId)
            resulset = DBProcedure().DBProcedureConsult("sp_Mercaderia_LikeCategoriaItem",args)
            list = [MercaderiaItemCategoriaModel.Cargar(row) for row in resulset]
            return list
        except Exception as e:
            print(e)

    def GetMercaderia_ItemOP(Id : int):
        try:
            args = (Id,)
            resulset = DBProcedure().DBProcedureConsult("sp_Mercaderia_ItemOP",args)
            list = [MercaderiaItemOPModel.Cargar(row) for row in resulset]
            return list
        except Exception as e:
            print(e)