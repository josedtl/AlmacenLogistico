using Framework;
using Microsoft.AspNetCore.Mvc;
using LogisticStorage.BusinessLayer;
using LogisticStorage.EntityLayer;
using LogisticStorage.DataLayer;
namespace LogisticStorage.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EntListaController : ControllerBase
    {
        Base d = new Base();

        [HttpGet]
        [Route("ObtenerItem/{ListaId}")]
        public ResponseAPI<List<EntListaItemModel>> ObtenerItem(Int32 ListaId)
        {
            try
            {
                d.Configurar();
                var Items = EntLista.ObtenerItem(ListaId);
                List<EntListaItemModel> Lista = new List<EntListaItemModel>();
                foreach (var Item in Items) Lista.Add(new EntListaItemModel(Item));

                return new ResponseAPI<List<EntListaItemModel>>(Lista, true);
            }
            catch (Exception ex)
            {
                return new ResponseAPI<List<EntListaItemModel>>(new List<EntListaItemModel>(), false, ex.Message);
            }
        }


        [HttpGet]
        [Route("ObtenerItems/{Codigo}")]
        public ResponseAPI<List<EntListaItemModel>> ObtenerItems(String Codigo)
        {
            try
            {
                d.Configurar();
                var Items = EntLista.ObtenerItems(Codigo);
                List<EntListaItemModel> Lista = new List<EntListaItemModel>();
                foreach (var Item in Items) Lista.Add(new EntListaItemModel(Item));

                return new ResponseAPI<List<EntListaItemModel>>(Lista, true);
            }
            catch (Exception ex)
            {
                return new ResponseAPI<List<EntListaItemModel>>(new List<EntListaItemModel>(), false, ex.Message);
            }
        }


        [HttpPost]
        [Route("Registrar")]
        public ResponseAPI<MerListaSaveModel> Registrar(MerListaSaveModel Item)
        {
            try
            {
                d.Configurar();
                EntListaEntity ItemEntity = new EntListaEntity();

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

                Item.ListaId = EntLista.Registrar(ItemEntity);

                return new ResponseAPI<MerListaSaveModel>(Item, true);
            }
            catch (Exception ex)
            {
                return new ResponseAPI<MerListaSaveModel>(new MerListaSaveModel(), false, ex.Message);
            }
        }
      


      
        [HttpPost]
        [Route("BuscarItem")]
        public ResponseAPI<List<EntListaItemModel>> BuscarItem(EntidadLikeModel Ent)
        {
            try
            {
                d.Configurar();
                var Items = EntLista.BuscarItem(Ent.Valor1, Ent.Valor2);

                List<EntListaItemModel> Lista = new List<EntListaItemModel>();

                foreach (var Item in Items) Lista.Add(new EntListaItemModel(Item));

                return new ResponseAPI<List<EntListaItemModel>>(Lista, true);

            }
            catch (Exception ex)
            {
                return new ResponseAPI<List<EntListaItemModel>>(new List<EntListaItemModel>(), false, ex.Message);
            }
        }

    }
}
