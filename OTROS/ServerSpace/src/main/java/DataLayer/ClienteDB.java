package DataLayer;

import EntityLayer.ClienteEntity;
import Enumerados.ProcessActionEnum;
import Framework.injector;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

public class ClienteDB {

    injector Inj = new injector();

    public ArrayList<ClienteEntity> GetAllItems() { 

        ArrayList<ClienteEntity> DatoMemoria = new ArrayList<>();
        ClienteEntity en;
        try {
            Inj.Sp("sp_ClienteAllItems");
            ResultSet rs = Inj.RunSelect();
            while (rs.next()) {

                en = new ClienteEntity();
                en.setClienteId(rs.getInt("ClienteId"));
                en.setEsEmpresa(rs.getBoolean("EsEmpresa"));
                en.setTipoDocumentoId(rs.getInt("TipoDocumentoId"));
                en.setNumDocumento(rs.getString("NumDocumento"));
                en.setNombre(rs.getString("Nombre"));
                en.setEstado(rs.getBoolean("Estado"));
                DatoMemoria.add(en);

            }

        } catch (SQLException e) {
            System.out.println("ERROR "+e);
            throw new UnsupportedOperationException("Datalater :" + e);
        }
        return DatoMemoria;
    }

    public ArrayList<ClienteEntity> GetAllItem(int ClienteId) { 

        ArrayList<ClienteEntity> DatoMemoria = new ArrayList<>();
        ClienteEntity en;
        try {
            Inj.Sp("sp_ClienteAllItem");
            Inj.Pmt_Integer("v_ClienteId", ClienteId, false);
            ResultSet rs = Inj.RunSelect();
            while (rs.next()) {

                en = new ClienteEntity();
                en.setClienteId(rs.getInt("ClienteId"));
                en.setEsEmpresa(rs.getBoolean("EsEmpresa"));
                en.setTipoDocumentoId(rs.getInt("TipoDocumentoId"));
                en.setNumDocumento(rs.getString("NumDocumento"));
                en.setNombre(rs.getString("Nombre"));
                en.setEstado(rs.getBoolean("Estado"));
                DatoMemoria.add(en);

            }

        } catch (SQLException e) {
            System.out.println("ERROR "+e);
            throw new UnsupportedOperationException("Datalater :" + e);
        }
        return DatoMemoria;
    }

    public ClienteEntity Save(ClienteEntity entity) {
        Boolean State = null;
        try {
            String Store = "sp_Cliente_Save";
            if (entity.getAction() == ProcessActionEnum.Update.getValor()) {
                Store = "sp_Cliente_Update";
            }
            Inj.Sp(Store);
            Inj.Pmt_Integer("v_ClienteId", entity.getClienteId(), true);
            Inj.Pmt_Boolean("v_EsEmpresa", entity.getEsEmpresa(), false);
            Inj.Pmt_Integer("v_TipoDocumentoId", entity.getTipoDocumentoId(), false);
            Inj.Pmt_String("v_NumDocumento", entity.getNumDocumento(), false);
            Inj.Pmt_String("v_Nombre", entity.getNombre(), false);
            Inj.Pmt_Boolean("v_Estado", entity.getEstado(), false);
            if (entity.getAction() == ProcessActionEnum.Add.getValor()) {
                int Id = Inj.RunInsert();
                State = Id > 0;
                if (State) {
                    entity.setClienteId(Id);
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
            Inj.Sp("sp_ClienteDelete");
            Inj.Pmt_Integer("v_ClienteId", Id, false);
            State = Inj.RunDelete() > 0;
        } catch (Exception ex) {
            throw new UnsupportedOperationException("Datalater : " + ex);
        }
        return State;
    }

}
