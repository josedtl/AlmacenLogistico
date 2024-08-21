using Framework;
using Microsoft.AspNetCore.Mvc;
using LogisticStorage.BusinessLayer;
using LogisticStorage.EntityLayer;
using LogisticStorage.DataLayer;
using LogisticStorage.Server.Model.General;
using LogisticStorage.Server.Model.Empresa;
using LogisticStorage.Server.Model.PersonaNatural;
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


        [HttpGet]
        [Route("ProcesoObtenerTipo/{Codigo}")]
        public ResponseAPI<List<ProcesoItemModel>> ProcesoObtenerTipo(String Codigo)
        {
            try
            {
                d.Configurar();
                var Items = Proceso.ObtenerTipo(Codigo);
                List<ProcesoItemModel> Lista = new List<ProcesoItemModel>();
                foreach (var Item in Items) Lista.Add(new ProcesoItemModel(Item));
                return new ResponseAPI<List<ProcesoItemModel>>(Lista, true);

            }
            catch (Exception ex)
            {
                return new ResponseAPI<List<ProcesoItemModel>>(new List<ProcesoItemModel>(), false, ex.Message);
            }
        }


        [HttpPost]
        [Route("EntidadBuscarNombreCompletoItem")]
        public ResponseAPI<List<EntidadNombreCompletoModel>> EntidadBuscarNombreCompletoItem(EntidadLikeModel Ent)
        {
            try
            {
                d.Configurar();
                var Items = Entidad.EntidadBuscarNombreCompletoItem(Ent.Valor1);

                List<EntidadNombreCompletoModel> Lista = new List<EntidadNombreCompletoModel>();

                foreach (var Item in Items) Lista.Add(new EntidadNombreCompletoModel(Item));

                return new ResponseAPI<List<EntidadNombreCompletoModel>>(Lista, true);

            }
            catch (Exception ex)
            {
                return new ResponseAPI<List<EntidadNombreCompletoModel>>(new List<EntidadNombreCompletoModel>(), false, ex.Message);
            }
        }

        [HttpGet]
        [Route("EntidadObtenerNombreCompletoItem/{EntidadId}")]
        public ResponseAPI<List<EntidadNombreCompletoModel>> EntidadObtenerNombreCompletoItem(Int32 EntidadId)
        {
            try
            {
                d.Configurar();
                var Items = Entidad.EntidadObtenerNombreCompletoItem(EntidadId);

                List<EntidadNombreCompletoModel> Lista = new List<EntidadNombreCompletoModel>();

                foreach (var Item in Items) Lista.Add(new EntidadNombreCompletoModel(Item));

                return new ResponseAPI<List<EntidadNombreCompletoModel>>(Lista, true);

            }
            catch (Exception ex)
            {
                return new ResponseAPI<List<EntidadNombreCompletoModel>>(new List<EntidadNombreCompletoModel>(), false, ex.Message);
            }
        }


        [HttpGet]
        [Route("RecepListaObtenerItem/{ListaId}")]
        public ResponseAPI<List<RecepListaModel>> RecepListaObtenerItem(Int32 ListaId)
        {
            try
            {
                d.Configurar();
                var Items = RecepLista.ObtenerItem(ListaId);

                List<RecepListaModel> Lista = new List<RecepListaModel>();

                foreach (var Item in Items) Lista.Add(new RecepListaModel(Item));

                return new ResponseAPI<List<RecepListaModel>>(Lista, true);

            }
            catch (Exception ex)
            {
                return new ResponseAPI<List<RecepListaModel>>(new List<RecepListaModel>(), false, ex.Message);
            }
        }

        [HttpGet]
        [Route("RecepListaObtenerItems/{Codigo}")]
        public ResponseAPI<List<RecepListaModel>> RecepListaObtenerItems(String Codigo)
        {
            try
            {
                d.Configurar();
                var Items = RecepLista.ObtenerLista(Codigo);
                List<RecepListaModel> Lista = new List<RecepListaModel>();
                foreach (var Item in Items) Lista.Add(new RecepListaModel(Item));
                return new ResponseAPI<List<RecepListaModel>>(Lista, true);

            }
            catch (Exception ex)
            {
                return new ResponseAPI<List<RecepListaModel>>(new List<RecepListaModel>(), false, ex.Message);
            }
        }

        [HttpGet]
        [Route("TipoEntidadObtenerItems")]
        public ResponseAPI<List<TipoEntidadModel>> ObtenerItems()
        {
            try
            {
                d.Configurar();
                var Items = TipoEntidad.ObtenerItems();

                List<TipoEntidadModel> Lista = new List<TipoEntidadModel>();

                foreach (var Item in Items) Lista.Add(new TipoEntidadModel(Item));

                return new ResponseAPI<List<TipoEntidadModel>>(Lista, true);

            }
            catch (Exception ex)
            {
                return new ResponseAPI<List<TipoEntidadModel>>(new List<TipoEntidadModel>(), false, ex.Message);
            }
        }

        [HttpPost]
        [Route("EntidadRegistrarEnlace")]
        public ResponseAPI<DatosClienteItemModel> EntidadRegistrarEnlace(DatosClienteItemModel Item)
        {
            try
            {
                d.Configurar();
                EntidadEntity ItemEntity = new EntidadEntity();
                if(Item.TipoEntidadId == 1)
                {
                    ItemEntity.EntidadId = Item.EntidadId;
                    ItemEntity.TipoDocumentoIdentidadId = Item.TipoDocumentoIdentidadId;
                    ItemEntity.NumDocumento = Item.NumDocumento;
                    ItemEntity.Nombres = Item.Nombres;
                    ItemEntity.ApellidoPaterno = Item.ApellidoPaterno;
                    ItemEntity.ApellidoMaterno = Item.ApellidoMaterno;
                    ItemEntity.CodUsuario = Item.CodUsuario;

                    Item.EntidadId = Entidad.PersonaNaturalRegistrarEnlace(ItemEntity);
                } 
                else if( Item.TipoEntidadId ==2)
                {

                    ItemEntity.EntidadId = Item.EntidadId;
                    ItemEntity.TipoDocumentoIdentidadId = Item.TipoDocumentoIdentidadId;
                    ItemEntity.NumDocumento = Item.NumDocumento;
                    ItemEntity.NombreComercial = Item.NombreComercial;
                    ItemEntity.CodUsuario = Item.CodUsuario;

                    Item.EntidadId = Entidad.EmpresaRegistrarEnlace(ItemEntity);
                }
               

                return new ResponseAPI<DatosClienteItemModel>(Item, true);
            }
            catch (Exception ex)
            {
                return new ResponseAPI<DatosClienteItemModel>(new DatosClienteItemModel(), false, ex.Message);
            }
        }

        [HttpGet]
        [Route("EstadoProcesoObtenerItems")]
        public ResponseAPI<List<EstadoProcesoModel>> EstadoProcesoObtenerItems()
        {
            try
            {
                d.Configurar();
                var Items = EstadoProceso.ObtenerItems();

                List<EstadoProcesoModel> Lista = new List<EstadoProcesoModel>();

                foreach (var Item in Items) Lista.Add(new EstadoProcesoModel(Item));

                return new ResponseAPI<List<EstadoProcesoModel>>(Lista, true);

            }
            catch (Exception ex)
            {
                return new ResponseAPI<List<EstadoProcesoModel>>(new List<EstadoProcesoModel>(), false, ex.Message);
            }
        }
        [HttpGet]
        [Route("MonedaObtenerItems")]
        public ResponseAPI<List<MonedaModel>> MonedaObtenerItems()
        {
            try
            {
                d.Configurar();
                var Items = Moneda.ObtenerItems();

                List<MonedaModel> Lista = new List<MonedaModel>();

                foreach (var Item in Items) Lista.Add(new MonedaModel(Item));

                return new ResponseAPI<List<MonedaModel>>(Lista, true);

            }
            catch (Exception ex)
            {
                return new ResponseAPI<List<MonedaModel>>(new List<MonedaModel>(), false, ex.Message);
            }
        }

        [HttpGet]
        [Route("MonedaObtenerItem/{MonedaId}")]
        public ResponseAPI<List<MonedaModel>> MonedaObtenerItem(Int32 MonedaId)
        {
            try
            {
                d.Configurar();
                var Items = Moneda.ObtenerItem(MonedaId);

                List<MonedaModel> Lista = new List<MonedaModel>();

                foreach (var Item in Items) Lista.Add(new MonedaModel(Item));

                return new ResponseAPI<List<MonedaModel>>(Lista, true);

            }
            catch (Exception ex)
            {
                return new ResponseAPI<List<MonedaModel>>(new List<MonedaModel>(), false, ex.Message);
            }
        }

        [HttpGet]
        [Route("PorcentajeImpuestoObtenerItems")]
        public ResponseAPI<List<PorcentajeImpuestoModel>> PorcentajeImpuestoObtenerItems()
        {
            try
            {
                d.Configurar();
                var Items = PorcentajeImpuesto.ObtenerItems();

                List<PorcentajeImpuestoModel> Lista = new List<PorcentajeImpuestoModel>();

                foreach (var Item in Items) Lista.Add(new PorcentajeImpuestoModel(Item));

                return new ResponseAPI<List<PorcentajeImpuestoModel>>(Lista, true);

            }
            catch (Exception ex)
            {
                return new ResponseAPI<List<PorcentajeImpuestoModel>>(new List<PorcentajeImpuestoModel>(), false, ex.Message);
            }
        }

        [HttpGet]
        [Route("PorcentajeImpuestoObtenerItem/{PorcentajeImpuestoId}")]
        public ResponseAPI<List<PorcentajeImpuestoModel>> PorcentajeImpuestoObtenerItem(Int32 PorcentajeImpuestoId)
        {
            try
            {
                d.Configurar();
                var Items = PorcentajeImpuesto.ObtenerItem(PorcentajeImpuestoId);

                List<PorcentajeImpuestoModel> Lista = new List<PorcentajeImpuestoModel>();

                foreach (var Item in Items) Lista.Add(new PorcentajeImpuestoModel(Item));

                return new ResponseAPI<List<PorcentajeImpuestoModel>>(Lista, true);

            }
            catch (Exception ex)
            {
                return new ResponseAPI<List<PorcentajeImpuestoModel>>(new List<PorcentajeImpuestoModel>(), false, ex.Message);
            }
        }

    }
}
