package DataLayer;

import EntityLayer.PersonaNaturalEntity;
import Enumerados.ProcessActionEnum;
import Framework.BaseDB;
import Framework.Inj;
import Framework.Utilidades;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

public class PersonaNaturalDB extends BaseDB{

    public ArrayList<PersonaNaturalEntity> GetAllItems() {

        ArrayList<PersonaNaturalEntity> DatoMemoria = new ArrayList<>();
        PersonaNaturalEntity en;
        try {
            Inj.Sp("sp_PersonaNaturalAllItems");
            ResultSet rs = Inj.RunSelect();
            fillSchemeTable(rs);
            while (rs.next()) {
                en = new PersonaNaturalEntity();
                if (fillFrom(rs, en)) { 
                    DatoMemoria.add(en);
                }
            }

        } catch (SQLException e) {
            System.out.println("ERROR " + e);
            throw new UnsupportedOperationException("Datalater :" + e);
        }
        return DatoMemoria;
    }

    public ArrayList<PersonaNaturalEntity> GetAllItem(int PersonaNaturalId) {

        ArrayList<PersonaNaturalEntity> DatoMemoria = new ArrayList<>();
        PersonaNaturalEntity en;
        try {
            Inj.Sp("sp_PersonaNaturalAllItem");
            Inj.Pmt_Integer("v_PersonaNaturalId", PersonaNaturalId, false);
            ResultSet rs = Inj.RunSelect();
            fillSchemeTable(rs);
            while (rs.next()) {
                en = new PersonaNaturalEntity();
                if (fillFrom(rs, en)) { 
                    DatoMemoria.add(en);
                }
            }


        } catch (SQLException e) {
            System.out.println("ERROR " + e);
            throw new UnsupportedOperationException("Datalater :" + e);
        }
        return DatoMemoria;
    }

    public PersonaNaturalEntity Save(PersonaNaturalEntity entity) {
        Boolean State = null;
        try {
            Inj.IniciarTranssaccion(false);
            String Store = "sp_PersonaNatural_Save";
            if (entity.getAction() == ProcessActionEnum.Update.getValor()) {
                Store = "sp_PersonaNatural_Update";
            }
            Inj.Sp(Store);
            Inj.Pmt_Integer("v_PersonaNaturalId", entity.getPersonaNaturalId(), true);
            Inj.Pmt_Integer("v_TipoDocumentoIdentidadId", entity.getTipoDocumentoIdentidadId(), false);
            Inj.Pmt_String("v_NumDocumento", entity.getNumDocumento(), false);
            Inj.Pmt_String("v_Nombres", entity.getNombres(), false);
            Inj.Pmt_String("v_ApellidoPaterno", entity.getApellidoPaterno(), false);
            Inj.Pmt_String("v_ApellidoMaterno", entity.getApellidoMaterno(), false);
            Inj.Pmt_String("v_FechaNacimiento", entity.getFechaNacimiento().toString(), false);
            Inj.Pmt_Integer("v_UbigeoId", entity.getUbigeoId(), false);
            Inj.Pmt_String("v_Direccion", entity.getDireccion(), false);
            Inj.Pmt_String("v_Telefono", entity.getTelefono(), false);
            Inj.Pmt_String("v_Correo", entity.getCorreo(), false);
            Inj.Pmt_Integer("v_GeneroId", entity.getSexoId(), false);
            Inj.Pmt_Integer("v_EstadoCivilId", entity.getEstadoCivilId(), false);
            Inj.Pmt_String("v_FechaRegistro", Utilidades.getFechaRegistro(), false);
            Inj.Pmt_String("v_CodUsuario", entity.getCodUsuario(), false);
            if (entity.getAction() == ProcessActionEnum.Add.getValor()) {
                int Id = Inj.RunInsert();
                State = Id > 0;
                if (State) {
                    entity.setPersonaNaturalId(Id);
                }
            }
            if (entity.getAction() == ProcessActionEnum.Update.getValor()) {
                Inj.RunUpdate();
            }

           
        } catch (Exception ex) {
            throw new UnsupportedOperationException("Datalater : " + ex);
        }
        return entity;
    }

    public Boolean Delete(Integer Id) {

        Boolean State = false;
        try {
            Inj.Sp("sp_PersonaNaturalDelete");
            Inj.Pmt_Integer("v_PersonaNaturalId", Id, false);
            State = Inj.RunDelete() > 0;
        } catch (Exception ex) {
            throw new UnsupportedOperationException("Datalater : " + ex);
        }
        return State;
    }

    public PersonaNaturalEntity SaveAlter(PersonaNaturalEntity entity) {
        Boolean State = null;
        try {
            Inj.IniciarTranssaccion(false);

//            String procedimientoCabecera = "{CALL sp_PersonaNatural_Save(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)}";
            String Store = "sp_PersonaNatural_Save";
            if (entity.getAction() == ProcessActionEnum.Update.getValor()) {
                Store = "sp_PersonaNatural_Update";
            }
            Inj.Sp(Store);

            Inj.Pmt_Integer("v_PersonaNaturalId", entity.getPersonaNaturalId(), true);
            Inj.Pmt_Integer("v_TipoDocumentoIdentidadId", entity.getTipoDocumentoIdentidadId(), false);
            Inj.Pmt_String("v_NumDocumento", entity.getNumDocumento(), false);
            Inj.Pmt_String("v_Nombres", entity.getNombres(), false);
            Inj.Pmt_String("v_ApellidoPaterno", entity.getApellidoPaterno(), false);
            Inj.Pmt_String("v_ApellidoMaterno", entity.getApellidoMaterno(), false);
            Inj.Pmt_String("v_FechaNacimiento", entity.getFechaNacimiento().toString(), false);
            Inj.Pmt_Integer("v_UbigeoId", entity.getUbigeoId(), false);
            Inj.Pmt_String("v_Direccion", entity.getDireccion(), false);
            Inj.Pmt_String("v_Telefono", entity.getTelefono(), false);
            Inj.Pmt_String("v_Correo", entity.getCorreo(), false);
            Inj.Pmt_Integer("v_GeneroId", entity.getSexoId(), false);
            Inj.Pmt_Integer("v_EstadoCivilId", entity.getEstadoCivilId(), false);
            Inj.Pmt_String("v_FechaRegistro", Utilidades.getFechaRegistro(), false);
            Inj.Pmt_String("v_CodUsuario", entity.getCodUsuario(), false);

            if (entity.getAction() == ProcessActionEnum.Add.getValor()) {
                int Id = Inj.RunInsert();
                State = Id > 0;
                if (State) {
                    entity.setPersonaNaturalId(Id);
                }
            }
            if (entity.getAction() == ProcessActionEnum.Update.getValor()) {
                Inj.RunUpdate();
            }

          

            System.out.println("Venta y detalle guardados correctamente.");
        } catch (SQLException e) {
//            conn.rollback();
//            if (conn != null) {
//                conn.rollback(); // Revierte la transacción en caso de error
//            } 
            e.printStackTrace();
        } finally {
//            if (conn != null) {
//                conn.setAutoCommit(true); // Restaura el modo de autocommit
//                conn.close();
//            }
        }
        return entity;
    }
}
