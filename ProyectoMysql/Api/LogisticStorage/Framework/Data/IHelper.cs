using System;
using System.Collections.Generic;
using System.Data.Common;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Framework.Data
{
    public interface IHelper
    {
        IDatabase Database { get; }
        DbConnection DbConnection { get; }
        DbTransaction DbTransaction { get; }
        string Connectionstring { get; }
        bool OwnerTransaction { get; }
        bool IsTransactional { get; }


        TypeConection TypeConection { get; }

        bool Connect();
        bool Close();
        bool Close(IDataReader dr);
        bool CancelTransaction();
        void SetHelper(IHelper helper);

    }
}
