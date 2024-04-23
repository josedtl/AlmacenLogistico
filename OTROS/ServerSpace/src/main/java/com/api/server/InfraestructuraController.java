package com.api.server;

import Framework.Utilidades;
import Business.Infraestructura;
import EntityLayer.InfraestructuraEntity;
import Models.ResponseAPI;
import Models.Infraestructura.InfraestructuraMainModel;
import Models.Infraestructura.InfraestructuraSaveModel;

import java.util.ArrayList;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
@RequestMapping("/api/Infraestructura")
public class InfraestructuraController extends Configuracion {

    @GetMapping("/ObtenerMain")
    public ResponseAPI<ArrayList<InfraestructuraMainModel>> GetInfraestructuraMainItems() {
        DataConfi();
        Infraestructura BS = new Infraestructura();
        ArrayList<InfraestructuraMainModel> Items = new ArrayList<>();
        ArrayList<InfraestructuraEntity> Data = BS.ObtenerMain();

        for (InfraestructuraEntity Item : Data) {
            Items.add(new InfraestructuraMainModel(Item));
        }

        return new ResponseAPI<ArrayList<InfraestructuraMainModel>>(Items, true, "");
    }

    @PostMapping("/Registrar")
    public ResponseAPI<InfraestructuraSaveModel> Registrar(@RequestBody InfraestructuraSaveModel ItemModel) {
        Infraestructura BS = new Infraestructura();
        InfraestructuraEntity Ent = new InfraestructuraEntity();

        Ent.setInfraestructuraId(ItemModel.getInfraestructuraId());
        Ent.setEstado(ItemModel.getEstado());
        Ent.setSucursalId(ItemModel.getSucursalId());
        Ent.setCodigoSistema(ItemModel.getCodigoSistema());
        Ent.setCodigoInterno(ItemModel.getCodigoInterno());
        Ent.setDescripcion(ItemModel.getDescripcion());
        Ent.setTipoInfraestructuraId(ItemModel.getTipoInfraestructuraId());
        Ent.setInfraestructuraDimensionId(ItemModel.getInfraestructuraDimensionId());
        Ent.setAforo(ItemModel.getAforo());
        Ent.setPisoId(ItemModel.getPisoId());
        Ent.setFechaRegistro(ItemModel.getFechaRegistro());
        Ent.setCodUsuario(ItemModel.getCodUsuario());
        Ent.setEstadoRegistro(ItemModel.getEstadoRegistro());
        Ent.setAction(Utilidades.ConvetEnumAction(ItemModel.getAction()));
        BS.Registrar(Ent);
        ItemModel.setInfraestructuraId(Ent.getInfraestructuraId());
        return new ResponseAPI<InfraestructuraSaveModel>(ItemModel, true, "");
    }

    @GetMapping("/ObtenerItem/{Id}")
    public ResponseAPI<ArrayList<InfraestructuraSaveModel>> ObtenerItem(@PathVariable int Id) {
        DataConfi();
        Infraestructura BS = new Infraestructura();
        ArrayList<InfraestructuraSaveModel> Items = new ArrayList<>();
        ArrayList<InfraestructuraEntity> Data = BS.GetAllItem(Id);

        for (InfraestructuraEntity Item : Data) {
            Items.add(new InfraestructuraSaveModel(Item));
        }

        return new ResponseAPI<ArrayList<InfraestructuraSaveModel>>(Items, true, "");
    }

}
