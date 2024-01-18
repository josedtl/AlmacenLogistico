package DataLayer;

import EntityLayer.InfraestructuraServicioBasicoEntity;
import Enumerados.ProcessActionEnum;
import Framework.injector;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

public class InfraestructuraServicioBasicoDB {

    injector Inj = new injector();

    public ArrayList<InfraestructuraServicioBasicoEntity> GetAllItems() { 

        ArrayList<InfraestructuraServicioBasicoEntity> DatoMemoria = new ArrayList<>();
        InfraestructuraServicioBasicoEntity en;
        try {
            Inj.Sp("sp_InfraestructuraServicioBasicoAllItems");
            ResultSet rs = Inj.RunSelect();
            while (rs.next()) {

                en = new InfraestructuraServicioBasicoEntity();
                en.setInfraestructuraServicioBasicoId(rs.getInt("InfraestructuraServicioBasicoId"));
                en.setInfraestructuraId(rs.getInt("InfraestructuraId"));
                en.setServicioBasicoId(rs.getInt("ServicioBasicoId"));
                en.setPagoExonerado(rs.getBoolean("PagoExonerado"));
                en.setFechaRegistro(rs.getDate("FechaRegistro"));
                en.setCodUsuario(rs.getString("CodUsuario"));
                en.setEstadoRegistro(rs.getBoolean("EstadoRegistro"));
                DatoMemoria.add(en);

            }

        } catch (SQLException e) {
            System.out.println("ERROR "+e);
            throw new UnsupportedOperationException("Datalater :" + e);
        }
        return DatoMemoria;
    }

    public ArrayList<InfraestructuraServicioBasicoEntity> GetAllItem(int InfraestructuraServicioBasicoId) { 

        ArrayList<InfraestructuraServicioBasicoEntity> DatoMemoria = new ArrayList<>();
        InfraestructuraServicioBasicoEntity en;
        try {
            Inj.Sp("sp_InfraestructuraServicioBasicoAllItem");
            Inj.Pmt_Integer("v_InfraestructuraServicioBasicoId", InfraestructuraServicioBasicoId, false);
            ResultSet rs = Inj.RunSelect();
            while (rs.next()) {

                en = new InfraestructuraServicioBasicoEntity();
                en.setInfraestructuraServicioBasicoId(rs.getInt("InfraestructuraServicioBasicoId"));
                en.setInfraestructuraId(rs.getInt("InfraestructuraId"));
                en.setServicioBasicoId(rs.getInt("ServicioBasicoId"));
                en.setPagoExonerado(rs.getBoolean("PagoExonerado"));
                en.setFechaRegistro(rs.getDate("FechaRegistro"));
                en.setCodUsuario(rs.getString("CodUsuario"));
                en.setEstadoRegistro(rs.getBoolean("EstadoRegistro"));
                DatoMemoria.add(en);

            }

        } catch (SQLException e) {
            System.out.println("ERROR "+e);
            throw new UnsupportedOperationException("Datalater :" + e);
        }
        return DatoMemoria;
    }

    public InfraestructuraServicioBasicoEntity Save(InfraestructuraServicioBasicoEntity entity) {
        Boolean State = null;
        try {
            String Store = "sp_InfraestructuraServicioBasico_Save";
            if (entity.getAction() == ProcessActionEnum.Update.getValor()) {
                Store = "sp_InfraestructuraServicioBasico_Update";
            }
            Inj.Sp(Store);
            Inj.Pmt_Integer("v_InfraestructuraServicioBasicoId", entity.getInfraestructuraServicioBasicoId(), true);
            Inj.Pmt_Integer("v_InfraestructuraId", entity.getInfraestructuraId(), false);
            Inj.Pmt_Integer("v_ServicioBasicoId", entity.getServicioBasicoId(), false);
            Inj.Pmt_Boolean("v_PagoExonerado", entity.getPagoExonerado(), false);
//            Inj.Pmt_Date("v_FechaRegistro", new java.sql.Date(entity.getFechaRegistro().getTime()), false);
            Inj.Pmt_String("v_CodUsuario", entity.getCodUsuario(), false);
            Inj.Pmt_Boolean("v_EstadoRegistro", entity.getEstadoRegistro(), false);
            if (entity.getAction() == ProcessActionEnum.Add.getValor()) {
                int Id = Inj.RunInsert();
                State = Id > 0;
                if (State) {
                    entity.setInfraestructuraServicioBasicoId(Id);
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
            Inj.Sp("sp_InfraestructuraServicioBasicoDelete");
            Inj.Pmt_Integer("v_InfraestructuraServicioBasicoId", Id, false);
            State = Inj.RunDelete() > 0;
        } catch (Exception ex) {
            throw new UnsupportedOperationException("Datalater : " + ex);
        }
        return State;
    }

}
