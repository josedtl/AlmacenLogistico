package DataLayer;

import EntityLayer.TipoElementoEntity;
import Enumerados.ProcessActionEnum;
import Framework.injector;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

public class TipoElementoDB extends DataLayer.MyCode.TipoElementoDB{

    injector Inj = new injector();

    public ArrayList<TipoElementoEntity> GetAllItems() {

        ArrayList<TipoElementoEntity> DatoMemoria = new ArrayList<>();
        TipoElementoEntity en;
        try {
            Inj.Sp("sp_TipoElementoAllItems");
            ResultSet rs = Inj.RunSelect();
            while (rs.next()) {

                en = new TipoElementoEntity();
                en.setTipoElementoId(rs.getInt("TipoElementoId"));
                en.setNombre(rs.getString("Nombre"));
                en.setFechaRegistro(rs.getTimestamp("FechaRegistro"));
                en.setCodUsuario(rs.getString("CodUsuario"));
                en.setEstadoRegistro(rs.getBoolean("EstadoRegistro"));
                DatoMemoria.add(en);

            }

        } catch (SQLException e) {
            System.out.println("ERROR " + e);
            throw new UnsupportedOperationException("Datalater :" + e);
        }
        return DatoMemoria;
    }

    public ArrayList<TipoElementoEntity> GetAllItem(int TipoElementoId) {

        ArrayList<TipoElementoEntity> DatoMemoria = new ArrayList<>();
        TipoElementoEntity en;
        try {
            Inj.Sp("sp_TipoElementoAllItem");
            Inj.Pmt_Integer("v_TipoElementoId", TipoElementoId, false);
            ResultSet rs = Inj.RunSelect();
            while (rs.next()) {

                en = new TipoElementoEntity();
                en.setTipoElementoId(rs.getInt("TipoElementoId"));
                en.setNombre(rs.getString("Nombre"));
                en.setFechaRegistro(rs.getTimestamp("FechaRegistro"));
                en.setCodUsuario(rs.getString("CodUsuario"));
                en.setEstadoRegistro(rs.getBoolean("EstadoRegistro"));
                DatoMemoria.add(en);

            }

        } catch (SQLException e) {
            System.out.println("ERROR " + e);
            throw new UnsupportedOperationException("Datalater :" + e);
        }
        return DatoMemoria;
    }

    public TipoElementoEntity Save(TipoElementoEntity entity) {
        Boolean State = null;
        try {
            String Store = "sp_TipoElemento_Save";
            if (entity.getAction() == ProcessActionEnum.Update.getValor()) {
                Store = "sp_TipoElemento_Update";
            }
            Inj.Sp(Store);
            Inj.Pmt_Integer("v_TipoElementoId", entity.getTipoElementoId(), true);
            Inj.Pmt_String("v_Nombre", entity.getNombre(), false);
            Inj.Pmt_Date("v_FechaRegistro", entity.getFechaRegistro(), false);
            Inj.Pmt_String("v_CodUsuario", entity.getCodUsuario(), false);
            Inj.Pmt_Boolean("v_EstadoRegistro", entity.getEstadoRegistro(), false);
            if (entity.getAction() == ProcessActionEnum.Add.getValor()) {
                int Id = Inj.RunInsert();
                State = Id > 0;
                if (State) {
                    entity.setTipoElementoId(Id);
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
            Inj.Sp("sp_TipoElementoDelete");
            Inj.Pmt_Integer("v_TipoElementoId", Id, false);
            State = Inj.RunDelete() > 0;
        } catch (Exception ex) {
            throw new UnsupportedOperationException("Datalater : " + ex);
        }
        return State;
    }

}
