package Business;

import DataLayer.InfraestructuraDimensionDB;
import EntityLayer.InfraestructuraDimensionEntity;
import java.util.ArrayList;

public class InfraestructuraDimension {

    public ArrayList<InfraestructuraDimensionEntity> GetAllItems() {
        InfraestructuraDimensionDB BD = new InfraestructuraDimensionDB();
        return BD.GetAllItems();
    }

    public ArrayList<InfraestructuraDimensionEntity> GetAllItem(int Id) {
        InfraestructuraDimensionDB BD = new InfraestructuraDimensionDB();
        return BD.GetAllItem(Id);
    }

    public InfraestructuraDimensionEntity Save(InfraestructuraDimensionEntity Item) {
        InfraestructuraDimensionDB BD = new InfraestructuraDimensionDB();
        return BD.Save(Item);
    }

    public Boolean Delete(int Id) {
        InfraestructuraDimensionDB BD = new InfraestructuraDimensionDB();
        return BD.Delete(Id);
    }
}
