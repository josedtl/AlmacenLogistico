using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Text;
using System.Threading.Tasks;

namespace Framework.Data
{
    [DataContract, Flags]
    public enum LanguageEnum
    {
        [EnumMember]
        Espanol = 0,
        [EnumMember]
        Ingles = 1,
    }
}
