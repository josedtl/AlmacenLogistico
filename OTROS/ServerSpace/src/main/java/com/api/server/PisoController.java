package com.api.server;

import Business.Piso;
import EntityLayer.PisoEntity;
import java.util.ArrayList;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
@RequestMapping("/api/Piso")
public class PisoController {

    @GetMapping("/GetAllItems")
    public ArrayList<PisoEntity> GetAllItems() {
        Piso BS = new Piso();
        return BS.GetAllItems();
    }

    @GetMapping("/GetAllItem/{Id}")
    public ArrayList<PisoEntity> GetAllItem(@PathVariable int Id) {
        Piso BS = new Piso();
        return BS.GetAllItem(Id);
    }

    @PostMapping("/Save")
    public PisoEntity Save(@RequestBody PisoEntity Ent) {
        Piso BS = new Piso();
        BS.Save(Ent);
        return Ent;
    }

    @DeleteMapping("/Delete/{Id}")
    public Boolean Delete(@PathVariable int Id) {
        Piso BS = new Piso();
        return BS.Delete(Id);
    }
}
