package com.api.server;

import Business.TipoInfraestructura;
import EntityLayer.TipoInfraestructuraEntity;
import java.util.ArrayList;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
@RequestMapping("/api/TipoInfraestructura")
public class TipoInfraestructuraController {

    @GetMapping("/GetAllItems")
    public ArrayList<TipoInfraestructuraEntity> GetAllItems() {
        TipoInfraestructura BS = new TipoInfraestructura();
        return BS.GetAllItems();
    }

    @GetMapping("/GetAllItem/{Id}")
    public ArrayList<TipoInfraestructuraEntity> GetAllItem(@PathVariable int Id) {
        TipoInfraestructura BS = new TipoInfraestructura();
        return BS.GetAllItem(Id);
    }

    @PostMapping("/Save")
    public TipoInfraestructuraEntity Save(@RequestBody TipoInfraestructuraEntity Ent) {
        TipoInfraestructura BS = new TipoInfraestructura();
        BS.Save(Ent);
        return Ent;
    }

    @DeleteMapping("/Delete/{Id}")
    public Boolean Delete(@PathVariable int Id) {
        TipoInfraestructura BS = new TipoInfraestructura();
        return BS.Delete(Id);
    }
}
