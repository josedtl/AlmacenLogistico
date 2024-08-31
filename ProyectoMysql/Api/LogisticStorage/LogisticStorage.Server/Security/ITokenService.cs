namespace LogisticStorage.Server
{
    public interface ITokenService
    {
        string GenerateToken(string username);
    }
}
