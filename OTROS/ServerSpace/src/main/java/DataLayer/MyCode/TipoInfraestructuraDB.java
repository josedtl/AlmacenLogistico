
package DataLayer.MyCode;

import EntityLayer.TipoInfraestructuraEntity;
import Framework.injector;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;


public class TipoInfraestructuraDB {
     injector Inj = new injector(); 

    public ArrayList<TipoInfraestructuraEntity> GetTipoInfraestructuraLikeItem(String Nombre) {

        ArrayList<TipoInfraestructuraEntity> DatoMemoria = new ArrayList<>();
        TipoInfraestructuraEntity en;
        try {
            Inj.Sp("sp_TipoInfraestructuraLikeItem");
            Inj.Pmt_String("v_Nombre", Nombre, false);
            ResultSet rs = Inj.RunSelect();
            while (rs.next()) {

                en = new TipoInfraestructuraEntity();
                en.setTipoInfraestructuraId(rs.getInt("TipoInfraestructuraId"));
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
