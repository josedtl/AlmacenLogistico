package Business;

import DataLayer.SucursalDB;
import EntityLayer.SucursalEntity;
import java.util.ArrayList;

public class Sucursal extends Business.MyCode.Sucursal{

    public ArrayList<SucursalEntity> GetAllItems() {
        SucursalDB BD = new SucursalDB();
        return BD.GetAllItems();
    }

    public ArrayList<SucursalEntity> GetAllItem(int Id) {
        SucursalDB BD = new SucursalDB();
        return BD.GetAllItem(Id);
    }

    public SucursalEntity Save(SucursalEntity Item) {
        SucursalDB BD = new SucursalDB();
        return BD.Save(Item);
    }

    public Boolean Delete(int Id) {
        SucursalDB BD = new SucursalDB();
        return BD.Delete(Id);
    }
}
