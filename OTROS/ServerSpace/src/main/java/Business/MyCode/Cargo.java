
package Business.MyCode;

import DataLayer.CargoDB;
import EntityLayer.CargoEntity;
import java.util.ArrayList;


public class Cargo {

    public ArrayList<CargoEntity> GetCargoLikeItem(String Nombre) {
        CargoDB BD = new CargoDB();
        return BD.GetCargoLikeItem(Nombre);
    }

}
