﻿using LogisticStorage.EntityLayer;
using System.Text.Json.Serialization;

namespace LogisticStorage.Server.Model.Tarifa
{
    public class TarifaSaveModel
    {
        public TarifaSaveModel() { 
            this.TarifaId = 0;
            this.MercaderiaId = 0;
            this.MonedaId = 0;
            this.UnidadMedidaId = 0;
            this.PorcentajeImpuestoId = 0;
            this.PrecioConInpuesto = 0;
            this.PrecioSinInpuesto = 0;
            this.FechaCreacion= DateTime.Now;
            this.Vigente = true;
        }

        public TarifaSaveModel(TarifaEntity ent) {
            this.TarifaId = ent.TarifaId;
            this.MercaderiaId = ent.MercaderiaId;
            this.MonedaId = ent.MonedaId;
            this.UnidadMedidaId = ent.UnidadMedidaId;
            this.PorcentajeImpuestoId = ent.PorcentajeImpuestoId;
            this.PrecioConInpuesto = ent.PrecioConInpuesto;
            this.PrecioSinInpuesto = ent.PrecioSinInpuesto;
            this.FechaCreacion = DateTime.Now;
            this.Vigente = ent.Vigente;
        }

        [JsonPropertyName("TarifaId")] public Int32 TarifaId { get; set; }
        [JsonPropertyName("UnidadMedidaId")] public Int32 UnidadMedidaId { get; set; }
        [JsonPropertyName("MonedaId")] public Int32 MonedaId { get; set; }
        [JsonPropertyName("PorcentajeImpuestoId")] public Int32 PorcentajeImpuestoId { get; set; }
        [JsonPropertyName("MercaderiaId")] public Int32 MercaderiaId { get; set; }
        [JsonPropertyName("PrecioSinInpuesto")] public Decimal PrecioSinInpuesto { get; set; }
        [JsonPropertyName("PrecioConInpuesto")] public Decimal PrecioConInpuesto { get; set; }
        [JsonPropertyName("FechaCreacion")] public DateTime FechaCreacion { get; set; }
        [JsonPropertyName("Vigente")] public Boolean Vigente { get; set; }
        [JsonPropertyName("Action")] public Int16 Action { get; set; }
    }
}