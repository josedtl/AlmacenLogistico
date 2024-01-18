/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package EntityLayer.MyCode;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 *
 * @author DAVID
 */
public class PersonaNaturalMedioComunicacionEntity {

    @JsonProperty("NomMedioComunicacion")
    private String nomMedioComunicacion = "";

    public String getNomMedioComunicacion() {
        return nomMedioComunicacion;
    }

    public void setNomMedioComunicacion(String nomMedioComunicacion) {
        this.nomMedioComunicacion = nomMedioComunicacion;
    }
}
