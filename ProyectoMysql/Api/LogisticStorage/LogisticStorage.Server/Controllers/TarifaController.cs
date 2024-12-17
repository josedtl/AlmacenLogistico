using Framework;
using LogisticStorage.BusinessLayer;
using LogisticStorage.DataLayer;
using LogisticStorage.EntityLayer;
using LogisticStorage.Server.Model.Tarifa;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace LogisticStorage.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    /// [Authorize]
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

        [HttpGet]
        [Route("ObtenerItem/{TarifaId}")]
        public ResponseAPI<List<TarifaSaveModel>> ObtenerItem(Int32 TarifaId)
        {
            try
            {
                d.Configurar();
                var Items = Tarifa.ObtenerItem(TarifaId);

                List<TarifaSaveModel> Lista = new List<TarifaSaveModel>();

                foreach (var Item in Items) Lista.Add(new TarifaSaveModel(Item));

                return new ResponseAPI<List<TarifaSaveModel>>(Lista, true);

            }
            catch (Exception ex)
            {
                return new ResponseAPI<List<TarifaSaveModel>>(new List<TarifaSaveModel>(), false, ex.Message);
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

        [HttpGet]
        [Route("ObtenerMoneda/{MercaderiaId}")]
        public ResponseAPI<List<TarifaMonedaModel>> ObtenerMoneda(Int32 MercaderiaId)
        {
            try
            {
                d.Configurar();
                var Items = Tarifa.ObtenerMoneda(MercaderiaId);

                List<TarifaMonedaModel> Lista = new List<TarifaMonedaModel>();

                foreach (var Item in Items) Lista.Add(new TarifaMonedaModel(Item));

                return new ResponseAPI<List<TarifaMonedaModel>>(Lista, true);

            }
            catch (Exception ex)
            {
                return new ResponseAPI<List<TarifaMonedaModel>>(new List<TarifaMonedaModel>(), false, ex.Message);
            }
        }

        [HttpGet]
        [Route("ObtenerUnidadMedidaPrecio/{MercaderiaId}/{MonedaId}")]
        public ResponseAPI<List<TarifaUnidadMedidaPrecioModel>> ObtenerUnidadMedidaPrecio(Int32 MercaderiaId, Int32 MonedaId)
        {
            try
            {
                d.Configurar();
                var Items = Tarifa.ObtenerUnidadMedidaPrecio(MercaderiaId, MonedaId);

                List<TarifaUnidadMedidaPrecioModel> Lista = new List<TarifaUnidadMedidaPrecioModel>();

                foreach (var Item in Items) Lista.Add(new TarifaUnidadMedidaPrecioModel(Item));

                return new ResponseAPI<List<TarifaUnidadMedidaPrecioModel>>(Lista, true);

            }
            catch (Exception ex)
            {
                return new ResponseAPI<List<TarifaUnidadMedidaPrecioModel>>(new List<TarifaUnidadMedidaPrecioModel>(), false, ex.Message);
            }
        }
    }
}
