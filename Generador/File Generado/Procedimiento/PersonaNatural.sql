-- DROP PROCEDURE sp_PersonaNaturalAllItem;
-- DROP PROCEDURE sp_PersonaNaturalAllItems;
-- DROP PROCEDURE sp_PersonaNaturalDelete;
-- DROP PROCEDURE sp_PersonaNatural_Save;
-- DROP PROCEDURE sp_PersonaNatural_Update;

CREATE PROCEDURE sp_PersonaNaturalAllItems()
BEGIN
  SELECT
    PersonaNaturalId,
    TipoDocumentoIdentidadId,
    NumDocumento,
    Nombres,
    ApellidoPaterno,
    ApellidoMaterno,
    FechaNacimiento,
    UbigeoId,
    Direccion,
    Telefono,
    Correo,
    SexoId,
    EstadoCivilId,
    FechaRegistro,
    CodUsuario,
    EstadoRegistro
  FROM catalogo_personanatural;
END;

CREATE PROCEDURE sp_PersonaNaturalAllItem(IN v_PersonaNaturalId INT)
BEGIN
  SELECT
    PersonaNaturalId,
    TipoDocumentoIdentidadId,
    NumDocumento,
    Nombres,
    ApellidoPaterno,
    ApellidoMaterno,
    FechaNacimiento,
    UbigeoId,
    Direccion,
    Telefono,
    Correo,
    SexoId,
    EstadoCivilId,
    FechaRegistro,
    CodUsuario,
    EstadoRegistro
  FROM catalogo_personanatural WHERE  PersonaNaturalId = v_PersonaNaturalId;
END;

CREATE PROCEDURE sp_PersonaNatural_Save(
    OUT v_PersonaNaturalId int,
    IN v_TipoDocumentoIdentidadId int,
    IN v_NumDocumento varchar(255),
    IN v_Nombres varchar(50),
    IN v_ApellidoPaterno varchar(50),
    IN v_ApellidoMaterno varchar(50),
    IN v_FechaNacimiento datetime,
    IN v_UbigeoId int,
    IN v_Direccion varchar(100),
    IN v_Telefono varchar(15),
    IN v_Correo varchar(50),
    IN v_SexoId int,
    IN v_EstadoCivilId int,
    IN v_FechaRegistro datetime,
    IN v_CodUsuario varchar(25),
    IN v_EstadoRegistro bit(1)
)
BEGIN
    INSERT INTO catalogo_personanatural (
        PersonaNaturalId,
        TipoDocumentoIdentidadId,
        NumDocumento,
        Nombres,
        ApellidoPaterno,
        ApellidoMaterno,
        FechaNacimiento,
        UbigeoId,
        Direccion,
        Telefono,
        Correo,
        SexoId,
        EstadoCivilId,
        FechaRegistro,
        CodUsuario,
        EstadoRegistro
) VALUES (
        v_PersonaNaturalId,
        v_TipoDocumentoIdentidadId,
        v_NumDocumento,
        v_Nombres,
        v_ApellidoPaterno,
        v_ApellidoMaterno,
        v_FechaNacimiento,
        v_UbigeoId,
        v_Direccion,
        v_Telefono,
        v_Correo,
        v_SexoId,
        v_EstadoCivilId,
        v_FechaRegistro,
        v_CodUsuario,
        v_EstadoRegistro
    );

  SET v_PersonaNaturalId = LAST_INSERT_ID();
  SELECT v_PersonaNaturalId;
END;

CREATE PROCEDURE sp_PersonaNatural_Update(
    IN v_PersonaNaturalId int,
    IN v_TipoDocumentoIdentidadId int,
    IN v_NumDocumento varchar(255),
    IN v_Nombres varchar(50),
    IN v_ApellidoPaterno varchar(50),
    IN v_ApellidoMaterno varchar(50),
    IN v_FechaNacimiento datetime,
    IN v_UbigeoId int,
    IN v_Direccion varchar(100),
    IN v_Telefono varchar(15),
    IN v_Correo varchar(50),
    IN v_SexoId int,
    IN v_EstadoCivilId int,
    IN v_FechaRegistro datetime,
    IN v_CodUsuario varchar(25),
    IN v_EstadoRegistro bit(1)
)
BEGIN
    UPDATE catalogo_personanatural
    SET
        PersonaNaturalId = v_PersonaNaturalId,
        TipoDocumentoIdentidadId = v_TipoDocumentoIdentidadId,
        NumDocumento = v_NumDocumento,
        Nombres = v_Nombres,
        ApellidoPaterno = v_ApellidoPaterno,
        ApellidoMaterno = v_ApellidoMaterno,
        FechaNacimiento = v_FechaNacimiento,
        UbigeoId = v_UbigeoId,
        Direccion = v_Direccion,
        Telefono = v_Telefono,
        Correo = v_Correo,
        SexoId = v_SexoId,
        EstadoCivilId = v_EstadoCivilId,
        FechaRegistro = v_FechaRegistro,
        CodUsuario = v_CodUsuario,
        EstadoRegistro = v_EstadoRegistro
    WHERE
        PersonaNaturalId = v_PersonaNaturalId;

  SELECT v_PersonaNaturalId;

END;

CREATE  PROCEDURE `sp_PersonaNatural_Delete`(IN v_PersonaNaturalId int)
BEGIN
  DELETE
    FROM catalogo_personanatural
  WHERE PersonaNaturalId = v_PersonaNaturalId;
  END;
