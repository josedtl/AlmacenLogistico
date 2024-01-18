/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package EntityLayer.MyCode;

import EntityLayer.PersonaNaturalMedioComunicacionEntity;
import com.fasterxml.jackson.annotation.JsonProperty;
import java.util.ArrayList;

/**
 *
 * @author DAVID
 */
public class PersonaNaturalEntity {

    @JsonProperty("NomDocumento")
    private String nomDocumento = "";

    public String getNomDocumento() {
        return nomDocumento;
    }

    public void setNomDocumento(String nomDocumento) {
        this.nomDocumento = nomDocumento;
    }

    @JsonProperty("PersonaNaturalMedioComunicacioDetalle")
    private ArrayList<PersonaNaturalMedioComunicacionEntity>  personaNaturalMedioComunicacioDetalle = new ArrayList<>();
    
    public ArrayList<PersonaNaturalMedioComunicacionEntity>  getDetalleMedioComunicacion() {
        return personaNaturalMedioComunicacioDetalle;
    }

    public void setDetalleMedioComunicacion(ArrayList<PersonaNaturalMedioComunicacionEntity>  ItemDetalle) {
        this.personaNaturalMedioComunicacioDetalle = ItemDetalle;
    }
    
    

}
