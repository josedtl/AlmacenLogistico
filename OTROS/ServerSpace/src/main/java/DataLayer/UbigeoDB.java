package DataLayer;

import EntityLayer.UbigeoEntity;
import Enumerados.ProcessActionEnum;
import Framework.injector;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

public class UbigeoDB extends DataLayer.MyCode.UbigeoDB{

    injector Inj = new injector();

    public ArrayList<UbigeoEntity> GetAllItems () { 

        ArrayList<UbigeoEntity> DatoMemoria = new ArrayList<>();
        UbigeoEntity en;
        try {
            Inj.Sp("sp_UbigeoAllItems");
            ResultSet rs = Inj.RunSelect();
            while (rs.next()) {

                en = new UbigeoEntity();
                en.setUbigeoId(rs.getInt("UbigeoId"));
                en.setCodUbigeo(rs.getInt("CodUbigeo"));
                en.setDesUbigeo(rs.getString("DesUbigeo"));
                en.setDepartamentoId(rs.getInt("DepartamentoId"));
                en.setProvinciaId(rs.getInt("ProvinciaId"));
                en.setDistritoId(rs.getInt("DistritoId"));
                DatoMemoria.add(en);

            }

        } catch (SQLException e) {
            System.out.println("ERROR "+e);
            throw new UnsupportedOperationException("Datalater :" + e);
        }
        return DatoMemoria;
    }

        public ArrayList<UbigeoEntity> GetAllItem(int UbigeoId) { 

            ArrayList<UbigeoEntity> DatoMemoria = new ArrayList<>();
            UbigeoEntity en;
            try {
                Inj.Sp("sp_UbigeoAllItem");
                Inj.Pmt_Integer("v_UbigeoId", UbigeoId, false);
                ResultSet rs = Inj.RunSelect();
                while (rs.next()) {

                    en = new UbigeoEntity();
                    en.setUbigeoId(rs.getInt("UbigeoId"));
                    en.setCodUbigeo(rs.getInt("CodUbigeo"));
                    en.setDesUbigeo(rs.getString("DesUbigeo"));
                    en.setDepartamentoId(rs.getInt("DepartamentoId"));
                    en.setProvinciaId(rs.getInt("ProvinciaId"));
                    en.setDistritoId(rs.getInt("DistritoId"));
                    DatoMemoria.add(en);

                }

            } catch (SQLException e) {
                System.out.println("ERROR "+e);
                throw new UnsupportedOperationException("Datalater :" + e);
            }
            return DatoMemoria;
        }

    public UbigeoEntity Save(UbigeoEntity entity) {
        Boolean State = null;
        try {
            String Store = "sp_Ubigeo_Save";
            if (entity.getAction() == ProcessActionEnum.Update.getValor()) {
                Store = "sp_Ubigeo_Update";
            }
            Inj.Sp(Store);
            Inj.Pmt_Integer("v_UbigeoId", entity.getUbigeoId(), true);
            Inj.Pmt_Integer("v_CodUbigeo", entity.getCodUbigeo(), false);
            Inj.Pmt_String("v_DesUbigeo", entity.getDesUbigeo(), false);
            Inj.Pmt_Integer("v_DepartamentoId", entity.getDepartamentoId(), false);
            Inj.Pmt_Integer("v_ProvinciaId", entity.getProvinciaId(), false);
            Inj.Pmt_Integer("v_DistritoId", entity.getDistritoId(), false);
            if (entity.getAction() == ProcessActionEnum.Add.getValor()) {
                int Id = Inj.RunInsert();
                State = Id > 0;
                if (State) {
                    entity.setUbigeoId(Id);
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
            Inj.Sp("sp_UbigeoDelete");
            Inj.Pmt_Integer("v_UbigeoId", Id, false);
            State = Inj.RunDelete() > 0;
        } catch (Exception ex) {
            throw new UnsupportedOperationException("Datalater : " + ex);
        }
        return State;
    }

}
