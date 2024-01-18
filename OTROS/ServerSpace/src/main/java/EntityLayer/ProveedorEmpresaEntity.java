package EntityLayer;

import com.fasterxml.jackson.annotation.JsonProperty;
import Enumerados.ProcessActionEnum;
import java.util.Date;

public class ProveedorEmpresaEntity {

    @JsonProperty("ProveedorEmpresaId")
    private int proveedorEmpresaId = 0;
    public int getProveedorEmpresaId() {
        return proveedorEmpresaId;
    }

    public void setProveedorEmpresaId(int proveedorEmpresaId) {
        this.proveedorEmpresaId = proveedorEmpresaId;
    }

    @JsonProperty("ProveedorId")
    private int proveedorId = 0;
    public int getProveedorId() {
        return proveedorId;
    }

    public void setProveedorId(int proveedorId) {
        this.proveedorId = proveedorId;
    }

    @JsonProperty("EmpresaId")
    private int empresaId = 0;
    public int getEmpresaId() {
        return empresaId;
    }

    public void setEmpresaId(int empresaId) {
        this.empresaId = empresaId;
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
