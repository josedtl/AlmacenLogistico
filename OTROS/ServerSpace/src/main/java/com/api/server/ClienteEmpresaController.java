package com.api.server;

import Business.ClienteEmpresa;
import EntityLayer.ClienteEmpresaEntity;
import java.util.ArrayList;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
@RequestMapping("/api/ClienteEmpresa")
public class ClienteEmpresaController {

    @GetMapping("/GetAllItems")
    public ArrayList<ClienteEmpresaEntity> GetAllItems() {
        ClienteEmpresa BS = new ClienteEmpresa();
        return BS.GetAllItems();
    }

    @GetMapping("/GetAllItem/{Id}")
    public ArrayList<ClienteEmpresaEntity> GetAllItem(@PathVariable int Id) {
        ClienteEmpresa BS = new ClienteEmpresa();
        return BS.GetAllItem(Id);
    }

    @PostMapping("/Save")
    public ClienteEmpresaEntity Save(@RequestBody ClienteEmpresaEntity Ent) {
        ClienteEmpresa BS = new ClienteEmpresa();
        BS.Save(Ent);
        return Ent;
    }

    @DeleteMapping("/Delete/{Id}")
    public Boolean Delete(@PathVariable int Id) {
        ClienteEmpresa BS = new ClienteEmpresa();
        return BS.Delete(Id);
    }
}
