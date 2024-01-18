package DataLayer;

import EntityLayer.MedioComunicacionEntity;
import Enumerados.ProcessActionEnum;
import Framework.Inj;
import Framework.Utilidades;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

public class MedioComunicacionDB {


    public ArrayList<MedioComunicacionEntity> GetAllItems() {

        ArrayList<MedioComunicacionEntity> DatoMemoria = new ArrayList<>();
        MedioComunicacionEntity en;
        try {
            Inj.Sp("sp_MedioComunicacionAllItems");
            ResultSet rs = Inj.RunSelect();
            while (rs.next()) {

                en = new MedioComunicacionEntity();
                en.setMedioComunicacionId(rs.getInt("MedioComunicacionId"));
                en.setCodigo(rs.getString("Codigo"));
                en.setNombre(rs.getString("Nombre"));
                en.setFlaEstatico(rs.getBoolean("FlaEstatico"));
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

    public ArrayList<MedioComunicacionEntity> GetAllItem(int MedioComunicacionId) {

        ArrayList<MedioComunicacionEntity> DatoMemoria = new ArrayList<>();
        MedioComunicacionEntity en;
        try {
            Inj.Sp("sp_MedioComunicacionAllItem");
            Inj.Pmt_Integer("v_MedioComunicacionId", MedioComunicacionId, false);
            ResultSet rs = Inj.RunSelect();
            while (rs.next()) {

                en = new MedioComunicacionEntity();
                en.setMedioComunicacionId(rs.getInt("MedioComunicacionId"));
                en.setCodigo(rs.getString("Codigo"));
                en.setNombre(rs.getString("Nombre"));
                en.setFlaEstatico(rs.getBoolean("FlaEstatico"));
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

    public MedioComunicacionEntity Save(MedioComunicacionEntity entity) {
        Boolean State = null;
        try {
            String Store = "sp_MedioComunicacion_Save";
            if (entity.getAction() == ProcessActionEnum.Update.getValor()) {
                Store = "sp_MedioComunicacion_Update";
            }
            Inj.Sp(Store);
            Inj.Pmt_Integer("v_MedioComunicacionId", entity.getMedioComunicacionId(), true);
            Inj.Pmt_String("v_Codigo", entity.getCodigo(), false);
            Inj.Pmt_String("v_Nombre", entity.getNombre(), false);
            Inj.Pmt_Boolean("v_FlaEstatico", entity.getFlaEstatico(), false);
            Inj.Pmt_String("v_FechaRegistro", Utilidades.getFechaRegistro(), false);
            Inj.Pmt_String("v_CodUsuario", entity.getCodUsuario(), false);
            Inj.Pmt_Boolean("v_EstadoRegistro", entity.getEstadoRegistro(), false);
            if (entity.getAction() == ProcessActionEnum.Add.getValor()) {
                int Id = Inj.RunInsert();
                State = Id > 0;
                if (State) {
                    entity.setMedioComunicacionId(Id);
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
            Inj.Sp("sp_MedioComunicacionDelete");
            Inj.Pmt_Integer("v_MedioComunicacionId", Id, false);
            State = Inj.RunDelete() > 0;
        } catch (Exception ex) {
            throw new UnsupportedOperationException("Datalater : " + ex);
        }
        return State;
    }

}
