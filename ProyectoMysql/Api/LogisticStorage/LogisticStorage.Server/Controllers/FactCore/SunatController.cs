using Framework;
using FactCore.BusinessLayer;
using LogisticStorage.EntityLayer;
using LogisticStorage.Server.Model.Despacho;
using LogisticStorage.Server.Models.Comprobante;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using FactCore.EntityLayer;
using LogisticStorage.Server.Model.Sunat;


namespace LogisticStorage.Server.Controllers.FactCore
{
    [Route("FactCore/api/[controller]")]
    [ApiController]
    public class SunatController : ControllerBase
    {
        Base d = new Base();


        [HttpGet]
        [Route("ObtenerTipoOperacionLista/{Tipo}")]
        public ResponseAPI<List<TipoOperacionItemModel>> ObtenerTipoOperacionLista(Boolean Tipo)
        {
            try
            {
                d.Configurar();
                var Items = ST_Sunat.ObtenerTipoOperacionLista(Tipo);

                List<TipoOperacionItemModel> Lista = new List<TipoOperacionItemModel>();

                foreach (var Item in Items) Lista.Add(new TipoOperacionItemModel(Item));

                return new ResponseAPI<List<TipoOperacionItemModel>>(Lista, true);

            }
            catch (Exception ex)
            {
                return new ResponseAPI<List<TipoOperacionItemModel>>(new List<TipoOperacionItemModel>(), false, ex.Message);
            }
        }


        [HttpGet]
        [Route("ObtenerTipoDocumentoIdentidadLista")]
        public ResponseAPI<List<TipoDocumentoIdentidadItemModel>> ObtenerTipoDocumentoIdentidadLista()
        {
            try
            {
                d.Configurar();
                var Items = ST_Sunat.ObtenerTipoDocumentoIdentidadLista();

                List<TipoDocumentoIdentidadItemModel> Lista = new List<TipoDocumentoIdentidadItemModel>();

                foreach (var Item in Items) Lista.Add(new TipoDocumentoIdentidadItemModel(Item));

                return new ResponseAPI<List<TipoDocumentoIdentidadItemModel>>(Lista, true);

            }
            catch (Exception ex)
            {
                return new ResponseAPI<List<TipoDocumentoIdentidadItemModel>>(new List<TipoDocumentoIdentidadItemModel>(), false, ex.Message);
            }
        }

        [HttpGet]
        [Route("ObtenerFormaPagoLista")]
        public ResponseAPI<List<FormaPagoItemModel>> ObtenerFormaPagoLista()
        {
            try
            {
                d.Configurar();
                var Items = ST_Sunat.ObtenerFormaPagoLista();

                List<FormaPagoItemModel> Lista = new List<FormaPagoItemModel>();

                foreach (var Item in Items) Lista.Add(new FormaPagoItemModel(Item));

                return new ResponseAPI<List<FormaPagoItemModel>>(Lista, true);

            }
            catch (Exception ex)
            {
                return new ResponseAPI<List<FormaPagoItemModel>>(new List<FormaPagoItemModel>(), false, ex.Message);
            }
        }

        [HttpGet]
        [Route("ObtenerTipotributoLista")]
        public ResponseAPI<List<TripotributoItemModel>> ObtenerTipotributoLista()
        {
            try
            {
                d.Configurar();
                var Items = ST_Sunat.ObtenerTipotributoLista();

                List<TripotributoItemModel> Lista = new List<TripotributoItemModel>();

                foreach (var Item in Items) Lista.Add(new TripotributoItemModel(Item));

                return new ResponseAPI<List<TripotributoItemModel>>(Lista, true);

            }
            catch (Exception ex)
            {
                return new ResponseAPI<List<TripotributoItemModel>>(new List<TripotributoItemModel>(), false, ex.Message);
            }
        }


        [HttpGet]
        [Route("ObtenerMonedaLista")]
        public ResponseAPI<List<MonedaItemModel>> ObtenerMonedaLista()
        {
            try
            {
                d.Configurar();
                var Items = ST_Sunat.ObtenerMonedaLista();

                List<MonedaItemModel> Lista = new List<MonedaItemModel>();

                foreach (var Item in Items) Lista.Add(new MonedaItemModel(Item));

                return new ResponseAPI<List<MonedaItemModel>>(Lista, true);

            }
            catch (Exception ex)
            {
                return new ResponseAPI<List<MonedaItemModel>>(new List<MonedaItemModel>(), false, ex.Message);
            }
        }

        [HttpGet]
        [Route("ObtenerTipoprecioventaunitarioLista")]
        public ResponseAPI<List<tipoprecioventaunitarioItemModel>> ObtenerTipoprecioventaunitarioLista()
        {
            try
            {
                d.Configurar();
                var Items = ST_Sunat.ObtenerTipoprecioventaunitarioLista();

                List<tipoprecioventaunitarioItemModel> Lista = new List<tipoprecioventaunitarioItemModel>();

                foreach (var Item in Items) Lista.Add(new tipoprecioventaunitarioItemModel(Item));

                return new ResponseAPI<List<tipoprecioventaunitarioItemModel>>(Lista, true);

            }
            catch (Exception ex)
            {
                return new ResponseAPI<List<tipoprecioventaunitarioItemModel>>(new List<tipoprecioventaunitarioItemModel>(), false, ex.Message);
            }
        }
    }
}
