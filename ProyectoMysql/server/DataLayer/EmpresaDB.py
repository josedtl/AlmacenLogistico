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
            resulset = DBProcedure().DBProcedureConsult("sp_EmpresaAllItem", args)
            list = [EmpresaItemModel.Cargar(row) for row in resulset]
            return list
        except Exception as e:
            print(e)

    def Save(Ent: EmpresaSaveModel):
        try:
            store_mapping = {
                ProcessActionEnum.Update: "sp_Empresa_Update",
                ProcessActionEnum.Add: "sp_Empresa_Save",
            }
            Store = store_mapping.get(Ent.Action, "sp_Empresa_Save")
            args = []
            args.append(Ent.EmpresaId)
            args.append(Ent.TipoDocumentoIdentidadId)
            args.append(Ent.NumeroDocumento)
            args.append(Ent.RazonSocial)
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

    def Delete(Id: int):
        try:
            args = (Id,)
            Val = DBProcedure().DBProcedureDalete("sp_Empresa_Delete", args)
            return ResponseAPI.Response(Val)
        except Exception as e:
            ErrorData(e)

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

