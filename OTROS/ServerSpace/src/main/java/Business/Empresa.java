
package Business;

import DataLayer.EmpresaDB;
import EntityLayer.EmpresaEntity;
import java.util.ArrayList;

/**
 *
 * @author RUTH
 */
public class Empresa {

    public ArrayList<EmpresaEntity> getEmpresaItems() {

        EmpresaDB BD = new EmpresaDB();
        return BD.getEmpresaItems();

    }
  
}
