package Business;

import DataLayer.UsuarioDB;
import EntityLayer.UsuarioEntity;
import java.util.ArrayList;

public class Usuario {

    public ArrayList<UsuarioEntity> GetAllItems() {
        UsuarioDB BD = new UsuarioDB();
        return BD.GetAllItems();
    }

    public ArrayList<UsuarioEntity> GetAllItem(int Id) {
        UsuarioDB BD = new UsuarioDB();
        return BD.GetAllItem(Id);
    }

    public UsuarioEntity Save(UsuarioEntity Item) {
        UsuarioDB BD = new UsuarioDB();
        return BD.Save(Item);
    }

    public Boolean Delete(int Id) {
        UsuarioDB BD = new UsuarioDB();
        return BD.Delete(Id);
    }
}
