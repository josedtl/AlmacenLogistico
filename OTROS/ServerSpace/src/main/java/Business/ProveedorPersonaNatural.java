package Business;

import DataLayer.ProveedorPersonaNaturalDB;
import EntityLayer.ProveedorPersonaNaturalEntity;
import java.util.ArrayList;

public class ProveedorPersonaNatural {

    public ArrayList<ProveedorPersonaNaturalEntity> GetAllItems() {
        ProveedorPersonaNaturalDB BD = new ProveedorPersonaNaturalDB();
        return BD.GetAllItems();
    }

    public ArrayList<ProveedorPersonaNaturalEntity> GetAllItem(int Id) {
        ProveedorPersonaNaturalDB BD = new ProveedorPersonaNaturalDB();
        return BD.GetAllItem(Id);
    }

    public ProveedorPersonaNaturalEntity Save(ProveedorPersonaNaturalEntity Item) {
        ProveedorPersonaNaturalDB BD = new ProveedorPersonaNaturalDB();
        return BD.Save(Item);
    }

    public Boolean Delete(int Id) {
        ProveedorPersonaNaturalDB BD = new ProveedorPersonaNaturalDB();
        return BD.Delete(Id);
    }
}
