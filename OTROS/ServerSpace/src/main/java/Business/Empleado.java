package Business;

import DataLayer.EmpleadoDB;
import EntityLayer.EmpleadoEntity;
import java.util.ArrayList;

public class Empleado {

    public ArrayList<EmpleadoEntity> GetAllItems() {
        EmpleadoDB BD = new EmpleadoDB();
        return BD.GetAllItems();
    }

    public ArrayList<EmpleadoEntity> GetAllItem(int Id) {
        EmpleadoDB BD = new EmpleadoDB();
        return BD.GetAllItem(Id);
    }

    public EmpleadoEntity Save(EmpleadoEntity Item) {
        EmpleadoDB BD = new EmpleadoDB();
        return BD.Save(Item);
    }

    public Boolean Delete(int Id) {
        EmpleadoDB BD = new EmpleadoDB();
        return BD.Delete(Id);
    }
}
