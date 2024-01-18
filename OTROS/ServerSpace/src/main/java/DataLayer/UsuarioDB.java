package DataLayer;

import EntityLayer.UsuarioEntity;
import Enumerados.ProcessActionEnum;
import Framework.injector;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

public class UsuarioDB {

    injector Inj = new injector();

    public ArrayList<UsuarioEntity> GetAllItems() { 

        ArrayList<UsuarioEntity> DatoMemoria = new ArrayList<>();
        UsuarioEntity en;
        try {
            Inj.Sp("sp_UsuarioAllItems");
            ResultSet rs = Inj.RunSelect();
            while (rs.next()) {

                en = new UsuarioEntity();
                en.setUsuarioId(rs.getInt("UsuarioId"));
                en.setEmpleadoId(rs.getInt("EmpleadoId"));
                en.setCodUsuario(rs.getString("CodUsuario"));
                en.setContrasena(rs.getString("Contrasena"));
//                en.setFechaRegistro(rs.getDate("FechaRegistro"));
                en.setRegistroCodUsuario(rs.getString("RegistroCodUsuario"));
                en.setEstado(rs.getBoolean("Estado"));
            }

        } catch (SQLException e) {
            System.out.println("ERROR "+e);
            throw new UnsupportedOperationException("Datalater :" + e);
        }
        return DatoMemoria;
    }

    public ArrayList<UsuarioEntity> GetAllItem(int UsuarioId) { 

        ArrayList<UsuarioEntity> DatoMemoria = new ArrayList<>();
        UsuarioEntity en;
        try {
            Inj.Sp("sp_UsuarioAllItem");
            Inj.Pmt_Integer("v_UsuarioId", UsuarioId, false);
            ResultSet rs = Inj.RunSelect();
            while (rs.next()) {

                en = new UsuarioEntity();
                en.setUsuarioId(rs.getInt("UsuarioId"));
                en.setEmpleadoId(rs.getInt("EmpleadoId"));
                en.setCodUsuario(rs.getString("CodUsuario"));
                en.setContrasena(rs.getString("Contrasena"));
//                en.setFechaRegistro(rs.getDate("FechaRegistro"));
                en.setRegistroCodUsuario(rs.getString("RegistroCodUsuario"));
                en.setEstado(rs.getBoolean("Estado"));
            }

        } catch (SQLException e) {
            System.out.println("ERROR "+e);
            throw new UnsupportedOperationException("Datalater :" + e);
        }
        return DatoMemoria;
    }

    public UsuarioEntity Save(UsuarioEntity entity) {
        Boolean State = null;
        try {
            String Store = "sp_Usuario_Save";
            if (entity.getAction() == ProcessActionEnum.Update.getValor()) {
                Store = "sp_Usuario_Update";
            }
            Inj.Sp(Store);
            Inj.Pmt_Integer("v_UsuarioId", entity.getUsuarioId(), true);
            Inj.Pmt_Integer("v_EmpleadoId", entity.getEmpleadoId(), false);
            Inj.Pmt_String("v_CodUsuario", entity.getCodUsuario(), false);
            Inj.Pmt_String("v_Contrasena", entity.getContrasena(), false);
//            Inj.Pmt_Date("v_FechaRegistro", new java.sql.Date(entity.getFechaRegistro().getTime()), false);
            Inj.Pmt_String("v_RegistroCodUsuario", entity.getRegistroCodUsuario(), false);
            Inj.Pmt_Boolean("v_Estado", entity.getEstado(), false);
            if (entity.getAction() == ProcessActionEnum.Add.getValor()) {
                int Id = Inj.RunInsert();
                State = Id > 0;
                if (State) {
                    entity.setUsuarioId(Id);
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
            Inj.Sp("sp_UsuarioDelete");
            Inj.Pmt_Integer("v_UsuarioId", Id, false);
            State = Inj.RunDelete() > 0;
        } catch (Exception ex) {
            throw new UnsupportedOperationException("Datalater : " + ex);
        }
        return State;
    }

}
