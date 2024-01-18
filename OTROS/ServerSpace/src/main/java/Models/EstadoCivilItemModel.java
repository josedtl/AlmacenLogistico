/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package Models;

import EntityLayer.EstadoCivilEntity;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 *
 * @author DAVID
 */
public class EstadoCivilItemModel {
    
     public EstadoCivilItemModel() {
        this.estadoCivilId = 0;
        this.nombre = "";
    }

    public EstadoCivilItemModel(EstadoCivilEntity Ent) {
        this.estadoCivilId = Ent.getEstadoCivilId();
        this.nombre = Ent.getNombre();
    }

    
      @JsonProperty("EstadoCivilId")
    private int estadoCivilId = 0;
    public int getEstadoCivilId() {
        return estadoCivilId;
    }

    public void setEstadoCivilId(int estadoCivilId) {
        this.estadoCivilId = estadoCivilId;
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
