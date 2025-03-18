using Framework;
using FactCore.BusinessLayer;
using LogisticStorage.EntityLayer;
using LogisticStorage.Server.Model.Despacho;
using LogisticStorage.Server.Models.Comprobante;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using FactCore.EntityLayer;

namespace LogisticStorage.Server.Controllers.FactCore
{
    [Route("FactCore/api/[controller]")]
    [ApiController]
    public class ComprobantePagoController : ControllerBase
    {
        Base d = new Base();


        [HttpGet]
        [Route("ObtenerItem/{Id}")]
        public ResponseAPI<List<ComprobantePagoModel>> ObtenerItem(int Id)
        {
            try
            {
                d.Configurar();
                var Items = ComprobantePago.ObtenerItem(Id);

                List<ComprobantePagoModel> Lista = new List<ComprobantePagoModel>();

                foreach (var Item in Items) Lista.Add(new ComprobantePagoModel(Item));

                return new ResponseAPI<List<ComprobantePagoModel>>(Lista, true);

            }
            catch (Exception ex)
            {
                return new ResponseAPI<List<ComprobantePagoModel>>(new List<ComprobantePagoModel>(), false, ex.Message);
            }
        }

        [HttpPost]
        [Route("Registrar")]
        public ResponseAPI<ComprobantePagoModel> Registrar(ComprobantePagoModel Item)
        {
            try
            {
                d.Configurar();
                ComprobantePagoEntity ItemEntity = new ComprobantePagoEntity();




                ItemEntity.ComprobantePagoId = Item.ComprobantePagoId;
                ItemEntity.TipoOperacionId = Item.TipoOperacionId;
                ItemEntity.TipoDocumentoId = Item.TipoDocumentoId;
                ItemEntity.SecuenciaCorrelativo = Item.SecuenciaCorrelativo;
                ItemEntity.Correlativo = Item.Correlativo;
                ItemEntity.CorrelativoId = Item.CorrelativoId;
                ItemEntity.TipoDocumentoIdentidadId = Item.TipoDocumentoIdentidadId;
                ItemEntity.ClienteId = Item.ClienteId;
                ItemEntity.NumDocumento = Item.NumDocumento;
                ItemEntity.NombreCliente = Item.NombreCliente;
                ItemEntity.Direccion = Item.Direccion;
                ItemEntity.FormaPagoId = Item.FormaPagoId;
                ItemEntity.TipoTributoId = Item.TipoTributoId;
                ItemEntity.MonedaId = Item.MonedaId;
                ItemEntity.TipoPrecioVentaUnitarioId = Item.TipoPrecioVentaUnitarioId;
                ItemEntity.ImpuestoTotal = Item.ImpuestoTotal;
                ItemEntity.ImporteBrutoTotal = Item.ImporteBrutoTotal;
                ItemEntity.ImporteNetoTotal = Item.ImporteNetoTotal;
                ItemEntity.LogicalState = (LogicalState)Item.LogicalState;

                ItemEntity.ComprobantePagoDetalle_List = new List<ComprobantePagoDetalleEntity>();

                if (Item.ComprobantePagoDetalle_List != null && Item.ComprobantePagoDetalle_List.Count > 0)
                {
                    foreach (var i in Item.ComprobantePagoDetalle_List)
                    {

                        ItemEntity.ComprobantePagoDetalle_List.Add(new ComprobantePagoDetalleEntity
                        {

                            ComprobantePagoDetalleId = i.ComprobantePagoDetalleId,
                            ComprobantePagoId = i.ComprobantePagoId,
                            Numeracion = i.Numeracion,
                            PrecioUnitario = i.PrecioUnitario,
                            PrecioUnitarioImpuesto = i.PrecioUnitarioImpuesto,
                            Cantidad = i.Cantidad,
                            PrecioBrutoTotal = i.PrecioBrutoTotal,
                            ImpuestoTotal = i.ImpuestoTotal,
                            TipoAfectacionIgvId = i.TipoAfectacionIgvId,
                            TipoTributoId = i.TipoTributoId,
                            UnidadMedidaId = i.UnidadMedidaId,
                            CodigoItem = i.CodigoItem,
                            Concepto = i.Concepto,
                            LogicalState = (LogicalState)i.LogicalState
                        });

                    }

                }





                Item.ComprobantePagoId = ComprobantePago.ComprobantePagoRegistrar(ItemEntity);

                return new ResponseAPI<ComprobantePagoModel>(Item, true);
            }
            catch (Exception ex)
            {
                return new ResponseAPI<ComprobantePagoModel>(new ComprobantePagoModel(), false, ex.Message);
            }
        }



        [HttpGet]
        [Route("ObtenerMain")]
        public ResponseAPI<List<ComprobantePagoMainModel>> ObtenerMain()
        {
            try
            {
                d.Configurar();
                var Items = ComprobantePago.ObtenerMain();

                List<ComprobantePagoMainModel> Lista = new List<ComprobantePagoMainModel>();

                foreach (var Item in Items) Lista.Add(new ComprobantePagoMainModel(Item));

                return new ResponseAPI<List<ComprobantePagoMainModel>>(Lista, true);

            }
            catch (Exception ex)
            {
                return new ResponseAPI<List<ComprobantePagoMainModel>>(new List<ComprobantePagoMainModel>(), false, ex.Message);
            }
        }
    }
}
