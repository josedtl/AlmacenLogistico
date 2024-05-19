using Framework;
using Microsoft.AspNetCore.Mvc;
using LogisticStorage.BusinessLayer;
using LogisticStorage.EntityLayer;
using LogisticStorage.DataLayer;
using LogisticStorage.Server.Model.General;
namespace LogisticStorage.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GeneralController : ControllerBase
    {
        Base d = new Base();


        [HttpGet]
        [Route("UnidadMedidaObtenerItems")]
        public ResponseAPI<List<UnidadMedidaItemModel>> UnidadMedidaObtenerItems()
        {
            try
            {
                d.Configurar();
                var Items = UnidadMedida.ObtenerItems();

                List<UnidadMedidaItemModel> Lista = new List<UnidadMedidaItemModel>();

                foreach (var Item in Items) Lista.Add(new UnidadMedidaItemModel(Item));

                return new ResponseAPI<List<UnidadMedidaItemModel>>(Lista, true);

            }
            catch (Exception ex)
            {
                return new ResponseAPI<List<UnidadMedidaItemModel>>(new List<UnidadMedidaItemModel>(), false, ex.Message);
            }
        }

        [HttpGet]
        [Route("UnidadMedidaObtenerItem/{UnidadMedidaId}")]
        public ResponseAPI<List<UnidadMedidaItemModel>> UnidadMedidaObtenerItem(Int32 UnidadMedidaId)
        {
            try
            {
                d.Configurar();
                var Items = UnidadMedida.ObtenerItem(UnidadMedidaId);

                List<UnidadMedidaItemModel> Lista = new List<UnidadMedidaItemModel>();

                foreach (var Item in Items) Lista.Add(new UnidadMedidaItemModel(Item));

                return new ResponseAPI<List<UnidadMedidaItemModel>>(Lista, true);

            }
            catch (Exception ex)
            {
                return new ResponseAPI<List<UnidadMedidaItemModel>>(new List<UnidadMedidaItemModel>(), false, ex.Message);
            }
        }



        [HttpGet]
        [Route("UbigeoObtenerItem/{UbigeoId}")]
        public ResponseAPI<List<UbigeoItemModel>> UbigeoObtenerItem(Int32 UbigeoId)
        {
            try
            {
                d.Configurar();
                var Items = Ubigeo.ObtenerItem(UbigeoId);

                List<UbigeoItemModel> Lista = new List<UbigeoItemModel>();

                foreach (var Item in Items) Lista.Add(new UbigeoItemModel(Item));

                return new ResponseAPI<List<UbigeoItemModel>>(Lista, true);

            }
            catch (Exception ex)
            {
                return new ResponseAPI<List<UbigeoItemModel>>(new List<UbigeoItemModel>(), false, ex.Message);
            }
        }

        [HttpPost]
        [Route("UbigeoBuscarItem")]
        public ResponseAPI<List<UbigeoItemModel>> UbigeoBuscarItem(EntidadLikeModel Ent)
        {
            try
            {
                d.Configurar();
                var Items = Ubigeo.BuscarItem(Ent.Valor1);

                List<UbigeoItemModel> Lista = new List<UbigeoItemModel>();

                foreach (var Item in Items) Lista.Add(new UbigeoItemModel(Item));

                return new ResponseAPI<List<UbigeoItemModel>>(Lista, true);

            }
            catch (Exception ex)
            {
                return new ResponseAPI<List<UbigeoItemModel>>(new List<UbigeoItemModel>(), false, ex.Message);
            }
        }

    }
}
