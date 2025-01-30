using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Text;
using System.Threading.Tasks;

namespace Framework
{
    [DataContract, Flags]
    public enum TypeConection
    {
        [EnumMember]
        MsSQL = 0,
        [EnumMember]
        Oracle = 1,
        [EnumMember]
        WCFservice = 2,
        [EnumMember]
        MySql = 2,
    }
}
