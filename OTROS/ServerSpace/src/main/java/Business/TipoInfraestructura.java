package Business;

import DataLayer.TipoInfraestructuraDB;
import EntityLayer.TipoInfraestructuraEntity;
import java.util.ArrayList;

public class TipoInfraestructura extends Business.MyCode.TipoInfraestructura{

    public ArrayList<TipoInfraestructuraEntity> GetAllItems() {
        TipoInfraestructuraDB BD = new TipoInfraestructuraDB();
        return BD.GetAllItems();
    }

    public ArrayList<TipoInfraestructuraEntity> GetAllItem(int Id) {
        TipoInfraestructuraDB BD = new TipoInfraestructuraDB();
        return BD.GetAllItem(Id);
    }

    public TipoInfraestructuraEntity Save(TipoInfraestructuraEntity Item) {
        TipoInfraestructuraDB BD = new TipoInfraestructuraDB();
        return BD.Save(Item);
    }

    public Boolean Delete(int Id) {
        TipoInfraestructuraDB BD = new TipoInfraestructuraDB();
        return BD.Delete(Id);
    }
}
