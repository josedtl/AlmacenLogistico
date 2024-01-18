package DataLayer;

import EntityLayer.PisoEntity;
import Enumerados.ProcessActionEnum;
import Framework.injector;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

public class PisoDB extends DataLayer.MyCode.PisoDB{

    injector Inj = new injector();

    public ArrayList<PisoEntity> GetAllItems() { 

        ArrayList<PisoEntity> DatoMemoria = new ArrayList<>();
        PisoEntity en;
        try {
            Inj.Sp("sp_PisoAllItems");
            ResultSet rs = Inj.RunSelect();
            while (rs.next()) {

                en = new PisoEntity();
                en.setPisoId(rs.getInt("PisoId"));
                en.setCodigo(rs.getString("Codigo"));
                en.setValor(rs.getInt("Valor"));
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

    public ArrayList<PisoEntity> GetAllItem(int PisoId) { 

        ArrayList<PisoEntity> DatoMemoria = new ArrayList<>();
        PisoEntity en;
        try {
            Inj.Sp("sp_PisoAllItem");
            Inj.Pmt_Integer("v_PisoId", PisoId, false);
            ResultSet rs = Inj.RunSelect();
            while (rs.next()) {

                en = new PisoEntity();
                en.setPisoId(rs.getInt("PisoId"));
                en.setCodigo(rs.getString("Codigo"));
                en.setValor(rs.getInt("Valor"));
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

    public PisoEntity Save(PisoEntity entity) {
        Boolean State = null;
        try {
            String Store = "sp_Piso_Save";
            if (entity.getAction() == ProcessActionEnum.Update.getValor()) {
                Store = "sp_Piso_Update";
            }
            Inj.Sp(Store);
            Inj.Pmt_Integer("v_PisoId", entity.getPisoId(), true);
            Inj.Pmt_String("v_Codigo", entity.getCodigo(), false);
            Inj.Pmt_Double("v_Valor", entity.getValor(), false);
            Inj.Pmt_Date("v_FechaRegistro", entity.getFechaRegistro(), false);
            Inj.Pmt_String("v_CodUsuario", entity.getCodUsuario(), false);
            Inj.Pmt_Boolean("v_EstadoRegistro", entity.getEstadoRegistro(), false);
            if (entity.getAction() == ProcessActionEnum.Add.getValor()) {
                int Id = Inj.RunInsert();
                State = Id > 0;
                if (State) {
                    entity.setPisoId(Id);
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
            Inj.Sp("sp_PisoDelete");
            Inj.Pmt_Integer("v_PisoId", Id, false);
            State = Inj.RunDelete() > 0;
        } catch (Exception ex) {
            throw new UnsupportedOperationException("Datalater : " + ex);
        }
        return State;
    }

}
