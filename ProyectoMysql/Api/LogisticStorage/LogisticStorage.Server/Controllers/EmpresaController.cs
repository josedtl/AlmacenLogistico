using Framework;
using Microsoft.AspNetCore.Mvc;
using LogisticStorage.BusinessLayer;
using LogisticStorage.EntityLayer;
namespace LogisticStorage.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmpresaController : ControllerBase
    {
        Base d = new Base();
        [HttpGet]
        [Route("ObtenerMain")]
        public ResponseAPI<List<EmpresaMainModel>> ObtenerMain()
        {
            try
            {
                d.Configurar();
                var Items = Entidad.ObtenerMain();
                List<EmpresaMainModel> Lista = new List<EmpresaMainModel>();
                foreach (var Item in Items) Lista.Add(new EmpresaMainModel(Item));

                return new ResponseAPI<List<EmpresaMainModel>>(Lista, true);
            }
            catch (Exception ex)
            {
                return new ResponseAPI<List<EmpresaMainModel>>(new List<EmpresaMainModel>(), false, ex.Message);
            }
        }

        [HttpGet]
        [Route("ObtenerItem/{PersonaNaturalId}")]
        public ResponseAPI<List<EmpresaSaveModel>> ObtenerItem(Int32 PersonaNaturalId)
        {
            try
            {
                d.Configurar();
                var Items = Entidad.ObtenerItem(PersonaNaturalId);

                List<EmpresaSaveModel> Lista = new List<EmpresaSaveModel>();

                foreach (var Item in Items) Lista.Add(new EmpresaSaveModel(Item));

                return new ResponseAPI<List<EmpresaSaveModel>>(Lista, true);

            }
            catch (Exception ex)
            {
                return new ResponseAPI<List<EmpresaSaveModel>>(new List<EmpresaSaveModel>(), false, ex.Message);
            }
        }

        [HttpPost]
        [Route("Registrar")]
        public ResponseAPI<EmpresaSaveModel> Registrar(EmpresaSaveModel Item)
        {
            try
            {
                d.Configurar();
                EntidadEntity ItemEntity = new EntidadEntity();

                ItemEntity.EntidadId = Item.EmpresaId;
                ItemEntity.TipoDocumentoIdentidadId = Item.TipoDocumentoIdentidadId;
                ItemEntity.NumDocumento = Item.NumDocumento;
                ItemEntity.FechaRegistro = Item.FechaRegistro;
                ItemEntity.CodUsuario = Item.CodUsuario;
                ItemEntity.UbigeoId = Item.UbigeoId;
                ItemEntity.Nombres = Item.Nombres;
                ItemEntity.Direccion = Item.Direccion;
                ItemEntity.Telefono = Item.Telefono;
                ItemEntity.Correo = Item.Correo;
				ItemEntity.EstadoRegistro = Item.EstadoRegistro;
				ItemEntity.LogicalState = (LogicalState)Item.Action;

                Item.EmpresaId = Entidad.Registrar(ItemEntity);

                return new ResponseAPI<EmpresaSaveModel>(Item, true);
            }
            catch (Exception ex)
            {
                return new ResponseAPI<EmpresaSaveModel>(new EmpresaSaveModel(), false, ex.Message);
            }
        }


    }
}
