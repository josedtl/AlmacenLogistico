using LogisticStorage.BusinessLayer;
using LogisticStorage.Server.Model.Despacho;
using Microsoft.AspNetCore.Mvc;

namespace LogisticStorage.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DespachoController : ControllerBase
    {
        Base d = new Base();
        [HttpGet]
        [Route("ObtenerMain")]
        public ResponseAPI<List<DespachoMainModel>> ObtenerMain()
        {
            try
            {
                d.Configurar();
                var Items = Despacho.DespachoObtenerMain();
                List<DespachoMainModel> Lista = new List<DespachoMainModel>();
                foreach (var Item in Items) Lista.Add(new DespachoMainModel(Item));

                return new ResponseAPI<List<DespachoMainModel>>(Lista, true);
            }
            catch (Exception ex)
            {
                return new ResponseAPI<List<DespachoMainModel>>(new List<DespachoMainModel>(), false, ex.Message);
            }
        }

    }
}
