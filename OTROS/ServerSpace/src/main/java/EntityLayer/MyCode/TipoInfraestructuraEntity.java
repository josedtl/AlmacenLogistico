
package EntityLayer.MyCode;

import com.fasterxml.jackson.annotation.JsonProperty;

public class TipoInfraestructuraEntity {
    
    @JsonProperty("TipoInfraestructuraId")
    private int tipoInfraestructuraId = 0;
    public int getTipoInfraestructuraId() {
        return tipoInfraestructuraId;
    }

    public void setTipoInfraestructuraId(int tipoInfraestructuraId) {
        this.tipoInfraestructuraId = tipoInfraestructuraId;
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
