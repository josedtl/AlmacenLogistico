/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package Models;

import com.fasterxml.jackson.annotation.JsonProperty;
import EntityLayer.*;

/**
 *
 * @author DAVID
 */
public class UbigeoItemModel {

    public UbigeoItemModel() {
        this.ubigeoId = 0;
        this.codUbigeo = 0;
        this.desUbigeo = "";
    }

    public UbigeoItemModel(UbigeoEntity Ent) {
        this.ubigeoId = Ent.getUbigeoId();
        this.codUbigeo = Ent.getCodUbigeo();
        this.desUbigeo = Ent.getDesUbigeo();
    }

    @JsonProperty("UbigeoId")
    private int ubigeoId = 0;

    public int getUbigeoId() {
        return ubigeoId;
    }

    public void setUbigeoId(int ubigeoId) {
        this.ubigeoId = ubigeoId;
    }

    @JsonProperty("CodUbigeo")
    private int codUbigeo = 0;

    public int getCodUbigeo() {
        return codUbigeo;
    }

    public void setCodUbigeo(int codUbigeo) {
        this.codUbigeo = codUbigeo;
    }

    @JsonProperty("DesUbigeo")
    private String desUbigeo = "";

    public String getDesUbigeo() {
        return desUbigeo;
    }

    public void setDesUbigeo(String desUbigeo) {
        this.desUbigeo = desUbigeo;
    }

}
