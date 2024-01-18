package com.api.server;

import Business.InfraestructuraDimension;
import EntityLayer.InfraestructuraDimensionEntity;
import java.util.ArrayList;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
@RequestMapping("/api/InfraestructuraDimension")
public class InfraestructuraDimensionController {

    @GetMapping("/GetAllItems")
    public ArrayList<InfraestructuraDimensionEntity> GetAllItems() {
        InfraestructuraDimension BS = new InfraestructuraDimension();
        return BS.GetAllItems();
    }

    @GetMapping("/GetAllItem/{Id}")
    public ArrayList<InfraestructuraDimensionEntity> GetAllItem(@PathVariable int Id) {
        InfraestructuraDimension BS = new InfraestructuraDimension();
        return BS.GetAllItem(Id);
    }

    @PostMapping("/Save")
    public InfraestructuraDimensionEntity Save(@RequestBody InfraestructuraDimensionEntity Ent) {
        InfraestructuraDimension BS = new InfraestructuraDimension();
        BS.Save(Ent);
        return Ent;
    }

    @DeleteMapping("/Delete/{Id}")
    public Boolean Delete(@PathVariable int Id) {
        InfraestructuraDimension BS = new InfraestructuraDimension();
        return BS.Delete(Id);
    }
}
