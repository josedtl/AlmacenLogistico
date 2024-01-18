
package Business.MyCode;

import DataLayer.InfraestructuraDB;
import EntityLayer.InfraestructuraEntity;
import java.util.ArrayList;

public class Infraestructura {

    public ArrayList<InfraestructuraEntity> GetInfraestructuraMainItems() {
        InfraestructuraDB BD = new InfraestructuraDB();
        return BD.GetInfraestructuraMainItems();
    }
}
