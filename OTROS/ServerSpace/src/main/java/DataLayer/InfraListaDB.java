package DataLayer;

import EntityLayer.InfraListaEntity;
import Framework.injector;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import Framework.BaseDB;


public class InfraListaDB extends BaseDB{

    injector Inj = new injector();


    public ArrayList<InfraListaEntity> GetAllItem(int ListaId) { 

        ArrayList<InfraListaEntity> DatoMemoria = new ArrayList<>();
        InfraListaEntity en;
        try {
            Inj.Sp("sp_InfraListaObtenerItem");
            Inj.Pmt_Integer("@ListaId", ListaId, false);
            ResultSet rs = Inj.RunSelect();
            fillSchemeTable(rs);
            while (rs.next()) {
                en = new InfraListaEntity();
                if (fillFrom(rs, en)) { 
                    DatoMemoria.add(en);
                }
            }

        } catch (SQLException e) {
            System.out.println("ERROR "+e);
            throw new UnsupportedOperationException("Datalater :" + e);
        }
        return DatoMemoria;
    }




}
