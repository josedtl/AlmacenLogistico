package Business;

import DataLayer.InfraestructuraElementoDB;
import EntityLayer.InfraestructuraElementoEntity;
import java.util.ArrayList;

public class InfraestructuraElemento {

    public ArrayList<InfraestructuraElementoEntity> GetAllItems() {
        InfraestructuraElementoDB BD = new InfraestructuraElementoDB();
        return BD.GetAllItems();
    }

    public ArrayList<InfraestructuraElementoEntity> GetAllItem(int Id) {
        InfraestructuraElementoDB BD = new InfraestructuraElementoDB();
        return BD.GetAllItem(Id);
    }

    public InfraestructuraElementoEntity Save(InfraestructuraElementoEntity Item) {
        InfraestructuraElementoDB BD = new InfraestructuraElementoDB();
        return BD.Save(Item);
    }

    public Boolean Delete(int Id) {
        InfraestructuraElementoDB BD = new InfraestructuraElementoDB();
        return BD.Delete(Id);
    }
}
