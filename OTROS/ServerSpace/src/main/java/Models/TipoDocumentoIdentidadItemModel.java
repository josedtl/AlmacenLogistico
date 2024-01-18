/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package Models;

import EntityLayer.TipoDocumentoIdentidadEntity;
import Enumerados.ProcessActionEnum;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 *
 * @author DAVID
 */
public class TipoDocumentoIdentidadItemModel {

    public TipoDocumentoIdentidadItemModel() {
        this.tipoDocumentoIdentidadId = 0;
        this.codigo = "";
        this.alias = "";
    }

    public TipoDocumentoIdentidadItemModel(TipoDocumentoIdentidadEntity Ent) {
        this.tipoDocumentoIdentidadId = Ent.getTipoDocumentoIdentidadId();
        this.codigo = Ent.getCodigo();
        this.alias = Ent.getAlias();
    }

    @JsonProperty("TipoDocumentoIdentidadId")
    private int tipoDocumentoIdentidadId = 0;

    public int getTipoDocumentoIdentidadId() {
        return tipoDocumentoIdentidadId;
    }

    public void setTipoDocumentoIdentidadId(int tipoDocumentoIdentidadId) {
        this.tipoDocumentoIdentidadId = tipoDocumentoIdentidadId;
    }

    @JsonProperty("Codigo")
    private String codigo = "";

    public String getCodigo() {
        return codigo;
    }

    public void setCodigo(String codigo) {
        this.codigo = codigo;
    }

    @JsonProperty("Alias")
    private String alias = "";

    public String getAlias() {
        return alias;
    }

    public void setAlias(String alias) {
        this.alias = alias;
    }

}
