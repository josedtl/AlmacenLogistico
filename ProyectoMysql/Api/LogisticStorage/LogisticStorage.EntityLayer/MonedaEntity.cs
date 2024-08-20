using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LogisticStorage.EntityLayer
{
    public class MonedaEntity : BaseEntityObject
    {
        public MonedaEntity() {
            this.MonedaId = 0;
            this.CodMoneda=String.Empty;
            this.Simbolo = String.Empty;
            this.Descripcion = String.Empty;
        }
       public Int32 MonedaId { get; set; }
  public String CodMoneda {  get; set; }
  public String Simbolo {  get; set; }
  public String Descripcion {  get; set; }
    }
}