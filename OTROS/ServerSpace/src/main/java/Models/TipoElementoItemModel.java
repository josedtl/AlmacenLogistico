
package Models;

import EntityLayer.TipoElementoEntity;
import com.fasterxml.jackson.annotation.JsonProperty;

public class TipoElementoItemModel {
    
    public TipoElementoItemModel() {
        this.tipoElementoId = 0;
        this.nombre = "";
    }

    public TipoElementoItemModel(TipoElementoEntity Ent) {
        this.tipoElementoId = Ent.getTipoElementoId();
        this.nombre = Ent.getNombre();
    }

    
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
