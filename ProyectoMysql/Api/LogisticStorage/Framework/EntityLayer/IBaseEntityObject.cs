using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Framework.EntityLayer
{
    public interface IBaseEntityObject
    {
        void OnChanged();
        void OnLogicalDelete();
        void OnLogicalUpdate();
        void OnLogicalAdded();

        object Clone(bool AllProperties);
        object CloneData();

        bool IsChanged { get; }
        bool IsSelected { get; }

        Guid InternalGuid { get; set; }
        bool Selected { get; set; }

        LogicalState LogicalState { get; set; }
    }

}
