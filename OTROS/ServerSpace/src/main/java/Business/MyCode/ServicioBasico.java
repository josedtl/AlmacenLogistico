
package Business.MyCode;

import DataLayer.ServicioBasicoDB;
import EntityLayer.ServicioBasicoEntity;
import java.util.ArrayList;

public class ServicioBasico {
    public ArrayList<ServicioBasicoEntity> GetServicioBasicoLikeItem(String Codigo) {
        ServicioBasicoDB BD = new ServicioBasicoDB();
        return BD.GetServicioBasicoLikeItem(Codigo);
    }
}
