
package DataLayer.MyCode;

import EntityLayer.PisoEntity;
import Framework.injector;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

public class PisoDB {
    injector Inj = new injector();

    public ArrayList<PisoEntity> GetPisoLikeItem(String Codigo) {

        ArrayList<PisoEntity> DatoMemoria = new ArrayList<>();
        PisoEntity en;
        try {
            Inj.Sp("sp_PisoLikeItem");
            Inj.Pmt_String("v_Codigo", Codigo, false);
            ResultSet rs = Inj.RunSelect();
            while (rs.next()) {

                en = new PisoEntity();
                en.setPisoId(rs.getInt("pisoId"));
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
