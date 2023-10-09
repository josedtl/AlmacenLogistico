-- DROP PROCEDURE sp_ProveedorAllItem;
-- DROP PROCEDURE sp_ProveedorAllItems;
-- DROP PROCEDURE sp_ProveedorDelete;
-- DROP PROCEDURE sp_Proveedor_Save;
-- DROP PROCEDURE sp_Proveedor_Update;

CREATE PROCEDURE sp_ProveedorAllItems()
BEGIN
  SELECT
    ProveedorId,
    EsEmpresa,
    TipoDocumentoId,
    NumDocumento,
    Nombre,
    Estado
  FROM catalogo_proveedor;
END;

CREATE PROCEDURE sp_ProveedorAllItem(IN v_ProveedorId INT)
BEGIN
  SELECT
    ProveedorId,
    EsEmpresa,
    TipoDocumentoId,
    NumDocumento,
    Nombre,
    Estado
  FROM catalogo_proveedor WHERE  ProveedorId = v_ProveedorId;
END;

CREATE PROCEDURE sp_Proveedor_Save(
    OUT v_ProveedorId int,
    IN v_EsEmpresa bit(1),
    IN v_TipoDocumentoId int,
    IN v_NumDocumento varchar(25),
    IN v_Nombre varchar(150),
    IN v_Estado bit(1)
)
BEGIN
    INSERT INTO catalogo_proveedor (
        ProveedorId,
        EsEmpresa,
        TipoDocumentoId,
        NumDocumento,
        Nombre,
        Estado
) VALUES (
        v_ProveedorId,
        v_EsEmpresa,
        v_TipoDocumentoId,
        v_NumDocumento,
        v_Nombre,
        v_Estado
    );

  SET v_ProveedorId = LAST_INSERT_ID();
  SELECT v_ProveedorId;
END;

CREATE PROCEDURE sp_Proveedor_Update(
    IN v_ProveedorId int,
    IN v_EsEmpresa bit(1),
    IN v_TipoDocumentoId int,
    IN v_NumDocumento varchar(25),
    IN v_Nombre varchar(150),
    IN v_Estado bit(1)
)
BEGIN
    UPDATE catalogo_proveedor
    SET
        ProveedorId = v_ProveedorId,
        EsEmpresa = v_EsEmpresa,
        TipoDocumentoId = v_TipoDocumentoId,
        NumDocumento = v_NumDocumento,
        Nombre = v_Nombre,
        Estado = v_Estado
    WHERE
        ProveedorId = v_ProveedorId;

  SELECT v_ProveedorId;

END;

CREATE  PROCEDURE `sp_Proveedor_Delete`(IN v_ProveedorId int)
BEGIN
  DELETE
    FROM catalogo_proveedor
  WHERE ProveedorId = v_ProveedorId;
  END;
