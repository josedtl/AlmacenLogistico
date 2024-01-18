package Business;

import DataLayer.ServicioBasicoDB;
import EntityLayer.ServicioBasicoEntity;
import java.util.ArrayList;

public class ServicioBasico extends Business.MyCode.ServicioBasico{

    public ArrayList<ServicioBasicoEntity> GetAllItems() {
        ServicioBasicoDB BD = new ServicioBasicoDB();
        return BD.GetAllItems();
    }

    public ArrayList<ServicioBasicoEntity> GetAllItem(int Id) {
        ServicioBasicoDB BD = new ServicioBasicoDB();
        return BD.GetAllItem(Id);
    }

    public ServicioBasicoEntity Save(ServicioBasicoEntity Item) {
        ServicioBasicoDB BD = new ServicioBasicoDB();
        return BD.Save(Item);
    }

    public Boolean Delete(int Id) {
        ServicioBasicoDB BD = new ServicioBasicoDB();
        return BD.Delete(Id);
    }
}
