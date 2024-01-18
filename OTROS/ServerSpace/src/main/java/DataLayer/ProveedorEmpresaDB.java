package DataLayer;

import EntityLayer.ProveedorEmpresaEntity;
import Enumerados.ProcessActionEnum;
import Framework.injector;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

public class ProveedorEmpresaDB {

    injector Inj = new injector();

    public ArrayList<ProveedorEmpresaEntity> GetAllItems() { 

        ArrayList<ProveedorEmpresaEntity> DatoMemoria = new ArrayList<>();
        ProveedorEmpresaEntity en;
        try {
            Inj.Sp("sp_ProveedorEmpresaAllItems");
            ResultSet rs = Inj.RunSelect();
            while (rs.next()) {

                en = new ProveedorEmpresaEntity();
                en.setProveedorEmpresaId(rs.getInt("ProveedorEmpresaId"));
                en.setProveedorId(rs.getInt("ProveedorId"));
                en.setEmpresaId(rs.getInt("EmpresaId"));
                DatoMemoria.add(en);

            }

        } catch (SQLException e) {
            System.out.println("ERROR "+e);
            throw new UnsupportedOperationException("Datalater :" + e);
        }
        return DatoMemoria;
    }

    public ArrayList<ProveedorEmpresaEntity> GetAllItem(int ProveedorEmpresaId) { 

        ArrayList<ProveedorEmpresaEntity> DatoMemoria = new ArrayList<>();
        ProveedorEmpresaEntity en;
        try {
            Inj.Sp("sp_ProveedorEmpresaAllItem");
            Inj.Pmt_Integer("v_ProveedorEmpresaId", ProveedorEmpresaId, false);
            ResultSet rs = Inj.RunSelect();
            while (rs.next()) {

                en = new ProveedorEmpresaEntity();
                en.setProveedorEmpresaId(rs.getInt("ProveedorEmpresaId"));
                en.setProveedorId(rs.getInt("ProveedorId"));
                en.setEmpresaId(rs.getInt("EmpresaId"));
                DatoMemoria.add(en);

            }

        } catch (SQLException e) {
            System.out.println("ERROR "+e);
            throw new UnsupportedOperationException("Datalater :" + e);
        }
        return DatoMemoria;
    }

    public ProveedorEmpresaEntity Save(ProveedorEmpresaEntity entity) {
        Boolean State = null;
        try {
            String Store = "sp_ProveedorEmpresa_Save";
            if (entity.getAction() == ProcessActionEnum.Update.getValor()) {
                Store = "sp_ProveedorEmpresa_Update";
            }
            Inj.Sp(Store);
            Inj.Pmt_Integer("v_ProveedorEmpresaId", entity.getProveedorEmpresaId(), true);
            Inj.Pmt_Integer("v_ProveedorId", entity.getProveedorId(), false);
            Inj.Pmt_Integer("v_EmpresaId", entity.getEmpresaId(), false);
            if (entity.getAction() == ProcessActionEnum.Add.getValor()) {
                int Id = Inj.RunInsert();
                State = Id > 0;
                if (State) {
                    entity.setProveedorEmpresaId(Id);
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
            Inj.Sp("sp_ProveedorEmpresaDelete");
            Inj.Pmt_Integer("v_ProveedorEmpresaId", Id, false);
            State = Inj.RunDelete() > 0;
        } catch (Exception ex) {
            throw new UnsupportedOperationException("Datalater : " + ex);
        }
        return State;
    }

}
