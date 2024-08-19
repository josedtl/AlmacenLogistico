from EntityLayer.MercaderiaEntity import MercaderiaItemCategoriaModel, MercaderiaItemOPModel, MercaderiaMainModel, MercaderiaSaveModel
from Utilidades.Entidades.ResponseAPI import ResponseAPI
from Utilidades.Conexion.ErrorData import ErrorData
from Utilidades.Conexion.configMysql import DBProcedure, Restore
from EntityLayer.PersonaNaturalEntity import *


class MercaderiaDB:

            
    def ObtenerMain():
        try:
            resulset = DBProcedure().DBProcedureConsult("sp_MercaderiaObtenerMain", [])
            list = [MercaderiaMainModel.Cargar(row) for row in resulset]
            return list
        except Exception as e:
            print(e)

    def RegistrarDB(Ent: MercaderiaSaveModel):
        try:
            store_mapping = {
                ProcessActionEnum.Update: "sp_Mercaderia_Actualizar",
                ProcessActionEnum.Add: "sp_Mercaderia_Registrar",
            }
            Store = store_mapping.get(Ent.Action, "sp_Mercaderia_Registrar")
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
            args.append(Ent.CodUsuario)
            args.append(Ent.FechaRegistro)
            args.append(Ent.EstadoRegistro)
            Ent.MercaderiaId = DBProcedure().DBProcedureInsertUpdate(
                Store, args, "v_MercaderiaId"
            )
            return Ent
        except Exception as e:
            print(e)
            Restore()

    def ObtenerItem(MercaderiaId : int):
        try:
            args = (MercaderiaId,)
            resulset = DBProcedure().DBProcedureConsult("sp_MercaderiaObtenerItem",args)
            list = [MercaderiaSaveModel.Cargar(row) for row in resulset]
            return list
        except Exception as e:
            print(e)



    def ObtenerItemOP(MercaderiaId :int):
        try:
            args = ( MercaderiaId)
            resulset = DBProcedure().DBProcedureConsult("sp_MercaderiaObtenerItemOP",args)
            list = [MercaderiaItemOPModel.Cargar(row) for row in resulset]
            return list
        except Exception as e:
            print(e)

    def GetMercaderia_ItemOP(Id : int):
        try:
            args = (Id,)
            resulset = DBProcedure().DBProcedureConsult("sp_MercaderiaObtenerItemOP",args)
            list = [MercaderiaItemOPModel.Cargar(row) for row in resulset]
            return list
        except Exception as e:
            print(e)
    
    def BuscarCategoriaItem(Nombre : str, CategoriaId :int):
        try:
            args = (Nombre, CategoriaId)
            resulset = DBProcedure().DBProcedureConsult("sp_MercaderiaBuscarCategoriaItem",args)
            list = [MercaderiaItemCategoriaModel.Cargar(row) for row in resulset]
            return list
        except Exception as e:
            print(e)