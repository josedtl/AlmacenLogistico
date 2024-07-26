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


        [HttpGet]
        [Route("ObtenerCabecera/{OrdenPedidoId}")]
        public ResponseAPI<List<DespachoCabeceraModel>> ObtenerCabecera(Int32 OrdenPedidoId)
        {
            try
            {
                d.Configurar();
                var Items = Despacho.ObtenerCabecera(OrdenPedidoId);

                List<DespachoCabeceraModel> Lista = new List<DespachoCabeceraModel>();

                foreach (var Item in Items) Lista.Add(new DespachoCabeceraModel(Item));

                return new ResponseAPI<List<DespachoCabeceraModel>>(Lista, true);

            }
            catch (Exception ex)
            {
                return new ResponseAPI<List<DespachoCabeceraModel>>(new List<DespachoCabeceraModel>(), false, ex.Message);
            }
        }


        [HttpGet]
        [Route("ObtenerDetalle/{OrdenPedidoId}")]
        public ResponseAPI<List<DespachoDetalleModel>> ObtenerDetalle(Int32 OrdenPedidoId)
        {
            try
            {
                d.Configurar();
                var Items = DespachoDetalle.ObtenerDetalle(OrdenPedidoId);

                List<DespachoDetalleModel> Lista = new List<DespachoDetalleModel>();

                foreach (var Item in Items) Lista.Add(new DespachoDetalleModel(Item));

                return new ResponseAPI<List<DespachoDetalleModel>>(Lista, true);

            }
            catch (Exception ex)
            {
                return new ResponseAPI<List<DespachoDetalleModel>>(new List<DespachoDetalleModel>(), false, ex.Message);
            }
        }

    }
}
