using Framework.Data;
using Framework.EntityLayer;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Framework.DataLayer
{
    public interface IBaseDataEntity
    {
        IHelper Helper { get; }

        bool FillFrom(DataRow row, IBaseEntityObject entity);
        bool FillFrom<Entity>(IDataReader row, Entity entity) where Entity : IBaseEntityObject;

        bool AditionalFillFrom(DataRow row, IBaseEntityObject entity);
        bool AditionalFillFrom(IDataReader row, IBaseEntityObject entity);
    }
}
