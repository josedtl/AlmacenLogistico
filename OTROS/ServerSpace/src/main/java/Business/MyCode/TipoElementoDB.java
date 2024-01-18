
package Business.MyCode;

import EntityLayer.TipoElementoEntity;
import java.util.ArrayList;

public class TipoElementoDB {
    
  public ArrayList<TipoElementoEntity> GetTipoElementoLikeItem(String Nombre) {
        TipoElementoDB BD = new TipoElementoDB();
        return BD.GetTipoElementoLikeItem(Nombre);
    }  
    
}
