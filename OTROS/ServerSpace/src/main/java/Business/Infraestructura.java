package Business;

import DataLayer.InfraestructuraDB;
import EntityLayer.InfraestructuraEntity;
import java.util.ArrayList;

public class Infraestructura {

    public ArrayList<InfraestructuraEntity> ObtenerMain() {
        InfraestructuraDB BD = new InfraestructuraDB();
        return BD.ObtenerMain();
    }

    public ArrayList<InfraestructuraEntity> GetAllItem(int Id) {
        InfraestructuraDB BD = new InfraestructuraDB();
        return BD.GetAllItem(Id);
    }

    public InfraestructuraEntity Registrar(InfraestructuraEntity Item) {
        InfraestructuraDB BD = new InfraestructuraDB();
        return BD.Registrar(Item);
    }

    public Boolean Delete(int Id) {
        InfraestructuraDB BD = new InfraestructuraDB();
        return BD.Delete(Id);
    }
}
