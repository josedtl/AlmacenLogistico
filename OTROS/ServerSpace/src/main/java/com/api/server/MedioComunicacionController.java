package com.api.server;

import Business.MedioComunicacion;
import EntityLayer.MedioComunicacionEntity;
import java.util.ArrayList;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
@RequestMapping("/api/MedioComunicacion")
public class MedioComunicacionController {

    @GetMapping("/GetAllItems")
    public ArrayList<MedioComunicacionEntity> GetAllItems() {
        MedioComunicacion BS = new MedioComunicacion();
        return BS.GetAllItems();
    }

    @GetMapping("/GetAllItem/{Id}")
    public ArrayList<MedioComunicacionEntity> GetAllItem(@PathVariable int Id) {
        MedioComunicacion BS = new MedioComunicacion();
        return BS.GetAllItem(Id);
    }

    @PostMapping("/Save")
    public MedioComunicacionEntity Save(@RequestBody MedioComunicacionEntity Ent) {
        MedioComunicacion BS = new MedioComunicacion();
        BS.Save(Ent);
        return Ent;
    }

    @DeleteMapping("/Delete/{Id}")
    public Boolean Delete(@PathVariable int Id) {
        MedioComunicacion BS = new MedioComunicacion();
        return BS.Delete(Id);
    }
}
