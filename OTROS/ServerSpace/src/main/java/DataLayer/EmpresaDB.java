
package DataLayer;

import EntityLayer.EmpresaEntity;
import Enumerados.ProcessActionEnum;
import Framework.injector;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

/**
 *
 * @author RUTH
 */
public class EmpresaDB {
    
    injector Inj = new injector();

    public ArrayList<EmpresaEntity> getEmpresaItems() {

        ArrayList<EmpresaEntity> DatoMemoria = new ArrayList<>();
        EmpresaEntity en;
        try {

            Inj.Sp("sp_EmpresaItems");
            ResultSet rs = Inj.RunSelect();
            while (rs.next()) {

                en = new EmpresaEntity();
                en.setEmpresaId(rs.getInt("EmpresaId"));
                en.setTipoDocumentoIdentidadId(rs.getInt("TipoDocumentoIdentidadId"));
                en.setNumeroDocumento(rs.getString("NumeroDocumento"));
                en.setRazonSocial(rs.getString("RazonSocial"));
                en.setNombreComercial(rs.getString("NombreComercial"));
                en.setEstadoContribuyente(rs.getInt("EstadoContribuyente"));
                en.setCondicionContribuyente(rs.getInt("CondicionContribuyente"));
                en.setUbigeoId(rs.getInt("UbigeoId"));
                en.setDireccion(rs.getString("Direccion"));
                en.setAction(ProcessActionEnum.Loaded);
                DatoMemoria.add(en);

            }

        } catch (SQLException e) {
            System.out.println("ERROR" + e);
            throw new UnsupportedOperationException("Datalater :" + e);
        }
        return DatoMemoria;
    }

}
