package Business;

import DataLayer.TipoElementoDB;
import EntityLayer.TipoElementoEntity;
import java.util.ArrayList;

public class TipoElemento {

    public ArrayList<TipoElementoEntity> GetAllItems() {
        TipoElementoDB BD = new TipoElementoDB();
        return BD.GetAllItems();
    }

    public ArrayList<TipoElementoEntity> GetAllItem(int Id) {
        TipoElementoDB BD = new TipoElementoDB();
        return BD.GetAllItem(Id);
    }

    public TipoElementoEntity Save(TipoElementoEntity Item) {
        TipoElementoDB BD = new TipoElementoDB();
        return BD.Save(Item);
    }

    public Boolean Delete(int Id) {
        TipoElementoDB BD = new TipoElementoDB();
        return BD.Delete(Id);
    }
}
