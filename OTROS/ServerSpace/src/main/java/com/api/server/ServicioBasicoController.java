package com.api.server;

import Business.ServicioBasico;
import EntityLayer.ServicioBasicoEntity;
import java.util.ArrayList;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
@RequestMapping("/api/ServicioBasico")
public class ServicioBasicoController {

    @GetMapping("/GetAllItems")
    public ArrayList<ServicioBasicoEntity> GetAllItems() {
        ServicioBasico BS = new ServicioBasico();
        return BS.GetAllItems();
    }

    @GetMapping("/GetAllItem/{Id}")
    public ArrayList<ServicioBasicoEntity> GetAllItem(@PathVariable int Id) {
        ServicioBasico BS = new ServicioBasico();
        return BS.GetAllItem(Id);
    }

    @PostMapping("/Save")
    public ServicioBasicoEntity Save(@RequestBody ServicioBasicoEntity Ent) {
        ServicioBasico BS = new ServicioBasico();
        BS.Save(Ent);
        return Ent;
    }

    @DeleteMapping("/Delete/{Id}")
    public Boolean Delete(@PathVariable int Id) {
        ServicioBasico BS = new ServicioBasico();
        return BS.Delete(Id);
    }
}
