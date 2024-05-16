namespace LogisticStorage.Server
{
    public class ConexionModel
    {

        public ConnectionStringsModel ConnectionStrings { get; set; }
    }

    public class ConnectionStringsModel
    {
        public String Server { get; set; }
        public String Database { get; set; }
        public String User { get; set; }
        public String Pwd { get; set; }
        public String Puerto { get; set; }

    }

}
