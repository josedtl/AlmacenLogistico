package com.api.server;

import Business.Elemento;
import EntityLayer.ElementoEntity;
import java.util.ArrayList;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
@RequestMapping("/api/Elemento")
public class ElementoController {

    @GetMapping("/GetAllItems")
    public ArrayList<ElementoEntity> GetAllItems() {
        Elemento BS = new Elemento();
        return BS.GetAllItems();
    }

    @GetMapping("/GetAllItem/{Id}")
    public ArrayList<ElementoEntity> GetAllItem(@PathVariable int Id) {
        Elemento BS = new Elemento();
        return BS.GetAllItem(Id);
    }

    @PostMapping("/Save")
    public ElementoEntity Save(@RequestBody ElementoEntity Ent) {
        Elemento BS = new Elemento();
        BS.Save(Ent);
        return Ent;
    }

    @DeleteMapping("/Delete/{Id}")
    public Boolean Delete(@PathVariable int Id) {
        Elemento BS = new Elemento();
        return BS.Delete(Id);
    }
}
