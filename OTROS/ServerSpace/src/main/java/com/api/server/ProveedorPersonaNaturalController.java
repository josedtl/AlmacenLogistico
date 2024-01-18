package com.api.server;

import Business.ProveedorPersonaNatural;
import EntityLayer.ProveedorPersonaNaturalEntity;
import java.util.ArrayList;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
@RequestMapping("/api/ProveedorPersonaNatural")
public class ProveedorPersonaNaturalController {

    @GetMapping("/GetAllItems")
    public ArrayList<ProveedorPersonaNaturalEntity> GetAllItems() {
        ProveedorPersonaNatural BS = new ProveedorPersonaNatural();
        return BS.GetAllItems();
    }

    @GetMapping("/GetAllItem/{Id}")
    public ArrayList<ProveedorPersonaNaturalEntity> GetAllItem(@PathVariable int Id) {
        ProveedorPersonaNatural BS = new ProveedorPersonaNatural();
        return BS.GetAllItem(Id);
    }

    @PostMapping("/Save")
    public ProveedorPersonaNaturalEntity Save(@RequestBody ProveedorPersonaNaturalEntity Ent) {
        ProveedorPersonaNatural BS = new ProveedorPersonaNatural();
        BS.Save(Ent);
        return Ent;
    }

    @DeleteMapping("/Delete/{Id}")
    public Boolean Delete(@PathVariable int Id) {
        ProveedorPersonaNatural BS = new ProveedorPersonaNatural();
        return BS.Delete(Id);
    }
}
