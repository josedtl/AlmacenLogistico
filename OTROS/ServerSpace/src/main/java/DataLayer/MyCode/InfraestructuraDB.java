
package DataLayer.MyCode;

import EntityLayer.InfraestructuraEntity;
import Framework.injector;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

public class InfraestructuraDB {
     injector Inj = new injector();

    public ArrayList<InfraestructuraEntity> GetInfraestructuraMainItems() {

        ArrayList<InfraestructuraEntity> DatoMemoria = new ArrayList<>();
        InfraestructuraEntity en;
        try {
            Inj.Sp("sp_InfraestructuraMainItems");
            ResultSet rs = Inj.RunSelect();
            while (rs.next()) {

                en = new InfraestructuraEntity();
                en.setInfraestructuraId(rs.getInt("InfraestructuraId"));
                en.setSucursalId(rs.getInt("SucursalId"));
                en.setEstado(rs.getInt("Estado"));
                en.setCodigoSistema(rs.getString("CodigoSistema"));
                en.setCodigoInterno(rs.getString("CodigoInterno"));
                en.setDescripcion(rs.getString("Descripcion"));
                en.setTipoInfraestructuraId(rs.getInt("TipoInfraestructuraId"));
                en.setInfraestructuraDimensionId(rs.getInt("InfraestructuraDimensionId"));
                en.setAforo(rs.getInt("Aforo"));
                en.setPisoId(rs.getInt("PisoId"));
                en.setFechaRegistro(rs.getTimestamp("FechaRegistro"));
                en.setCodUsuario(rs.getString("CodUsuario"));
                DatoMemoria.add(en);

            }

        } catch (SQLException e) {
            System.out.println("ERROR " + e);
            throw new UnsupportedOperationException("Datalater :" + e);
        }
        return DatoMemoria;
    }

}
