namespace FactCoreApi
{
    public class EntidadLikeModel
    {

        public EntidadLikeModel()
        {
            this.Valor1 = String.Empty;
            this.Valor2 = String.Empty;
            this.ValorInt1 = 0;
        }

        public String Valor1 { get; set; }
        public String Valor2 { get; set; }
        public Int32 ValorInt1 { get; set; }
    }
}
