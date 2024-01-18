package DataLayer;

import EntityLayer.EmpleadoEntity;
import Enumerados.ProcessActionEnum;
import Framework.injector;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

public class EmpleadoDB extends DataLayer.MyCode.EmpleadoDB{

    injector Inj = new injector();

    public ArrayList<EmpleadoEntity> GetAllItems() { 

        ArrayList<EmpleadoEntity> DatoMemoria = new ArrayList<>();
        EmpleadoEntity en;
        try {
            Inj.Sp("sp_EmpleadoAllItems");
            ResultSet rs = Inj.RunSelect();
            while (rs.next()) {

                en = new EmpleadoEntity();
                en.setEmpleadoId(rs.getInt("EmpleadoId"));
                en.setEmpresaId(rs.getInt("EmpresaId"));
                en.setSucursalId(rs.getInt("SucursalId"));
                en.setPersonaNaturalId(rs.getInt("PersonaNaturalId"));
                en.setAreaId(rs.getInt("AreaId"));
                en.setCargoId(rs.getInt("CargoId"));
                en.setCorreoCorporativo(rs.getString("CorreoCorporativo"));
                en.setFechaIngreso(rs.getDate("FechaIngreso"));
                en.setFechaRegistro(rs.getDate("FechaRegistro"));
                en.setCodUsuario(rs.getString("CodUsuario"));
                en.setEstado(rs.getBoolean("Estado"));
                DatoMemoria.add(en);

            }

        } catch (SQLException e) {
            System.out.println("ERROR "+e);
            throw new UnsupportedOperationException("Datalater :" + e);
        }
        return DatoMemoria;
    }

    public ArrayList<EmpleadoEntity> GetAllItem(int EmpleadoId) { 

        ArrayList<EmpleadoEntity> DatoMemoria = new ArrayList<>();
        EmpleadoEntity en;
        try {
            Inj.Sp("sp_EmpleadoAllItem");
            Inj.Pmt_Integer("v_EmpleadoId", EmpleadoId, false);
            ResultSet rs = Inj.RunSelect();
            while (rs.next()) {

                en = new EmpleadoEntity();
                en.setEmpleadoId(rs.getInt("EmpleadoId"));
                en.setEmpresaId(rs.getInt("EmpresaId"));
                en.setSucursalId(rs.getInt("SucursalId"));
                en.setPersonaNaturalId(rs.getInt("PersonaNaturalId"));
                en.setAreaId(rs.getInt("AreaId"));
                en.setCargoId(rs.getInt("CargoId"));
                en.setCorreoCorporativo(rs.getString("CorreoCorporativo"));
                en.setFechaIngreso(rs.getDate("FechaIngreso"));
                en.setFechaRegistro(rs.getDate("FechaRegistro"));
                en.setCodUsuario(rs.getString("CodUsuario"));
                en.setEstado(rs.getBoolean("Estado"));
                DatoMemoria.add(en);

            }

        } catch (SQLException e) {
            System.out.println("ERROR "+e);
            throw new UnsupportedOperationException("Datalater :" + e);
        }
        return DatoMemoria;
    }

    public EmpleadoEntity Save(EmpleadoEntity entity) {
        Boolean State = null;
        try {
            String Store = "sp_Empleado_Save";
            if (entity.getAction() == ProcessActionEnum.Update.getValor()) {
                Store = "sp_Empleado_Update";
            }
            Inj.Sp(Store);
            Inj.Pmt_Integer("v_EmpleadoId", entity.getEmpleadoId(), true);
            Inj.Pmt_Integer("v_EmpresaId", entity.getEmpresaId(), false);
            Inj.Pmt_Integer("v_SucursalId", entity.getSucursalId(), false);
            Inj.Pmt_Integer("v_PersonaNaturalId", entity.getPersonaNaturalId(), false);
            Inj.Pmt_Integer("v_AreaId", entity.getAreaId(), false);
            Inj.Pmt_Integer("v_CargoId", entity.getCargoId(), false);
            Inj.Pmt_String("v_CorreoCorporativo", entity.getCorreoCorporativo(), false);
//            Inj.Pmt_Date("v_FechaIngreso", new java.sql.Date(entity.getFechaIngreso().getTime()), false);
//            Inj.Pmt_Date("v_FechaRegistro", new java.sql.Date(entity.getFechaRegistro().getTime()), false);
            Inj.Pmt_String("v_CodUsuario", entity.getCodUsuario(), false);
            Inj.Pmt_Boolean("v_Estado", entity.getEstado(), false);
            if (entity.getAction() == ProcessActionEnum.Add.getValor()) {
                int Id = Inj.RunInsert();
                State = Id > 0;
                if (State) {
                    entity.setEmpleadoId(Id);
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
            Inj.Sp("sp_EmpleadoDelete");
            Inj.Pmt_Integer("v_EmpleadoId", Id, false);
            State = Inj.RunDelete() > 0;
        } catch (Exception ex) {
            throw new UnsupportedOperationException("Datalater : " + ex);
        }
        return State;
    }

}
