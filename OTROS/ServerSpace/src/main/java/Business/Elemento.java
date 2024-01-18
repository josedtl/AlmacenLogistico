package Business;

import DataLayer.ElementoDB;
import EntityLayer.ElementoEntity;
import java.util.ArrayList;

public class Elemento {

    public ArrayList<ElementoEntity> GetAllItems() {
        ElementoDB BD = new ElementoDB();
        return BD.GetAllItems();
    }

    public ArrayList<ElementoEntity> GetAllItem(int Id) {
        ElementoDB BD = new ElementoDB();
        return BD.GetAllItem(Id);
    }

    public ElementoEntity Save(ElementoEntity Item) {
        ElementoDB BD = new ElementoDB();
        return BD.Save(Item);
    }

    public Boolean Delete(int Id) {
        ElementoDB BD = new ElementoDB();
        return BD.Delete(Id);
    }
}
