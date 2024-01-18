
package Business.MyCode;

import DataLayer.*;
import EntityLayer.*;
import java.util.ArrayList;

public class Piso {
      
    public ArrayList<PisoEntity> GetPisoLikeItem(String Codigo) {
        PisoDB BD = new PisoDB();
        return BD.GetPisoLikeItem(Codigo);
    }

}
