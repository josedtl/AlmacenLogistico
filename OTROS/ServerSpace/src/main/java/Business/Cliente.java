package Business;

import DataLayer.ClienteDB;
import EntityLayer.ClienteEntity;
import java.util.ArrayList;

public class Cliente {

    public ArrayList<ClienteEntity> GetAllItems() {
        ClienteDB BD = new ClienteDB();
        return BD.GetAllItems();
    }

    public ArrayList<ClienteEntity> GetAllItem(int Id) {
        ClienteDB BD = new ClienteDB();
        return BD.GetAllItem(Id);
    }

    public ClienteEntity Save(ClienteEntity Item) {
        ClienteDB BD = new ClienteDB();
        return BD.Save(Item);
    }

    public Boolean Delete(int Id) {
        ClienteDB BD = new ClienteDB();
        return BD.Delete(Id);
    }
}
