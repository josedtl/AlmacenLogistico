-- DROP PROCEDURE sp_ClienteAllItem;
-- DROP PROCEDURE sp_ClienteAllItems;
-- DROP PROCEDURE sp_ClienteDelete;
-- DROP PROCEDURE sp_Cliente_Save;
-- DROP PROCEDURE sp_Cliente_Update;

CREATE PROCEDURE sp_ClienteAllItems()
BEGIN
  SELECT
    ClienteId,
    EsEmpresa,
    TipoDocumentoId,
    NumDocumento,
    Nombre,
    Estado
  FROM catalogo_cliente;
END;

CREATE PROCEDURE sp_ClienteAllItem(IN v_ClienteId INT)
BEGIN
  SELECT
    ClienteId,
    EsEmpresa,
    TipoDocumentoId,
    NumDocumento,
    Nombre,
    Estado
  FROM catalogo_cliente WHERE  ClienteId = v_ClienteId;
END;

CREATE PROCEDURE sp_Cliente_Save(
    OUT v_ClienteId int,
    IN v_EsEmpresa bit(1),
    IN v_TipoDocumentoId int,
    IN v_NumDocumento varchar(20),
    IN v_Nombre varchar(150),
    IN v_Estado bit(1)
)
BEGIN
    INSERT INTO catalogo_cliente (
        ClienteId,
        EsEmpresa,
        TipoDocumentoId,
        NumDocumento,
        Nombre,
        Estado
) VALUES (
        v_ClienteId,
        v_EsEmpresa,
        v_TipoDocumentoId,
        v_NumDocumento,
        v_Nombre,
        v_Estado
    );

  SET v_ClienteId = LAST_INSERT_ID();
  SELECT v_ClienteId;
END;

CREATE PROCEDURE sp_Cliente_Update(
    IN v_ClienteId int,
    IN v_EsEmpresa bit(1),
    IN v_TipoDocumentoId int,
    IN v_NumDocumento varchar(20),
    IN v_Nombre varchar(150),
    IN v_Estado bit(1)
)
BEGIN
    UPDATE catalogo_cliente
    SET
        ClienteId = v_ClienteId,
        EsEmpresa = v_EsEmpresa,
        TipoDocumentoId = v_TipoDocumentoId,
        NumDocumento = v_NumDocumento,
        Nombre = v_Nombre,
        Estado = v_Estado
    WHERE
        ClienteId = v_ClienteId;

  SELECT v_ClienteId;

END;

CREATE  PROCEDURE `sp_Cliente_Delete`(IN v_ClienteId int)
BEGIN
  DELETE
    FROM catalogo_cliente
  WHERE ClienteId = v_ClienteId;
  END;
