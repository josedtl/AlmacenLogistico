package Business;

import DataLayer.ClientePersonaNaturalDB;
import EntityLayer.ClientePersonaNaturalEntity;
import java.util.ArrayList;

public class ClientePersonaNatural {

    public ArrayList<ClientePersonaNaturalEntity> GetAllItems() {
        ClientePersonaNaturalDB BD = new ClientePersonaNaturalDB();
        return BD.GetAllItems();
    }

    public ArrayList<ClientePersonaNaturalEntity> GetAllItem(int Id) {
        ClientePersonaNaturalDB BD = new ClientePersonaNaturalDB();
        return BD.GetAllItem(Id);
    }

    public ClientePersonaNaturalEntity Save(ClientePersonaNaturalEntity Item) {
        ClientePersonaNaturalDB BD = new ClientePersonaNaturalDB();
        return BD.Save(Item);
    }

    public Boolean Delete(int Id) {
        ClientePersonaNaturalDB BD = new ClientePersonaNaturalDB();
        return BD.Delete(Id);
    }
}
