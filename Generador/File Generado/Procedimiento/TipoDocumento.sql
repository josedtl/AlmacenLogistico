-- DROP PROCEDURE sp_TipoDocumentoAllItem;
-- DROP PROCEDURE sp_TipoDocumentoAllItems;
-- DROP PROCEDURE sp_TipoDocumentoDelete;
-- DROP PROCEDURE sp_TipoDocumento_Save;
-- DROP PROCEDURE sp_TipoDocumento_Update;

CREATE PROCEDURE sp_TipoDocumentoAllItems()
BEGIN
  SELECT
    TipoDocumentoId,
    Codigo,
    Nombre,
    EsAlmacen,
    EsFacturacion
  FROM catalogo_tipodocumento;
END;

CREATE PROCEDURE sp_TipoDocumentoAllItem(IN v_TipoDocumentoId INT)
BEGIN
  SELECT
    TipoDocumentoId,
    Codigo,
    Nombre,
    EsAlmacen,
    EsFacturacion
  FROM catalogo_tipodocumento WHERE  TipoDocumentoId = v_TipoDocumentoId;
END;

CREATE PROCEDURE sp_TipoDocumento_Save(
    OUT v_TipoDocumentoId int,
    IN v_Codigo varchar(15),
    IN v_Nombre varchar(150),
    IN v_EsAlmacen bit(1),
    IN v_EsFacturacion bit(1)
)
BEGIN
    INSERT INTO catalogo_tipodocumento (
        TipoDocumentoId,
        Codigo,
        Nombre,
        EsAlmacen,
        EsFacturacion
) VALUES (
        v_TipoDocumentoId,
        v_Codigo,
        v_Nombre,
        v_EsAlmacen,
        v_EsFacturacion
    );

  SET v_TipoDocumentoId = LAST_INSERT_ID();
  SELECT v_TipoDocumentoId;
END;

CREATE PROCEDURE sp_TipoDocumento_Update(
    IN v_TipoDocumentoId int,
    IN v_Codigo varchar(15),
    IN v_Nombre varchar(150),
    IN v_EsAlmacen bit(1),
    IN v_EsFacturacion bit(1)
)
BEGIN
    UPDATE catalogo_tipodocumento
    SET
        TipoDocumentoId = v_TipoDocumentoId,
        Codigo = v_Codigo,
        Nombre = v_Nombre,
        EsAlmacen = v_EsAlmacen,
        EsFacturacion = v_EsFacturacion
    WHERE
        TipoDocumentoId = v_TipoDocumentoId;

  SELECT v_TipoDocumentoId;

END;

CREATE  PROCEDURE `sp_TipoDocumento_Delete`(IN v_TipoDocumentoId int)
BEGIN
  DELETE
    FROM catalogo_tipodocumento
  WHERE TipoDocumentoId = v_TipoDocumentoId;
  END;
