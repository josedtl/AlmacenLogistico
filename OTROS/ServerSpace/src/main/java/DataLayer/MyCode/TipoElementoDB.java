
package DataLayer.MyCode;

import EntityLayer.TipoElementoEntity;
import Framework.injector;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

public class TipoElementoDB {
    injector Inj = new injector();

    public ArrayList<TipoElementoEntity> GetTipoElementoLikeItem(String Nombre) {

        ArrayList<TipoElementoEntity> DatoMemoria = new ArrayList<>();
        TipoElementoEntity en;
        try {
            Inj.Sp("sp_TipoElementoLikeItem");
            Inj.Pmt_String("v_Nombre", Nombre, false);
            ResultSet rs = Inj.RunSelect();
            while (rs.next()) {

                en = new TipoElementoEntity();
                en.setTipoElementoId(rs.getInt("TipoElementoId"));
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
