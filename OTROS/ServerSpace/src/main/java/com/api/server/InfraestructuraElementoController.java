package com.api.server;

import Business.InfraestructuraElemento;
import EntityLayer.InfraestructuraElementoEntity;
import java.util.ArrayList;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
@RequestMapping("/api/InfraestructuraElemento")
public class InfraestructuraElementoController {

    @GetMapping("/GetAllItems")
    public ArrayList<InfraestructuraElementoEntity> GetAllItems() {
        InfraestructuraElemento BS = new InfraestructuraElemento();
        return BS.GetAllItems();
    }

    @GetMapping("/GetAllItem/{Id}")
    public ArrayList<InfraestructuraElementoEntity> GetAllItem(@PathVariable int Id) {
        InfraestructuraElemento BS = new InfraestructuraElemento();
        return BS.GetAllItem(Id);
    }

    @PostMapping("/Save")
    public InfraestructuraElementoEntity Save(@RequestBody InfraestructuraElementoEntity Ent) {
        InfraestructuraElemento BS = new InfraestructuraElemento();
        BS.Save(Ent);
        return Ent;
    }

    @DeleteMapping("/Delete/{Id}")
    public Boolean Delete(@PathVariable int Id) {
        InfraestructuraElemento BS = new InfraestructuraElemento();
        return BS.Delete(Id);
    }
}
