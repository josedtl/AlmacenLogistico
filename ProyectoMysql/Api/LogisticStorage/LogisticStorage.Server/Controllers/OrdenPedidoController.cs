using Framework;
using Microsoft.AspNetCore.Mvc;
using LogisticStorage.BusinessLayer;
using LogisticStorage.EntityLayer;
namespace LogisticStorage.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
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
        [Route("ObtenerItem/{EmpresaId}")]
        public ResponseAPI<List<OrdenPedidoSaveModel>> ObtenerItem(Int32 EmpresaId)
        {
            try
            {
                d.Configurar();
                var Items = OrdenPedido.ObtenerItem(EmpresaId);

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
        public ResponseAPI<OrdenPedidoSaveModel> EmpresaRegistrar(OrdenPedidoSaveModel Item)
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

                Item.OrdenPedidoId = OrdenPedido.Registrar(ItemEntity);

                return new ResponseAPI<OrdenPedidoSaveModel>(Item, true);
            }
            catch (Exception ex)
            {
                return new ResponseAPI<OrdenPedidoSaveModel>(new OrdenPedidoSaveModel(), false, ex.Message);
            }
        }


    }
}
