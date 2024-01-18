package EntityLayer;

import Enumerados.ProcessActionEnum;

public class EmpresaEntity {

    private int EmpresaId = 0;
    private int TipoDocumentoIdentidadId = 0;
    private String NumeroDocumento = "";
    private String RazonSocial = "";
    private String NombreComercial = "";
    private int EstadoContribuyente = 0;
    private int CondicionContribuyente = 0;
    private int UbigeoId = 0;
    private String direccion = "";
    private ProcessActionEnum Action = ProcessActionEnum.Loaded;

    public int getEmpresaId() {
        return EmpresaId;
    }

    public void setEmpresaId(int EmpresaId) {
        this.EmpresaId = EmpresaId;
    }

    public int getTipoDocumentoIdentidadId() {
        return TipoDocumentoIdentidadId;
    }

    public void setTipoDocumentoIdentidadId(int TipoDocumentoIdentidadId) {
        this.TipoDocumentoIdentidadId = TipoDocumentoIdentidadId;
    }

    public String getNumeroDocumento() {
        return NumeroDocumento;
    }

    public void setNumeroDocumento(String NumeroDocumento) {
        this.NumeroDocumento = NumeroDocumento;
    }

    public String getRazonSocial() {
        return RazonSocial;
    }

    public void setRazonSocial(String RazonSocial) {
        this.RazonSocial = RazonSocial;
    }

    public String getNombreComercial() {
        return NombreComercial;
    }

    public void setNombreComercial(String NombreComercial) {
        this.NombreComercial = NombreComercial;
    }

    public int getEstadoContribuyente() {
        return EstadoContribuyente;
    }

    public void setEstadoContribuyente(int EstadoContribuyente) {
        this.EstadoContribuyente = EstadoContribuyente;
    }

    public int getCondicionContribuyente() {
        return CondicionContribuyente;
    }

    public void setCondicionContribuyente(int CondicionContribuyente) {
        this.CondicionContribuyente = CondicionContribuyente;
    }

    public int getUbigeoId() {
        return UbigeoId;
    }

    public void setUbigeoId(int UbigeoI) {
        this.UbigeoId = UbigeoI;
    }

    public String getDireccion() {
        return direccion;
    }

    public void setDireccion(String direccion) {
        this.direccion = direccion;
    }

    public int getAction() {
        return Action.getValor();
    }

    public void setAction(ProcessActionEnum Action) {
        this.Action = Action;
    }
}
