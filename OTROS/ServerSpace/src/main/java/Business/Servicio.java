package Business;

import EntityLayer.ServicioEntity;
import java.util.ArrayList;
import DataLayer.ServicioDB;
import Framework.Inj;

public class Servicio {

    public ArrayList<ServicioEntity> ObtenerMain() {
        try {
            ServicioDB BD = new ServicioDB();
            Inj.IniciarTranssaccionConsulta();
            return BD.ObtenerMain();
        } catch (Exception ex) {
            throw new UnsupportedOperationException("MENSAJE :" + ex);
        }
    }

    public ServicioEntity Registrar(ServicioEntity Item) {
        try {
            Inj.IniciarTranssaccion(true);
            ServicioDB BD = new ServicioDB();
            BD.Save(Item);
            Inj.FinalizarTranssaccion();
            return Item;
        } catch (Exception ex) {
            throw new UnsupportedOperationException("MENSAJE :" + ex);
        }
    }

  
    public ArrayList<ServicioEntity> ObtenerItem(int Id) {
        try {
            ServicioDB BD = new ServicioDB();
            Inj.IniciarTranssaccionConsulta();
            return BD.ObtenerItem(Id);
        } catch (Exception ex) {
            throw new UnsupportedOperationException("MENSAJE :" + ex);
        }
    }

}
