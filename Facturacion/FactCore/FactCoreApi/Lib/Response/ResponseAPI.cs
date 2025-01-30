using System.Text.Json.Serialization;

namespace FactCoreApi
{
    public class ResponseAPI<T>
    {
        public ResponseAPI()
        {
            State = true;
            Message = "";
        }
        public ResponseAPI(T _Valor, Boolean _State, String _Message = "")
        {
            State = _State;
            Message = _Message == String.Empty ? "Correcto" : _Message;
            Value = _Valor;
        }
        public ResponseAPI(String _Message = "")
        {
            State = false;
            Message =  _Message;
        }
        [JsonPropertyName("State")]
        public bool State { get; set; }
        [JsonPropertyName("Message")]
        public string? Message { get; set; }
        [JsonPropertyName("Value")]
        public T? Value { get; set; }
    }
}
