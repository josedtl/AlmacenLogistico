package Framework;

import java.sql.Connection;
import java.sql.DriverManager;

/**
 *
 * @author DAVID
 */
public class Conexion {

    public Connection ConexionBD() {
        Connection con = null;
        try {
            con = DriverManager.getConnection(EnvItem.getURL(), EnvItem.getUsuario(), EnvItem.getContrasena());

            return con;
        } catch (Exception e) {
            e.printStackTrace();
            return con;
        }
    }

}
