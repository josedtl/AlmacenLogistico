package Models;

import Enumerados.ProcessActionEnum;
import com.fasterxml.jackson.annotation.JsonProperty;
import java.sql.Timestamp;

public class PersonaNaturalSaveModel {

    public PersonaNaturalSaveModel() {
        // You can set default values for properties here
        this.personaNaturalId = 0;
        this.tipoDocumentoIdentidadId = 0;
        this.numDocumento = "";
        this.nombres = "";
        this.apellidoPaterno = "";
        this.apellidoMaterno = "";
        this.fechaNacimiento = null;
        this.ubigeoId = 0;
        this.direccion = "";
        this.telefono = "";
        this.correo = "";
        this.generoId = 0;
        this.estadoCivilId = 0;
        this.fechaRegistro = null;
        this.codUsuario = "";
        this.estadoRegistro = false;
        this.action = ProcessActionEnum.Loaded;
    }

    @JsonProperty("PersonaNaturalId")
    private int personaNaturalId = 0;

    public int getPersonaNaturalId() {
        return personaNaturalId;
    }

    public void setPersonaNaturalId(int personaNaturalId) {
        this.personaNaturalId = personaNaturalId;
    }

    @JsonProperty("TipoDocumentoIdentidadId")
    private int tipoDocumentoIdentidadId = 0;

    public int getTipoDocumentoIdentidadId() {
        return tipoDocumentoIdentidadId;
    }

    public void setTipoDocumentoIdentidadId(int tipoDocumentoIdentidadId) {
        this.tipoDocumentoIdentidadId = tipoDocumentoIdentidadId;
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

    @JsonProperty("FechaNacimiento")
    private Timestamp fechaNacimiento = null;

    public Timestamp getFechaNacimiento() {
        return fechaNacimiento;
    }

    public void setFechaNacimiento(Timestamp fechaNacimiento) {
        this.fechaNacimiento = fechaNacimiento;
    }

    @JsonProperty("UbigeoId")
    private int ubigeoId = 0;

    public int getUbigeoId() {
        return ubigeoId;
    }

    public void setUbigeoId(int ubigeoId) {
        this.ubigeoId = ubigeoId;
    }

    @JsonProperty("Direccion")
    private String direccion = "";

    public String getDireccion() {
        return direccion;
    }

    public void setDireccion(String direccion) {
        this.direccion = direccion;
    }

    @JsonProperty("Telefono")
    private String telefono = "";

    public String getTelefono() {
        return telefono;
    }

    public void setTelefono(String telefono) {
        this.telefono = telefono;
    }

    @JsonProperty("Correo")
    private String correo = "";

    public String getCorreo() {
        return correo;
    }

    public void setCorreo(String correo) {
        this.correo = correo;
    }

    @JsonProperty("GeneroId")
    private int generoId = 0;

    public int getGeneroId() {
        return generoId;
    }

    public void setGeneroId(int generoId) {
        this.generoId = generoId;
    }

    @JsonProperty("EstadoCivilId")
    private int estadoCivilId = 0;

    public int getEstadoCivilId() {
        return estadoCivilId;
    }

    public void setEstadoCivilId(int estadoCivilId) {
        this.estadoCivilId = estadoCivilId;
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

 

}
