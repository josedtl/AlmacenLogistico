package DataLayer;

import EntityLayer.GeneroEntity;
import Enumerados.ProcessActionEnum;
import Framework.injector;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

public class GeneroDB {

    injector Inj = new injector();

    public ArrayList<GeneroEntity> GetAllItems() { 

        ArrayList<GeneroEntity> DatoMemoria = new ArrayList<>();
        GeneroEntity en;
        try {
            Inj.Sp("sp_GeneroAllItems");
            ResultSet rs = Inj.RunSelect();
            while (rs.next()) {

                en = new GeneroEntity();
                en.setGeneroId(rs.getInt("GeneroId"));
                en.setNombre(rs.getString("Nombre"));
                DatoMemoria.add(en);

            }

        } catch (SQLException e) {
            System.out.println("ERROR "+e);
            throw new UnsupportedOperationException("Datalater :" + e);
        }
        return DatoMemoria;
    }

    public ArrayList<GeneroEntity> GetAllItem(int GeneroId) { 

        ArrayList<GeneroEntity> DatoMemoria = new ArrayList<>();
        GeneroEntity en;
        try {
            Inj.Sp("sp_GeneroAllItem");
            Inj.Pmt_Integer("v_GeneroId", GeneroId, false);
            ResultSet rs = Inj.RunSelect();
            while (rs.next()) {

                en = new GeneroEntity();
                en.setGeneroId(rs.getInt("GeneroId"));
                en.setNombre(rs.getString("Nombre"));
                DatoMemoria.add(en);

            }

        } catch (SQLException e) {
            System.out.println("ERROR "+e);
            throw new UnsupportedOperationException("Datalater :" + e);
        }
        return DatoMemoria;
    }

    public GeneroEntity Save(GeneroEntity entity) {
        Boolean State = null;
        try {
            String Store = "sp_Genero_Save";
            if (entity.getAction() == ProcessActionEnum.Update.getValor()) {
                Store = "sp_Genero_Update";
            }
            Inj.Sp(Store);
            Inj.Pmt_Integer("v_GeneroId", entity.getGeneroId(), true);
            Inj.Pmt_String("v_Nombre", entity.getNombre(), false);
            if (entity.getAction() == ProcessActionEnum.Add.getValor()) {
                int Id = Inj.RunInsert();
                State = Id > 0;
                if (State) {
                    entity.setGeneroId(Id);
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
            Inj.Sp("sp_GeneroDelete");
            Inj.Pmt_Integer("v_GeneroId", Id, false);
            State = Inj.RunDelete() > 0;
        } catch (Exception ex) {
            throw new UnsupportedOperationException("Datalater : " + ex);
        }
        return State;
    }

}
