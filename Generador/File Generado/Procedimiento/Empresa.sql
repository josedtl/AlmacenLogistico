-- DROP PROCEDURE sp_EmpresaAllItem;
-- DROP PROCEDURE sp_EmpresaAllItems;
-- DROP PROCEDURE sp_EmpresaDelete;
-- DROP PROCEDURE sp_Empresa_Save;
-- DROP PROCEDURE sp_Empresa_Update;

CREATE PROCEDURE sp_EmpresaAllItems()
BEGIN
  SELECT
    EmpresaId,
    TipoDocumentoIdentidadId,
    NumeroDocumento,
    RazonSocial,
    NombreComercial,
    UbigeoId,
    Direccion,
    Telefono,
    Correo,
    FechaRegistro,
    CodUsuario,
    EstadoRegistro
  FROM catalogo_empresa;
END;

CREATE PROCEDURE sp_EmpresaAllItem(IN v_EmpresaId INT)
BEGIN
  SELECT
    EmpresaId,
    TipoDocumentoIdentidadId,
    NumeroDocumento,
    RazonSocial,
    NombreComercial,
    UbigeoId,
    Direccion,
    Telefono,
    Correo,
    FechaRegistro,
    CodUsuario,
    EstadoRegistro
  FROM catalogo_empresa WHERE  EmpresaId = v_EmpresaId;
END;

CREATE PROCEDURE sp_Empresa_Save(
    OUT v_EmpresaId int,
    IN v_TipoDocumentoIdentidadId int,
    IN v_NumeroDocumento varchar(15),
    IN v_RazonSocial varchar(200),
    IN v_NombreComercial varchar(200),
    IN v_UbigeoId int,
    IN v_Direccion varchar(250),
    IN v_Telefono varchar(20),
    IN v_Correo varchar(50),
    IN v_FechaRegistro datetime,
    IN v_CodUsuario varchar(25),
    IN v_EstadoRegistro bit(1)
)
BEGIN
    INSERT INTO catalogo_empresa (
        EmpresaId,
        TipoDocumentoIdentidadId,
        NumeroDocumento,
        RazonSocial,
        NombreComercial,
        UbigeoId,
        Direccion,
        Telefono,
        Correo,
        FechaRegistro,
        CodUsuario,
        EstadoRegistro
) VALUES (
        v_EmpresaId,
        v_TipoDocumentoIdentidadId,
        v_NumeroDocumento,
        v_RazonSocial,
        v_NombreComercial,
        v_UbigeoId,
        v_Direccion,
        v_Telefono,
        v_Correo,
        v_FechaRegistro,
        v_CodUsuario,
        v_EstadoRegistro
    );

  SET v_EmpresaId = LAST_INSERT_ID();
  SELECT v_EmpresaId;
END;

CREATE PROCEDURE sp_Empresa_Update(
    IN v_EmpresaId int,
    IN v_TipoDocumentoIdentidadId int,
    IN v_NumeroDocumento varchar(15),
    IN v_RazonSocial varchar(200),
    IN v_NombreComercial varchar(200),
    IN v_UbigeoId int,
    IN v_Direccion varchar(250),
    IN v_Telefono varchar(20),
    IN v_Correo varchar(50),
    IN v_FechaRegistro datetime,
    IN v_CodUsuario varchar(25),
    IN v_EstadoRegistro bit(1)
)
BEGIN
    UPDATE catalogo_empresa
    SET
        EmpresaId = v_EmpresaId,
        TipoDocumentoIdentidadId = v_TipoDocumentoIdentidadId,
        NumeroDocumento = v_NumeroDocumento,
        RazonSocial = v_RazonSocial,
        NombreComercial = v_NombreComercial,
        UbigeoId = v_UbigeoId,
        Direccion = v_Direccion,
        Telefono = v_Telefono,
        Correo = v_Correo,
        FechaRegistro = v_FechaRegistro,
        CodUsuario = v_CodUsuario,
        EstadoRegistro = v_EstadoRegistro
    WHERE
        EmpresaId = v_EmpresaId;

  SELECT v_EmpresaId;

END;

CREATE  PROCEDURE `sp_Empresa_Delete`(IN v_EmpresaId int)
BEGIN
  DELETE
    FROM catalogo_empresa
  WHERE EmpresaId = v_EmpresaId;
  END;
