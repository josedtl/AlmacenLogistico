package DataLayer;

import EntityLayer.SucursalEntity;
import Enumerados.ProcessActionEnum;
import Framework.injector;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

public class SucursalDB extends Business.MyCode.Sucursal{

    injector Inj = new injector();

    public ArrayList<SucursalEntity> GetAllItems() { 

        ArrayList<SucursalEntity> DatoMemoria = new ArrayList<>();
        SucursalEntity en;
        try {
            Inj.Sp("sp_SucursalAllItems");
            ResultSet rs = Inj.RunSelect();
            while (rs.next()) {

                en = new SucursalEntity();
                en.setSucursalId(rs.getInt("SucursalId"));
                en.setEmpresaId(rs.getInt("EmpresaId"));
                en.setCodigo(rs.getString("Codigo"));
                en.setNombre(rs.getString("Nombre"));
                en.setDescripcion(rs.getString("Descripcion"));
                en.setUbigeoId(rs.getInt("UbigeoId"));
                en.setDireccion(rs.getString("Direccion"));
                en.setFechaRegistro(rs.getDate("FechaRegistro"));
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

    public ArrayList<SucursalEntity> GetAllItem(int SucursalId) { 

        ArrayList<SucursalEntity> DatoMemoria = new ArrayList<>();
        SucursalEntity en;
        try {
            Inj.Sp("sp_SucursalAllItem");
            Inj.Pmt_Integer("v_SucursalId", SucursalId, false);
            ResultSet rs = Inj.RunSelect();
            while (rs.next()) {

                en = new SucursalEntity();
                en.setSucursalId(rs.getInt("SucursalId"));
                en.setEmpresaId(rs.getInt("EmpresaId"));
                en.setCodigo(rs.getString("Codigo"));
                en.setNombre(rs.getString("Nombre"));
                en.setDescripcion(rs.getString("Descripcion"));
                en.setUbigeoId(rs.getInt("UbigeoId"));
                en.setDireccion(rs.getString("Direccion"));
                en.setFechaRegistro(rs.getDate("FechaRegistro"));
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

    public SucursalEntity Save(SucursalEntity entity) {
        Boolean State = null;
        try {
            String Store = "sp_Sucursal_Save";
            if (entity.getAction() == ProcessActionEnum.Update.getValor()) {
                Store = "sp_Sucursal_Update";
            }
            Inj.Sp(Store);
            Inj.Pmt_Integer("v_SucursalId", entity.getSucursalId(), true);
            Inj.Pmt_Integer("v_EmpresaId", entity.getEmpresaId(), false);
            Inj.Pmt_String("v_Codigo", entity.getCodigo(), false);
            Inj.Pmt_String("v_Nombre", entity.getNombre(), false);
            Inj.Pmt_String("v_Descripcion", entity.getDescripcion(), false);
            Inj.Pmt_Integer("v_UbigeoId", entity.getUbigeoId(), false);
            Inj.Pmt_String("v_Direccion", entity.getDireccion(), false);
//            Inj.Pmt_Date("v_FechaRegistro", new java.sql.Date(entity.getFechaRegistro().getTime()), false);
            Inj.Pmt_String("v_CodUsuario", entity.getCodUsuario(), false);
            Inj.Pmt_Boolean("v_EstadoRegistro", entity.getEstadoRegistro(), false);
            if (entity.getAction() == ProcessActionEnum.Add.getValor()) {
                int Id = Inj.RunInsert();
                State = Id > 0;
                if (State) {
                    entity.setSucursalId(Id);
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
            Inj.Sp("sp_SucursalDelete");
            Inj.Pmt_Integer("v_SucursalId", Id, false);
            State = Inj.RunDelete() > 0;
        } catch (Exception ex) {
            throw new UnsupportedOperationException("Datalater : " + ex);
        }
        return State;
    }

}
