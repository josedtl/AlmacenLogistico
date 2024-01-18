package com.api.server;

import Business.TipoDocumentoIdentidad;
import EntityLayer.TipoDocumentoIdentidadEntity;
import java.util.ArrayList;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
@RequestMapping("/api/TipoDocumentoIdentidad")
public class TipoDocumentoIdentidadController {

    @GetMapping("/GetAllItems")
    public ArrayList<TipoDocumentoIdentidadEntity> GetAllItems() {
        TipoDocumentoIdentidad BS = new TipoDocumentoIdentidad();
        return BS.GetAllItems();
    }

    @GetMapping("/GetAllItem/{Id}")
    public ArrayList<TipoDocumentoIdentidadEntity> GetAllItem(@PathVariable int Id) {
        TipoDocumentoIdentidad BS = new TipoDocumentoIdentidad();
        return BS.GetAllItem(Id);
    }

    @PostMapping("/Save")
    public TipoDocumentoIdentidadEntity Save(@RequestBody TipoDocumentoIdentidadEntity Ent) {
        TipoDocumentoIdentidad BS = new TipoDocumentoIdentidad();
        BS.Save(Ent);
        return Ent;
    }

    @DeleteMapping("/Delete/{Id}")
    public Boolean Delete(@PathVariable int Id) {
        TipoDocumentoIdentidad BS = new TipoDocumentoIdentidad();
        return BS.Delete(Id);
    }
}
