package com.api.server;

import Business.PersonaNaturalMedioComunicacion;
import EntityLayer.PersonaNaturalMedioComunicacionEntity;
import java.util.ArrayList;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
@RequestMapping("/api/PersonaNaturalMedioComunicacion")
public class PersonaNaturalMedioComunicacionController {

    @GetMapping("/GetAllItems")
    public ArrayList<PersonaNaturalMedioComunicacionEntity> GetAllItems() {
        PersonaNaturalMedioComunicacion BS = new PersonaNaturalMedioComunicacion();
        return BS.GetAllItems();
    }

    @GetMapping("/GetAllItem/{Id}")
    public ArrayList<PersonaNaturalMedioComunicacionEntity> GetAllItem(@PathVariable int Id) {
        PersonaNaturalMedioComunicacion BS = new PersonaNaturalMedioComunicacion();
        return BS.GetAllItem(Id);
    }

    @PostMapping("/Save")
    public PersonaNaturalMedioComunicacionEntity Save(@RequestBody PersonaNaturalMedioComunicacionEntity Ent) {
        PersonaNaturalMedioComunicacion BS = new PersonaNaturalMedioComunicacion();
        BS.Save(Ent);
        return Ent;
    }

    @DeleteMapping("/Delete/{Id}")
    public Boolean Delete(@PathVariable int Id) {
        PersonaNaturalMedioComunicacion BS = new PersonaNaturalMedioComunicacion();
        return BS.Delete(Id);
    }
}
