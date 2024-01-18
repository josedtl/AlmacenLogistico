package DataLayer;

import EntityLayer.CargoEntity;
import Enumerados.ProcessActionEnum;
import Framework.Utilidades;
import Framework.injector;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

public class CargoDB extends DataLayer.MyCode.CargoDB {

    injector Inj = new injector();

    public ArrayList<CargoEntity> GetAllItems() {

        ArrayList<CargoEntity> DatoMemoria = new ArrayList<>();
        CargoEntity en;
        try {
            Inj.Sp("sp_CargoAllItems");
            ResultSet rs = Inj.RunSelect();
            while (rs.next()) {
                en = new CargoEntity();
                en.setCargoId(rs.getInt("CargoId"));
                en.setNombre(rs.getString("Nombre"));
                en.setFechaRegistro(rs.getTimestamp("FechaRegistro"));
                en.setCodUsuario(rs.getString("CodUsuario"));
                en.setEstadoRegistro(rs.getBoolean("EstadoRegistro"));
                en.setPruebaId(0);
                DatoMemoria.add(en);

            }

        } catch (SQLException e) {
            System.out.println("ERROR " + e);
            throw new UnsupportedOperationException("Datalater :" + e);
        }
        return DatoMemoria;
    }

    public ArrayList<CargoEntity> GetAllItem(int CargoId) {

        ArrayList<CargoEntity> DatoMemoria = new ArrayList<>();
        CargoEntity en;
        try {
            Inj.Sp("sp_CargoAllItem");
            Inj.Pmt_Integer("v_CargoId", CargoId, false);
            ResultSet rs = Inj.RunSelect();
            while (rs.next()) {

                en = new CargoEntity();
                en.setCargoId(rs.getInt("CargoId"));
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

    public CargoEntity Save(CargoEntity entity) {
        Boolean State = null;
        try {
            String Store = "sp_Cargo_Save";
            if (entity.getAction() == ProcessActionEnum.Update.getValor()) {
                Store = "sp_Cargo_Update";
            }
            Inj.Sp(Store);
            Inj.Pmt_Integer("v_CargoId", entity.getCargoId(), true);
            Inj.Pmt_String("v_Nombre", entity.getNombre(), false);
            Inj.Pmt_String("v_FechaRegistro", Utilidades.getFechaRegistro(), false);
            Inj.Pmt_String("v_CodUsuario", entity.getCodUsuario(), false);
            Inj.Pmt_Boolean("v_EstadoRegistro", entity.getEstadoRegistro(), false);
            if (entity.getAction() == ProcessActionEnum.Add.getValor()) {
                int Id = Inj.RunInsert();
                State = Id > 0;
                if (State) {
                    entity.setCargoId(Id);
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
            Inj.Sp("sp_CargoDelete");
            Inj.Pmt_Integer("v_CargoId", Id, false);
            State = Inj.RunDelete() > 0;
        } catch (Exception ex) {
            throw new UnsupportedOperationException("Datalater : " + ex);
        }
        return State;
    }

}
