package com.api.server;

import Business.*;
import EntityLayer.*;
import Models.*;
import java.util.ArrayList;
import org.springframework.scheduling.annotation.Async;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
@RequestMapping("/api/General")
public class GeneralController {

    @GetMapping("/GetPisoItems")
    public ArrayList<PisoItemModel> GetPisoItems() {

        ArrayList<PisoItemModel> Items = new ArrayList<>();
        Piso BS = new Piso();

        ArrayList<PisoEntity> Data = BS.GetAllItems();

        for (PisoEntity Item : Data) {
            PisoItemModel ItemParametro = new PisoItemModel(Item);
            Items.add(ItemParametro);
//            Items.add(new PisoItemModel(Item));
        }

        return Items;
    }

    @GetMapping("/GetPisoItem/{Id}")
    public ArrayList<PisoItemModel> GetPisoItem(@PathVariable int Id) {
        ArrayList<PisoItemModel> Items = new ArrayList<>();
        Piso BS = new Piso();
        ArrayList<PisoEntity> Data = BS.GetAllItem(Id);

        for (PisoEntity Item : Data) {
            Items.add(new PisoItemModel(Item));
        }

        return Items;
    }

    @GetMapping("/GetPisoLikeItem/{Codigo}")
    public ArrayList<PisoItemModel> GetPisoLikeItem(@PathVariable String Codigo) {
        ArrayList<PisoItemModel> Items = new ArrayList<>();
        Piso BS = new Piso();
        ArrayList<PisoEntity> Data = BS.GetPisoLikeItem(Codigo);

        for (PisoEntity Item : Data) {
            Items.add(new PisoItemModel(Item));
        }

        return Items;
    }

    @GetMapping("/GetCargoItems")
    public ArrayList<CargoItemModel> GetCargoItems() {
        ArrayList<CargoItemModel> Items = new ArrayList<>();
        Cargo BS = new Cargo();

        ArrayList<CargoEntity> Data = BS.GetAllItems();

        for (CargoEntity Item : Data) {
            Items.add(new CargoItemModel(Item));
        }

        return Items;
    }

    @GetMapping("/GetCargoItem/{Id}")
    public ArrayList<CargoItemModel> GetCargoItem(@PathVariable int Id) {
        ArrayList<CargoItemModel> Items = new ArrayList<>();
        Cargo BS = new Cargo();
        ArrayList<CargoEntity> Data = BS.GetAllItem(Id);

        for (CargoEntity Item : Data) {
            Items.add(new CargoItemModel(Item));
        }

        return Items;
    }

    @GetMapping("/GetCargoLikeItem/{Nombre}")
    public ArrayList<CargoItemModel> GetCargoLikeItem(@PathVariable String Nombre) {
        ArrayList<CargoItemModel> Items = new ArrayList<>();
        Cargo BS = new Cargo();
        ArrayList<CargoEntity> Data = BS.GetCargoLikeItem(Nombre);

        for (CargoEntity Item : Data) {
            Items.add(new CargoItemModel(Item));
        }

        return Items;
    }

    @GetMapping("/GetServicioBasicoItems")
    public ArrayList<ServicioBasicoItemModel> GetServicioBasicoItems() {

        ArrayList<ServicioBasicoItemModel> Items = new ArrayList<>();
        ServicioBasico BS = new ServicioBasico();

        ArrayList<ServicioBasicoEntity> Data = BS.GetAllItems();

        for (ServicioBasicoEntity Item : Data) {
            ServicioBasicoItemModel ItemParametro = new ServicioBasicoItemModel(Item);
            Items.add(ItemParametro);
        }

        return Items;
    }

    @GetMapping("/GetServicioBasicoItem/{Id}")
    public ArrayList<ServicioBasicoItemModel> GetServicioBasicoItem(@PathVariable int Id) {
        ArrayList<ServicioBasicoItemModel> Items = new ArrayList<>();
        ServicioBasico BS = new ServicioBasico();
        ArrayList<ServicioBasicoEntity> Data = BS.GetAllItem(Id);

        for (ServicioBasicoEntity Item : Data) {
            Items.add(new ServicioBasicoItemModel(Item));
        }

        return Items;
    }

    @GetMapping("/GetServicioBasicoLikeItem/{Codigo}")
    public ArrayList<ServicioBasicoItemModel> GetServicioBasicoLikeItem(@PathVariable String Codigo) {
        ArrayList<ServicioBasicoItemModel> Items = new ArrayList<>();
        ServicioBasico BS = new ServicioBasico();
        ArrayList<ServicioBasicoEntity> Data = BS.GetServicioBasicoLikeItem(Codigo);

        for (ServicioBasicoEntity Item : Data) {
            Items.add(new ServicioBasicoItemModel(Item));
        }

        return Items;
    }

    @GetMapping("/GetTipoInfraestructuraItems")
    public ArrayList<TipoInfraestructuraItemModel> GetTipoInfraestructuraItems() {

        ArrayList<TipoInfraestructuraItemModel> Items = new ArrayList<>();
        TipoInfraestructura BS = new TipoInfraestructura();

        ArrayList<TipoInfraestructuraEntity> Data = BS.GetAllItems();

        for (TipoInfraestructuraEntity Item : Data) {
            TipoInfraestructuraItemModel ItemParametro = new TipoInfraestructuraItemModel(Item);
            Items.add(ItemParametro);
        }

        return Items;
    }

    @GetMapping("/GetTipoInfraestructuraItem/{Id}")
    public ArrayList<TipoInfraestructuraItemModel> GetTipoInfraestructuraItem(@PathVariable int Id) {
        ArrayList<TipoInfraestructuraItemModel> Items = new ArrayList<>();
        TipoInfraestructura BS = new TipoInfraestructura();
        ArrayList<TipoInfraestructuraEntity> Data = BS.GetAllItem(Id);

        for (TipoInfraestructuraEntity Item : Data) {
            Items.add(new TipoInfraestructuraItemModel(Item));
        }

        return Items;
    }

    @GetMapping("/GetTipoInfraestructuraLikeItem/{nombre}")
    public ArrayList<TipoInfraestructuraItemModel> GetTipoInfraestructuraLikeItem(@PathVariable String Nombre) {
        ArrayList<TipoInfraestructuraItemModel> Items = new ArrayList<>();
        TipoInfraestructura BS = new TipoInfraestructura();
        ArrayList<TipoInfraestructuraEntity> Data = BS.GetTipoInfraestructuraLikeItem(Nombre);

        for (TipoInfraestructuraEntity Item : Data) {
            Items.add(new TipoInfraestructuraItemModel(Item));
        }

        return Items;
    }

    @GetMapping("/GetSucursalItems")
    public ArrayList<SucursalItemModel> GetSucursalItems() {

        ArrayList<SucursalItemModel> Items = new ArrayList<>();
        Sucursal BS = new Sucursal();

        ArrayList<SucursalEntity> Data = BS.GetAllItems();

        for (SucursalEntity Item : Data) {
            SucursalItemModel ItemParametro = new SucursalItemModel(Item);
            Items.add(ItemParametro);
        }

        return Items;
    }

    @GetMapping("/GetSucursalItem/{Id}")
    public ArrayList<SucursalItemModel> GetSucursalItem(@PathVariable int Id) {
        ArrayList<SucursalItemModel> Items = new ArrayList<>();
        Sucursal BS = new Sucursal();
        ArrayList<SucursalEntity> Data = BS.GetAllItem(Id);

        for (SucursalEntity Item : Data) {
            Items.add(new SucursalItemModel(Item));
        }

        return Items;
    }

    @GetMapping("/GetSucursalLikeItem/{Codigo}")
    public ArrayList<SucursalItemModel> GetSucursalLikeItem(@PathVariable String Codigo) {
        ArrayList<SucursalItemModel> Items = new ArrayList<>();
        Sucursal BS = new Sucursal();
        ArrayList<SucursalEntity> Data = BS.GetSucursalLikeItem(Codigo);

        for (SucursalEntity Item : Data) {
            Items.add(new SucursalItemModel(Item));
        }

        return Items;
    }

    @GetMapping("/GetTipoDocuemntoIdentidadPersonaItems")
    public ArrayList<TipoDocumentoIdentidadItemModel> GetTipoDocuemntoIdentidadPersonaItems() {

        ArrayList<TipoDocumentoIdentidadItemModel> Items = new ArrayList<>();
        TipoDocumentoIdentidad BS = new TipoDocumentoIdentidad();

        ArrayList<TipoDocumentoIdentidadEntity> Data = BS.GetAllItems();

        for (TipoDocumentoIdentidadEntity Item : Data) {
            if (!Item.getEsEmpresa()) {
                Items.add(new TipoDocumentoIdentidadItemModel(Item));
            }
        }

        return Items;
    }

    @GetMapping("/GetTipoDocuemntoIdentidadItem/{Id}")
    public ArrayList<TipoDocumentoIdentidadItemModel> GetTipoDocuemntoIdentidadItem(@PathVariable int Id) {

        ArrayList<TipoDocumentoIdentidadItemModel> Items = new ArrayList<>();
        TipoDocumentoIdentidad BS = new TipoDocumentoIdentidad();

        ArrayList<TipoDocumentoIdentidadEntity> Data = BS.GetAllItems();

        for (TipoDocumentoIdentidadEntity Item : Data) {
            Items.add(new TipoDocumentoIdentidadItemModel(Item));
        }

        return Items;
    }

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

    @GetMapping("/GetGeneroItems")
    public ArrayList<GeneroItemModel> GetGeneroItems() {
        ArrayList<GeneroItemModel> Items = new ArrayList<>();
        Genero BS = new Genero();
        ArrayList<GeneroEntity> Data = BS.GetAllItems();

        for (GeneroEntity Item : Data) {
            Items.add(new GeneroItemModel(Item));
        }

        return Items;
    }

    @GetMapping("/GetGeneroItem/{Id}")
    public ArrayList<GeneroItemModel> GetGeneroItem(@PathVariable int Id) {
        ArrayList<GeneroItemModel> Items = new ArrayList<>();
        Genero BS = new Genero();
        ArrayList<GeneroEntity> Data = BS.GetAllItem(Id);

        for (GeneroEntity Item : Data) {
            Items.add(new GeneroItemModel(Item));
        }

        return Items;
    }

    @GetMapping("/GetEstadoCivilItems")
    public ArrayList<EstadoCivilItemModel> GetEstadoCivilItems() {
        ArrayList<EstadoCivilItemModel> Items = new ArrayList<>();
        EstadoCivil BS = new EstadoCivil();

        ArrayList<EstadoCivilEntity> Data = BS.GetAllItems();

        for (EstadoCivilEntity Item : Data) {
            Items.add(new EstadoCivilItemModel(Item));
        }

        return Items;
    }

    @GetMapping("/GetEstadoCivilItem/{Id}")
    public ArrayList<EstadoCivilItemModel> GetEstadoCivilItem(@PathVariable int Id) {
        ArrayList<EstadoCivilItemModel> Items = new ArrayList<>();
        EstadoCivil BS = new EstadoCivil();

        ArrayList<EstadoCivilEntity> Data = BS.GetAllItem(Id);

        for (EstadoCivilEntity Item : Data) {
            Items.add(new EstadoCivilItemModel(Item));
        }

        return Items;
    }
    @Async
    @GetMapping("/GetMedioComunicacionItems")
    public ArrayList<MedioComunicacionItemModel> GetMedioComunicacionItems() {
        ArrayList<MedioComunicacionItemModel> Items = new ArrayList<>();
        MedioComunicacion BS = new MedioComunicacion();

        ArrayList<MedioComunicacionEntity> Data = BS.GetAllItems();

        for (MedioComunicacionEntity Item : Data) {
            Items.add(new MedioComunicacionItemModel(Item));
        }

        return Items;
    }

}
