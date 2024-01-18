/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package Models;

import EntityLayer.MedioComunicacionEntity;
import Enumerados.ProcessActionEnum;
import com.fasterxml.jackson.annotation.JsonProperty;
import java.sql.Timestamp;

/**
 *
 * @author DAVID
 */
public class MedioComunicacionItemModel {

    public MedioComunicacionItemModel() {
        this.medioComunicacionId = 0;
        this.codigo = "";
        this.nombre = "";
    }

    public MedioComunicacionItemModel(MedioComunicacionEntity Ent) {
        this.medioComunicacionId = Ent.getMedioComunicacionId();
        this.codigo = Ent.getCodigo();
        this.nombre = Ent.getNombre();
    }

    @JsonProperty("MedioComunicacionId")
    private int medioComunicacionId = 0;

    public int getMedioComunicacionId() {
        return medioComunicacionId;
    }

    public void setMedioComunicacionId(int medioComunicacionId) {
        this.medioComunicacionId = medioComunicacionId;
    }

    @JsonProperty("Codigo")
    private String codigo = "";

    public String getCodigo() {
        return codigo;
    }

    public void setCodigo(String codigo) {
        this.codigo = codigo;
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
