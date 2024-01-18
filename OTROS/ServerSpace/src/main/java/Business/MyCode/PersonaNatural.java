package Business.MyCode;

import DataLayer.PersonaNaturalDB;
import EntityLayer.PersonaNaturalEntity;
import Framework.Inj;
import java.util.ArrayList;

public class PersonaNatural {

    public ArrayList<PersonaNaturalEntity> GetPersonaNaturalMainItems() {
        try {
            PersonaNaturalDB BD = new PersonaNaturalDB();
            Inj.IniciarTranssaccionConsulta();
            return BD.GetPersonaNaturalMainItems();
        } catch (Exception ex) {
            System.out.println("ERROR " + ex);
            throw new UnsupportedOperationException("MENSAJE :" + ex);
        }
    }
}
