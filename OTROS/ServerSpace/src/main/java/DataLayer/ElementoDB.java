package DataLayer;

import EntityLayer.ElementoEntity;
import Enumerados.ProcessActionEnum;
import Framework.injector;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

public class ElementoDB {

    injector Inj = new injector();

    public ArrayList<ElementoEntity> GetAllItems() {

        ArrayList<ElementoEntity> DatoMemoria = new ArrayList<>();
        ElementoEntity en;
        try {
            Inj.Sp("sp_ElementoAllItems");
            ResultSet rs = Inj.RunSelect();
            while (rs.next()) {

                en = new ElementoEntity();
                en.setElementoId(rs.getInt("ElementoId"));
                en.setEstadoElemento(rs.getInt("EstadoElemento"));
                en.setTipoElementoId(rs.getInt("TipoElementoId"));
                en.setDescripcion(rs.getString("Descripcion"));
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

    public ArrayList<ElementoEntity> GetAllItem(int ElementoId) {

        ArrayList<ElementoEntity> DatoMemoria = new ArrayList<>();
        ElementoEntity en;
        try {
            Inj.Sp("sp_ElementoAllItem");
            Inj.Pmt_Integer("v_ElementoId", ElementoId, false);
            ResultSet rs = Inj.RunSelect();
            while (rs.next()) {

                en = new ElementoEntity();
                en.setElementoId(rs.getInt("ElementoId"));
                en.setEstadoElemento(rs.getInt("EstadoElemento"));
                en.setTipoElementoId(rs.getInt("TipoElementoId"));
                en.setDescripcion(rs.getString("Descripcion"));
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

    public ElementoEntity Save(ElementoEntity entity) {
        Boolean State = null;
        try {
            String Store = "sp_Elemento_Save";
            if (entity.getAction() == ProcessActionEnum.Update.getValor()) {
                Store = "sp_Elemento_Update";
            }
            Inj.Sp(Store);
            Inj.Pmt_Integer("v_ElementoId", entity.getElementoId(), true);
            Inj.Pmt_Integer("v_EstadoElemento", entity.getEstadoElemento(), false);
            Inj.Pmt_Integer("v_TipoElementoId", entity.getTipoElementoId(), false);
            Inj.Pmt_String("v_Descripcion", entity.getDescripcion(), false);
            Inj.Pmt_Date("v_FechaRegistro", entity.getFechaRegistro(), false);
            Inj.Pmt_String("v_CodUsuario", entity.getCodUsuario(), false);
            Inj.Pmt_Boolean("v_EstadoRegistro", entity.getEstadoRegistro(), false);
            if (entity.getAction() == ProcessActionEnum.Add.getValor()) {
                int Id = Inj.RunInsert();
                State = Id > 0;
                if (State) {
                    entity.setElementoId(Id);
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
            Inj.Sp("sp_ElementoDelete");
            Inj.Pmt_Integer("v_ElementoId", Id, false);
            State = Inj.RunDelete() > 0;
        } catch (Exception ex) {
            throw new UnsupportedOperationException("Datalater : " + ex);
        }
        return State;
    }

}
