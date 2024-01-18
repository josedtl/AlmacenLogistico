package com.api.server;

import Business.ProveedorEmpresa;
import EntityLayer.ProveedorEmpresaEntity;
import java.util.ArrayList;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
@RequestMapping("/api/ProveedorEmpresa")
public class ProveedorEmpresaController {

    @GetMapping("/GetAllItems")
    public ArrayList<ProveedorEmpresaEntity> GetAllItems() {
        ProveedorEmpresa BS = new ProveedorEmpresa();
        return BS.GetAllItems();
    }

    @GetMapping("/GetAllItem/{Id}")
    public ArrayList<ProveedorEmpresaEntity> GetAllItem(@PathVariable int Id) {
        ProveedorEmpresa BS = new ProveedorEmpresa();
        return BS.GetAllItem(Id);
    }

    @PostMapping("/Save")
    public ProveedorEmpresaEntity Save(@RequestBody ProveedorEmpresaEntity Ent) {
        ProveedorEmpresa BS = new ProveedorEmpresa();
        BS.Save(Ent);
        return Ent;
    }

    @DeleteMapping("/Delete/{Id}")
    public Boolean Delete(@PathVariable int Id) {
        ProveedorEmpresa BS = new ProveedorEmpresa();
        return BS.Delete(Id);
    }
}
