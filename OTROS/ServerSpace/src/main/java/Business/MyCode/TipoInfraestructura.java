
package Business.MyCode;

import DataLayer.TipoInfraestructuraDB;
import EntityLayer.TipoInfraestructuraEntity;
import java.util.ArrayList;

public class TipoInfraestructura {
    
     public ArrayList<TipoInfraestructuraEntity> GetTipoInfraestructuraLikeItem(String Nombre) {
        TipoInfraestructuraDB BD = new TipoInfraestructuraDB();
        return BD.GetTipoInfraestructuraLikeItem(Nombre);
    }
}
