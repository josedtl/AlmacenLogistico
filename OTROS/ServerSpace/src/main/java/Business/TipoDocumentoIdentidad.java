package Business;

import DataLayer.TipoDocumentoIdentidadDB;
import EntityLayer.TipoDocumentoIdentidadEntity;
import java.util.ArrayList;

public class TipoDocumentoIdentidad {

    public ArrayList<TipoDocumentoIdentidadEntity> GetAllItems() {
        TipoDocumentoIdentidadDB BD = new TipoDocumentoIdentidadDB();
        return BD.GetAllItems();
    }

    public ArrayList<TipoDocumentoIdentidadEntity> GetAllItem(int Id) {
        TipoDocumentoIdentidadDB BD = new TipoDocumentoIdentidadDB();
        return BD.GetAllItem(Id);
    }

    public TipoDocumentoIdentidadEntity Save(TipoDocumentoIdentidadEntity Item) {
        TipoDocumentoIdentidadDB BD = new TipoDocumentoIdentidadDB();
        return BD.Save(Item);
    }
    
    public Boolean Delete(int Id) {
        TipoDocumentoIdentidadDB BD = new TipoDocumentoIdentidadDB();
        return BD.Delete(Id);
}
}
