package com.api.server;

import Business.InfraLista;
import EntityLayer.InfraListaEntity;
import Models.ResponseAPI;
import Models.InfraLista.InfraListaModel;
import java.util.ArrayList;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
@RequestMapping("/api/InfraLista")
public class InfraListaController extends Configuracion{

    @GetMapping("/ObtenerItem/{Id}")
    public ResponseAPI<ArrayList<InfraListaModel>> ObtenerItem(@PathVariable int Id) {
        DataConfi();
        InfraLista BS = new InfraLista();
        ArrayList<InfraListaModel> Items = new ArrayList<>();
        ArrayList<InfraListaEntity> Data = BS.GetAllItem(Id);

        for (InfraListaEntity Item : Data) {
            Items.add(new InfraListaModel(Item));
        }

        return  new ResponseAPI<ArrayList<InfraListaModel>>( Items,true,"");
    }

}
