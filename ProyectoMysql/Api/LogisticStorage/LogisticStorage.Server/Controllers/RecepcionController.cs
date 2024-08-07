using Framework;
using Microsoft.AspNetCore.Mvc;
using LogisticStorage.BusinessLayer;
using LogisticStorage.EntityLayer;
namespace LogisticStorage.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RecepcionController : ControllerBase
    {
        Base d = new Base();
        [HttpGet]
        [Route("ObtenerMain")]
        public ResponseAPI<List<RecepcionMainModel>> EmpresaObtenerMain()
        {
            try
            {
                d.Configurar();
                var Items = Recepcion.ObtenerMain();
                List<RecepcionMainModel> Lista = new List<RecepcionMainModel>();
                foreach (var Item in Items) Lista.Add(new RecepcionMainModel(Item));

                return new ResponseAPI<List<RecepcionMainModel>>(Lista, true);
            }
            catch (Exception ex)
            {
                return new ResponseAPI<List<RecepcionMainModel>>(new List<RecepcionMainModel>(), false, ex.Message);
            }
        }

        [HttpGet]
        [Route("ObtenerItem/{RecepcionId}")]
        public ResponseAPI<List<RecepcionSaveModel>> ObtenerItem(Int32 RecepcionId)
        {
            try
            {
                d.Configurar();
                var Items = Recepcion.ObtenerItem(RecepcionId);

                List<RecepcionSaveModel> Lista = new List<RecepcionSaveModel>();

                foreach (var Item in Items) Lista.Add(new RecepcionSaveModel(Item));

                return new ResponseAPI<List<RecepcionSaveModel>>(Lista, true);

            }
            catch (Exception ex)
            {
                return new ResponseAPI<List<RecepcionSaveModel>>(new List<RecepcionSaveModel>(), false, ex.Message);
            }
        }

        [HttpPost]
        [Route("Registrar")]
        public ResponseAPI<RecepcionSaveModel> Registrar(RecepcionSaveModel Item)
        {
            try
            {
                d.Configurar();
                RecepcionEntity ItemEntity = new RecepcionEntity();

                ItemEntity.RecepcionId = Item.RecepcionId;
                ItemEntity.ProcesoId = Item.ProcesoId;
                ItemEntity.EstadoProcesoId = Item.EstadoProcesoId;
                ItemEntity.Codigo = Item.Codigo;
                ItemEntity.EntidadId = Item.EntidadId;
                ItemEntity.ObjetoId = Item.ObjetoId;
                ItemEntity.TipoComprobanteId = Item.TipoComprobanteId;
                ItemEntity.SerieComprobante = Item.SerieComprobante;
                ItemEntity.CorrelativoComprobante = Item.CorrelativoComprobante;
                ItemEntity.FechaRecepcion = Item.FechaRecepcion;
                ItemEntity.FechaRegistro = Item.FechaRegistro;
                ItemEntity.CodUsuario = Item.CodUsuario;
                ItemEntity.Observacion = Item.Observacion;


                ItemEntity.LogicalState = (LogicalState)Item.Action;


                if (Item.DetalleItems != null && Item.DetalleItems.Count > 0)
                {
                    ItemEntity.DetalleItem = new List<RecepcionDetalleEntity>();
                    foreach (var detalle in Item.DetalleItems)
                    {
                        ItemEntity.DetalleItem.Add(new RecepcionDetalleEntity
                        {
                            RecepcionDetalleId = detalle.RecepcionDetalleId,
                            RecepcionId = detalle.RecepcionId,
                            MercaderiaId = detalle.MercaderiaId,
                            Cantidad = detalle.Cantidad,
                            Lote = detalle.Lote,
                            FechaIngreso = detalle.FechaIngreso,
                            FechaRegistro = detalle.FechaRegistro,
                            FechaVencimiento = detalle.FechaVencimiento,
                            Observacion = detalle.Observacion,
                            LogicalState = (LogicalState)detalle.Action
                        });

                    }
                }



                Item.RecepcionId = Recepcion.Registrar(ItemEntity);

                return new ResponseAPI<RecepcionSaveModel>(Item, true);
            }
            catch (Exception ex)
            {
                return new ResponseAPI<RecepcionSaveModel>(new RecepcionSaveModel(), false, ex.Message);
            }
        }
        [HttpGet]
        [Route("ObtenerDetalleItem/{RecepcionId}")]
        public ResponseAPI<List<RecepcionDetalleSaveModel>> ObtenerDetalleItem(Int32 RecepcionId)
        {
            try
            {
                d.Configurar();
                var Items = RecepcionDetalle.ObtenerItem(RecepcionId);

                List<RecepcionDetalleSaveModel> Lista = new List<RecepcionDetalleSaveModel>();

                foreach (var Item in Items) Lista.Add(new RecepcionDetalleSaveModel(Item));

                return new ResponseAPI<List<RecepcionDetalleSaveModel>>(Lista, true);

            }
            catch (Exception ex)
            {
                return new ResponseAPI<List<RecepcionDetalleSaveModel>>(new List<RecepcionDetalleSaveModel>(), false, ex.Message);
            }
        }

    }
}
