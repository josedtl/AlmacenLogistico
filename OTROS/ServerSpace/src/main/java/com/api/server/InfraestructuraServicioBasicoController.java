package com.api.server;

import Business.InfraestructuraServicioBasico;
import EntityLayer.InfraestructuraServicioBasicoEntity;
import java.util.ArrayList;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
@RequestMapping("/api/InfraestructuraServicioBasico")
public class InfraestructuraServicioBasicoController {

    @GetMapping("/GetAllItems")
    public ArrayList<InfraestructuraServicioBasicoEntity> GetAllItems() {
        InfraestructuraServicioBasico BS = new InfraestructuraServicioBasico();
        return BS.GetAllItems();
    }

    @GetMapping("/GetAllItem/{Id}")
    public ArrayList<InfraestructuraServicioBasicoEntity> GetAllItem(@PathVariable int Id) {
        InfraestructuraServicioBasico BS = new InfraestructuraServicioBasico();
        return BS.GetAllItem(Id);
    }

    @PostMapping("/Save")
    public InfraestructuraServicioBasicoEntity Save(@RequestBody InfraestructuraServicioBasicoEntity Ent) {
        InfraestructuraServicioBasico BS = new InfraestructuraServicioBasico();
        BS.Save(Ent);
        return Ent;
    }

    @DeleteMapping("/Delete/{Id}")
    public Boolean Delete(@PathVariable int Id) {
        InfraestructuraServicioBasico BS = new InfraestructuraServicioBasico();
        return BS.Delete(Id);
    }
}
