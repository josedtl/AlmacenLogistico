
package EntityLayer.MyCode;

import com.fasterxml.jackson.annotation.JsonProperty;

public class TipoElementoEntity {
    
    @JsonProperty("TipoElementoId")
    private int tipoElementoId = 0;
    public int getTipoElementoId() {
        return tipoElementoId;
    }

    public void setTipoElementoId(int tipoElementoId) {
        this.tipoElementoId = tipoElementoId;
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
