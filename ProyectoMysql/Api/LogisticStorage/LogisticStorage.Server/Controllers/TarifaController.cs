using Framework;
using LogisticStorage.BusinessLayer;
using LogisticStorage.EntityLayer;
using LogisticStorage.Server.Model.Tarifa;
using Microsoft.AspNetCore.Mvc;

namespace LogisticStorage.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TarifaController : ControllerBase
    {
        Base d = new Base();

        [HttpGet]
        [Route("ObtenerMain")]
        public ResponseAPI<List<TarifaMainModel>> ObtenerMain()
        {
            try
            {
                d.Configurar();
                var Items = Tarifa.ObtenerMain();
                List<TarifaMainModel> Lista = new List<TarifaMainModel>();
                foreach (var Item in Items) Lista.Add(new TarifaMainModel(Item));

                return new ResponseAPI<List<TarifaMainModel>>(Lista, true);
            }
            catch (Exception ex)
            {
                return new ResponseAPI<List<TarifaMainModel>>(new List<TarifaMainModel>(), false, ex.Message);
            }
        }


        [HttpPost]
        [Route("Registrar")]
        public ResponseAPI<TarifaSaveModel> Registrar(TarifaSaveModel Item)
        {
            try
            {
                d.Configurar();
                TarifaEntity ItemEntity = new TarifaEntity();

                ItemEntity.TarifaId = Item.TarifaId;
                ItemEntity.UnidadMedidaId = Item.UnidadMedidaId;
                ItemEntity.MonedaId = Item.MonedaId;
                ItemEntity.MercaderiaId = Item.MercaderiaId;
                ItemEntity.PorcentajeImpuestoId = Item.PorcentajeImpuestoId;
                ItemEntity.PrecioSinImpuesto = Item.PrecioSinImpuesto;
                ItemEntity.PrecioConImpuesto = Item.PrecioConImpuesto;
                ItemEntity.FechaCreacion = Item.FechaCreacion;
                ItemEntity.Vigente = Item.Vigente; 
                ItemEntity.LogicalState = (LogicalState)Item.Action;

                Item.TarifaId = Tarifa.Registrar(ItemEntity);

                return new ResponseAPI<TarifaSaveModel>(Item, true);
            }
            catch (Exception ex)
            {
                return new ResponseAPI<TarifaSaveModel>(new TarifaSaveModel(), false, ex.Message);
            }
        }
    }
}
