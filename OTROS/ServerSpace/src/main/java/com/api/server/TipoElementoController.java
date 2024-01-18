package com.api.server;

import Business.TipoElemento;
import EntityLayer.TipoElementoEntity;
import java.util.ArrayList;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
@RequestMapping("/api/TipoElemento")
public class TipoElementoController {

    @GetMapping("/GetAllItems")
    public ArrayList<TipoElementoEntity> GetAllItems() {
        TipoElemento BS = new TipoElemento();
        return BS.GetAllItems();
    }

    @GetMapping("/GetAllItem/{Id}")
    public ArrayList<TipoElementoEntity> GetAllItem(@PathVariable int Id) {
        TipoElemento BS = new TipoElemento();
        return BS.GetAllItem(Id);
    }

    @PostMapping("/Save")
    public TipoElementoEntity Save(@RequestBody TipoElementoEntity Ent) {
        TipoElemento BS = new TipoElemento();
        BS.Save(Ent);
        return Ent;
    }

    @DeleteMapping("/Delete/{Id}")
    public Boolean Delete(@PathVariable int Id) {
        TipoElemento BS = new TipoElemento();
        return BS.Delete(Id);
    }
}
