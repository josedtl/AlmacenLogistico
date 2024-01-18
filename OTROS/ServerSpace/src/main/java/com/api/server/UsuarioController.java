package com.api.server;

import Business.Usuario;
import EntityLayer.UsuarioEntity;
import java.util.ArrayList;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
@RequestMapping("/api/Usuario")
public class UsuarioController {

    @GetMapping("/GetAllItems")
    public ArrayList<UsuarioEntity> GetAllItems() {
        Usuario BS = new Usuario();
        return BS.GetAllItems();
    }

    @GetMapping("/GetAllItem/{Id}")
    public ArrayList<UsuarioEntity> GetAllItem(@PathVariable int Id) {
        Usuario BS = new Usuario();
        return BS.GetAllItem(Id);
    }

    @PostMapping("/Save")
    public UsuarioEntity Save(@RequestBody UsuarioEntity Ent) {
        Usuario BS = new Usuario();
        BS.Save(Ent);
        return Ent;
    }

    @DeleteMapping("/Delete/{Id}")
    public Boolean Delete(@PathVariable int Id) {
        Usuario BS = new Usuario();
        return BS.Delete(Id);
    }
}
