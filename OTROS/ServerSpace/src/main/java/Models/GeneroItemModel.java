/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package Models;

import EntityLayer.GeneroEntity;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 *
 * @author DAVID
 */
public class GeneroItemModel {

    public GeneroItemModel() {
        this.generoId = 0;
        this.nombre = "";
    }

    public GeneroItemModel(GeneroEntity Ent) {
        this.generoId = Ent.getGeneroId();
        this.nombre = Ent.getNombre();
    }

    @JsonProperty("GeneroId")
    private int generoId = 0;

    public int getGeneroId() {
        return generoId;
    }

    public void setGeneroId(int generoId) {
        this.generoId = generoId;
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
