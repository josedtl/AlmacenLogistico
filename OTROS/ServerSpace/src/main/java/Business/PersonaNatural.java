package Business;

import DataLayer.PersonaNaturalDB;
import EntityLayer.PersonaNaturalEntity;
import Framework.Inj;
import java.util.ArrayList;

public class PersonaNatural {

    public ArrayList<PersonaNaturalEntity> GetAllItems() {
        try {
            PersonaNaturalDB BD = new PersonaNaturalDB();
            Inj.IniciarTranssaccionConsulta();
            return BD.GetAllItems();
        } catch (Exception ex) {
            System.out.println("ERROR " + ex);
            throw new UnsupportedOperationException("MENSAJE :" + ex);
        }
    }

    public ArrayList<PersonaNaturalEntity> GetAllItem(int Id) {
        try {
            PersonaNaturalDB BD = new PersonaNaturalDB();
            Inj.IniciarTranssaccionConsulta();
            return BD.GetAllItem(Id);
        } catch (Exception ex) {
            System.out.println("ERROR " + ex);
            throw new UnsupportedOperationException("MENSAJE :" + ex);
        }
    }

    public PersonaNaturalEntity Save(PersonaNaturalEntity Item) {
        try {
            Inj.IniciarTranssaccion(true);
            PersonaNaturalDB BD = new PersonaNaturalDB();
            BD.Save(Item);
            Inj.FinalizarTranssaccion();
            return Item;
        } catch (Exception ex) {
            System.out.println("ERROR " + ex);
            throw new UnsupportedOperationException("MENSAJE :" + ex);
        }
    }

    public Boolean Delete(int Id) {
        try {
            PersonaNaturalDB BD = new PersonaNaturalDB();
            Inj.IniciarTranssaccionConsulta();
            return BD.Delete(Id);
        } catch (Exception ex) {
            System.out.println("ERROR " + ex);
            throw new UnsupportedOperationException("MENSAJE :" + ex);
        }
    }
}
