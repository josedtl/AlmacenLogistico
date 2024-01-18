package com.api.server;

import Business.Empleado;
import EntityLayer.EmpleadoEntity;
import java.util.ArrayList;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
@RequestMapping("/api/Empleado")
public class EmpleadoController {

    @GetMapping("/GetAllItems")
    public ArrayList<EmpleadoEntity> GetAllItems() {
        Empleado BS = new Empleado();
        return BS.GetAllItems();
    }

    @GetMapping("/GetAllItem/{Id}")
    public ArrayList<EmpleadoEntity> GetAllItem(@PathVariable int Id) {
        Empleado BS = new Empleado();
        return BS.GetAllItem(Id);
    }

    @PostMapping("/Save")
    public EmpleadoEntity Save(@RequestBody EmpleadoEntity Ent) {
        Empleado BS = new Empleado();
        BS.Save(Ent);
        return Ent;
    }

    @DeleteMapping("/Delete/{Id}")
    public Boolean Delete(@PathVariable int Id) {
        Empleado BS = new Empleado();
        return BS.Delete(Id);
    }
}
