package com.api.server;

import Business.Cliente;
import EntityLayer.ClienteEntity;
import java.util.ArrayList;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
@RequestMapping("/api/Cliente")
public class ClienteController {

    @GetMapping("/GetAllItems")
    public ArrayList<ClienteEntity> GetAllItems() {
        Cliente BS = new Cliente();
        return BS.GetAllItems();
    }

    @GetMapping("/GetAllItem/{Id}")
    public ArrayList<ClienteEntity> GetAllItem(@PathVariable int Id) {
        Cliente BS = new Cliente();
        return BS.GetAllItem(Id);
    }

    @PostMapping("/Save")
    public ClienteEntity Save(@RequestBody ClienteEntity Ent) {
        Cliente BS = new Cliente();
        BS.Save(Ent);
        return Ent;
    }

    @DeleteMapping("/Delete/{Id}")
    public Boolean Delete(@PathVariable int Id) {
        Cliente BS = new Cliente();
        return BS.Delete(Id);
    }
}
