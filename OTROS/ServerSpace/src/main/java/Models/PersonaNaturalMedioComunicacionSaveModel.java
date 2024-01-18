/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package Models;

import EntityLayer.PersonaNaturalMedioComunicacionEntity;
import Enumerados.ProcessActionEnum;
import com.fasterxml.jackson.annotation.JsonProperty;
import java.sql.Timestamp;

/**
 *
 * @author DAVID
 */
public class PersonaNaturalMedioComunicacionSaveModel {

    public PersonaNaturalMedioComunicacionSaveModel() {
        this.personaNaturalMedioComunicacionId = 0;
        this.personaNaturalId = 0;
        this.medioComunicacionId = 0;
        this.dato = "";
        this.fechaRegistro = null;
        this.codUsuario = "";
        this.estadoRegistro = false;
        this.action = ProcessActionEnum.Loaded;
    }

    public PersonaNaturalMedioComunicacionSaveModel(PersonaNaturalMedioComunicacionEntity Item) {
        this.personaNaturalMedioComunicacionId = Item.getPersonaNaturalMedioComunicacionId();
        this.personaNaturalId = Item.getPersonaNaturalId();
        this.medioComunicacionId = Item.getMedioComunicacionId();
        this.dato = Item.getDato();
        this.fechaRegistro = Item.getFechaRegistro();
        this.codUsuario = Item.getCodUsuario();
        this.estadoRegistro = Item.getEstadoRegistro();
        this.action = ProcessActionEnum.Loaded;
        this.nomMedioComunicacion = Item.getNomMedioComunicacion();
    }

    @JsonProperty("PersonaNaturalMedioComunicacionId")
    private int personaNaturalMedioComunicacionId = 0;

    public int getPersonaNaturalMedioComunicacionId() {
        return personaNaturalMedioComunicacionId;
    }

    public void setPersonaNaturalMedioComunicacionId(int personaNaturalMedioComunicacionId) {
        this.personaNaturalMedioComunicacionId = personaNaturalMedioComunicacionId;
    }

    @JsonProperty("PersonaNaturalId")
    private int personaNaturalId = 0;

    public int getPersonaNaturalId() {
        return personaNaturalId;
    }

    public void setPersonaNaturalId(int personaNaturalId) {
        this.personaNaturalId = personaNaturalId;
    }

    @JsonProperty("MedioComunicacionId")
    private int medioComunicacionId = 0;

    public int getMedioComunicacionId() {
        return medioComunicacionId;
    }

    public void setMedioComunicacionId(int medioComunicacionId) {
        this.medioComunicacionId = medioComunicacionId;
    }

    @JsonProperty("Dato")
    private String dato = "";

    public String getDato() {
        return dato;
    }

    public void setDato(String dato) {
        this.dato = dato;
    }

    @JsonProperty("FechaRegistro")
    private Timestamp fechaRegistro = null;

    public Timestamp getFechaRegistro() {
        return fechaRegistro;
    }

    public void setFechaRegistro(Timestamp fechaRegistro) {
        this.fechaRegistro = fechaRegistro;
    }

    @JsonProperty("CodUsuario")
    private String codUsuario = "";

    public String getCodUsuario() {
        return codUsuario;
    }

    public void setCodUsuario(String codUsuario) {
        this.codUsuario = codUsuario;
    }

    @JsonProperty("EstadoRegistro")
    private boolean estadoRegistro = false;

    public boolean getEstadoRegistro() {
        return estadoRegistro;
    }

    public void setEstadoRegistro(boolean estadoRegistro) {
        this.estadoRegistro = estadoRegistro;
    }

    @JsonProperty("Action")
    private ProcessActionEnum action = ProcessActionEnum.Loaded;

    public int getAction() {
        return action.getValor();
    }

    public void setAction(ProcessActionEnum Action) {
        this.action = Action;
    }

    @JsonProperty("NomMedioComunicacion")
    private String nomMedioComunicacion = "";

    public String getNomMedioComunicacion() {
        return nomMedioComunicacion;
    }

    public void setNomMedioComunicacion(String nomMedioComunicacion) {
        this.nomMedioComunicacion = nomMedioComunicacion;
    }
}
