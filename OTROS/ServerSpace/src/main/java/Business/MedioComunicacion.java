package Business;

import DataLayer.MedioComunicacionDB;
import EntityLayer.MedioComunicacionEntity;
import Framework.Inj;
import java.util.ArrayList;

public class MedioComunicacion {

    public ArrayList<MedioComunicacionEntity> GetAllItems() {
        try {
            MedioComunicacionDB BD = new MedioComunicacionDB();
            Inj.IniciarTranssaccionConsulta();
            return BD.GetAllItems();
        } catch (Exception ex) {
            System.out.println("ERROR " + ex);
            throw new UnsupportedOperationException("MENSAJE :" + ex);
        }
    }

    public ArrayList<MedioComunicacionEntity> GetAllItem(int Id) {
        try {
            MedioComunicacionDB BD = new MedioComunicacionDB();
            Inj.IniciarTranssaccionConsulta();
            return BD.GetAllItem(Id);
        } catch (Exception ex) {
            System.out.println("ERROR " + ex);
            throw new UnsupportedOperationException("MENSAJE :" + ex);
        }
    }

    public MedioComunicacionEntity Save(MedioComunicacionEntity Item) {
        try {
            MedioComunicacionDB BD = new MedioComunicacionDB();
            Inj.IniciarTranssaccionConsulta();
            return BD.Save(Item);
        } catch (Exception ex) {
            System.out.println("ERROR " + ex);
            throw new UnsupportedOperationException("MENSAJE :" + ex);
        }
    }

    public Boolean Delete(int Id) {
        try {
            MedioComunicacionDB BD = new MedioComunicacionDB();

            Inj.IniciarTranssaccionConsulta();
            return BD.Delete(Id);
        } catch (Exception ex) {
            System.out.println("ERROR " + ex);
            throw new UnsupportedOperationException("MENSAJE :" + ex);
        }
    }
}
