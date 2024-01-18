package Business;

import DataLayer.CargoDB;
import EntityLayer.CargoEntity;
import Framework.Inj;
import Models.CargoItemModel;
import java.util.ArrayList;

public class Cargo extends Business.MyCode.Cargo {

    public ArrayList<CargoEntity> GetAllItems() {

        try {
            CargoDB BD = new CargoDB();
            Inj.IniciarTranssaccionConsulta();
            return BD.GetAllItems();
        } catch (Exception ex) {
            System.out.println("ERROR " + ex);
            throw new UnsupportedOperationException("MENSAJE :" + ex);
        }
    }

    public ArrayList<CargoEntity> GetAllItem(int Id) {
        try {
            CargoDB BD = new CargoDB();
            Inj.IniciarTranssaccionConsulta();
            return BD.GetAllItem(Id);
        } catch (Exception ex) {
            System.out.println("ERROR " + ex);
            throw new UnsupportedOperationException("MENSAJE :" + ex);
        }

    }

    public CargoEntity Save(CargoEntity Item) {

        try {
            CargoDB BD = new CargoDB();
            Inj.IniciarTranssaccionConsulta();
            return BD.Save(Item);
        } catch (Exception ex) {
            System.out.println("ERROR " + ex);
            throw new UnsupportedOperationException("MENSAJE :" + ex);
        }
    }

    public Boolean Delete(int Id) {
        try {
            CargoDB BD = new CargoDB();
            Inj.IniciarTranssaccionConsulta();
            return BD.Delete(Id);
        } catch (Exception ex) {
            System.out.println("ERROR " + ex);
            throw new UnsupportedOperationException("MENSAJE :" + ex);
        }
    }

}
