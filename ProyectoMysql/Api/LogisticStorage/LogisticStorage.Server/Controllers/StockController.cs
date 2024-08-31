using Framework;
using LogisticStorage.BusinessLayer;
using LogisticStorage.EntityLayer;
using LogisticStorage.Server.Model.Despacho;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace LogisticStorage.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class StockController : ControllerBase
    {
        Base d = new Base();
        [HttpGet]
        [Route("ObtenerMain")]
        public ResponseAPI<List<StockMercaderiaMainModel>> ObtenerMain()
        {
            try
            {
                d.Configurar();
                var Items = StockMercaderia.ObtenerMain();
                List<StockMercaderiaMainModel> Lista = new List<StockMercaderiaMainModel>();
                foreach (var Item in Items) Lista.Add(new StockMercaderiaMainModel(Item));

                return new ResponseAPI<List<StockMercaderiaMainModel>>(Lista, true);
            }
            catch (Exception ex)
            {
                return new ResponseAPI<List<StockMercaderiaMainModel>>(new List<StockMercaderiaMainModel>(), false, ex.Message);
            }
        }


    }
}
