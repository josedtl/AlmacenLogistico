using Framework;
using Microsoft.AspNetCore.Mvc;
using LogisticStorage.BusinessLayer;
using LogisticStorage.EntityLayer;
namespace LogisticStorage.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PersonaNaturalController : ControllerBase
    {
        Base d = new Base();
        [HttpGet]
        [Route("ObtenerMain")]
        public ResponseAPI<List<PersonaNaturalMainModel>> ObtenerMain()
        {
            try
            {
                d.Configurar();
                var Items = PersonaNatural.ObtenerMain();
                List<PersonaNaturalMainModel> Lista = new List<PersonaNaturalMainModel>();
                foreach (var Item in Items) Lista.Add(new PersonaNaturalMainModel(Item));

                return new ResponseAPI<List<PersonaNaturalMainModel>>(Lista, true);
            }
            catch (Exception ex)
            {
                return new ResponseAPI<List<PersonaNaturalMainModel>>(new List<PersonaNaturalMainModel>(), false, ex.Message);
            }
        }

        [HttpGet]
        [Route("ObtenerItem/{PersonaNaturalId}")]
        public ResponseAPI<List<PersonaNaturalSaveModel>> ObtenerItem(Int32 PersonaNaturalId)
        {
            try
            {
                d.Configurar();
                var Items = PersonaNatural.ObtenerItem(PersonaNaturalId);

                List<PersonaNaturalSaveModel> Lista = new List<PersonaNaturalSaveModel>();

                foreach (var Item in Items) Lista.Add(new PersonaNaturalSaveModel(Item));

                return new ResponseAPI<List<PersonaNaturalSaveModel>>(Lista, true);

            }
            catch (Exception ex)
            {
                return new ResponseAPI<List<PersonaNaturalSaveModel>>(new List<PersonaNaturalSaveModel>(), false, ex.Message);
            }
        }

        [HttpPost]
        [Route("Registrar")]
        public ResponseAPI<PersonaNaturalSaveModel> Registrar(PersonaNaturalSaveModel Item)
        {
            try
            {
                d.Configurar();
                PersonaNaturalEntity ItemEntity = new PersonaNaturalEntity();

                ItemEntity.PersonaNaturalId = Item.PersonaNaturalId;
                ItemEntity.TipoDocumentoIdentidadId = Item.TipoDocumentoIdentidadId;
                ItemEntity.NumDocumento = Item.NumDocumento;
                ItemEntity.FechaRegistro = Item.FechaRegistro;
                ItemEntity.CodUsuario = Item.CodUsuario;
                ItemEntity.UbigeoId = Item.UbigeoId;
                ItemEntity.Nombres = Item.Nombres;
                ItemEntity.ApellidoPaterno = Item.ApellidoPaterno;
                ItemEntity.ApellidoMaterno = Item.ApellidoMaterno;
                ItemEntity.FechaNacimiento = Item.FechaNacimiento;
                ItemEntity.Direccion = Item.Direccion;
                ItemEntity.Telefono = Item.Telefono;
                ItemEntity.Correo = Item.Correo;
                ItemEntity.SexoId = Item.SexoId;
                ItemEntity.EstadoCivilId = Item.EstadoCivilId;
				ItemEntity.EstadoRegistro = Item.EstadoRegistro;
				ItemEntity.LogicalState = (LogicalState)Item.Action;

                Item.PersonaNaturalId = PersonaNatural.Registrar(ItemEntity);

                return new ResponseAPI<PersonaNaturalSaveModel>(Item, true);
            }
            catch (Exception ex)
            {
                return new ResponseAPI<PersonaNaturalSaveModel>(new PersonaNaturalSaveModel(), false, ex.Message);
            }
        }


    }
}
