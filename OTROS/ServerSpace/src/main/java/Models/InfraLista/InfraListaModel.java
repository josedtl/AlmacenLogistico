package Models.InfraLista;

import com.fasterxml.jackson.annotation.JsonProperty;

import EntityLayer.InfraListaEntity;

public class InfraListaModel {

    public InfraListaModel() {
        this.listaId = 0;
        this.nombre = "";
    }

    public InfraListaModel(InfraListaEntity Ent) {
        this.listaId = Ent.getListaId();
        this.nombre = Ent.getNombre();
    }

    @JsonProperty("ListaId")
    private int listaId = 0;

    public int getListaId() {
        return listaId;
    }

    public void setListaId(int listaId) {
        this.listaId = listaId;
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
