-- DROP PROCEDURE sp_TipoProcesoAllItem;
-- DROP PROCEDURE sp_TipoProcesoAllItems;
-- DROP PROCEDURE sp_TipoProcesoDelete;
-- DROP PROCEDURE sp_TipoProceso_Save;
-- DROP PROCEDURE sp_TipoProceso_Update;

CREATE PROCEDURE sp_TipoProcesoAllItems()
BEGIN
  SELECT
    TipoProcesoId,
    Codigo,
    Nombre,
    FechaRegistro,
    CodUsuario,
    EstadoRegistro
  FROM catalogo_tipooproceso;
END;

CREATE PROCEDURE sp_TipoProcesoAllItem(IN v_TipoProcesoId INT)
BEGIN
  SELECT
    TipoProcesoId,
    Codigo,
    Nombre,
    FechaRegistro,
    CodUsuario,
    EstadoRegistro
  FROM catalogo_tipooproceso WHERE  TipoProcesoId = v_TipoProcesoId;
END;

CREATE PROCEDURE sp_TipoProceso_Save(
    OUT v_TipoProcesoId int,
    IN v_Codigo varchar(10),
    IN v_Nombre varchar(70),
    IN v_FechaRegistro datetime,
    IN v_CodUsuario varchar(25),
    IN v_EstadoRegistro bit(1)
)
BEGIN
    INSERT INTO catalogo_tipooproceso (
        TipoProcesoId,
        Codigo,
        Nombre,
        FechaRegistro,
        CodUsuario,
        EstadoRegistro
) VALUES (
        v_TipoProcesoId,
        v_Codigo,
        v_Nombre,
        v_FechaRegistro,
        v_CodUsuario,
        v_EstadoRegistro
    );

  SET v_TipoProcesoId = LAST_INSERT_ID();
  SELECT v_TipoProcesoId;
END;

CREATE PROCEDURE sp_TipoProceso_Update(
    IN v_TipoProcesoId int,
    IN v_Codigo varchar(10),
    IN v_Nombre varchar(70),
    IN v_FechaRegistro datetime,
    IN v_CodUsuario varchar(25),
    IN v_EstadoRegistro bit(1)
)
BEGIN
    UPDATE catalogo_tipooproceso
    SET
        TipoProcesoId = v_TipoProcesoId,
        Codigo = v_Codigo,
        Nombre = v_Nombre,
        FechaRegistro = v_FechaRegistro,
        CodUsuario = v_CodUsuario,
        EstadoRegistro = v_EstadoRegistro
    WHERE
        TipoProcesoId = v_TipoProcesoId;

  SELECT v_TipoProcesoId;

END;

CREATE  PROCEDURE `sp_TipoProceso_Delete`(IN v_TipoProcesoId int)
BEGIN
  DELETE
    FROM catalogo_tipooproceso
  WHERE TipoProcesoId = v_TipoProcesoId;
  END;
