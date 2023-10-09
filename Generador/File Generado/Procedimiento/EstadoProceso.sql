-- DROP PROCEDURE sp_EstadoProcesoAllItem;
-- DROP PROCEDURE sp_EstadoProcesoAllItems;
-- DROP PROCEDURE sp_EstadoProcesoDelete;
-- DROP PROCEDURE sp_EstadoProceso_Save;
-- DROP PROCEDURE sp_EstadoProceso_Update;

CREATE PROCEDURE sp_EstadoProcesoAllItems()
BEGIN
  SELECT
    EstadoProcesoId,
    Valor,
    Nombre,
    Descripcion,
    FechaRegistro,
    CodUsuario,
    EstadoRegistro
  FROM catalogo_estadoproceso;
END;

CREATE PROCEDURE sp_EstadoProcesoAllItem(IN v_EstadoProcesoId INT)
BEGIN
  SELECT
    EstadoProcesoId,
    Valor,
    Nombre,
    Descripcion,
    FechaRegistro,
    CodUsuario,
    EstadoRegistro
  FROM catalogo_estadoproceso WHERE  EstadoProcesoId = v_EstadoProcesoId;
END;

CREATE PROCEDURE sp_EstadoProceso_Save(
    OUT v_EstadoProcesoId int,
    IN v_Valor smallint,
    IN v_Nombre varchar(40),
    IN v_Descripcion varchar(100),
    IN v_FechaRegistro datetime,
    IN v_CodUsuario varchar(25),
    IN v_EstadoRegistro bit(1)
)
BEGIN
    INSERT INTO catalogo_estadoproceso (
        EstadoProcesoId,
        Valor,
        Nombre,
        Descripcion,
        FechaRegistro,
        CodUsuario,
        EstadoRegistro
) VALUES (
        v_EstadoProcesoId,
        v_Valor,
        v_Nombre,
        v_Descripcion,
        v_FechaRegistro,
        v_CodUsuario,
        v_EstadoRegistro
    );

  SET v_EstadoProcesoId = LAST_INSERT_ID();
  SELECT v_EstadoProcesoId;
END;

CREATE PROCEDURE sp_EstadoProceso_Update(
    IN v_EstadoProcesoId int,
    IN v_Valor smallint,
    IN v_Nombre varchar(40),
    IN v_Descripcion varchar(100),
    IN v_FechaRegistro datetime,
    IN v_CodUsuario varchar(25),
    IN v_EstadoRegistro bit(1)
)
BEGIN
    UPDATE catalogo_estadoproceso
    SET
        EstadoProcesoId = v_EstadoProcesoId,
        Valor = v_Valor,
        Nombre = v_Nombre,
        Descripcion = v_Descripcion,
        FechaRegistro = v_FechaRegistro,
        CodUsuario = v_CodUsuario,
        EstadoRegistro = v_EstadoRegistro
    WHERE
        EstadoProcesoId = v_EstadoProcesoId;

  SELECT v_EstadoProcesoId;

END;

CREATE  PROCEDURE `sp_EstadoProceso_Delete`(IN v_EstadoProcesoId int)
BEGIN
  DELETE
    FROM catalogo_estadoproceso
  WHERE EstadoProcesoId = v_EstadoProcesoId;
  END;
