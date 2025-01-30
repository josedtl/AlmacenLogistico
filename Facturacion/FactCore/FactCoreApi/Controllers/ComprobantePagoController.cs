using FactCore.BusinessLayer;
using FactCoreApi;
using FactCoreApi.Models.Comprobante;
using Microsoft.AspNetCore.Mvc;
namespace FactCoreApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ComprobantePagoController : ControllerBase
    {
        Base d = new Base();


        [HttpGet]
        [Route("ObtenerItem/{Id}")]
        public ResponseAPI<List<ComprobantePagoModel>> ObtenerItem(Int32 Id)
        {
            try
            {
                d.Configurar();
                var Items = ComprobantePago.ObtenerItem(Id);

                List<ComprobantePagoModel> Lista = new List<ComprobantePagoModel>();

                foreach (var Item in Items) Lista.Add(new ComprobantePagoModel(Item));

                return new ResponseAPI<List<ComprobantePagoModel>>(Lista, true);

            }
            catch (Exception ex)
            {
                return new ResponseAPI<List<ComprobantePagoModel>>(new List<ComprobantePagoModel>(), false, ex.Message);
            }
        }

      

    }
}
