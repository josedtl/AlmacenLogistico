package EntityLayer;

import com.fasterxml.jackson.annotation.JsonProperty;
import Enumerados.ProcessActionEnum;
import java.util.Date;

public class UbigeoEntity {

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

    @JsonProperty("DepartamentoId")
    private int departamentoId = 0;
    public int getDepartamentoId() {
        return departamentoId;
    }

    public void setDepartamentoId(int departamentoId) {
        this.departamentoId = departamentoId;
    }

    @JsonProperty("ProvinciaId")
    private int provinciaId = 0;
    public int getProvinciaId() {
        return provinciaId;
    }

    public void setProvinciaId(int provinciaId) {
        this.provinciaId = provinciaId;
    }

    @JsonProperty("DistritoId")
    private int distritoId = 0;
    public int getDistritoId() {
        return distritoId;
    }

    public void setDistritoId(int distritoId) {
        this.distritoId = distritoId;
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
