package com.api.server;

import Business.Ubigeo;
import EntityLayer.UbigeoEntity;
import java.util.ArrayList;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
@RequestMapping("/api/Ubigeo")
public class UbigeoController {

    @GetMapping("/GetAllItems")
    public ArrayList<UbigeoEntity> GetAllItems() {
        Ubigeo BS = new Ubigeo();
        return BS.GetAllItems();
    }

    @GetMapping("/GetAllItem/{Id}")
    public ArrayList<UbigeoEntity> GetAllItem(@PathVariable int Id) {
        Ubigeo BS = new Ubigeo();
        return BS.GetAllItem(Id);
    }

    @PostMapping("/Save")
    public UbigeoEntity Save(@RequestBody UbigeoEntity Ent) {
        Ubigeo BS = new Ubigeo();
        BS.Save(Ent);
        return Ent;
    }

    @DeleteMapping("/Delete/{Id}")
    public Boolean Delete(@PathVariable int Id) {
        Ubigeo BS = new Ubigeo();
        return BS.Delete(Id);
    }
}
