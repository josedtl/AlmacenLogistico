
package Business.MyCode;

import DataLayer.SucursalDB;
import EntityLayer.SucursalEntity;
import java.util.ArrayList;

public class Sucursal {
     public ArrayList<SucursalEntity> GetSucursalLikeItem(String Codigo) {
        SucursalDB BD = new SucursalDB();
        return BD.GetSucursalLikeItem(Codigo);
    }
}
