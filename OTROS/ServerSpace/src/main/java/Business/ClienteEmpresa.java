package Business;

import DataLayer.ClienteEmpresaDB;
import EntityLayer.ClienteEmpresaEntity;
import java.util.ArrayList;

public class ClienteEmpresa {

    public ArrayList<ClienteEmpresaEntity> GetAllItems() {
        ClienteEmpresaDB BD = new ClienteEmpresaDB();
        return BD.GetAllItems();
    }

    public ArrayList<ClienteEmpresaEntity> GetAllItem(int Id) {
        ClienteEmpresaDB BD = new ClienteEmpresaDB();
        return BD.GetAllItem(Id);
    }

    public ClienteEmpresaEntity Save(ClienteEmpresaEntity Item) {
        ClienteEmpresaDB BD = new ClienteEmpresaDB();
        return BD.Save(Item);
    }

    public Boolean Delete(int Id) {
        ClienteEmpresaDB BD = new ClienteEmpresaDB();
        return BD.Delete(Id);
    }
}
