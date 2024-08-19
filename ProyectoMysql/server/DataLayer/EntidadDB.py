from EntityLayer.EmpresaEntity import EmpresaMainModel, EmpresaSaveModel
from EntityLayer.GeneralEntity import DatosClienteItemModel, EntidadNombreCompletoModel
from EntityLayer.PersonaNaturalEntity import PersonaNaturalMainModel, PersonaNaturalSaveModel
from Utilidades.Entidades.ResponseAPI import ResponseAPIError
from Utilidades.Entidades.ResponseAPI import ResponseAPI
from Utilidades.Arreglos.ListError import error_entities
from .configMysql import get_connection
from Utilidades.Conexion.configMysql import DBProcedure, Restore
from EntityLayer.OrdenPedidoEntity import *
from DataLayer.OrdenPedidoDetalleDB import OrdenPedidoDetalleDB
from Utilidades.Conexion.ErrorData import ErrorData


class EntidadDB:

    def PersonaNaturalObtenerItem(PersonaNaturaId: int):
        try:
            args = (PersonaNaturaId,)
            resulset = DBProcedure().DBProcedureConsult("sp_PersonaNaturalCabeceraItem", args)
            list = [OrdenPedidoSaveModel.Cargar(row) for row in resulset]
            return list
        except Exception as e:
            print(e)
    def PersonaNaturalRegistrarDB(Ent: PersonaNaturalSaveModel):
        try:
            store_mapping = {
                ProcessActionEnum.Update: "sp_PersonaNatural_Actualizar",
                ProcessActionEnum.Add: "sp_PersonaNatural_Registrar",
            }
            Store = store_mapping.get(Ent.Action, "sp_PersonaNatural_Registrar")
            args = []
            args.append(Ent.PersonaNaturalId)
            args.append(Ent.TipoDocumentoIdentidadId)
            args.append(Ent.NumDocumento)
            args.append(Ent.Nombres)
            args.append(Ent.ApellidoPaterno)
            args.append(Ent.ApellidoMaterno)
            args.append(Ent.FechaNacimiento)
            args.append(Ent.UbigeoId)
            args.append(Ent.Direccion)
            args.append(Ent.Telefono)
            args.append(Ent.Correo)
            args.append(Ent.SexoId)
            args.append(Ent.EstadoCivilId)
            args.append(Ent.FechaRegistro)
            args.append(Ent.CodUsuario)
            args.append(Ent.EstadoRegistro)
            Ent.PersonaNaturalId = DBProcedure().DBProcedureInsertUpdate(Store, args, "v_EntidadId")
            return Ent
        except Exception as e:
            print(e)
            Restore()



    def PersonaNaturalObtenerMain():
        try:
            resulset = DBProcedure().DBProcedureConsult("sp_Persona_Main", [])
            list = [PersonaNaturalMainModel.Cargar(row) for row in resulset]
            return list
        except Exception as e:
            print(e)

    def EmpresaObtenerMain():
        try:
            resulset = DBProcedure().DBProcedureConsult("sp_EmpresaMainItems", [])
            list = [EmpresaMainModel.Cargar(row) for row in resulset]
            return list
        except Exception as e:
            print(e)

    def EmpresaObtenerItem(EmpresaId: int):
        try:
            args = (EmpresaId,)
            resulset = DBProcedure().DBProcedureConsult("sp_EmpresaCabeceraItem", args)
            list = [OrdenPedidoSaveModel.Cargar(row) for row in resulset]
            return list
        except Exception as e:
            print(e)

    def EmpresaRegistrar(Ent: EmpresaSaveModel):
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
                Store, args, "v_EntidadId"
            )

            return Ent
        except Exception as e:
            print(e)
            Restore()

    def EntidadBuscarNombreCompletoItem(Nombre: str):
        try:
            args = (Nombre,)
            resulset = DBProcedure().DBProcedureConsult("sp_EntidadBuscarNomCompletoItem", args)
            list = [EntidadNombreCompletoModel.Cargar(row) for row in resulset]
            return list
        except Exception as e:
            print(e)

    def EntidadObtenerNombreCompletoItem(Id: int):
        try:
            args = (Id,)
            resulset = DBProcedure().DBProcedureConsult("sp_EntidadObtenerNomCompletoItem", args)
            list = [EntidadNombreCompletoModel.Cargar(row) for row in resulset]
            return list
        except Exception as e:
            print(e)
            

    def PersonaNaturalRegistrarEnlaceDB(Ent: DatosClienteItemModel):
        try:
        
            Store = "sp_PersonaRegistarEnlace"
            args = []
            args.append(Ent.EntidadId)
            args.append(Ent.TipoDocumentoIdentidadId)
            args.append(Ent.NumDocumento)
            args.append(Ent.Nombres)
            args.append(Ent.ApellidoPaterno)
            args.append(Ent.ApellidoMaterno)
            args.append(Ent.CodUsuario)
            Ent.EntidadId = DBProcedure().DBProcedureInsertUpdate(Store, args, "v_EntidadId")
            return Ent
        except Exception as e:
            print(e)
            Restore()


    def EmpresaRegistrar(Ent: DatosClienteItemModel):
        try:
   
            Store = "sp_Empresa_RegistrarEnlace"
            args = []
            args.append(Ent.EntidadId)
            args.append(Ent.TipoDocumentoIdentidadId)
            args.append(Ent.NumDocumento)
            args.append(Ent.NombreComercial)
            args.append(Ent.CodUsuario)
            Ent.EntidadId = DBProcedure().DBProcedureInsertUpdate(
                Store, args, "v_EntidadId"
            )

            return Ent
        except Exception as e:
            print(e)
            Restore()