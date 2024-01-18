package DataLayer;

import EntityLayer.InfraestructuraElementoEntity;
import Enumerados.ProcessActionEnum;
import Framework.injector;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

public class InfraestructuraElementoDB {

    injector Inj = new injector();

    public ArrayList<InfraestructuraElementoEntity> GetAllItems() {

        ArrayList<InfraestructuraElementoEntity> DatoMemoria = new ArrayList<>();
        InfraestructuraElementoEntity en;
        try {
            Inj.Sp("sp_InfraestructuraElementoAllItems");
            ResultSet rs = Inj.RunSelect();
            while (rs.next()) {

                en = new InfraestructuraElementoEntity();
                en.setInfraestructuraElementoId(rs.getInt("InfraestructuraElementoId"));
                en.setInfraestructuraId(rs.getInt("InfraestructuraId"));
                en.setElementoId(rs.getInt("ElementoId"));
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

    public ArrayList<InfraestructuraElementoEntity> GetAllItem(int InfraestructuraElementoId) {

        ArrayList<InfraestructuraElementoEntity> DatoMemoria = new ArrayList<>();
        InfraestructuraElementoEntity en;
        try {
            Inj.Sp("sp_InfraestructuraElementoAllItem");
            Inj.Pmt_Integer("v_InfraestructuraElementoId", InfraestructuraElementoId, false);
            ResultSet rs = Inj.RunSelect();
            while (rs.next()) {

                en = new InfraestructuraElementoEntity();
                en.setInfraestructuraElementoId(rs.getInt("InfraestructuraElementoId"));
                en.setInfraestructuraId(rs.getInt("InfraestructuraId"));
                en.setElementoId(rs.getInt("ElementoId"));
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

    public InfraestructuraElementoEntity Save(InfraestructuraElementoEntity entity) {
        Boolean State = null;
        try {
            String Store = "sp_InfraestructuraElemento_Save";
            if (entity.getAction() == ProcessActionEnum.Update.getValor()) {
                Store = "sp_InfraestructuraElemento_Update";
            }
            Inj.Sp(Store);
            Inj.Pmt_Integer("v_InfraestructuraElementoId", entity.getInfraestructuraElementoId(), true);
            Inj.Pmt_Integer("v_InfraestructuraId", entity.getInfraestructuraId(), false);
            Inj.Pmt_Integer("v_ElementoId", entity.getElementoId(), false);
            Inj.Pmt_Date("v_FechaRegistro", entity.getFechaRegistro(), false);
            Inj.Pmt_String("v_CodUsuario", entity.getCodUsuario(), false);
            Inj.Pmt_Boolean("v_EstadoRegistro", entity.getEstadoRegistro(), false);
            if (entity.getAction() == ProcessActionEnum.Add.getValor()) {
                int Id = Inj.RunInsert();
                State = Id > 0;
                if (State) {
                    entity.setInfraestructuraElementoId(Id);
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
            Inj.Sp("sp_InfraestructuraElementoDelete");
            Inj.Pmt_Integer("v_InfraestructuraElementoId", Id, false);
            State = Inj.RunDelete() > 0;
        } catch (Exception ex) {
            throw new UnsupportedOperationException("Datalater : " + ex);
        }
        return State;
    }

}
