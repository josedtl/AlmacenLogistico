using FactCore.BusinessLayer;
using FactCore.EntityLayer;
using FactCoreApi;
using FactCoreApi.Models.Comprobante;
using Microsoft.AspNetCore.Mvc;
namespace FactCoreApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        Base d = new Base();
        private readonly IConfiguration _configuration;
        private readonly ITokenService _tokenService;

        public AuthController(IConfiguration configuration, ITokenService tokenService)
        {
            _configuration = configuration;
            _tokenService = tokenService;
        }

        [HttpPost("token")]
        public IActionResult GetToken([FromBody] LoginRequest loginRequest)
        {
            var item = IsValidUser(loginRequest.Username, loginRequest.Password);

            if (item == null)
            {
                return Unauthorized(new { Message = "Usuario y contraseña incorrectas" });
            }

            if (item.FechaVigencia < DateTime.Now)
            {
                return Unauthorized(new { Message = "Caducó sus credenciales" });
            }

            if (!item.Estado)
            {
                return Unauthorized(new { Message = "Credenciales deshabilitadas" });
            }

            // Validar el usuario
            if (item.UsuarioId > 0)
            {
                // Generar el token
                var token = _tokenService.GenerateToken(loginRequest.Username);
                return Ok(new { Token = token });
            }
            else
            {
                return Unauthorized(new { Message = "Usuario y contraseña incorrectas" });
            }
        }

        private UsuarioEntity IsValidUser(string username, string password)
        {
            d.Configurar();
            List<UsuarioEntity> Items = Usuario.OObtenerAcceso(username, password);

            if (Items != null && Items.Count > 0)
            {
                return Items[0];
            }
            else
            {
                return null;

            }
        }
    }
}
