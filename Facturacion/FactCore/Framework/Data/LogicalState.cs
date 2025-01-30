using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Text;
using System.Threading.Tasks;

namespace Framework
{
    [DataContract, Flags]
    public enum LogicalState
    {
        [EnumMember]
        Loaded = 0,
        [EnumMember]
        Added = 1,
        [EnumMember]
        Deleted = 2,
        [EnumMember]
        Updated = 3
    }
}
