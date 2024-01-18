package com.api.server;

import Business.Cargo;
import EntityLayer.CargoEntity;
import java.util.ArrayList;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
@RequestMapping("/api/Cargo")
public class CargoController {

    @GetMapping("/GetAllItems")
    public ArrayList<CargoEntity> GetAllItems() {
        Cargo BS = new Cargo();
        return BS.GetAllItems();
    }

    @GetMapping("/GetAllItem/{Id}")
    public ArrayList<CargoEntity> GetAllItem(@PathVariable int Id) {
        Cargo BS = new Cargo();
        return BS.GetAllItem(Id);
    }

    @PostMapping("/Save")
    public CargoEntity Save(@RequestBody CargoEntity Ent) {
        Cargo BS = new Cargo();
        BS.Save(Ent);
        return Ent;
    }

    @DeleteMapping("/Delete/{Id}")
    public Boolean Delete(@PathVariable int Id) {
        Cargo BS = new Cargo();
        return BS.Delete(Id);
    }
}
