-- DROP PROCEDURE sp_TipoDocumentoentidadAllItem;
-- DROP PROCEDURE sp_TipoDocumentoentidadAllItems;
-- DROP PROCEDURE sp_TipoDocumentoentidadDelete;
-- DROP PROCEDURE sp_TipoDocumentoentidad_Save;
-- DROP PROCEDURE sp_TipoDocumentoentidad_Update;

CREATE PROCEDURE sp_TipoDocumentoentidadAllItems()
BEGIN
  SELECT
    TipoDocumentoIdentidadId,
    Codigo,
    Alias,
    Descripcion,
    EsEmpresa
  FROM catalogo_tipodocumentoidentidad;
END;

CREATE PROCEDURE sp_TipoDocumentoentidadAllItem(IN v_TipoDocumentoentidadId INT)
BEGIN
  SELECT
    TipoDocumentoIdentidadId,
    Codigo,
    Alias,
    Descripcion,
    EsEmpresa
  FROM catalogo_tipodocumentoidentidad WHERE  TipoDocumentoentidadId = v_TipoDocumentoentidadId;
END;

CREATE PROCEDURE sp_TipoDocumentoentidad_Save(
    OUT v_TipoDocumentoIdentidadId int,
    IN v_Codigo varchar(255),
    IN v_Alias varchar(40),
    IN v_Descripcion varchar(255),
    IN v_EsEmpresa bit(1)
)
BEGIN
    INSERT INTO catalogo_tipodocumentoidentidad (
        TipoDocumentoIdentidadId,
        Codigo,
        Alias,
        Descripcion,
        EsEmpresa
) VALUES (
        v_TipoDocumentoIdentidadId,
        v_Codigo,
        v_Alias,
        v_Descripcion,
        v_EsEmpresa
    );

  SET v_TipoDocumentoentidadId = LAST_INSERT_ID();
  SELECT v_TipoDocumentoentidadId;
END;

CREATE PROCEDURE sp_TipoDocumentoentidad_Update(
    IN v_TipoDocumentoIdentidadId int,
    IN v_Codigo varchar(255),
    IN v_Alias varchar(40),
    IN v_Descripcion varchar(255),
    IN v_EsEmpresa bit(1)
)
BEGIN
    UPDATE catalogo_tipodocumentoidentidad
    SET
        TipoDocumentoIdentidadId = v_TipoDocumentoIdentidadId,
        Codigo = v_Codigo,
        Alias = v_Alias,
        Descripcion = v_Descripcion,
        EsEmpresa = v_EsEmpresa
    WHERE
        TipoDocumentoentidadId = v_TipoDocumentoentidadId;

  SELECT v_TipoDocumentoentidadId;

END;

CREATE  PROCEDURE `sp_TipoDocumentoentidad_Delete`(IN v_TipoDocumentoentidadId int)
BEGIN
  DELETE
    FROM catalogo_tipodocumentoidentidad
  WHERE TipoDocumentoentidadId = v_TipoDocumentoentidadId;
  END;
