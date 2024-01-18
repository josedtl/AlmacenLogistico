package DataLayer;

import EntityLayer.ProveedorEntity;
import Enumerados.ProcessActionEnum;
import Framework.injector;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

public class ProveedorDB {

    injector Inj = new injector();

    public ArrayList<ProveedorEntity> GetAllItems() { 

        ArrayList<ProveedorEntity> DatoMemoria = new ArrayList<>();
        ProveedorEntity en;
        try {
            Inj.Sp("sp_ProveedorAllItems");
            ResultSet rs = Inj.RunSelect();
            while (rs.next()) {

                en = new ProveedorEntity();
                en.setProveedorId(rs.getInt("ProveedorId"));
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

    public ArrayList<ProveedorEntity> GetAllItem(int ProveedorId) { 

        ArrayList<ProveedorEntity> DatoMemoria = new ArrayList<>();
        ProveedorEntity en;
        try {
            Inj.Sp("sp_ProveedorAllItem");
            Inj.Pmt_Integer("v_ProveedorId", ProveedorId, false);
            ResultSet rs = Inj.RunSelect();
            while (rs.next()) {

                en = new ProveedorEntity();
                en.setProveedorId(rs.getInt("ProveedorId"));
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

    public ProveedorEntity Save(ProveedorEntity entity) {
        Boolean State = null;
        try {
            String Store = "sp_Proveedor_Save";
            if (entity.getAction() == ProcessActionEnum.Update.getValor()) {
                Store = "sp_Proveedor_Update";
            }
            Inj.Sp(Store);
            Inj.Pmt_Integer("v_ProveedorId", entity.getProveedorId(), true);
            Inj.Pmt_Boolean("v_EsEmpresa", entity.getEsEmpresa(), false);
            Inj.Pmt_Integer("v_TipoDocumentoId", entity.getTipoDocumentoId(), false);
            Inj.Pmt_String("v_NumDocumento", entity.getNumDocumento(), false);
            Inj.Pmt_String("v_Nombre", entity.getNombre(), false);
            Inj.Pmt_Boolean("v_Estado", entity.getEstado(), false);
            if (entity.getAction() == ProcessActionEnum.Add.getValor()) {
                int Id = Inj.RunInsert();
                State = Id > 0;
                if (State) {
                    entity.setProveedorId(Id);
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
            Inj.Sp("sp_ProveedorDelete");
            Inj.Pmt_Integer("v_ProveedorId", Id, false);
            State = Inj.RunDelete() > 0;
        } catch (Exception ex) {
            throw new UnsupportedOperationException("Datalater : " + ex);
        }
        return State;
    }

}
