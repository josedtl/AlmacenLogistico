package Models;

import EntityLayer.PersonaNaturalEntity;
import com.fasterxml.jackson.annotation.JsonProperty;
import java.sql.Timestamp;

public class PersonaNaturalMainModel {

    public PersonaNaturalMainModel() {
        this.personaNaturalId = 0;
        this.nomDocumento = "";
        this.numDocumento = "";
        this.nombres = "";
        this.apellidoPaterno = "";
        this.apellidoMaterno = "";
        this.fechaRegistro = null;
        this.codUsuario = "";
    }

    public PersonaNaturalMainModel(PersonaNaturalEntity Ent) {
        this.personaNaturalId = Ent.getPersonaNaturalId();
        this.nomDocumento = Ent.getNomDocumento();
        this.numDocumento = Ent.getNumDocumento();
        this.nombres = Ent.getNombres();
        this.apellidoPaterno = Ent.getApellidoPaterno();
        this.apellidoMaterno = Ent.getApellidoMaterno();
        this.fechaRegistro = Ent.getFechaRegistro();
        this.codUsuario = Ent.getCodUsuario();
    }

    @JsonProperty("PersonaNaturalId")
    private int personaNaturalId = 0;

    public int getPersonaNaturalId() {
        return personaNaturalId;
    }

    public void setPersonaNaturalId(int personaNaturalId) {
        this.personaNaturalId = personaNaturalId;
    }

    @JsonProperty("NomDocumento")
    private String nomDocumento = "";

    public String getNomDocumento() {
        return nomDocumento;
    }

    public void setNomDocumento(String nomDocumento) {
        this.nomDocumento = nomDocumento;
    }

    @JsonProperty("NumDocumento")
    private String numDocumento = "";

    public String getNumDocumento() {
        return numDocumento;
    }

    public void setNumDocumento(String numDocumento) {
        this.numDocumento = numDocumento;
    }

    @JsonProperty("Nombres")
    private String nombres = "";

    public String getNombres() {
        return nombres;
    }

    public void setNombres(String nombres) {
        this.nombres = nombres;
    }

    @JsonProperty("ApellidoPaterno")
    private String apellidoPaterno = "";

    public String getApellidoPaterno() {
        return apellidoPaterno;
    }

    public void setApellidoPaterno(String apellidoPaterno) {
        this.apellidoPaterno = apellidoPaterno;
    }

    @JsonProperty("ApellidoMaterno")
    private String apellidoMaterno = "";

    public String getApellidoMaterno() {
        return apellidoMaterno;
    }

    public void setApellidoMaterno(String apellidoMaterno) {
        this.apellidoMaterno = apellidoMaterno;
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

}
