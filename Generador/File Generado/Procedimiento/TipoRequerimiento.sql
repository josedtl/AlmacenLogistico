-- DROP PROCEDURE sp_TipoRequerimientoAllItem;
-- DROP PROCEDURE sp_TipoRequerimientoAllItems;
-- DROP PROCEDURE sp_TipoRequerimientoDelete;
-- DROP PROCEDURE sp_TipoRequerimiento_Save;
-- DROP PROCEDURE sp_TipoRequerimiento_Update;

CREATE PROCEDURE sp_TipoRequerimientoAllItems()
BEGIN
  SELECT
    TipoRequerimientoId,
    Codigo,
    Nombre,
    EstadoRegistro
  FROM catalogo_tiporequerimiento;
END;

CREATE PROCEDURE sp_TipoRequerimientoAllItem(IN v_TipoRequerimientoId INT)
BEGIN
  SELECT
    TipoRequerimientoId,
    Codigo,
    Nombre,
    EstadoRegistro
  FROM catalogo_tiporequerimiento WHERE  TipoRequerimientoId = v_TipoRequerimientoId;
END;

CREATE PROCEDURE sp_TipoRequerimiento_Save(
    OUT v_TipoRequerimientoId int,
    IN v_Codigo varchar(25),
    IN v_Nombre varchar(60),
    IN v_EstadoRegistro bit(1)
)
BEGIN
    INSERT INTO catalogo_tiporequerimiento (
        TipoRequerimientoId,
        Codigo,
        Nombre,
        EstadoRegistro
) VALUES (
        v_TipoRequerimientoId,
        v_Codigo,
        v_Nombre,
        v_EstadoRegistro
    );

  SET v_TipoRequerimientoId = LAST_INSERT_ID();
  SELECT v_TipoRequerimientoId;
END;

CREATE PROCEDURE sp_TipoRequerimiento_Update(
    IN v_TipoRequerimientoId int,
    IN v_Codigo varchar(25),
    IN v_Nombre varchar(60),
    IN v_EstadoRegistro bit(1)
)
BEGIN
    UPDATE catalogo_tiporequerimiento
    SET
        TipoRequerimientoId = v_TipoRequerimientoId,
        Codigo = v_Codigo,
        Nombre = v_Nombre,
        EstadoRegistro = v_EstadoRegistro
    WHERE
        TipoRequerimientoId = v_TipoRequerimientoId;

  SELECT v_TipoRequerimientoId;

END;

CREATE  PROCEDURE `sp_TipoRequerimiento_Delete`(IN v_TipoRequerimientoId int)
BEGIN
  DELETE
    FROM catalogo_tiporequerimiento
  WHERE TipoRequerimientoId = v_TipoRequerimientoId;
  END;
