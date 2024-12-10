using Framework;
using Microsoft.AspNetCore.Mvc;
using LogisticStorage.BusinessLayer;
using LogisticStorage.EntityLayer;
using LogisticStorage.DataLayer;
using LogisticStorage.Server.Model.OrdenPedido;
using Microsoft.AspNetCore.Authorization;
namespace LogisticStorage.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class OrdenPedidoController : ControllerBase
    {
        Base d = new Base();
        [HttpGet]
        [Route("ObtenerMain")]
        public ResponseAPI<List<OrdenPedidoMainModel>> EmpresaObtenerMain()
        {
            try
            {
                d.Configurar();
                var Items = OrdenPedido.ObtenerMain();
                List<OrdenPedidoMainModel> Lista = new List<OrdenPedidoMainModel>();
                foreach (var Item in Items) Lista.Add(new OrdenPedidoMainModel(Item));

                return new ResponseAPI<List<OrdenPedidoMainModel>>(Lista, true);
            }
            catch (Exception ex)
            {
                return new ResponseAPI<List<OrdenPedidoMainModel>>(new List<OrdenPedidoMainModel>(), false, ex.Message);
            }
        }

        [HttpGet]
        [Route("ObtenerItem/{OrdenPedidoId}")]
        public ResponseAPI<List<OrdenPedidoSaveModel>> ObtenerItem(Int32 OrdenPedidoId)
        {
            try
            {
                d.Configurar();
                var Items = OrdenPedido.ObtenerItem(OrdenPedidoId);

                List<OrdenPedidoSaveModel> Lista = new List<OrdenPedidoSaveModel>();

                foreach (var Item in Items) Lista.Add(new OrdenPedidoSaveModel(Item));

                return new ResponseAPI<List<OrdenPedidoSaveModel>>(Lista, true);

            }
            catch (Exception ex)
            {
                return new ResponseAPI<List<OrdenPedidoSaveModel>>(new List<OrdenPedidoSaveModel>(), false, ex.Message);
            }
        }

        [HttpPost]
        [Route("Registrar")]
        public ResponseAPI<OrdenPedidoSaveModel> Registrar(OrdenPedidoSaveModel Item)
        {
            try
            {
                d.Configurar();
                OrdenPedidoEntity ItemEntity = new OrdenPedidoEntity();

                ItemEntity.OrdenPedidoId = Item.OrdenPedidoId;
                ItemEntity.ProcesoId = Item.ProcesoId;
                ItemEntity.TipoProcesoId = Item.TipoProcesoId;
                ItemEntity.EstadoProcesoId = Item.EstadoProcesoId;
                ItemEntity.Codigo = Item.Codigo;
                ItemEntity.EntidadId = Item.EntidadId;
                ItemEntity.NumDocumentoResponsable = Item.NumDocumentoResponsable;
                ItemEntity.NomResponsable = Item.NomResponsable;
                ItemEntity.FechaEmision = Item.FechaEmision;
                ItemEntity.FechaRegistro = Item.FechaRegistro;
                ItemEntity.CodUsuario = Item.CodUsuario;
                ItemEntity.LogicalState = (LogicalState)Item.Action;


                if (Item.DetalleItems != null && Item.DetalleItems.Count > 0)
                {
                    ItemEntity.DetalleItem = new List<OrdenPedidoDetalleEntity>();
                    foreach (var detalle in Item.DetalleItems)
                    {
                        ItemEntity.DetalleItem.Add(new OrdenPedidoDetalleEntity
                        {

                            OrdenPedidoDetalleId = detalle.OrdenPedidoDetalleId,
                            OrdenPedidoId = detalle.OrdenPedidoId,
                            MercaderiaId = detalle.MercaderiaId,
                            UnidadMedidaId = detalle.UnidadMedidaId,
                            CantidadSolicitado = detalle.CantidadSolicitado,
                            CantidadReservado = detalle.CantidadReservado,
                            CantidadFaltante = detalle.CantidadFaltante,
                            CantidadAtendido = detalle.CantidadAtendido,
                            Enlazado = detalle.Enlazado,
                            Atendido = detalle.Atendido,
                            LogicalState = (LogicalState)detalle.Action,
                            TarifaId = detalle.TarifaId,
                            MonedaId = detalle.MonedaId,
                            Precio = detalle.Precio
                        });

                    }
                }



                Item.OrdenPedidoId = OrdenPedido.Registrar(ItemEntity);

                return new ResponseAPI<OrdenPedidoSaveModel>(Item, true);
            }
            catch (Exception ex)
            {
                return new ResponseAPI<OrdenPedidoSaveModel>(new OrdenPedidoSaveModel(), false, ex.Message);
            }
        }

        [HttpGet]
        [Route("ObtenerDetalleItem/{OrdenPedidoId}")]
        public ResponseAPI<List<OrdenPedidoDetalleSaveModel>> ObtenerDetalleItem(Int32 OrdenPedidoId)
        {
            try
            {
                d.Configurar();
                var Items = OrdenPedidoDetalle.ObtenerItem(OrdenPedidoId);

                List<OrdenPedidoDetalleSaveModel> Lista = new List<OrdenPedidoDetalleSaveModel>();

                foreach (var Item in Items) Lista.Add(new OrdenPedidoDetalleSaveModel(Item));

                return new ResponseAPI<List<OrdenPedidoDetalleSaveModel>>(Lista, true);

            }
            catch (Exception ex)
            {
                return new ResponseAPI<List<OrdenPedidoDetalleSaveModel>>(new List<OrdenPedidoDetalleSaveModel>(), false, ex.Message);
            }
        }


        [HttpPost]
        [Route("OrdenPedidoCambioEstado")]
        public ResponseAPI<Boolean> OrdenPedidoCambioEstado(OrdenPedidoCambioEstadoEDP Item)
        {
            try
            {
                d.Configurar();
                OrdenPedidoEntity ItemEntity = new OrdenPedidoEntity();

                Boolean Fla = OrdenPedido.CambioEstado(Item.OrdenPedidoId, Item.EstadoProcesoId);

                return new ResponseAPI<Boolean>(Fla, true);
            }
            catch (Exception ex)
            {
                return new ResponseAPI<Boolean>(false, false, ex.Message);
            }
        }


    }
}
