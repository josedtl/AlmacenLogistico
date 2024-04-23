package com.api.server;

import Framework.Utilidades;
import Business.Servicio;
import EntityLayer.ServicioEntity;
import Models.ResponseAPI;
import Models.Servicio.ServicioMainModel;
import Models.Servicio.ServicioSaveModel;

import java.util.ArrayList;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
@RequestMapping("/api/Servicio")
public class ServicioController extends Configuracion {

    @GetMapping("/ObtenerMain")
    public ResponseAPI<ArrayList<ServicioMainModel>> GetInfraestructuraMainItems() {
        DataConfi();
        Servicio BS = new Servicio();
        ArrayList<ServicioMainModel> Items = new ArrayList<>();
        ArrayList<ServicioEntity> Data = BS.ObtenerMain();

        for (ServicioEntity Item : Data) {
            Items.add(new ServicioMainModel(Item));
        }

        return new ResponseAPI<ArrayList<ServicioMainModel>>(Items, true, "");
    }

    @PostMapping("/Registrar")
    public ResponseAPI<ServicioSaveModel> Registrar(@RequestBody ServicioSaveModel ItemModel) {
        DataConfi();
        Servicio BS = new Servicio();
        ServicioEntity Ent = new ServicioEntity();

        Ent.setServicioId(ItemModel.getServicioId());
        Ent.setCorrelativo(ItemModel.getCorrelativo());
        Ent.setNombre(ItemModel.getNombre());
        Ent.setDescripcion(ItemModel.getDescripcion());
        Ent.setTipoServicioId(ItemModel.getTipoServicioId());
        Ent.setFechaRegistro(ItemModel.getFechaRegistro());
        Ent.setCodUsuario(ItemModel.getCodUsuario());
        Ent.setEstadoRegistro(ItemModel.getEstadoRegistro());
        Ent.setAction(Utilidades.ConvetEnumAction(ItemModel.getAction()));
        BS.Registrar(Ent);
        ItemModel.setServicioId(Ent.getServicioId());
        return new ResponseAPI<ServicioSaveModel>(ItemModel, true, "");
    }

    @GetMapping("/ObtenerItem/{Id}")
    public ResponseAPI<ArrayList<ServicioSaveModel>> ObtenerItem(@PathVariable int Id) {
        DataConfi();
        Servicio BS = new Servicio();
        ArrayList<ServicioSaveModel> Items = new ArrayList<>();
        ArrayList<ServicioEntity> Data = BS.ObtenerMain();

        for (ServicioEntity Item : Data) {
            Items.add(new ServicioSaveModel(Item));
        }

        return new ResponseAPI<ArrayList<ServicioSaveModel>>(Items, true, "");
    }

}
