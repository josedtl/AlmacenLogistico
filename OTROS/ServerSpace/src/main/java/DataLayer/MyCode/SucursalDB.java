
package DataLayer.MyCode;

import EntityLayer.SucursalEntity;
import Framework.injector;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

public class SucursalDB {
    injector Inj = new injector();

    public ArrayList<SucursalEntity> GetSucursalLikeItem(String Codigo) {

        ArrayList<SucursalEntity> DatoMemoria = new ArrayList<>();
        SucursalEntity en;
        try {
            Inj.Sp("sp_sucursalLikeItem");
            Inj.Pmt_String("v_Codigo", Codigo, false);
            ResultSet rs = Inj.RunSelect();
            while (rs.next()) {

                en = new SucursalEntity();
                en.setSucursalId(rs.getInt("SucursalId"));
                en.setCodigo(rs.getString("Codigo"));
                DatoMemoria.add(en);

            }

        } catch (SQLException e) {
            System.out.println("ERROR " + e);
            throw new UnsupportedOperationException("Datalater :" + e);
        }
        return DatoMemoria;
    }
}
