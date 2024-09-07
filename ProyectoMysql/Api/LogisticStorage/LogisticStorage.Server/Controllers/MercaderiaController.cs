using Framework;
using Microsoft.AspNetCore.Mvc;
using LogisticStorage.BusinessLayer;
using LogisticStorage.EntityLayer;
using LogisticStorage.DataLayer;
using LogisticStorage.Server.Model.Mercaderia;
using Microsoft.AspNetCore.Authorization;
namespace LogisticStorage.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    //[Authorize]
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


                if (Item.DetalleItems != null && Item.DetalleItems.Count > 0)
                {
                    ItemEntity.DetalleItem = new List<MercaderiaPresentacionEntity>();
                    foreach (var detalle in Item.DetalleItems)
                    {
                        ItemEntity.DetalleItem.Add(new MercaderiaPresentacionEntity
                        {
                            MercaderiaPresentacionId = detalle.MercaderiaPresentacionId,
                            MercaderiaId = detalle.MercaderiaId,
                            UnidadMedidaId = detalle.UnidadMedidaId,
                            Cantidad = detalle.Cantidad,
                            LogicalState = (LogicalState)detalle.Action,
                            NomUnidadMedida = detalle.NomUnidadMedida,
                        });

                    }
                }

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

        [HttpGet]
        [Route("ObtenerMercaderiaTarifa/{MercaderiaId}")]
        public ResponseAPI<List<MercaderiaTarifaModel>> ObtenerMercaderiaTarifa(Int32 MercaderiaId)
        {
            try
            {
                d.Configurar();
                var Items = Mercaderia.ObtenerMercaderiaTarifa(MercaderiaId);

                List<MercaderiaTarifaModel> Lista = new List<MercaderiaTarifaModel>();

                foreach (var Item in Items) Lista.Add(new MercaderiaTarifaModel(Item));

                return new ResponseAPI<List<MercaderiaTarifaModel>>(Lista, true);

            }
            catch (Exception ex)
            {
                return new ResponseAPI<List<MercaderiaTarifaModel>>(new List<MercaderiaTarifaModel>(), false, ex.Message);
            }
        }
        [HttpGet]
        [Route("ObtenerMercaderiaTarifaItems")]
        public ResponseAPI<List<MercaderiaTarifaModel>> ObtenerMercaderiaTarifaItems()
        {
            try
            {
                d.Configurar();
                var Items = Mercaderia.ObtenerMercaderiaTarifaItems();
                List<MercaderiaTarifaModel> Lista = new List<MercaderiaTarifaModel>();
                foreach (var Item in Items) Lista.Add(new MercaderiaTarifaModel(Item));

                return new ResponseAPI<List<MercaderiaTarifaModel>>(Lista, true);
            }
            catch (Exception ex)
            {
                return new ResponseAPI<List<MercaderiaTarifaModel>>(new List<MercaderiaTarifaModel>(), false, ex.Message);
            }
        }
        [HttpPost]
        [Route("BuscarItem")]
        public ResponseAPI<List<MercaderiaTarifaModel>> BuscarItem(EntidadLikeModel Ent)
        {
            try
            {
                d.Configurar();
                var Items = Mercaderia.BuscarItem(Ent.Valor1);

                List<MercaderiaTarifaModel> Lista = new List<MercaderiaTarifaModel>();

                foreach (var Item in Items) Lista.Add(new MercaderiaTarifaModel(Item));

                return new ResponseAPI<List<MercaderiaTarifaModel>>(Lista, true);

            }
            catch (Exception ex)
            {
                return new ResponseAPI<List<MercaderiaTarifaModel>>(new List<MercaderiaTarifaModel>(), false, ex.Message);
            }
        }

        [HttpGet]
        [Route("MercaderiaPresentacionObtenerDetalle/{MercaderiaId}")]
        public ResponseAPI<List<MercaderiaPresentacionModel>> MercaderiaPresentacionObtenerDetalle(Int32 MercaderiaId)
        {
            try
            {
                d.Configurar();
                var Items = MercaderiaPresentacion.ObtenerDetalle(MercaderiaId);

                List<MercaderiaPresentacionModel> Lista = new List<MercaderiaPresentacionModel>();

                foreach (var Item in Items) Lista.Add(new MercaderiaPresentacionModel(Item));

                return new ResponseAPI<List<MercaderiaPresentacionModel>>(Lista, true);

            }
            catch (Exception ex)
            {
                return new ResponseAPI<List<MercaderiaPresentacionModel>>(new List<MercaderiaPresentacionModel>(), false, ex.Message);
            }
        }


        [HttpPost]
        [Route("ObtenerMainFiltro")]
        public ResponseAPI<List<MercaderiaMainModel>> ObtenerMainFiltro(MercaderiaFiltroModel ItemFiltro)
        {
            try
            {
                d.Configurar();
                MercaderiaEntity ItemDB = new MercaderiaEntity();

                ItemDB.CategoriaId = ItemFiltro.CategoriaId;
                ItemDB.TipoProductoId = ItemFiltro.TipoId;
                ItemDB.Nombre = ItemFiltro.Nombre;

                var Items = Mercaderia.ObtenerMainFiltro(ItemDB);
                List<MercaderiaMainModel> Lista = new List<MercaderiaMainModel>();
                foreach (var Item in Items) Lista.Add(new MercaderiaMainModel(Item));

                return new ResponseAPI<List<MercaderiaMainModel>>(Lista, true);
            }
            catch (Exception ex)
            {
                return new ResponseAPI<List<MercaderiaMainModel>>(new List<MercaderiaMainModel>(), false, ex.Message);
            }
        }
    }
}
