package com.api.server;

import Business.PersonaNatural;
import Business.PersonaNaturalMedioComunicacion;
import EntityLayer.PersonaNaturalEntity;
import EntityLayer.PersonaNaturalMedioComunicacionEntity;
import Framework.Utilidades;
import Models.PersonaNaturalMainModel;
import Models.PersonaNaturalMedioComunicacionSaveModel;
import Models.PersonaNaturalSaveModel;
import java.util.ArrayList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
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
        Ent.setGeneroId(ItemModel.getGeneroId());
        Ent.setEstadoCivilId(ItemModel.getEstadoCivilId());
        Ent.setFechaRegistro(ItemModel.getFechaRegistro());
        Ent.setCodUsuario(ItemModel.getCodUsuario());
        Ent.setEstadoRegistro(ItemModel.getEstadoRegistro());
        Ent.setAction(Utilidades.ConvetEnumAction(ItemModel.getAction()));

        if (ItemModel.getDetalleMedioComunicacion() != null && ItemModel.getDetalleMedioComunicacion().size() > 0) {
            ArrayList<PersonaNaturalMedioComunicacionEntity> Detalle_Ent = new ArrayList<>();
            PersonaNaturalMedioComunicacionEntity Item_Ent = new PersonaNaturalMedioComunicacionEntity();
            for (var ItemModelDetalle : ItemModel.getDetalleMedioComunicacion()) {

                Item_Ent = new PersonaNaturalMedioComunicacionEntity();

                Item_Ent.setPersonaNaturalMedioComunicacionId(ItemModelDetalle.getPersonaNaturalMedioComunicacionId());
                Item_Ent.setPersonaNaturalId(ItemModelDetalle.getPersonaNaturalId());
                Item_Ent.setMedioComunicacionId(ItemModelDetalle.getMedioComunicacionId());
                Item_Ent.setDato(ItemModelDetalle.getDato());
                Item_Ent.setFechaRegistro(ItemModelDetalle.getFechaRegistro());
                Item_Ent.setCodUsuario(ItemModelDetalle.getCodUsuario());
                Item_Ent.setEstadoRegistro(ItemModelDetalle.getEstadoRegistro());
                Item_Ent.setAction(Utilidades.ConvetEnumAction(ItemModelDetalle.getAction()));

                Detalle_Ent.add(Item_Ent);
            }
            Ent.setDetalleMedioComunicacion(Detalle_Ent);
        }

        Ent = BS.Save(Ent);
        ItemModel.setPersonaNaturalId(Ent.getPersonaNaturalId());
        return ItemModel;
    }

    @GetMapping("/GetSave")
    public PersonaNaturalSaveModel GetSave() {

        PersonaNaturalSaveModel Item = new PersonaNaturalSaveModel();
        PersonaNaturalMedioComunicacionSaveModel Detalle = new PersonaNaturalMedioComunicacionSaveModel();

        Item.getDetalleMedioComunicacion().add(new PersonaNaturalMedioComunicacionSaveModel());

        return Item;
    }

    @DeleteMapping("/Delete/{Id}")
    public Boolean Delete(@PathVariable int Id) {
        PersonaNatural BS = new PersonaNatural();
        return BS.Delete(Id);
    }

    @GetMapping("/GetPersonaNaturalMainItems")
    public ArrayList<PersonaNaturalMainModel> GetPersonaNaturalMainItems() {
        PersonaNatural BS = new PersonaNatural();
        ArrayList<PersonaNaturalMainModel> Items = new ArrayList<>();
        ArrayList<PersonaNaturalEntity> Data = BS.GetPersonaNaturalMainItems();

        for (PersonaNaturalEntity Item : Data) {
            Items.add(new PersonaNaturalMainModel(Item));
        }

        return Items;
    }

    @GetMapping("/GetMedioComunicacionDetalle/{Id}")
    public ArrayList<PersonaNaturalMedioComunicacionSaveModel> GetMedioComunicacionDetalle(@PathVariable int Id) {
        PersonaNaturalMedioComunicacion BS = new PersonaNaturalMedioComunicacion();
        ArrayList<PersonaNaturalMedioComunicacionSaveModel> Items = new ArrayList<>();
        ArrayList<PersonaNaturalMedioComunicacionEntity> Data = BS.GetMedioComunicacionDetalle(Id);

        for (PersonaNaturalMedioComunicacionEntity Item : Data) {
            Items.add(new PersonaNaturalMedioComunicacionSaveModel(Item));
        }

        return Items;
    }

}
