-- DROP PROCEDURE sp_OrdenCompraControlProcesoAllItem;
-- DROP PROCEDURE sp_OrdenCompraControlProcesoAllItems;
-- DROP PROCEDURE sp_OrdenCompraControlProcesoDelete;
-- DROP PROCEDURE sp_OrdenCompraControlProceso_Save;
-- DROP PROCEDURE sp_OrdenCompraControlProceso_Update;

CREATE PROCEDURE sp_OrdenCompraControlProcesoAllItems()
BEGIN
  SELECT
    OrdenCompraControlProcesoId,
    OrdenCompraId,
    EstadoProcesoId,
    Observacion,
    CodUsuario,
    FechaRegistro,
    EstadoRegistro
  FROM transaccion_ordencompracontrolproceso;
END;

CREATE PROCEDURE sp_OrdenCompraControlProcesoAllItem(IN v_OrdenCompraControlProcesoId INT)
BEGIN
  SELECT
    OrdenCompraControlProcesoId,
    OrdenCompraId,
    EstadoProcesoId,
    Observacion,
    CodUsuario,
    FechaRegistro,
    EstadoRegistro
  FROM transaccion_ordencompracontrolproceso WHERE  OrdenCompraControlProcesoId = v_OrdenCompraControlProcesoId;
END;

CREATE PROCEDURE sp_OrdenCompraControlProceso_Save(
    OUT v_OrdenCompraControlProcesoId int,
    IN v_OrdenCompraId int,
    IN v_EstadoProcesoId int,
    IN v_Observacion varchar(200),
    IN v_CodUsuario varchar(25),
    IN v_FechaRegistro datetime,
    IN v_EstadoRegistro bit(1)
)
BEGIN
    INSERT INTO transaccion_ordencompracontrolproceso (
        OrdenCompraControlProcesoId,
        OrdenCompraId,
        EstadoProcesoId,
        Observacion,
        CodUsuario,
        FechaRegistro,
        EstadoRegistro
) VALUES (
        v_OrdenCompraControlProcesoId,
        v_OrdenCompraId,
        v_EstadoProcesoId,
        v_Observacion,
        v_CodUsuario,
        v_FechaRegistro,
        v_EstadoRegistro
    );

  SET v_OrdenCompraControlProcesoId = LAST_INSERT_ID();
  SELECT v_OrdenCompraControlProcesoId;
END;

CREATE PROCEDURE sp_OrdenCompraControlProceso_Update(
    IN v_OrdenCompraControlProcesoId int,
    IN v_OrdenCompraId int,
    IN v_EstadoProcesoId int,
    IN v_Observacion varchar(200),
    IN v_CodUsuario varchar(25),
    IN v_FechaRegistro datetime,
    IN v_EstadoRegistro bit(1)
)
BEGIN
    UPDATE transaccion_ordencompracontrolproceso
    SET
        OrdenCompraControlProcesoId = v_OrdenCompraControlProcesoId,
        OrdenCompraId = v_OrdenCompraId,
        EstadoProcesoId = v_EstadoProcesoId,
        Observacion = v_Observacion,
        CodUsuario = v_CodUsuario,
        FechaRegistro = v_FechaRegistro,
        EstadoRegistro = v_EstadoRegistro
    WHERE
        OrdenCompraControlProcesoId = v_OrdenCompraControlProcesoId;

  SELECT v_OrdenCompraControlProcesoId;

END;

CREATE  PROCEDURE `sp_OrdenCompraControlProceso_Delete`(IN v_OrdenCompraControlProcesoId int)
BEGIN
  DELETE
    FROM transaccion_ordencompracontrolproceso
  WHERE OrdenCompraControlProcesoId = v_OrdenCompraControlProcesoId;
  END;
