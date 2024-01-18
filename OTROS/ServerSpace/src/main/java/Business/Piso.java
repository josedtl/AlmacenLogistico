package Business;

import DataLayer.PisoDB;
import EntityLayer.PisoEntity;
import java.util.ArrayList;

public class Piso extends  Business.MyCode.Piso {

    public ArrayList<PisoEntity> GetAllItems() {
        PisoDB BD = new PisoDB();
        return BD.GetAllItems();
    }

    public ArrayList<PisoEntity> GetAllItem(int Id) {
        PisoDB BD = new PisoDB();
        return BD.GetAllItem(Id);
    }

    public PisoEntity Save(PisoEntity Item) {
        PisoDB BD = new PisoDB();
        return BD.Save(Item);
    }

    public Boolean Delete(int Id) {
        PisoDB BD = new PisoDB();
        return BD.Delete(Id);
    }
}
