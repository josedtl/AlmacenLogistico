package DataLayer;

import EntityLayer.ServicioEntity;
import Enumerados.ProcessActionEnum;
import Framework.BaseDB;
import Framework.Inj;
import Framework.Utilidades;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

public class ServicioDB extends BaseDB {
    public ArrayList<ServicioEntity> ObtenerMain() {

        ArrayList<ServicioEntity> DatoMemoria = new ArrayList<>();
        ServicioEntity en;
        try {
            Inj.Sp("sp_ServicioObtenerMain");
            ResultSet rs = Inj.RunSelect();
            fillSchemeTable(rs);
            while (rs.next()) {
                en = new ServicioEntity();
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

    public ServicioEntity Save(ServicioEntity entity) {
        Boolean State = null;
        try {
            Inj.IniciarTranssaccion(false);
            String Store = "sp_ServicioRegistrar";
            if (entity.getAction() == ProcessActionEnum.Update.getValor()) {
                Store = "sp_ServicioActualizar";
            }
            Inj.Sp(Store);
            Inj.Pmt_Integer("@ServicioId", entity.getServicioId(), true);
            Inj.Pmt_String("@Nombre", entity.getNombre(), false);
            Inj.Pmt_String("@Descripcion", entity.getDescripcion(), false);
            Inj.Pmt_Integer("@TipoServicioId", entity.getTipoServicioId(), false);
            Inj.Pmt_String("@FechaRegistro", Utilidades.getFechaRegistro(), false);
            Inj.Pmt_String("@CodUsuario", entity.getCodUsuario(), false);
            Inj.Pmt_Boolean("@EstadoRegistro", entity.getEstadoRegistro(), false);
            if (entity.getAction() == ProcessActionEnum.Add.getValor()) {
                int Id = Inj.RunInsert();
                State = Id > 0;
                if (State) {
                    entity.setServicioId(Id);
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

    public ArrayList<ServicioEntity> ObtenerItem(int ServicioId) {

        ArrayList<ServicioEntity> DatoMemoria = new ArrayList<>();
        ServicioEntity en;
        try {
            Inj.Sp("sp_ServicioObtenerItem");
            Inj.Pmt_Integer("@ServicioId", ServicioId, false);
            ResultSet rs = Inj.RunSelect();
            fillSchemeTable(rs);
            while (rs.next()) {
                en = new ServicioEntity();
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
