package Business;

import DataLayer.InfraestructuraServicioBasicoDB;
import EntityLayer.InfraestructuraServicioBasicoEntity;
import java.util.ArrayList;

public class InfraestructuraServicioBasico {

    public ArrayList<InfraestructuraServicioBasicoEntity> GetAllItems() {
        InfraestructuraServicioBasicoDB BD = new InfraestructuraServicioBasicoDB();
        return BD.GetAllItems();
    }

    public ArrayList<InfraestructuraServicioBasicoEntity> GetAllItem(int Id) {
        InfraestructuraServicioBasicoDB BD = new InfraestructuraServicioBasicoDB();
        return BD.GetAllItem(Id);
    }

    public InfraestructuraServicioBasicoEntity Save(InfraestructuraServicioBasicoEntity Item) {
        InfraestructuraServicioBasicoDB BD = new InfraestructuraServicioBasicoDB();
        return BD.Save(Item);
    }

    public Boolean Delete(int Id) {
        InfraestructuraServicioBasicoDB BD = new InfraestructuraServicioBasicoDB();
        return BD.Delete(Id);
    }
}
