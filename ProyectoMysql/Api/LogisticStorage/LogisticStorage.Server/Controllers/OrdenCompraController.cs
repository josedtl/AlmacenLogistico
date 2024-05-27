using Framework;
using Microsoft.AspNetCore.Mvc;
using LogisticStorage.BusinessLayer;
using LogisticStorage.EntityLayer;
using LogisticStorage.DataLayer;
namespace LogisticStorage.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrdenCompraController : ControllerBase
    {
        Base d = new Base();
        [HttpGet]
        [Route("ObtenerMain")]
        public ResponseAPI<List<OrdenCompraMainModel>> ObtenerMain()
        {
            try
            {
                d.Configurar();
                var Items = OrdenCompra.ObtenerMain();
                List<OrdenCompraMainModel> Lista = new List<OrdenCompraMainModel>();
                foreach (var Item in Items) Lista.Add(new OrdenCompraMainModel(Item));

                return new ResponseAPI<List<OrdenCompraMainModel>>(Lista, true);
            }
            catch (Exception ex)
            {
                return new ResponseAPI<List<OrdenCompraMainModel>>(new List<OrdenCompraMainModel>(), false, ex.Message);
            }
        }

        [HttpGet]
        [Route("ObtenerItem/{OrdenCompraId}")]
        public ResponseAPI<List<OrdenCompraSaveModel>> ObtenerItem(Int32 OrdenCompraId)
        {
            try
            {
                d.Configurar();
                var Items = OrdenCompra.ObtenerItem(OrdenCompraId);

                List<OrdenCompraSaveModel> Lista = new List<OrdenCompraSaveModel>();

                foreach (var Item in Items) Lista.Add(new OrdenCompraSaveModel(Item));

                return new ResponseAPI<List<OrdenCompraSaveModel>>(Lista, true);

            }
            catch (Exception ex)
            {
                return new ResponseAPI<List<OrdenCompraSaveModel>>(new List<OrdenCompraSaveModel>(), false, ex.Message);
            }
        }

        [HttpPost]
        [Route("Registrar")]
        public ResponseAPI<OrdenCompraSaveModel> Registrar(OrdenCompraSaveModel Item)
        {
            try
            {
                d.Configurar();
                OrdenCompraEntity ItemEntity = new OrdenCompraEntity();

                ItemEntity.OrdenCompraId = Item.OrdenCompraId;
                ItemEntity.ProcesoId = Item.ProcesoId;
                ItemEntity.TipoProcesoId = Item.TipoProcesoId;
                ItemEntity.EstadoProcesoId = Item.EstadoProcesoId;
                ItemEntity.Codigo = Item.Codigo;
                ItemEntity.EntidadId = Item.EntidadId;
                ItemEntity.NumDocumentoProveedor = Item.NumDocumentoProveedor;
                ItemEntity.NomProveedor = Item.NomProveedor;
                ItemEntity.FechaEmision = Item.FechaEmision;
                ItemEntity.FechaRegistro = Item.FechaRegistro;
                ItemEntity.CodUsuario = Item.CodUsuario;
                ItemEntity.LogicalState = (LogicalState)Item.Action;


                if (Item.DetalleItems != null && Item.DetalleItems.Count > 0)
                {
                    ItemEntity.Detalles = new List<OrdenCompraDetalleEntity>();
                    foreach (var detalle in Item.DetalleItems)
                    {
                        ItemEntity.Detalles.Add(new OrdenCompraDetalleEntity
                        {
                            OrdenCompraDetalleId = detalle.OrdenCompraDetalleId,
                            OrdenCompraId = detalle.OrdenCompraId,
                            MercaderiaId = detalle.MercaderiaId,
                            UnidadMedidaId = detalle.UnidadMedidaId,
                            CantidadSolicitado = detalle.CantidadSolicitado,
                            CantidadComprado = detalle.CantidadComprado,
                            CantidadFaltante = detalle.CantidadFaltante,
                            PrecioUnitario = detalle.PrecioUnitario,
                            LogicalState = (LogicalState)detalle.Action
                        });

                    }
                }



                Item.OrdenCompraId = OrdenCompra.Registrar(ItemEntity);

                return new ResponseAPI<OrdenCompraSaveModel>(Item, true);
            }
            catch (Exception ex)
            {
                return new ResponseAPI<OrdenCompraSaveModel>(new OrdenCompraSaveModel(), false, ex.Message);
            }
        }
        [HttpGet]
        [Route("ObtenerDetalleItem/{OrdenCompraId}")]
        public ResponseAPI<List<OrdenCompraDetalleSaveModel>> ObtenerDetalleItem(Int32 OrdenCompraId)
        {
            try
            {
                d.Configurar();
                var Items = OrdenCompraDetalle.ObtenerItem(OrdenCompraId);

                List<OrdenCompraDetalleSaveModel> Lista = new List<OrdenCompraDetalleSaveModel>();

                foreach (var Item in Items) Lista.Add(new OrdenCompraDetalleSaveModel(Item));

                return new ResponseAPI<List<OrdenCompraDetalleSaveModel>>(Lista, true);

            }
            catch (Exception ex)
            {
                return new ResponseAPI<List<OrdenCompraDetalleSaveModel>>(new List<OrdenCompraDetalleSaveModel>(), false, ex.Message);
            }
        }

    }
}
