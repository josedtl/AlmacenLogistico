package Business;

import DataLayer.EstadoCivilDB;
import EntityLayer.EstadoCivilEntity;
import java.util.ArrayList;

public class EstadoCivil {

    public ArrayList<EstadoCivilEntity> GetAllItems() {
        EstadoCivilDB BD = new EstadoCivilDB();
        return BD.GetAllItems();
    }

    public ArrayList<EstadoCivilEntity> GetAllItem(int Id) {
        EstadoCivilDB BD = new EstadoCivilDB();
        return BD.GetAllItem(Id);
    }

    public EstadoCivilEntity Save(EstadoCivilEntity Item) {
        EstadoCivilDB BD = new EstadoCivilDB();
        return BD.Save(Item);
    }

    public Boolean Delete(int Id) {
        EstadoCivilDB BD = new EstadoCivilDB();
        return BD.Delete(Id);
    }
}
