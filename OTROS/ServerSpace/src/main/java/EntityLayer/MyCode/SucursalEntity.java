
package EntityLayer.MyCode;

import com.fasterxml.jackson.annotation.JsonProperty;


public class SucursalEntity {
    @JsonProperty("SucursalId")
    private int sucursalId = 0;
    public int getSucursalId() {
        return sucursalId;
    }

    public void setSucursalId(int sucursalId) {
        this.sucursalId = sucursalId;
    }
    
     @JsonProperty("Codigo")
    private String codigo = "";
    public String getCodigo() {
        return codigo;
    }

    public void setCodigo(String codigo) {
        this.codigo = codigo;
    }
}
