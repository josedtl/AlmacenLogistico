package Business;

import DataLayer.GeneroDB;
import EntityLayer.GeneroEntity;
import java.util.ArrayList;

public class Genero {

    public ArrayList<GeneroEntity> GetAllItems() {
        GeneroDB BD = new GeneroDB();
        return BD.GetAllItems();
    }

    public ArrayList<GeneroEntity> GetAllItem(int Id) {
        GeneroDB BD = new GeneroDB();
        return BD.GetAllItem(Id);
    }

    public GeneroEntity Save(GeneroEntity Item) {
        GeneroDB BD = new GeneroDB();
        return BD.Save(Item);
    }

    public Boolean Delete(int Id) {
        GeneroDB BD = new GeneroDB();
        return BD.Delete(Id);
    }
}
