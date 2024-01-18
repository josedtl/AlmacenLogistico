package Business;

import DataLayer.InfraestructuraDB;
import EntityLayer.InfraestructuraEntity;
import java.util.ArrayList;

public class Infraestructura extends Business.MyCode.Infraestructura{

    public ArrayList<InfraestructuraEntity> GetAllItems() {
        InfraestructuraDB BD = new InfraestructuraDB();
        return BD.GetAllItems();
    }

    public ArrayList<InfraestructuraEntity> GetAllItem(int Id) {
        InfraestructuraDB BD = new InfraestructuraDB();
        return BD.GetAllItem(Id);
    }

    public InfraestructuraEntity Save(InfraestructuraEntity Item) {
        InfraestructuraDB BD = new InfraestructuraDB();
        return BD.Save(Item);
    }

    public Boolean Delete(int Id) {
        InfraestructuraDB BD = new InfraestructuraDB();
        return BD.Delete(Id);
    }
}
