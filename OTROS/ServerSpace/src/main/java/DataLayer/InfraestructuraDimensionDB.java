package DataLayer;

import EntityLayer.InfraestructuraDimensionEntity;
import Enumerados.ProcessActionEnum;
import Framework.injector;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

public class InfraestructuraDimensionDB {

    injector Inj = new injector();

    public ArrayList<InfraestructuraDimensionEntity> GetAllItems() { 

        ArrayList<InfraestructuraDimensionEntity> DatoMemoria = new ArrayList<>();
        InfraestructuraDimensionEntity en;
        try {
            Inj.Sp("sp_InfraestructuraDimensionAllItems");
            ResultSet rs = Inj.RunSelect();
            while (rs.next()) {

                en = new InfraestructuraDimensionEntity();
                en.setInfraestructuraDimensionId(rs.getInt("InfraestructuraDimensionId"));
                en.setNombre(rs.getString("Nombre"));
                en.setAltura(rs.getInt("Altura"));
                en.setLargo(rs.getInt("Largo"));
                en.setAncho(rs.getInt("Ancho"));
                DatoMemoria.add(en);

            }

        } catch (SQLException e) {
            System.out.println("ERROR "+e);
            throw new UnsupportedOperationException("Datalater :" + e);
        }
        return DatoMemoria;
    }

    public ArrayList<InfraestructuraDimensionEntity> GetAllItem(int InfraestructuraDimensionId) { 

        ArrayList<InfraestructuraDimensionEntity> DatoMemoria = new ArrayList<>();
        InfraestructuraDimensionEntity en;
        try {
            Inj.Sp("sp_InfraestructuraDimensionAllItem");
            Inj.Pmt_Integer("v_InfraestructuraDimensionId", InfraestructuraDimensionId, false);
            ResultSet rs = Inj.RunSelect();
            while (rs.next()) {

                en = new InfraestructuraDimensionEntity();
                en.setInfraestructuraDimensionId(rs.getInt("InfraestructuraDimensionId"));
                en.setNombre(rs.getString("Nombre"));
                en.setAltura(rs.getInt("Altura"));
                en.setLargo(rs.getInt("Largo"));
                en.setAncho(rs.getInt("Ancho"));
                DatoMemoria.add(en);

            }

        } catch (SQLException e) {
            System.out.println("ERROR "+e);
            throw new UnsupportedOperationException("Datalater :" + e);
        }
        return DatoMemoria;
    }

    public InfraestructuraDimensionEntity Save(InfraestructuraDimensionEntity entity) {
        Boolean State = null;
        try {
            String Store = "sp_InfraestructuraDimension_Save";
            if (entity.getAction() == ProcessActionEnum.Update.getValor()) {
                Store = "sp_InfraestructuraDimension_Update";
            }
            Inj.Sp(Store);
            Inj.Pmt_Integer("v_InfraestructuraDimensionId", entity.getInfraestructuraDimensionId(), true);
            Inj.Pmt_String("v_Nombre", entity.getNombre(), false);
            Inj.Pmt_Double("v_Altura", entity.getAltura(), false);
            Inj.Pmt_Double("v_Largo", entity.getLargo(), false);
            Inj.Pmt_Double("v_Ancho", entity.getAncho(), false);
            if (entity.getAction() == ProcessActionEnum.Add.getValor()) {
                int Id = Inj.RunInsert();
                State = Id > 0;
                if (State) {
                    entity.setInfraestructuraDimensionId(Id);
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
            Inj.Sp("sp_InfraestructuraDimensionDelete");
            Inj.Pmt_Integer("v_InfraestructuraDimensionId", Id, false);
            State = Inj.RunDelete() > 0;
        } catch (Exception ex) {
            throw new UnsupportedOperationException("Datalater : " + ex);
        }
        return State;
    }

}
