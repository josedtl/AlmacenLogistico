package DataLayer;

import EntityLayer.EstadoCivilEntity;
import Enumerados.ProcessActionEnum;
import Framework.injector;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

public class EstadoCivilDB {

    injector Inj = new injector();

    public ArrayList<EstadoCivilEntity> GetAllItems() { 

        ArrayList<EstadoCivilEntity> DatoMemoria = new ArrayList<>();
        EstadoCivilEntity en;
        try {
            Inj.Sp("sp_EstadoCivilAllItems");
            ResultSet rs = Inj.RunSelect();
            while (rs.next()) {

                en = new EstadoCivilEntity();
                en.setEstadoCivilId(rs.getInt("EstadoCivilId"));
                en.setNombre(rs.getString("Nombre"));
                DatoMemoria.add(en);

            }

        } catch (SQLException e) {
            System.out.println("ERROR "+e);
            throw new UnsupportedOperationException("Datalater :" + e);
        }
        return DatoMemoria;
    }

    public ArrayList<EstadoCivilEntity> GetAllItem(int EstadoCivilId) { 

        ArrayList<EstadoCivilEntity> DatoMemoria = new ArrayList<>();
        EstadoCivilEntity en;
        try {
            Inj.Sp("sp_EstadoCivilAllItem");
            Inj.Pmt_Integer("v_EstadoCivilId", EstadoCivilId, false);
            ResultSet rs = Inj.RunSelect();
            while (rs.next()) {

                en = new EstadoCivilEntity();
                en.setEstadoCivilId(rs.getInt("EstadoCivilId"));
                en.setNombre(rs.getString("Nombre"));
                DatoMemoria.add(en);

            }

        } catch (SQLException e) {
            System.out.println("ERROR "+e);
            throw new UnsupportedOperationException("Datalater :" + e);
        }
        return DatoMemoria;
    }

    public EstadoCivilEntity Save(EstadoCivilEntity entity) {
        Boolean State = null;
        try {
            String Store = "sp_EstadoCivil_Save";
            if (entity.getAction() == ProcessActionEnum.Update.getValor()) {
                Store = "sp_EstadoCivil_Update";
            }
            Inj.Sp(Store);
            Inj.Pmt_Integer("v_EstadoCivilId", entity.getEstadoCivilId(), true);
            Inj.Pmt_String("v_Nombre", entity.getNombre(), false);
            if (entity.getAction() == ProcessActionEnum.Add.getValor()) {
                int Id = Inj.RunInsert();
                State = Id > 0;
                if (State) {
                    entity.setEstadoCivilId(Id);
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
            Inj.Sp("sp_EstadoCivilDelete");
            Inj.Pmt_Integer("v_EstadoCivilId", Id, false);
            State = Inj.RunDelete() > 0;
        } catch (Exception ex) {
            throw new UnsupportedOperationException("Datalater : " + ex);
        }
        return State;
    }

}
