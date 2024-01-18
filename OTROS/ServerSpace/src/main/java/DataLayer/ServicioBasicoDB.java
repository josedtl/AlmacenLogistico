package DataLayer;

import EntityLayer.ServicioBasicoEntity;
import Enumerados.ProcessActionEnum;
import Framework.injector;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

public class ServicioBasicoDB extends DataLayer.MyCode.ServicioBasicoDB{

    injector Inj = new injector();

    public ArrayList<ServicioBasicoEntity> GetAllItems() { 

        ArrayList<ServicioBasicoEntity> DatoMemoria = new ArrayList<>();
        ServicioBasicoEntity en;
        try {
            Inj.Sp("sp_ServicioBasicoAllItems");
            ResultSet rs = Inj.RunSelect();
            while (rs.next()) {

                en = new ServicioBasicoEntity();
                en.setServicioBasicoId(rs.getInt("ServicioBasicoId"));
                en.setCodigo(rs.getString("Codigo"));
                en.setNombre(rs.getString("Nombre"));
                en.setDescripcion(rs.getString("Descripcion"));
                en.setFechaRegistro(rs.getTimestamp("FechaRegistro"));
                en.setCodUsuario(rs.getString("CodUsuario"));
                en.setEstadoRegistro(rs.getBoolean("EstadoRegistro"));
                DatoMemoria.add(en);

            }

        } catch (SQLException e) {
            System.out.println("ERROR "+e);
            throw new UnsupportedOperationException("Datalater :" + e);
        }
        return DatoMemoria;
    }

    public ArrayList<ServicioBasicoEntity> GetAllItem(int ServicioBasicoId) { 

        ArrayList<ServicioBasicoEntity> DatoMemoria = new ArrayList<>();
        ServicioBasicoEntity en;
        try {
            Inj.Sp("sp_ServicioBasicoAllItem");
            Inj.Pmt_Integer("v_ServicioBasicoId", ServicioBasicoId, false);
            ResultSet rs = Inj.RunSelect();
            while (rs.next()) {

                en = new ServicioBasicoEntity();
                en.setServicioBasicoId(rs.getInt("ServicioBasicoId"));
                en.setCodigo(rs.getString("Codigo"));
                en.setNombre(rs.getString("Nombre"));
                en.setDescripcion(rs.getString("Descripcion"));
                en.setFechaRegistro(rs.getTimestamp("FechaRegistro"));
                en.setCodUsuario(rs.getString("CodUsuario"));
                en.setEstadoRegistro(rs.getBoolean("EstadoRegistro"));
                DatoMemoria.add(en);

            }

        } catch (SQLException e) {
            System.out.println("ERROR "+e);
            throw new UnsupportedOperationException("Datalater :" + e);
        }
        return DatoMemoria;
    }

    public ServicioBasicoEntity Save(ServicioBasicoEntity entity) {
        Boolean State = null;
        try {
            String Store = "sp_ServicioBasico_Save";
            if (entity.getAction() == ProcessActionEnum.Update.getValor()) {
                Store = "sp_ServicioBasico_Update";
            }
            Inj.Sp(Store);
            Inj.Pmt_Integer("v_ServicioBasicoId", entity.getServicioBasicoId(), true);
            Inj.Pmt_String("v_Codigo", entity.getCodigo(), false);
            Inj.Pmt_String("v_Nombre", entity.getNombre(), false);
            Inj.Pmt_String("v_Descripcion", entity.getDescripcion(), false);
                Inj.Pmt_Date("v_FechaRegistro", entity.getFechaRegistro(), false);
            Inj.Pmt_String("v_CodUsuario", entity.getCodUsuario(), false);
            Inj.Pmt_Boolean("v_EstadoRegistro", entity.getEstadoRegistro(), false);
            if (entity.getAction() == ProcessActionEnum.Add.getValor()) {
                int Id = Inj.RunInsert();
                State = Id > 0;
                if (State) {
                    entity.setServicioBasicoId(Id);
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
            Inj.Sp("sp_ServicioBasicoDelete");
            Inj.Pmt_Integer("v_ServicioBasicoId", Id, false);
            State = Inj.RunDelete() > 0;
        } catch (Exception ex) {
            throw new UnsupportedOperationException("Datalater : " + ex);
        }
        return State;
    }

}
