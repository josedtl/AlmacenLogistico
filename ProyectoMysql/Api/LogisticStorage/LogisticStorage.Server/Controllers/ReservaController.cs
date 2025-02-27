using Framework;
using Microsoft.AspNetCore.Mvc;
using LogisticStorage.BusinessLayer;
using LogisticStorage.EntityLayer;
using LogisticStorage.DataLayer;
using Microsoft.AspNetCore.Authorization;
namespace LogisticStorage.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class ReservaController : ControllerBase
    {
        Base d = new Base();
        [HttpGet]
        [Route("GetMercaderiaMainItems")]
        public ResponseAPI<List<ReservaItemModel>> GetMercaderiaMainItems()
        {
            try
            {
                d.Configurar();
                var Items = Reserva.GetMercaderiaMainItems();
                List<ReservaItemModel> Lista = new List<ReservaItemModel>();
                foreach (var Item in Items) Lista.Add(new ReservaItemModel(Item));

                return new ResponseAPI<List<ReservaItemModel>>(Lista, true);
            }
            catch (Exception ex)
            {
                return new ResponseAPI<List<ReservaItemModel>>(new List<ReservaItemModel>(), false, ex.Message);
            }
        }

        [HttpPost]
        [Route("ReservarMercaderia")]
        public ResponseAPI<ReservaMercaderiaOPModel> ReservarMercaderia(ReservaMercaderiaOPModel Item)
        {
            try
            {
                d.Configurar();
                ReservaEntity ItemEntity = new ReservaEntity();

                ItemEntity.MercaderiaId = Item.MercaderiaId;
                ItemEntity.Cantidad = Item.Cantidad;
                ItemEntity.OrdenPedidoDetalleId = Item.OrdenPedidoDetalleId;
                ItemEntity.LogicalState = (LogicalState)Item.Action;

                Item.MercaderiaId = Reserva.ReservarMercaderia(ItemEntity);

                return new ResponseAPI<ReservaMercaderiaOPModel>(Item, true);
            }
            catch (Exception ex)
            {
                return new ResponseAPI<ReservaMercaderiaOPModel>(new ReservaMercaderiaOPModel(), false, ex.Message);
            }
        }

        [HttpGet]
        [Route("ReservaPedido/{MercaderiaId}")]
        public ResponseAPI<List<ReservaPedidoModel>> ReservaPedido(Int32 MercaderiaId)
        {
            try
            {
                d.Configurar();
                var Items = Reserva.ReservaPedido(MercaderiaId);

                List<ReservaPedidoModel> Lista = new List<ReservaPedidoModel>();

                foreach (var Item in Items) Lista.Add(new ReservaPedidoModel(Item));

                return new ResponseAPI<List<ReservaPedidoModel>>(Lista, true);

            }
            catch (Exception ex)
            {
                return new ResponseAPI<List<ReservaPedidoModel>>(new List<ReservaPedidoModel>(), false, ex.Message);
            }
        }

        [HttpGet]
        [Route("ReservaResumen/{MercaderiaId}")]
        public ResponseAPI<List<ReservaResumenModel>> ReservaResumen(Int32 MercaderiaId)
        {
            try
            {
                d.Configurar();
                var Items = Reserva.ReservaResumen(MercaderiaId);

                List<ReservaResumenModel> Lista = new List<ReservaResumenModel>();

                foreach (var Item in Items) Lista.Add(new ReservaResumenModel(Item));

                return new ResponseAPI<List<ReservaResumenModel>>(Lista, true);

            }
            catch (Exception ex)
            {
                return new ResponseAPI<List<ReservaResumenModel>>(new List<ReservaResumenModel>(), false, ex.Message);
            }
        }

        [HttpPost]
        [Route("ReservarMercaderiaDetalle")]
        public ResponseAPI<List<ReservaDetalleModel>> ReservarLista(List<ReservaDetalleModel> Items)
        {
            try
            {
                d.Configurar();
                List<ReservaDetalleEntity> ItemEntity = new List<ReservaDetalleEntity>();


                foreach (var Item in Items)
                {
                    ItemEntity.Add(new ReservaDetalleEntity
                    {
                        Cantidad = Item.Cantidad,
                        OrdenPedidoDetalleId = Item.OrdenPedidoDetalleId,
                        MercaderiaId = Item.MercaderiaId
                    });
                }

                ReservaDetalle.ReservaLista(ItemEntity);

                return new ResponseAPI<List<ReservaDetalleModel>>(Items, true);
            }
            catch (Exception ex)
            {
                return new ResponseAPI<List<ReservaDetalleModel>>(new List<ReservaDetalleModel>(), false, ex.Message);
            }
        }
    }
}
