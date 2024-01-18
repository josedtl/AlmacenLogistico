package DataLayer;

import EntityLayer.ClienteEmpresaEntity;
import Enumerados.ProcessActionEnum;
import Framework.injector;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

public class ClienteEmpresaDB {

    injector Inj = new injector();

    public ArrayList<ClienteEmpresaEntity> GetAllItems() { 

        ArrayList<ClienteEmpresaEntity> DatoMemoria = new ArrayList<>();
        ClienteEmpresaEntity en;
        try {
            Inj.Sp("sp_ClienteEmpresaAllItems");
            ResultSet rs = Inj.RunSelect();
            while (rs.next()) {

                en = new ClienteEmpresaEntity();
                en.setClienteEmpresaId(rs.getInt("ClienteEmpresaId"));
                en.setClienteId(rs.getInt("ClienteId"));
                en.setEmpresaId(rs.getInt("EmpresaId"));
                DatoMemoria.add(en);

            }

        } catch (SQLException e) {
            System.out.println("ERROR "+e);
            throw new UnsupportedOperationException("Datalater :" + e);
        }
        return DatoMemoria;
    }

    public ArrayList<ClienteEmpresaEntity> GetAllItem(int ClienteEmpresaId) { 

        ArrayList<ClienteEmpresaEntity> DatoMemoria = new ArrayList<>();
        ClienteEmpresaEntity en;
        try {
            Inj.Sp("sp_ClienteEmpresaAllItem");
            Inj.Pmt_Integer("v_ClienteEmpresaId", ClienteEmpresaId, false);
            ResultSet rs = Inj.RunSelect();
            while (rs.next()) {

                en = new ClienteEmpresaEntity();
                en.setClienteEmpresaId(rs.getInt("ClienteEmpresaId"));
                en.setClienteId(rs.getInt("ClienteId"));
                en.setEmpresaId(rs.getInt("EmpresaId"));
                DatoMemoria.add(en);

            }

        } catch (SQLException e) {
            System.out.println("ERROR "+e);
            throw new UnsupportedOperationException("Datalater :" + e);
        }
        return DatoMemoria;
    }

    public ClienteEmpresaEntity Save(ClienteEmpresaEntity entity) {
        Boolean State = null;
        try {
            String Store = "sp_ClienteEmpresa_Save";
            if (entity.getAction() == ProcessActionEnum.Update.getValor()) {
                Store = "sp_ClienteEmpresa_Update";
            }
            Inj.Sp(Store);
            Inj.Pmt_Integer("v_ClienteEmpresaId", entity.getClienteEmpresaId(), true);
            Inj.Pmt_Integer("v_ClienteId", entity.getClienteId(), false);
            Inj.Pmt_Integer("v_EmpresaId", entity.getEmpresaId(), false);
            if (entity.getAction() == ProcessActionEnum.Add.getValor()) {
                int Id = Inj.RunInsert();
                State = Id > 0;
                if (State) {
                    entity.setClienteEmpresaId(Id);
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
            Inj.Sp("sp_ClienteEmpresaDelete");
            Inj.Pmt_Integer("v_ClienteEmpresaId", Id, false);
            State = Inj.RunDelete() > 0;
        } catch (Exception ex) {
            throw new UnsupportedOperationException("Datalater : " + ex);
        }
        return State;
    }

}
