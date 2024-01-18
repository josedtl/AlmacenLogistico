package DataLayer;

import EntityLayer.ProveedorPersonaNaturalEntity;
import Enumerados.ProcessActionEnum;
import Framework.injector;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

public class ProveedorPersonaNaturalDB {

    injector Inj = new injector();

    public ArrayList<ProveedorPersonaNaturalEntity> GetAllItems() { 

        ArrayList<ProveedorPersonaNaturalEntity> DatoMemoria = new ArrayList<>();
        ProveedorPersonaNaturalEntity en;
        try {
            Inj.Sp("sp_ProveedorPersonaNaturalAllItems");
            ResultSet rs = Inj.RunSelect();
            while (rs.next()) {

                en = new ProveedorPersonaNaturalEntity();
                en.setProveedorPersonaNaturalId(rs.getInt("ProveedorPersonaNaturalId"));
                en.setProveedorId(rs.getInt("ProveedorId"));
                en.setPersonaNaturalId(rs.getInt("PersonaNaturalId"));
                DatoMemoria.add(en);

            }

        } catch (SQLException e) {
            System.out.println("ERROR "+e);
            throw new UnsupportedOperationException("Datalater :" + e);
        }
        return DatoMemoria;
    }

    public ArrayList<ProveedorPersonaNaturalEntity> GetAllItem(int ProveedorPersonaNaturalId) { 

        ArrayList<ProveedorPersonaNaturalEntity> DatoMemoria = new ArrayList<>();
        ProveedorPersonaNaturalEntity en;
        try {
            Inj.Sp("sp_ProveedorPersonaNaturalAllItem");
            Inj.Pmt_Integer("v_ProveedorPersonaNaturalId", ProveedorPersonaNaturalId, false);
            ResultSet rs = Inj.RunSelect();
            while (rs.next()) {

                en = new ProveedorPersonaNaturalEntity();
                en.setProveedorPersonaNaturalId(rs.getInt("ProveedorPersonaNaturalId"));
                en.setProveedorId(rs.getInt("ProveedorId"));
                en.setPersonaNaturalId(rs.getInt("PersonaNaturalId"));
                DatoMemoria.add(en);

            }

        } catch (SQLException e) {
            System.out.println("ERROR "+e);
            throw new UnsupportedOperationException("Datalater :" + e);
        }
        return DatoMemoria;
    }

    public ProveedorPersonaNaturalEntity Save(ProveedorPersonaNaturalEntity entity) {
        Boolean State = null;
        try {
            String Store = "sp_ProveedorPersonaNatural_Save";
            if (entity.getAction() == ProcessActionEnum.Update.getValor()) {
                Store = "sp_ProveedorPersonaNatural_Update";
            }
            Inj.Sp(Store);
            Inj.Pmt_Integer("v_ProveedorPersonaNaturalId", entity.getProveedorPersonaNaturalId(), true);
            Inj.Pmt_Integer("v_ProveedorId", entity.getProveedorId(), false);
            Inj.Pmt_Integer("v_PersonaNaturalId", entity.getPersonaNaturalId(), false);
            if (entity.getAction() == ProcessActionEnum.Add.getValor()) {
                int Id = Inj.RunInsert();
                State = Id > 0;
                if (State) {
                    entity.setProveedorPersonaNaturalId(Id);
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
            Inj.Sp("sp_ProveedorPersonaNaturalDelete");
            Inj.Pmt_Integer("v_ProveedorPersonaNaturalId", Id, false);
            State = Inj.RunDelete() > 0;
        } catch (Exception ex) {
            throw new UnsupportedOperationException("Datalater : " + ex);
        }
        return State;
    }

}
