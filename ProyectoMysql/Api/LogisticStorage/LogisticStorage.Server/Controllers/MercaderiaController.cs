using Framework;
using Microsoft.AspNetCore.Mvc;
using LogisticStorage.BusinessLayer;
using LogisticStorage.EntityLayer;
using LogisticStorage.DataLayer;
namespace LogisticStorage.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MercaderiaController : ControllerBase
    {
        Base d = new Base();

        [HttpPost]
        [Route("Registrar")]
        public ResponseAPI<MercaderiaSaveModel> Registrar(MercaderiaSaveModel Item)
        {
            try
            {
                d.Configurar();
                MercaderiaEntity ItemEntity = new MercaderiaEntity();

                ItemEntity.MercaderiaId = Item.MercaderiaId;
                ItemEntity.Codigo = Item.Codigo;
                ItemEntity.CategoriaId = Item.CategoriaId;
                ItemEntity.TipoProductoId = Item.TipoProductoId;
                ItemEntity.MarcaId = Item.MarcaId;
                ItemEntity.ModeloId = Item.ModeloId;
                ItemEntity.Nombre = Item.Nombre;
                ItemEntity.Descripcion = Item.Descripcion;
                ItemEntity.UnidadMedidaId = Item.UnidadMedidaId;
                ItemEntity.Reserva = Item.Reserva;
                ItemEntity.Stock = Item.Stock;
                ItemEntity.FechaRegistro = Item.FechaRegistro;
                ItemEntity.CodUsuario = Item.CodUsuario;
                ItemEntity.EstadoRegistro = Item.EstadoRegistro;
                ItemEntity.LogicalState = (LogicalState)Item.Action;

                Item.MercaderiaId = Mercaderia.Registrar(ItemEntity);

                return new ResponseAPI<MercaderiaSaveModel>(Item, true);
            }
            catch (Exception ex)
            {
                return new ResponseAPI<MercaderiaSaveModel>(new MercaderiaSaveModel(), false, ex.Message);
            }
        }


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


        [HttpPost]
        [Route("BuscarCategoriaItem")]
        public ResponseAPI<List<MercaderiaItemCategoriaModel>> BuscarCategoriaItem(EntidadLikeModel Ent)
        {
            try
            {
                d.Configurar();
                var Items = Mercaderia.BuscarCategoriaItem(Ent.Valor1, Ent.ValorInt1);

                List<MercaderiaItemCategoriaModel> Lista = new List<MercaderiaItemCategoriaModel>();

                foreach (var Item in Items) Lista.Add(new MercaderiaItemCategoriaModel(Item));

                return new ResponseAPI<List<MercaderiaItemCategoriaModel>>(Lista, true);

            }
            catch (Exception ex)
            {
                return new ResponseAPI<List<MercaderiaItemCategoriaModel>>(new List<MercaderiaItemCategoriaModel>(), false, ex.Message);
            }
        }

        [HttpGet]
        [Route("ObtenerItemOP/{MercaderiaId}")]
        public ResponseAPI<List<MercaderiaItemOPModel>> ObtenerItemOP(Int32 MercaderiaId)
        {
            try
            {
                d.Configurar();
                var Items = Mercaderia.ObtenerItemOP(MercaderiaId);

                List<MercaderiaItemOPModel> Lista = new List<MercaderiaItemOPModel>();

                foreach (var Item in Items) Lista.Add(new MercaderiaItemOPModel(Item));

                return new ResponseAPI<List<MercaderiaItemOPModel>>(Lista, true);

            }
            catch (Exception ex)
            {
                return new ResponseAPI<List<MercaderiaItemOPModel>>(new List<MercaderiaItemOPModel>(), false, ex.Message);
            }
        }

    }
}