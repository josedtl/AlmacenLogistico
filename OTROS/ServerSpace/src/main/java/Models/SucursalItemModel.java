
package Models;

import EntityLayer.SucursalEntity;
import com.fasterxml.jackson.annotation.JsonProperty;

public class SucursalItemModel {
    public SucursalItemModel() {
        this.sucursalId = 0;
        this.codigo = "";
    }

    public SucursalItemModel(SucursalEntity Ent) {
        this.sucursalId = Ent.getSucursalId();
        this.codigo = Ent.getCodigo();
    }

    
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
