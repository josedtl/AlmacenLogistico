package DataLayer;

import EntityLayer.InfraestructuraEntity;
import Enumerados.ProcessActionEnum;
import Framework.injector;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import Framework.BaseDB;

public class InfraestructuraDB extends BaseDB {

    injector Inj = new injector();

    public ArrayList<InfraestructuraEntity> GetAllItems() {

        ArrayList<InfraestructuraEntity> DatoMemoria = new ArrayList<>();
        InfraestructuraEntity en;
        try {
            Inj.Sp("sp_InfraestructuraAllItems");
            ResultSet rs = Inj.RunSelect();

            fillSchemeTable(rs);
            while (rs.next()) {
                en = new InfraestructuraEntity();
                if (fillFrom(rs, en)) {
                    DatoMemoria.add(en);
                }
            }

        } catch (SQLException e) {
            System.out.println("ERROR " + e);
            throw new UnsupportedOperationException("Datalater :" + e);
        }
        return DatoMemoria;
    }

    public ArrayList<InfraestructuraEntity> GetAllItem(int InfraestructuraId) {

        ArrayList<InfraestructuraEntity> DatoMemoria = new ArrayList<>();
        InfraestructuraEntity en;
        try {
            Inj.Sp("sp_InfraestructuraObtenerItem");
            Inj.Pmt_Integer("@InfraestructuraId", InfraestructuraId, false);
            ResultSet rs = Inj.RunSelect();
            fillSchemeTable(rs);
            while (rs.next()) {
                en = new InfraestructuraEntity();
                if (fillFrom(rs, en)) {
                    DatoMemoria.add(en);
                }
            }

        } catch (SQLException e) {
            System.out.println("ERROR " + e);
            throw new UnsupportedOperationException("Datalater :" + e);
        }
        return DatoMemoria;
    }

    public InfraestructuraEntity Registrar(InfraestructuraEntity entity) {
        Boolean State = null;
        try {
            String Store = "sp_InfraestructuraRegistar";
            if (entity.getAction() == ProcessActionEnum.Update.getValor()) {
                Store = "sp_InfraestructuraActualizar";
            }
            Inj.Sp(Store);
            Inj.Pmt_Integer("@InfraestructuraId", entity.getInfraestructuraId(), true);
            Inj.Pmt_Integer("@Estado", entity.getEstado(), false);
            Inj.Pmt_Integer("@SucursalId", entity.getSucursalId(), false);
            Inj.Pmt_String("@CodigoSistema", entity.getCodigoSistema(), false);
            Inj.Pmt_String("@CodigoInterno", entity.getCodigoInterno(), false);
            Inj.Pmt_String("@Descripcion", entity.getDescripcion(), false);
            Inj.Pmt_Integer("@TipoInfraestructuraId", entity.getTipoInfraestructuraId(), false);
            Inj.Pmt_Integer("@ClasificacionId", entity.getClasificacionId(), false);
            Inj.Pmt_Integer("@InfraestructuraDimensionId", entity.getInfraestructuraDimensionId(), false);
            Inj.Pmt_Integer("@Aforo", entity.getAforo(), false);
            Inj.Pmt_Integer("@PisoId", entity.getPisoId(), false);
            Inj.Pmt_Date("@FechaRegistro", entity.getFechaRegistro(), false);
            Inj.Pmt_String("@CodUsuario", entity.getCodUsuario(), false);
            Inj.Pmt_Boolean("@EstadoRegistro", entity.getEstadoRegistro(), false);
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
            Inj.Pmt_Integer("@InfraestructuraId", Id, false);
            State = Inj.RunDelete() > 0;
        } catch (Exception ex) {
            throw new UnsupportedOperationException("Datalater : " + ex);
        }
        return State;
    }

    public ArrayList<InfraestructuraEntity> ObtenerMain() {

        ArrayList<InfraestructuraEntity> DatoMemoria = new ArrayList<>();
        InfraestructuraEntity en;
        try {
            Inj.Sp("sp_InfraestructuraObtenerMain");
            ResultSet rs = Inj.RunSelect();
            fillSchemeTable(rs);
            while (rs.next()) {
                en = new InfraestructuraEntity();
                if (fillFrom(rs, en)) {
                    DatoMemoria.add(en);
                }
            }

        } catch (SQLException e) {
            System.out.println("ERROR " + e);
            throw new UnsupportedOperationException("Datalater :" + e);
        }
        return DatoMemoria;
    }

}
