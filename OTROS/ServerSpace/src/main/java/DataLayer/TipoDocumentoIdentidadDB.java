package DataLayer;

import EntityLayer.TipoDocumentoIdentidadEntity;
import Enumerados.ProcessActionEnum;
import Framework.injector;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

public class TipoDocumentoIdentidadDB {

    injector Inj = new injector();

    public ArrayList<TipoDocumentoIdentidadEntity> GetAllItems() { 

        ArrayList<TipoDocumentoIdentidadEntity> DatoMemoria = new ArrayList<>();
        TipoDocumentoIdentidadEntity en;
        try {
            Inj.Sp("sp_TipoDocumentoIdentidadAllItems");
            ResultSet rs = Inj.RunSelect();
            while (rs.next()) {

                en = new TipoDocumentoIdentidadEntity();
                en.setTipoDocumentoIdentidadId(rs.getInt("TipoDocumentoIdentidadId"));
                en.setCodigo(rs.getString("Codigo"));
                en.setAlias(rs.getString("Alias"));
                en.setDescripcion(rs.getString("Descripcion"));
                en.setEsEmpresa(rs.getBoolean("EsEmpresa"));
                DatoMemoria.add(en);

            }

        } catch (SQLException e) {
            System.out.println("ERROR "+e);
            throw new UnsupportedOperationException("Datalater :" + e);
        }
        return DatoMemoria;
    }

    public ArrayList<TipoDocumentoIdentidadEntity> GetAllItem(int TipoDocumentoIdentidadId) { 

        ArrayList<TipoDocumentoIdentidadEntity> DatoMemoria = new ArrayList<>();
        TipoDocumentoIdentidadEntity en;
        try {
            Inj.Sp("sp_TipoDocumentoIdentidadAllItem");
            Inj.Pmt_Integer("v_TipoDocumentoIdentidadId", TipoDocumentoIdentidadId, false);
            ResultSet rs = Inj.RunSelect();
            while (rs.next()) {

                en = new TipoDocumentoIdentidadEntity();
                en.setTipoDocumentoIdentidadId(rs.getInt("TipoDocumentoIdentidadId"));
                en.setCodigo(rs.getString("Codigo"));
                en.setAlias(rs.getString("Alias"));
                en.setDescripcion(rs.getString("Descripcion"));
                en.setEsEmpresa(rs.getBoolean("EsEmpresa"));
                DatoMemoria.add(en);

            }

        } catch (SQLException e) {
            System.out.println("ERROR "+e);
            throw new UnsupportedOperationException("Datalater :" + e);
        }
        return DatoMemoria;
    }

    public TipoDocumentoIdentidadEntity Save(TipoDocumentoIdentidadEntity entity) {
        Boolean State = null;
        try {
            String Store = "sp_TipoDocumentoIdentidad_Save";
            if (entity.getAction() == ProcessActionEnum.Update.getValor()) {
                Store = "sp_TipoDocumentoentidad_Update";
            }
            Inj.Sp(Store);
            Inj.Pmt_Integer("v_TipoDocumentoIdentidadId", entity.getTipoDocumentoIdentidadId(), true);
            Inj.Pmt_String("v_Codigo", entity.getCodigo(), false);
            Inj.Pmt_String("v_Alias", entity.getAlias(), false);
            Inj.Pmt_String("v_Descripcion", entity.getDescripcion(), false);
            Inj.Pmt_Boolean("v_EsEmpresa", entity.getEsEmpresa(), false);
            if (entity.getAction() == ProcessActionEnum.Add.getValor()) {
                int Id = Inj.RunInsert();
                State = Id > 0;
                if (State) {
                    entity.setTipoDocumentoIdentidadId(Id);
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
            Inj.Sp("sp_TipoDocumentoIdentidadDelete");
            Inj.Pmt_Integer("v_TipoDocumentoIdentidadId", Id, false);
            State = Inj.RunDelete() > 0;
        } catch (Exception ex) {
            throw new UnsupportedOperationException("Datalater : " + ex);
        }
        return State;
    }

}
