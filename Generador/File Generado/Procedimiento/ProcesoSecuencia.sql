-- DROP PROCEDURE sp_ProcesoSecuenciaAllItem;
-- DROP PROCEDURE sp_ProcesoSecuenciaAllItems;
-- DROP PROCEDURE sp_ProcesoSecuenciaDelete;
-- DROP PROCEDURE sp_ProcesoSecuencia_Save;
-- DROP PROCEDURE sp_ProcesoSecuencia_Update;

CREATE PROCEDURE sp_ProcesoSecuenciaAllItems()
BEGIN
  SELECT
    ProcesoSecuenciaId,
    ProcesoId,
    EstadoProcesoId,
    AnteriorEstadoProcesoId,
    OrdenProceso,
    FechaRegistro,
    CodUsuario,
    EstadoRegistro
  FROM catalogo_procesosecuencia;
END;

CREATE PROCEDURE sp_ProcesoSecuenciaAllItem(IN v_ProcesoSecuenciaId INT)
BEGIN
  SELECT
    ProcesoSecuenciaId,
    ProcesoId,
    EstadoProcesoId,
    AnteriorEstadoProcesoId,
    OrdenProceso,
    FechaRegistro,
    CodUsuario,
    EstadoRegistro
  FROM catalogo_procesosecuencia WHERE  ProcesoSecuenciaId = v_ProcesoSecuenciaId;
END;

CREATE PROCEDURE sp_ProcesoSecuencia_Save(
    OUT v_ProcesoSecuenciaId int,
    IN v_ProcesoId int,
    IN v_EstadoProcesoId int,
    IN v_AnteriorEstadoProcesoId int,
    IN v_OrdenProceso int,
    IN v_FechaRegistro datetime,
    IN v_CodUsuario varchar(25),
    IN v_EstadoRegistro bit(1)
)
BEGIN
    INSERT INTO catalogo_procesosecuencia (
        ProcesoSecuenciaId,
        ProcesoId,
        EstadoProcesoId,
        AnteriorEstadoProcesoId,
        OrdenProceso,
        FechaRegistro,
        CodUsuario,
        EstadoRegistro
) VALUES (
        v_ProcesoSecuenciaId,
        v_ProcesoId,
        v_EstadoProcesoId,
        v_AnteriorEstadoProcesoId,
        v_OrdenProceso,
        v_FechaRegistro,
        v_CodUsuario,
        v_EstadoRegistro
    );

  SET v_ProcesoSecuenciaId = LAST_INSERT_ID();
  SELECT v_ProcesoSecuenciaId;
END;

CREATE PROCEDURE sp_ProcesoSecuencia_Update(
    IN v_ProcesoSecuenciaId int,
    IN v_ProcesoId int,
    IN v_EstadoProcesoId int,
    IN v_AnteriorEstadoProcesoId int,
    IN v_OrdenProceso int,
    IN v_FechaRegistro datetime,
    IN v_CodUsuario varchar(25),
    IN v_EstadoRegistro bit(1)
)
BEGIN
    UPDATE catalogo_procesosecuencia
    SET
        ProcesoSecuenciaId = v_ProcesoSecuenciaId,
        ProcesoId = v_ProcesoId,
        EstadoProcesoId = v_EstadoProcesoId,
        AnteriorEstadoProcesoId = v_AnteriorEstadoProcesoId,
        OrdenProceso = v_OrdenProceso,
        FechaRegistro = v_FechaRegistro,
        CodUsuario = v_CodUsuario,
        EstadoRegistro = v_EstadoRegistro
    WHERE
        ProcesoSecuenciaId = v_ProcesoSecuenciaId;

  SELECT v_ProcesoSecuenciaId;

END;

CREATE  PROCEDURE `sp_ProcesoSecuencia_Delete`(IN v_ProcesoSecuenciaId int)
BEGIN
  DELETE
    FROM catalogo_procesosecuencia
  WHERE ProcesoSecuenciaId = v_ProcesoSecuenciaId;
  END;
