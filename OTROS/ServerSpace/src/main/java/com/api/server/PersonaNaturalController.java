package com.api.server;

import Business.PersonaNatural;
import EntityLayer.PersonaNaturalEntity;
import Framework.Utilidades;
import Models.PersonaNaturalSaveModel;
import java.util.ArrayList;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
@RequestMapping("/api/PersonaNatural")
public class PersonaNaturalController extends Configuracion {

//    @Autowired
//    private Environment environment;
    @GetMapping("/GetAllItems")
    public ArrayList<PersonaNaturalEntity> GetAllItems() {

//        DataConfi();
        DataConfi();
//        System.out.println("Variable estática: " +  );
//        return new ArrayList<>();
        PersonaNatural BS = new PersonaNatural();
        return BS.GetAllItems();
    }

    @GetMapping("/GetAllItem/{Id}")
    public ArrayList<PersonaNaturalEntity> GetAllItem(@PathVariable int Id) {
        PersonaNatural BS = new PersonaNatural();
        return BS.GetAllItem(Id);
    }

    @PostMapping("/Save")
    public PersonaNaturalSaveModel Save(@RequestBody PersonaNaturalSaveModel ItemModel) {
        PersonaNatural BS = new PersonaNatural();
        PersonaNaturalEntity Ent = new PersonaNaturalEntity();

        Ent.setPersonaNaturalId(ItemModel.getPersonaNaturalId());
        Ent.setTipoDocumentoIdentidadId(ItemModel.getTipoDocumentoIdentidadId());
        Ent.setNumDocumento(ItemModel.getNumDocumento());
        Ent.setNombres(ItemModel.getNombres());
        Ent.setApellidoPaterno(ItemModel.getApellidoPaterno());
        Ent.setApellidoMaterno(ItemModel.getApellidoMaterno());
        Ent.setFechaNacimiento(ItemModel.getFechaNacimiento());
        Ent.setUbigeoId(ItemModel.getUbigeoId());
        Ent.setDireccion(ItemModel.getDireccion());
        Ent.setTelefono(ItemModel.getTelefono());
        Ent.setCorreo(ItemModel.getCorreo());
        Ent.setSexoId(ItemModel.getGeneroId());
        Ent.setEstadoCivilId(ItemModel.getEstadoCivilId());
        Ent.setFechaRegistro(ItemModel.getFechaRegistro());
        Ent.setCodUsuario(ItemModel.getCodUsuario());
        Ent.setAction(Utilidades.ConvetEnumAction(ItemModel.getAction()));

      

        Ent = BS.Save(Ent);
        ItemModel.setPersonaNaturalId(Ent.getPersonaNaturalId());
        return ItemModel;
    }

    @GetMapping("/GetSave")
    public PersonaNaturalSaveModel GetSave() {

        PersonaNaturalSaveModel Item = new PersonaNaturalSaveModel();
 
        return Item;
    }

    @DeleteMapping("/Delete/{Id}")
    public Boolean Delete(@PathVariable int Id) {
        PersonaNatural BS = new PersonaNatural();
        return BS.Delete(Id);
    }



  
}
