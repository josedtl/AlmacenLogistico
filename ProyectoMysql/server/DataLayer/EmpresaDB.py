from Utilidades.Entidades.ResponseAPI import ResponseAPI
from Utilidades.Conexion.ErrorData import ErrorData
from Utilidades.Conexion.configMysql import DBProcedure, Restore
from EntityLayer.EmpresaEntity import *


class EmpresaDB:
    def GetItems():
        try:
            resulset = DBProcedure().DBProcedureConsult("sp_EmpresaAllItems", [])
            list = [EmpresaItemModel.Cargar(row) for row in resulset]
            return list
        except Exception as e:
            print(e)

    def GetItem(Id: int):
        try:
            args = (Id,)
            resulset = DBProcedure().DBProcedureConsult("sp_EmpresaCabeceraItem", args)
            list = [EmpresaItemModel.Cargar(row) for row in resulset]
            return list
        except Exception as e:
            print(e)

    def Save(Ent: EmpresaSaveModel):
        try:
            store_mapping = {
                ProcessActionEnum.Update: "sp_Empresa_Actualizar",
                ProcessActionEnum.Add: "sp_Empresa_Registrar",
            }
            Store = store_mapping.get(Ent.Action, "sp_Empresa_Registrar")
            args = []
            args.append(Ent.EmpresaId)
            args.append(Ent.TipoDocumentoIdentidadId)
            args.append(Ent.NumDocumento)
            args.append(Ent.Nombres)
            args.append(Ent.NombreComercial)
            args.append(Ent.UbigeoId)
            args.append(Ent.Direccion)
            args.append(Ent.Telefono)
            args.append(Ent.Correo)
            args.append(Ent.FechaRegistro)
            args.append(Ent.CodUsuario)
            args.append(Ent.EstadoRegistro)
            Ent.EmpresaId = DBProcedure().DBProcedureInsertUpdate(
                Store, args, "v_EmpresaId"
            )

            return Ent
        except Exception as e:
            print(e)
            Restore()


    def GetItemLike(Nombre: str):
        try:
            args = (Nombre,)
            resulset = DBProcedure().DBProcedureConsult("sp_EmpresaItemLike", args)
            list = [EmpresaItemModel.Cargar(row) for row in resulset]
            return list
        except Exception as e:
            print(e)

    def GetMainItems():
        try:
            resulset = DBProcedure().DBProcedureConsult("sp_EmpresaMainItems", [])
            list = [EmpresaItemModel.MainCargar(row) for row in resulset] 
            return list
        except Exception as e:
            print(e)

    def GetEmpresaBuscaDocumento(Nombre: str):
        try:
            args = (Nombre,)
            resulset = DBProcedure().DBProcedureConsult("sp_EmpresaBuscarDocumento", args)
            list = [EmpresaItemModel.Cargar(row) for row in resulset]
            return list
        except Exception as e:
            print(e)

