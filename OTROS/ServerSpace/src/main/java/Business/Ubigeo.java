package Business;

import DataLayer.UbigeoDB;
import EntityLayer.UbigeoEntity;
import java.util.ArrayList;

public class Ubigeo extends  Business.MyCode.Ubigeo{

    public ArrayList<UbigeoEntity> GetAllItems() {
        UbigeoDB BD = new UbigeoDB();
        return BD.GetAllItems();
    }

    public ArrayList<UbigeoEntity> GetAllItem(int Id) {
        UbigeoDB BD = new UbigeoDB();
        return BD.GetAllItem(Id);
    }

    public UbigeoEntity Save(UbigeoEntity Item) {
        UbigeoDB BD = new UbigeoDB();
        return BD.Save(Item);
    }

    public Boolean Delete(int Id) {
        UbigeoDB BD = new UbigeoDB();
        return BD.Delete(Id);
    }
}
