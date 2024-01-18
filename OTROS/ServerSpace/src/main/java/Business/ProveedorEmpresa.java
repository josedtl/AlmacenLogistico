package Business;

import DataLayer.ProveedorEmpresaDB;
import EntityLayer.ProveedorEmpresaEntity;
import java.util.ArrayList;

public class ProveedorEmpresa {

    public ArrayList<ProveedorEmpresaEntity> GetAllItems() {
        ProveedorEmpresaDB BD = new ProveedorEmpresaDB();
        return BD.GetAllItems();
    }

    public ArrayList<ProveedorEmpresaEntity> GetAllItem(int Id) {
        ProveedorEmpresaDB BD = new ProveedorEmpresaDB();
        return BD.GetAllItem(Id);
    }

    public ProveedorEmpresaEntity Save(ProveedorEmpresaEntity Item) {
        ProveedorEmpresaDB BD = new ProveedorEmpresaDB();
        return BD.Save(Item);
    }

    public Boolean Delete(int Id) {
        ProveedorEmpresaDB BD = new ProveedorEmpresaDB();
        return BD.Delete(Id);
    }
}
