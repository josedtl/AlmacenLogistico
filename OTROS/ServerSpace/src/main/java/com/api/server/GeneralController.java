package com.api.server;

import Business.*;
import EntityLayer.*;
import Models.*;
import java.util.ArrayList;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
@RequestMapping("/api/General")
public class GeneralController {



  
 

    @GetMapping("/GetUbigeoLikeItem/{Nombre}")
    public ArrayList<UbigeoItemModel> GetUbigeoLikeItem(@PathVariable String Nombre) {
        ArrayList<UbigeoItemModel> Items = new ArrayList<>();
        Ubigeo BS = new Ubigeo();
        ArrayList<UbigeoEntity> Data = BS.GetUbigeoLikeItem(Nombre);

        for (UbigeoEntity Item : Data) {
            Items.add(new UbigeoItemModel(Item));
        }

        return Items;
    }

    @GetMapping("/GetUbigeoItem/{Id}")
    public ArrayList<UbigeoItemModel> GetUbigeoItem(@PathVariable int Id) {
        ArrayList<UbigeoItemModel> Items = new ArrayList<>();
        Ubigeo BS = new Ubigeo();
        ArrayList<UbigeoEntity> Data = BS.GetAllItem(Id);

        for (UbigeoEntity Item : Data) {
            Items.add(new UbigeoItemModel(Item));
        }

        return Items;
    }

   

}
