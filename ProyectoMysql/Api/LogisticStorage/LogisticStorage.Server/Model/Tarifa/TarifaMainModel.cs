﻿using LogisticStorage.EntityLayer;
using System.Text.Json.Serialization;

namespace LogisticStorage.Server.Model.Tarifa
{
    public class TarifaMainModel
    {
        public TarifaMainModel() { 
            this.TarifaId = 0;
            this.Valor=String.Empty;
            this.NomProducto = String.Empty;
            this.NomMoneda = String.Empty;
            this.NomUnidad = String.Empty;
            this.PrecioConInpuesto = 0;
            this.PrecioSinInpuesto= 0;
            this.Vigente = true;
            this.FechaCreacion=DateTime.Now;

        }    

        public  TarifaMainModel(TarifaEntity ent) {
            this.TarifaId = ent.TarifaId;
            this.Valor = ent.Valor;
            this.NomProducto = ent.NomProducto;
            this.NomMoneda = ent.NomMoneda;
            this.NomUnidad = ent.NomUnidad;
            this.PrecioConInpuesto = ent.PrecioConInpuesto;
            this.PrecioSinInpuesto = ent.PrecioSinInpuesto;
            this.Vigente = true;
            this.FechaCreacion = DateTime.Now;

        }
        [JsonPropertyName("TarifaId")] public Int32 TarifaId { get; set; }
        [JsonPropertyName("NomProducto")] public string NomProducto { get; set; }
        [JsonPropertyName("NomUnidad")] public string NomUnidad { get; set; }
        [JsonPropertyName("NomMoneda")] public string NomMoneda { get; set; }
        [JsonPropertyName("Valor")] public string Valor { get; set; }
        [JsonPropertyName("PrecioSinInpuesto")] public Decimal PrecioSinInpuesto { get; set; }
        [JsonPropertyName("PrecioConInpuesto")] public Decimal PrecioConInpuesto { get; set; }
        [JsonPropertyName("FechaCreacion")] public DateTime FechaCreacion { get; set; }
        [JsonPropertyName("Vigente")] public Boolean Vigente { get; set; }
    }
}