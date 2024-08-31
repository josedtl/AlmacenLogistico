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
    public class MercaderiaStockController : ControllerBase
    {
        Base d = new Base();

        [HttpGet]
        [Route("ObtenerMain")]
        public ResponseAPI<List<MercaderiaMainModel>> ObtenerMain()
        {
            try
            {
                d.Configurar();
                var Items = Mercaderia.ObtenerMain();
                List<MercaderiaMainModel> Lista = new List<MercaderiaMainModel>();
                foreach (var Item in Items) Lista.Add(new MercaderiaMainModel(Item));

                return new ResponseAPI<List<MercaderiaMainModel>>(Lista, true);
            }
            catch (Exception ex)
            {
                return new ResponseAPI<List<MercaderiaMainModel>>(new List<MercaderiaMainModel>(), false, ex.Message);
            }
        }

        [HttpGet]
        [Route("ObtenerItem/{MercaderiaId}")]
        public ResponseAPI<List<MercaderiaSaveModel>> ObtenerItem(Int32 MercaderiaId)
        {
            try
            {
                d.Configurar();
                var Items = Mercaderia.ObtenerItem(MercaderiaId);

                List<MercaderiaSaveModel> Lista = new List<MercaderiaSaveModel>();

                foreach (var Item in Items) Lista.Add(new MercaderiaSaveModel(Item));

                return new ResponseAPI<List<MercaderiaSaveModel>>(Lista, true);

            }
            catch (Exception ex)
            {
                return new ResponseAPI<List<MercaderiaSaveModel>>(new List<MercaderiaSaveModel>(), false, ex.Message);
            }
        }

    }
}
