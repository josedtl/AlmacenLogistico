package com.api.server;

import Business.Infraestructura;
import EntityLayer.InfraestructuraEntity;
import Models.InfraestructuraMainModel;
import java.util.ArrayList;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
@RequestMapping("/api/Infraestructura")
public class InfraestructuraController {

    @GetMapping("/GetAllItems")
    public ArrayList<InfraestructuraEntity> GetAllItems() {
        Infraestructura BS = new Infraestructura();
        return BS.GetAllItems();
    }

    @GetMapping("/GetAllItem/{Id}")
    public ArrayList<InfraestructuraEntity> GetAllItem(@PathVariable int Id) {
        Infraestructura BS = new Infraestructura();
        return BS.GetAllItem(Id);
    }

    @PostMapping("/Save")
    public InfraestructuraEntity Save(@RequestBody InfraestructuraEntity Ent) {
        Infraestructura BS = new Infraestructura();
        BS.Save(Ent);
        return Ent;
    }

    @DeleteMapping("/Delete/{Id}")
  
   public Boolean Delete(@PathVariable int Id) {
        Infraestructura BS = new Infraestructura();
        return BS.Delete(Id);
    }
 
   @GetMapping("/GetPersonaNaturalMainItems")
    public ArrayList<InfraestructuraMainModel> GetInfraestructuraMainItems() {
        Infraestructura BS = new Infraestructura();
        ArrayList<InfraestructuraMainModel> Items = new ArrayList<>();
        ArrayList<InfraestructuraEntity> Data = BS.GetInfraestructuraMainItems();

        for (InfraestructuraEntity Item : Data) {
            Items.add(new InfraestructuraMainModel(Item));
        }

        return Items;
    }
}
