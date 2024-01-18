package Business;

import DataLayer.ProveedorDB;
import EntityLayer.ProveedorEntity;
import java.util.ArrayList;

public class Proveedor {

    public ArrayList<ProveedorEntity> GetAllItems() {
        ProveedorDB BD = new ProveedorDB();
        return BD.GetAllItems();
    }

    public ArrayList<ProveedorEntity> GetAllItem(int Id) {
        ProveedorDB BD = new ProveedorDB();
        return BD.GetAllItem(Id);
    }

    public ProveedorEntity Save(ProveedorEntity Item) {
        ProveedorDB BD = new ProveedorDB();
        return BD.Save(Item);
    }

    public Boolean Delete(int Id) {
        ProveedorDB BD = new ProveedorDB();
        return BD.Delete(Id);
    }
}
