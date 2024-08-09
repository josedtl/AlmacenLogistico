using Framework;
using LogisticStorage.BusinessLayer;
using LogisticStorage.EntityLayer;
using LogisticStorage.Server.Model.Despacho;
using Microsoft.AspNetCore.Mvc;

namespace LogisticStorage.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DespachoController : ControllerBase
    {
        Base d = new Base();
        [HttpGet]
        [Route("ObtenerMain")]
        public ResponseAPI<List<DespachoMainModel>> ObtenerMain()
        {
            try
            {
                d.Configurar();
                var Items = Despacho.DespachoObtenerMain();
                List<DespachoMainModel> Lista = new List<DespachoMainModel>();
                foreach (var Item in Items) Lista.Add(new DespachoMainModel(Item));

                return new ResponseAPI<List<DespachoMainModel>>(Lista, true);
            }
            catch (Exception ex)
            {
                return new ResponseAPI<List<DespachoMainModel>>(new List<DespachoMainModel>(), false, ex.Message);
            }
        }


        [HttpGet]
        [Route("ObtenerCabecera/{OrdenPedidoId}")]
        public ResponseAPI<List<DespachoSaveModel>> ObtenerCabecera(Int32 OrdenPedidoId)
        {
            try
            {
                d.Configurar();
                var Items = Despacho.ObtenerCabecera(OrdenPedidoId);

                List<DespachoSaveModel> Lista = new List<DespachoSaveModel>();

                foreach (var Item in Items) Lista.Add(new DespachoSaveModel(Item));

                return new ResponseAPI<List<DespachoSaveModel>>(Lista, true);

            }
            catch (Exception ex)
            {
                return new ResponseAPI<List<DespachoSaveModel>>(new List<DespachoSaveModel>(), false, ex.Message);
            }
        }


        [HttpGet]
        [Route("ObtenerDetalle/{OrdenPedidoId}")]
        public ResponseAPI<List<DespachoDetalleSaveModel>> ObtenerDetalle(Int32 OrdenPedidoId)
        {
            try
            {
                d.Configurar();
                var Items = DespachoDetalle.ObtenerDetalle(OrdenPedidoId);

                List<DespachoDetalleSaveModel> Lista = new List<DespachoDetalleSaveModel>();

                foreach (var Item in Items) Lista.Add(new DespachoDetalleSaveModel(Item));

                return new ResponseAPI<List<DespachoDetalleSaveModel>>(Lista, true);

            }
            catch (Exception ex)
            {
                return new ResponseAPI<List<DespachoDetalleSaveModel>>(new List<DespachoDetalleSaveModel>(), false, ex.Message);
            }
        }

        [HttpPost]
        [Route("Registrar")]
        public ResponseAPI<DespachoSaveModel> Registrar(DespachoSaveModel Item)
        {
            try
            {
                d.Configurar();
                DespachoEntity ItemEntity = new DespachoEntity();

                ItemEntity.DespachoId = Item.DespachoId;
                ItemEntity.OrdenPedidoId = Item.OrdenPedidoId;
                ItemEntity.EntidadEntregadoId = 18;
                ItemEntity.Codigo = Item.Codigo;
                ItemEntity.FechaHoraEntrega = Item.FechaHoraEntrega;
                ItemEntity.LogicalState = (LogicalState)Item.Action;


                if (Item.DetalleItems != null && Item.DetalleItems.Count > 0)
                {
                    ItemEntity.DetalleItem = new List<DespachoDetalleEntity>();
                    foreach (var detalle in Item.DetalleItems)
                    {

                        List<ReservaEntity> reservaEntities = null;
                        reservaEntities = new List<ReservaEntity>();
                        if (detalle.DetalleReservaItem != null && detalle.DetalleReservaItem.Count > 0)
                        {

                            foreach (var reserva in detalle.DetalleReservaItem)
                            {
                                reservaEntities.Add(new ReservaEntity
                                {
                                    ReservaId = reserva.ReservaId,
                                    OrdenPedidoId = reserva.OrdenPedidoId,
                                    OrdenPedidoDetalleId = reserva.OrdenPedidoDetalleId,
                                    MercaderiaId = reserva.MercaderiaId,
                                    Cantidad = reserva.Cantidad,
                                    StockId = reserva.StockId

                                });
                            }

                        }
                        ItemEntity.DetalleItem.Add(new DespachoDetalleEntity
                        {
                            DespachoDetalleId = detalle.DespachoDetalleId,
                            OrdenPedidoDetalleId = detalle.OrdenPedidoDetalleId,
                            DespachoId = detalle.DespachoId,
                            Cantidad = detalle.Cantidad,
                            LogicalState = (LogicalState)detalle.Action,
                            DetalleReservaItem = reservaEntities
                        });

                    }
                }

                Item.DespachoId = Despacho.Registrar(ItemEntity);

                return new ResponseAPI<DespachoSaveModel>(Item, true);
            }
            catch (Exception ex)
            {
                return new ResponseAPI<DespachoSaveModel>(new DespachoSaveModel(), false, ex.Message);
            }
        }

        [HttpGet]
        [Route("ObtenerReservaOPItem/{OrdenPedidoId}")]
        public ResponseAPI<List<DespachoReservaOPModel>> ObtenerReservaOPItem(Int32 OrdenPedidoId)
        {
            try
            {
                d.Configurar();
                var Items = Reserva.ObtenerReservaOPItem(OrdenPedidoId);

                List<DespachoReservaOPModel> Lista = new List<DespachoReservaOPModel>();

                foreach (var Item in Items) Lista.Add(new DespachoReservaOPModel(Item));

                return new ResponseAPI<List<DespachoReservaOPModel>>(Lista, true);

            }
            catch (Exception ex)
            {
                return new ResponseAPI<List<DespachoReservaOPModel>>(new List<DespachoReservaOPModel>(), false, ex.Message);
            }
        }
    }
}
