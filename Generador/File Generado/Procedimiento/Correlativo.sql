-- DROP PROCEDURE sp_CorrelativoAllItem;
-- DROP PROCEDURE sp_CorrelativoAllItems;
-- DROP PROCEDURE sp_CorrelativoDelete;
-- DROP PROCEDURE sp_Correlativo_Save;
-- DROP PROCEDURE sp_Correlativo_Update;

CREATE PROCEDURE sp_CorrelativoAllItems()
BEGIN
  SELECT
    CorrelativoId,
    Codigo,
    Prefijo,
    ValorActual,
    Descripcion
  FROM catalogo_correlativo;
END;

CREATE PROCEDURE sp_CorrelativoAllItem(IN v_CorrelativoId INT)
BEGIN
  SELECT
    CorrelativoId,
    Codigo,
    Prefijo,
    ValorActual,
    Descripcion
  FROM catalogo_correlativo WHERE  CorrelativoId = v_CorrelativoId;
END;

CREATE PROCEDURE sp_Correlativo_Save(
    OUT v_CorrelativoId int,
    IN v_Codigo varchar(10),
    IN v_Prefijo varchar(10),
    IN v_ValorActual int,
    IN v_Descripcion varchar(100)
)
BEGIN
    INSERT INTO catalogo_correlativo (
        CorrelativoId,
        Codigo,
        Prefijo,
        ValorActual,
        Descripcion
) VALUES (
        v_CorrelativoId,
        v_Codigo,
        v_Prefijo,
        v_ValorActual,
        v_Descripcion
    );

  SET v_CorrelativoId = LAST_INSERT_ID();
  SELECT v_CorrelativoId;
END;

CREATE PROCEDURE sp_Correlativo_Update(
    IN v_CorrelativoId int,
    IN v_Codigo varchar(10),
    IN v_Prefijo varchar(10),
    IN v_ValorActual int,
    IN v_Descripcion varchar(100)
)
BEGIN
    UPDATE catalogo_correlativo
    SET
        CorrelativoId = v_CorrelativoId,
        Codigo = v_Codigo,
        Prefijo = v_Prefijo,
        ValorActual = v_ValorActual,
        Descripcion = v_Descripcion
    WHERE
        CorrelativoId = v_CorrelativoId;

  SELECT v_CorrelativoId;

END;

CREATE  PROCEDURE `sp_Correlativo_Delete`(IN v_CorrelativoId int)
BEGIN
  DELETE
    FROM catalogo_correlativo
  WHERE CorrelativoId = v_CorrelativoId;
  END;
