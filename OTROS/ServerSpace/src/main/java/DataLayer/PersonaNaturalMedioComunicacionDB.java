package DataLayer;

import EntityLayer.PersonaNaturalMedioComunicacionEntity;
import Enumerados.ProcessActionEnum;
import Framework.Utilidades;
import Framework.Inj;
import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

public class PersonaNaturalMedioComunicacionDB extends DataLayer.MyCode.PersonaNaturalMedioComunicacionDB {

//    injector Inj = new injector();
    public ArrayList<PersonaNaturalMedioComunicacionEntity> GetAllItems() {

        ArrayList<PersonaNaturalMedioComunicacionEntity> DatoMemoria = new ArrayList<>();
        PersonaNaturalMedioComunicacionEntity en;
        try {
            Inj.Sp("sp_PersonaNaturalMedioComunicacionAllItems");
            ResultSet rs = Inj.RunSelect();
            while (rs.next()) {

                en = new PersonaNaturalMedioComunicacionEntity();
                en.setPersonaNaturalMedioComunicacionId(rs.getInt("PersonaNaturalMedioComunicacionId"));
                en.setPersonaNaturalId(rs.getInt("PersonaNaturalId"));
                en.setMedioComunicacionId(rs.getInt("MedioComunicacionId"));
                en.setDato(rs.getString("Dato"));
                en.setFechaRegistro(rs.getTimestamp("FechaRegistro"));
                en.setCodUsuario(rs.getString("CodUsuario"));
                en.setEstadoRegistro(rs.getBoolean("EstadoRegistro"));
                DatoMemoria.add(en);

            }

        } catch (SQLException e) {
            System.out.println("ERROR " + e);
            throw new UnsupportedOperationException("Datalater :" + e);
        }
        return DatoMemoria;
    }

    public ArrayList<PersonaNaturalMedioComunicacionEntity> GetAllItem(int PersonaNaturalMedioComunicacionId) {

        ArrayList<PersonaNaturalMedioComunicacionEntity> DatoMemoria = new ArrayList<>();
        PersonaNaturalMedioComunicacionEntity en;
        try {
            Inj.Sp("sp_PersonaNaturalMedioComunicacionAllItem");
            Inj.Pmt_Integer("v_PersonaNaturalMedioComunicacionId", PersonaNaturalMedioComunicacionId, false);
            ResultSet rs = Inj.RunSelect();
            while (rs.next()) {

                en = new PersonaNaturalMedioComunicacionEntity();
                en.setPersonaNaturalMedioComunicacionId(rs.getInt("PersonaNaturalMedioComunicacionId"));
                en.setPersonaNaturalId(rs.getInt("PersonaNaturalId"));
                en.setMedioComunicacionId(rs.getInt("MedioComunicacionId"));
                en.setDato(rs.getString("Dato"));
                en.setFechaRegistro(rs.getTimestamp("FechaRegistro"));
                en.setCodUsuario(rs.getString("CodUsuario"));
                en.setEstadoRegistro(rs.getBoolean("EstadoRegistro"));
                DatoMemoria.add(en);

            }

        } catch (SQLException e) {
            System.out.println("ERROR " + e);
            throw new UnsupportedOperationException("Datalater :" + e);
        }
        return DatoMemoria;
    }

    public PersonaNaturalMedioComunicacionEntity Save(PersonaNaturalMedioComunicacionEntity entity) {
        Boolean State = null;
        try {
            Inj.IniciarTranssaccion(false);
            String Store = "sp_PersonaNaturalMedioComunicacion_Save";
            if (entity.getAction() == ProcessActionEnum.Update.getValor()) {
                Store = "sp_PersonaNaturalMedioComunicacion_Update";
            }
            Inj.Sp(Store);
            Inj.Pmt_Integer("v_PersonaNaturalMedioComunicacionId", entity.getPersonaNaturalMedioComunicacionId(), true);
            Inj.Pmt_Integer("v_PersonaNaturalId", entity.getPersonaNaturalId(), false);
            Inj.Pmt_Integer("v_MedioComunicacionId", entity.getMedioComunicacionId(), false);
            Inj.Pmt_String("v_Dato", entity.getDato(), false);
            Inj.Pmt_String("v_FechaRegistro", Utilidades.getFechaRegistro(), false);
            Inj.Pmt_String("v_CodUsuario", entity.getCodUsuario(), false);
            Inj.Pmt_Boolean("v_EstadoRegistro", entity.getEstadoRegistro(), false);
            if (entity.getAction() == ProcessActionEnum.Add.getValor()) {
                int Id = Inj.RunInsert();
                State = Id > 0;
                if (State) {
                    entity.setPersonaNaturalMedioComunicacionId(Id);
                }
            }
            if (entity.getAction() == ProcessActionEnum.Update.getValor()) {
                Inj.RunUpdate();
            }

        } catch (Exception ex) {
            throw new UnsupportedOperationException("Datalater : " + ex);
        }
        return new PersonaNaturalMedioComunicacionEntity();
    }

    public Boolean Delete(Integer Id) {

        Boolean State = false;
        try {
            Inj.IniciarTranssaccion(false);
            Inj.Sp("sp_PersonaNaturalMedioComunicacionDelete");
            Inj.Pmt_Integer("v_PersonaNaturalMedioComunicacionId", Id, false);
            State = Inj.RunDelete() > 0;
        } catch (Exception ex) {
            throw new UnsupportedOperationException("Datalater : " + ex);
        }
        return State;
    }

    public PersonaNaturalMedioComunicacionEntity SaveAlter(PersonaNaturalMedioComunicacionEntity entity, Connection cn) {
        try {
            String procedimientoDetalle = "{CALL sp_PersonaNaturalMedioComunicacion_Save(?, ?, ?, ?, ?, ?, ?)}";
            CallableStatement stmtDetalle = cn.prepareCall(procedimientoDetalle);
            stmtDetalle.setInt("v_PersonaNaturalMedioComunicacionId", entity.getPersonaNaturalMedioComunicacionId());
            stmtDetalle.setInt("v_PersonaNaturalId", entity.getPersonaNaturalId());
            stmtDetalle.setInt("v_MedioComunicacionId", entity.getMedioComunicacionId());
            stmtDetalle.setString("v_Dato", entity.getDato());
            stmtDetalle.setString("v_FechaRegistro", Utilidades.getFechaRegistro());
            stmtDetalle.setString("v_CodUsuario", entity.getCodUsuario());
            stmtDetalle.setBoolean("v_EstadoRegistro", entity.getEstadoRegistro());

            stmtDetalle.executeUpdate();
        } catch (SQLException e) {
            e.printStackTrace();
            throw new UnsupportedOperationException("Datalater : " + e);
        }

        return entity;
    }

    public PersonaNaturalMedioComunicacionEntity SaveOther(PersonaNaturalMedioComunicacionEntity entity) {
        Boolean State = null;
        try {
            Inj.IniciarTranssaccion(false);
            String Store = "sp_PersonaNaturalMedioComunicacion_Save";
            if (entity.getAction() == ProcessActionEnum.Update.getValor()) {
                Store = "sp_PersonaNaturalMedioComunicacion_Update";
            }
            Inj.Sp(Store);
            Inj.Pmt_Integer("v_PersonaNaturalMedioComunicacionId", entity.getPersonaNaturalMedioComunicacionId(), true);
            Inj.Pmt_Integer("v_PersonaNaturalId", entity.getPersonaNaturalId(), false);
            Inj.Pmt_Integer("v_MedioComunicacionId", entity.getMedioComunicacionId(), false);
            Inj.Pmt_String("v_Dato", entity.getDato(), false);
            Inj.Pmt_String("v_FechaRegistro", Utilidades.getFechaRegistro(), false);
            Inj.Pmt_String("v_CodUsuario", entity.getCodUsuario(), false);
            Inj.Pmt_Boolean("v_EstadoRegistro", entity.getEstadoRegistro(), false);
            if (entity.getAction() == ProcessActionEnum.Add.getValor()) {
                int Id = Inj.RunInsert();
                State = Id > 0;
                if (State) {
                    entity.setPersonaNaturalMedioComunicacionId(Id);
                }
            }
            if (entity.getAction() == ProcessActionEnum.Update.getValor()) {
//                Inj.RunUpdate();
            }

        } catch (Exception ex) {
            throw new UnsupportedOperationException("Datalater : " + ex);
        }
        return entity;
    }
}
