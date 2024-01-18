package com.api.server;

import Business.ClientePersonaNatural;
import EntityLayer.ClientePersonaNaturalEntity;
import java.util.ArrayList;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
@RequestMapping("/api/ClientePersonaNatural")
public class ClientePersonaNaturalController {

    @GetMapping("/GetAllItems")
    public ArrayList<ClientePersonaNaturalEntity> GetAllItems() {
        ClientePersonaNatural BS = new ClientePersonaNatural();
        return BS.GetAllItems();
    }

    @GetMapping("/GetAllItem/{Id}")
    public ArrayList<ClientePersonaNaturalEntity> GetAllItem(@PathVariable int Id) {
        ClientePersonaNatural BS = new ClientePersonaNatural();
        return BS.GetAllItem(Id);
    }

    @PostMapping("/Save")
    public ClientePersonaNaturalEntity Save(@RequestBody ClientePersonaNaturalEntity Ent) {
        ClientePersonaNatural BS = new ClientePersonaNatural();
        BS.Save(Ent);
        return Ent;
    }

    @DeleteMapping("/Delete/{Id}")
    public Boolean Delete(@PathVariable int Id) {
        ClientePersonaNatural BS = new ClientePersonaNatural();
        return BS.Delete(Id);
    }
}
