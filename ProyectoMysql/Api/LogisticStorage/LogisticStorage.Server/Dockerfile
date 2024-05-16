#See https://aka.ms/customizecontainer to learn how to customize your debug container and how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:7.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build
ARG BUILD_CONFIGURATION=Release
WORKDIR /src
COPY ["LogisticStorage.Server/LogisticStorage.Server.csproj", "LogisticStorage.Server/"]
COPY ["LogisticStorage.BusinessLayer/LogisticStorage.BusinessLayer.csproj", "LogisticStorage.BusinessLayer/"]
COPY ["LogisticStorage.DataLayer/LogisticStorage.DataLayer.csproj", "LogisticStorage.DataLayer/"]
COPY ["Framework.Data/Framework.Data.csproj", "Framework.Data/"]
COPY ["Framework.Data.Mysql/Framework.Data.Mysql.csproj", "Framework.Data.Mysql/"]
COPY ["Framework/Framework.csproj", "Framework/"]
COPY ["Framework.Data.Sql/Framework.Data.Sql.csproj", "Framework.Data.Sql/"]
COPY ["LogisticStorage.Common/LogisticStorage.Common.csproj", "LogisticStorage.Common/"]
COPY ["LogisticStorage.EntityLayer/LogisticStorage.EntityLayer.csproj", "LogisticStorage.EntityLayer/"]
RUN dotnet restore "./LogisticStorage.Server/LogisticStorage.Server.csproj"
COPY . .
WORKDIR "/src/LogisticStorage.Server"
RUN dotnet build "./LogisticStorage.Server.csproj" -c $BUILD_CONFIGURATION -o /app/build

FROM build AS publish
ARG BUILD_CONFIGURATION=Release
RUN dotnet publish "./LogisticStorage.Server.csproj" -c $BUILD_CONFIGURATION -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "LogisticStorage.Server.dll"]