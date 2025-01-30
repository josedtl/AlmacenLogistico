using System;
using System.Runtime.Serialization;

namespace FactCore.Common
{
    [DataContract, Flags]
    public enum ConformidadEnum
    {
        [EnumMember]
        Pendiente = 0,
        [EnumMember]
        Conforme = 1,
        [EnumMember]
        Suspendido = 2,
        [EnumMember]
        variablenull = 3
    }

    [DataContract, Flags]
    public enum TipoImpuestoEnum
    {
        [EnumMember]
        IGV = 0,
        [EnumMember]
        ISC = 1,
    }

    [DataContract, Flags]
    public enum TipoCorrelativoEnum
    {
        [EnumMember]
        OrdenServicio = 0,
        [EnumMember]
        Factura = 1,
        [EnumMember]
        BoletaVenta = 2,
        [EnumMember]
        GuiaRemision = 3,
        [EnumMember]
        Contrato = 4,
        [EnumMember]
        Recepcion = 5,
        [EnumMember]
        Despacho = 6,
        [EnumMember]
        Mantenimiento = 7,
        [EnumMember]
        OrdenPedido = 8,
        [EnumMember]
        OrdenCompra = 9,
        [EnumMember]
        Cotizacion = 10,
        [EnumMember]
        NotaCredito = 11,
        [EnumMember]
        NotaDebito = 12,
        [EnumMember]
        NumeroPaquete = 13,
        [EnumMember]
        NroPicking = 14,
        [EnumMember]
        LiquidacionValorada = 15,
        [EnumMember]
        ResumenDiario = 16,
        [EnumMember]
        NotaCreditobv = 17,
        [EnumMember]
        NotaDebitobv = 18,
        [EnumMember]
        Planilla = 19,
        [EnumMember]
        CajaChicaPrincipal = 20,
        [EnumMember]
        CajaChicaSegundaria = 21,
        [EnumMember]
        TipoEmpresa = 22,
        [EnumMember]
        TipoDato = 23,
    }



    [DataContract, Flags]
    public enum TipSexoEnum
    {
        [EnumMember]
        Masculino = 0,
        [EnumMember]
        Femenino = 1,
        [EnumMember]
        Otros = 2,
    }



    [DataContract, Flags]
    public enum EstCivilEnum
    {
        [EnumMember]
        PorConfirmar = 0,
        [EnumMember]
        Soltero = 1,
        [EnumMember]
        Casado = 2,
        [EnumMember]
        Divorciado = 3,
        [EnumMember]
        Viudo = 4,
    }

    public enum TipDocumentoIdentidadEnum
    {
        [EnumMember]
        DNI = 0,
        [EnumMember]
        CARNETEXT = 1,
        [EnumMember]
        RUC = 2,
        [EnumMember]
        PASAPORTE = 3,
    }

    [DataContract, Flags]
    public enum TipTelefonoEnum
    {
        [EnumMember]
        Movil = 0,
        [EnumMember]
        Fijo = 1,

    }

    [DataContract, Flags]
    public enum TipoCuentaEnum
    {
        [EnumMember]
        Corrientes = 0,
        [EnumMember]
        Remuneradas = 1,
        [EnumMember]
        Nómina = 2,
        [EnumMember]
        Vivienda = 3,

    }
    [DataContract, Flags]
    public enum TipCalificacionEnum
    {
        [EnumMember]
        Muymalo = 0,
        [EnumMember]
        Malo = 1,
        [EnumMember]
        Regular = 2,
        [EnumMember]
        Bueno = 3,
        [EnumMember]
        Excelente = 4,
    }

    [DataContract, Flags]
    public enum TipCalificacionColorEnum
    {
        [EnumMember]
        Plomo = 0,
        [EnumMember]
        Amarillo = 1,
        [EnumMember]
        Rojo = 2,
        [EnumMember]
        Naranja = 3,
    }

    [DataContract, Flags]
    public enum EstadoResumenEnum
    {
        [EnumMember]
        ADICIONAR = 1,
        [EnumMember]
        MODIFICAR = 2,
        [EnumMember]
        ANULADO = 3,
    }
    [DataContract, Flags]
    public enum TipoTablaNewEnum
    {
        [EnumMember]
        Suministro = 1,
        [EnumMember]
        Repuesto = 2,
        [EnumMember]
        Equipamiento = 3,

    }
}
