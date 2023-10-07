package EntityLayer;

import com.fasterxml.jackson.annotation.JsonProperty;
import Enumerados.ProcessActionEnum;
import java.util.Date;

public class PersonaNaturalEntity {

    @JsonProperty("PersonaNaturalId")
    private int personaNaturalId;
    public int getPersonaNaturalId() {
        return personaNaturalId;
    }

    public void setPersonaNaturalId(int personaNaturalId) {
        this.personaNaturalId = personaNaturalId;
    }

    @JsonProperty("TipoDocumentoIdentidadId")
    private int tipoDocumentoIdentidadId;
    public int getTipoDocumentoIdentidadId() {
        return tipoDocumentoIdentidadId;
    }

    public void setTipoDocumentoIdentidadId(int tipoDocumentoIdentidadId) {
        this.tipoDocumentoIdentidadId = tipoDocumentoIdentidadId;
    }

    @JsonProperty("NumDocumento")
    private String numDocumento;
    public String getNumDocumento() {
        return numDocumento;
    }

    public void setNumDocumento(String numDocumento) {
        this.numDocumento = numDocumento;
    }

    @JsonProperty("Nombres")
    private String nombres;
    public String getNombres() {
        return nombres;
    }

    public void setNombres(String nombres) {
        this.nombres = nombres;
    }

    @JsonProperty("ApellidoPaterno")
    private String apellidoPaterno;
    public String getApellidoPaterno() {
        return apellidoPaterno;
    }

    public void setApellidoPaterno(String apellidoPaterno) {
        this.apellidoPaterno = apellidoPaterno;
    }

    @JsonProperty("ApellidoMaterno")
    private String apellidoMaterno;
    public String getApellidoMaterno() {
        return apellidoMaterno;
    }

    public void setApellidoMaterno(String apellidoMaterno) {
        this.apellidoMaterno = apellidoMaterno;
    }

    @JsonProperty("FechaNacimiento")
    private Date fechaNacimiento;
    public Date getFechaNacimiento() {
        return fechaNacimiento;
    }

    public void setFechaNacimiento(Date fechaNacimiento) {
        this.fechaNacimiento = fechaNacimiento;
    }

    @JsonProperty("UbigeoId")
    private int ubigeoId;
    public int getUbigeoId() {
        return ubigeoId;
    }

    public void setUbigeoId(int ubigeoId) {
        this.ubigeoId = ubigeoId;
    }

    @JsonProperty("Direccion")
    private String direccion;
    public String getDireccion() {
        return direccion;
    }

    public void setDireccion(String direccion) {
        this.direccion = direccion;
    }

    @JsonProperty("Telefono")
    private String telefono;
    public String getTelefono() {
        return telefono;
    }

    public void setTelefono(String telefono) {
        this.telefono = telefono;
    }

    @JsonProperty("Correo")
    private String correo;
    public String getCorreo() {
        return correo;
    }

    public void setCorreo(String correo) {
        this.correo = correo;
    }

    @JsonProperty("Genero")
    private int genero;
    public int getGenero() {
        return genero;
    }

    public void setGenero(int genero) {
        this.genero = genero;
    }

    @JsonProperty("EstadoCivil")
    private int estadoCivil;
    public int getEstadoCivil() {
        return estadoCivil;
    }

    public void setEstadoCivil(int estadoCivil) {
        this.estadoCivil = estadoCivil;
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
