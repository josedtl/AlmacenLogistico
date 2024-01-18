
package Models;

import EntityLayer.TipoInfraestructuraEntity;
import com.fasterxml.jackson.annotation.JsonProperty;

public class TipoInfraestructuraItemModel {
    
    public TipoInfraestructuraItemModel(){
    this.tipoInfraestructuraId=0;
    this.nombre="";
    }
    
    public TipoInfraestructuraItemModel( TipoInfraestructuraEntity Ent ){
    this.tipoInfraestructuraId = Ent.getTipoInfraestructuraId();
    this.nombre = Ent.getNombre();
    }
    
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
