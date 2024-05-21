using Framework;
using Microsoft.AspNetCore.Mvc;
using LogisticStorage.BusinessLayer;
using LogisticStorage.EntityLayer;
using LogisticStorage.DataLayer;
namespace LogisticStorage.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MerListaController : ControllerBase
    {
        Base d = new Base();

        [HttpGet]
        [Route("ObtenerMain/{Codigo}")]
        public ResponseAPI<List<MerListaMainModel>> ObtenerMain(String Codigo)
        {
            try
            {
                d.Configurar();
                var Items = MerLista.ObtenerMain(Codigo);
                List<MerListaMainModel> Lista = new List<MerListaMainModel>();
                foreach (var Item in Items) Lista.Add(new MerListaMainModel(Item));

                return new ResponseAPI<List<MerListaMainModel>>(Lista, true);
            }
            catch (Exception ex)
            {
                return new ResponseAPI<List<MerListaMainModel>>(new List<MerListaMainModel>(), false, ex.Message);
            }
        }

        [HttpPost]
        [Route("Registrar")]
        public ResponseAPI<MerListaSaveModel> Registrar(MerListaSaveModel Item)
        {
            try
            {
                d.Configurar();
                MerListaEntity ItemEntity = new MerListaEntity();

                ItemEntity.ListaId = Item.ListaId;
                ItemEntity.CampoId = Item.CampoId;
                ItemEntity.Nombre = Item.Nombre;
                ItemEntity.Codigo = Item.Codigo;
                ItemEntity.Descripcion = Item.Descripcion;
                ItemEntity.FechaRegistro = Item.FechaRegistro;
                ItemEntity.CodUsuario = Item.CodUsuario;
                ItemEntity.EstadoRegistro = Item.EstadoRegistro;
                ItemEntity.CodigoTabla = Item.CodigoTabla;
                ItemEntity.LogicalState = (LogicalState)Item.Action;

                Item.ListaId = MerLista.Registrar(ItemEntity);

                return new ResponseAPI<MerListaSaveModel>(Item, true);
            }
            catch (Exception ex)
            {
                return new ResponseAPI<MerListaSaveModel>(new MerListaSaveModel(), false, ex.Message);
            }
        }
        [HttpGet]
        [Route("ObtenerTitulo/{Codigo}")]
        public ResponseAPI<List<MerListaTituloModel>> ObtenerTitulo(String Codigo)
        {
            try
            {
                d.Configurar();
                var Items = MerLista.ObtenerTitulo(Codigo);

                List<MerListaTituloModel> Lista = new List<MerListaTituloModel>();

                foreach (var Item in Items) Lista.Add(new MerListaTituloModel(Item));

                return new ResponseAPI<List<MerListaTituloModel>>(Lista, true);

            }
            catch (Exception ex)
            {
                return new ResponseAPI<List<MerListaTituloModel>>(new List<MerListaTituloModel>(), false, ex.Message);
            }
        }

        [HttpGet]
        [Route("ObtenerItem/{MerListaId}")]
        public ResponseAPI<List<MerListaSaveModel>> ObtenerItem(Int32 MerListaId)
        {
            try
            {
                d.Configurar();
                var Items = MerLista.ObtenerItem(MerListaId);

                List<MerListaSaveModel> Lista = new List<MerListaSaveModel>();

                foreach (var Item in Items) Lista.Add(new MerListaSaveModel(Item));

                return new ResponseAPI<List<MerListaSaveModel>>(Lista, true);

            }
            catch (Exception ex)
            {
                return new ResponseAPI<List<MerListaSaveModel>>(new List<MerListaSaveModel>(), false, ex.Message);
            }
        }

        [HttpPost]
        [Route("BuscarItem")]
        public ResponseAPI<List<MerListaItemModel>> BuscarItem(EntidadLikeModel Ent)
        {
            try
            {
                d.Configurar();
                var Items = MerLista.BuscarItem(Ent.Valor1, Ent.Valor2);

                List<MerListaItemModel> Lista = new List<MerListaItemModel>();

                foreach (var Item in Items) Lista.Add(new MerListaItemModel(Item));

                return new ResponseAPI<List<MerListaItemModel>>(Lista, true);

            }
            catch (Exception ex)
            {
                return new ResponseAPI<List<MerListaItemModel>>(new List<MerListaItemModel>(), false, ex.Message);
            }
        }

    }
}
