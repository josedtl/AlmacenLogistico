package DataLayer;

import EntityLayer.InfraestructuraEntity;
import Enumerados.ProcessActionEnum;
import Framework.injector;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

public class InfraestructuraDB extends DataLayer.MyCode.InfraestructuraDB {

    injector Inj = new injector();

    public ArrayList<InfraestructuraEntity> GetAllItems() { 

        ArrayList<InfraestructuraEntity> DatoMemoria = new ArrayList<>();
        InfraestructuraEntity en;
        try {
            Inj.Sp("sp_InfraestructuraAllItems");
            ResultSet rs = Inj.RunSelect();
            while (rs.next()) {

                en = new InfraestructuraEntity();
                en.setInfraestructuraId(rs.getInt("InfraestructuraId"));
                en.setSucursalId(rs.getInt("SucursalId"));
                en.setEstado(rs.getInt("Estado"));
                en.setCodigoSistema(rs.getString("CodigoSistema"));
                en.setCodigoInterno(rs.getString("CodigoInterno"));
                en.setDescripcion(rs.getString("Descripcion"));
                en.setTipoInfraestructuraId(rs.getInt("TipoInfraestructuraId"));
                en.setInfraestructuraDimensionId(rs.getInt("InfraestructuraDimensionId"));
                en.setAforo(rs.getInt("Aforo"));
                en.setPisoId(rs.getInt("PisoId"));
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

    public ArrayList<InfraestructuraEntity> GetAllItem(int InfraestructuraId) { 

        ArrayList<InfraestructuraEntity> DatoMemoria = new ArrayList<>();
        InfraestructuraEntity en;
        try {
            Inj.Sp("sp_InfraestructuraAllItem");
            Inj.Pmt_Integer("v_InfraestructuraId", InfraestructuraId, false);
            ResultSet rs = Inj.RunSelect();
            while (rs.next()) {

                en = new InfraestructuraEntity();
                en.setInfraestructuraId(rs.getInt("InfraestructuraId"));
                en.setSucursalId(rs.getInt("SucursalId"));
                en.setEstado(rs.getInt("Estado"));
                en.setCodigoSistema(rs.getString("CodigoSistema"));
                en.setCodigoInterno(rs.getString("CodigoInterno"));
                en.setDescripcion(rs.getString("Descripcion"));
                en.setTipoInfraestructuraId(rs.getInt("TipoInfraestructuraId"));
                en.setInfraestructuraDimensionId(rs.getInt("InfraestructuraDimensionId"));
                en.setAforo(rs.getInt("Aforo"));
                en.setPisoId(rs.getInt("PisoId"));
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

    public InfraestructuraEntity Save(InfraestructuraEntity entity) {
        Boolean State = null;
        try {
            String Store = "sp_Infraestructura_Save";
            if (entity.getAction() == ProcessActionEnum.Update.getValor()) {
                Store = "sp_Infraestructura_Update";
            }
            Inj.Sp(Store);
            Inj.Pmt_Integer("v_InfraestructuraId", entity.getInfraestructuraId(), true);
            Inj.Pmt_Integer("v_SucursalId", entity.getSucursalId(), false);
            Inj.Pmt_Integer("v_Estado", entity.getEstado(), false);
            Inj.Pmt_String("v_CodigoSistema", entity.getCodigoSistema(), false);
            Inj.Pmt_String("v_CodigoInterno", entity.getCodigoInterno(), false);
            Inj.Pmt_String("v_Descripcion", entity.getDescripcion(), false);
            Inj.Pmt_Integer("v_TipoInfraestructuraId", entity.getTipoInfraestructuraId(), false);
            Inj.Pmt_Integer("v_InfraestructuraDimensionId", entity.getInfraestructuraDimensionId(), false);
            Inj.Pmt_Integer("v_Aforo", entity.getAforo(), false);
            Inj.Pmt_Integer("v_PisoId", entity.getPisoId(), false);
              Inj.Pmt_Date("v_FechaRegistro", entity.getFechaRegistro(), false);
            Inj.Pmt_String("v_CodUsuario", entity.getCodUsuario(), false);
            Inj.Pmt_Boolean("v_EstadoRegistro", entity.getEstadoRegistro(), false);
            if (entity.getAction() == ProcessActionEnum.Add.getValor()) {
                int Id = Inj.RunInsert();
                State = Id > 0;
                if (State) {
                    entity.setInfraestructuraId(Id);
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
            Inj.Sp("sp_InfraestructuraDelete");
            Inj.Pmt_Integer("v_InfraestructuraId", Id, false);
            State = Inj.RunDelete() > 0;
        } catch (Exception ex) {
            throw new UnsupportedOperationException("Datalater : " + ex);
        }
        return State;
    }

}
