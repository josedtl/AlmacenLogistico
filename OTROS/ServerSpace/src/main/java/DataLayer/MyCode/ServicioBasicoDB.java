
package DataLayer.MyCode;

import EntityLayer.ServicioBasicoEntity;
import Framework.injector;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;


public class ServicioBasicoDB {
    
    injector Inj = new injector();

    public ArrayList<ServicioBasicoEntity> GetServicioBasicoLikeItem(String Codigo) {

        ArrayList<ServicioBasicoEntity> DatoMemoria = new ArrayList<>();
        ServicioBasicoEntity en;
        try {
            Inj.Sp("sp_ServicioBasicoLikeItem");
            Inj.Pmt_String("v_Codigo", Codigo, false);
            ResultSet rs = Inj.RunSelect();
            while (rs.next()) {

                en = new ServicioBasicoEntity();
                en.setServicioBasicoId(rs.getInt("ServicioBasicoId"));
                en.setCodigo(rs.getString("Codigo"));
                en.setNombre(rs.getString("Nombre"));
                DatoMemoria.add(en);

            }

        } catch (SQLException e) {
            System.out.println("ERROR " + e);
            throw new UnsupportedOperationException("Datalater :" + e);
        }
        return DatoMemoria;
    }
}
