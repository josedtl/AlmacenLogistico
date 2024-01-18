package Models;

import EntityLayer.CargoEntity;
import com.fasterxml.jackson.annotation.JsonProperty;

public class CargoItemModel {

    public CargoItemModel() {
        this.cargoId = 0;
        this.nombre = "";
    }
    
    

    public CargoItemModel(CargoEntity Ent) {
        this.cargoId = Ent.getCargoId();
        this.nombre = Ent.getNombre();
    }

    @JsonProperty("CargoId")
    private int cargoId = 0;

    public int getCargoId() {
        return cargoId;
    }

    public void setCargoId(int cargoId) {
        this.cargoId = cargoId;
    }

    @JsonProperty("Nombre")
    private String nombre = "";

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

}
