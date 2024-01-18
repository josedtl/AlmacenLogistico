package DataLayer;

import EntityLayer.ClientePersonaNaturalEntity;
import Enumerados.ProcessActionEnum;
import Framework.injector;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

public class ClientePersonaNaturalDB {

    injector Inj = new injector();

    public ArrayList<ClientePersonaNaturalEntity> GetAllItems() { 

        ArrayList<ClientePersonaNaturalEntity> DatoMemoria = new ArrayList<>();
        ClientePersonaNaturalEntity en;
        try {
            Inj.Sp("sp_ClientePersonaNaturalAllItems");
            ResultSet rs = Inj.RunSelect();
            while (rs.next()) {

                en = new ClientePersonaNaturalEntity();
                en.setClientePersonaNaturalId(rs.getInt("ClientePersonaNaturalId"));
                en.setClienteId(rs.getInt("ClienteId"));
                en.setPersonaNaturalId(rs.getInt("PersonaNaturalId"));
                DatoMemoria.add(en);

            }

        } catch (SQLException e) {
            System.out.println("ERROR "+e);
            throw new UnsupportedOperationException("Datalater :" + e);
        }
        return DatoMemoria;
    }

    public ArrayList<ClientePersonaNaturalEntity> GetAllItem(int ClientePersonaNaturalId) { 

        ArrayList<ClientePersonaNaturalEntity> DatoMemoria = new ArrayList<>();
        ClientePersonaNaturalEntity en;
        try {
            Inj.Sp("sp_ClientePersonaNaturalAllItem");
            Inj.Pmt_Integer("v_ClientePersonaNaturalId", ClientePersonaNaturalId, false);
            ResultSet rs = Inj.RunSelect();
            while (rs.next()) {

                en = new ClientePersonaNaturalEntity();
                en.setClientePersonaNaturalId(rs.getInt("ClientePersonaNaturalId"));
                en.setClienteId(rs.getInt("ClienteId"));
                en.setPersonaNaturalId(rs.getInt("PersonaNaturalId"));
                DatoMemoria.add(en);

            }

        } catch (SQLException e) {
            System.out.println("ERROR "+e);
            throw new UnsupportedOperationException("Datalater :" + e);
        }
        return DatoMemoria;
    }

    public ClientePersonaNaturalEntity Save(ClientePersonaNaturalEntity entity) {
        Boolean State = null;
        try {
            String Store = "sp_ClientePersonaNatural_Save";
            if (entity.getAction() == ProcessActionEnum.Update.getValor()) {
                Store = "sp_ClientePersonaNatural_Update";
            }
            Inj.Sp(Store);
            Inj.Pmt_Integer("v_ClientePersonaNaturalId", entity.getClientePersonaNaturalId(), true);
            Inj.Pmt_Integer("v_ClienteId", entity.getClienteId(), false);
            Inj.Pmt_Integer("v_PersonaNaturalId", entity.getPersonaNaturalId(), false);
            if (entity.getAction() == ProcessActionEnum.Add.getValor()) {
                int Id = Inj.RunInsert();
                State = Id > 0;
                if (State) {
                    entity.setClientePersonaNaturalId(Id);
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
            Inj.Sp("sp_ClientePersonaNaturalDelete");
            Inj.Pmt_Integer("v_ClientePersonaNaturalId", Id, false);
            State = Inj.RunDelete() > 0;
        } catch (Exception ex) {
            throw new UnsupportedOperationException("Datalater : " + ex);
        }
        return State;
    }

}
