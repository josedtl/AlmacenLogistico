-- DROP PROCEDURE sp_OrdenPedidoControlProcesoAllItem;
-- DROP PROCEDURE sp_OrdenPedidoControlProcesoAllItems;
-- DROP PROCEDURE sp_OrdenPedidoControlProcesoDelete;
-- DROP PROCEDURE sp_OrdenPedidoControlProceso_Save;
-- DROP PROCEDURE sp_OrdenPedidoControlProceso_Update;

CREATE PROCEDURE sp_OrdenPedidoControlProcesoAllItems()
BEGIN
  SELECT
    OrdenPedidoControlProcesoId,
    OrdenPedidoId,
    EstadoProcesoId,
    Observacion,
    CodUsuario,
    FechaRegistro,
    EstadoRegistro
  FROM transaccion_ordenpedidocontrolproceso;
END;

CREATE PROCEDURE sp_OrdenPedidoControlProcesoAllItem(IN v_OrdenPedidoControlProcesoId INT)
BEGIN
  SELECT
    OrdenPedidoControlProcesoId,
    OrdenPedidoId,
    EstadoProcesoId,
    Observacion,
    CodUsuario,
    FechaRegistro,
    EstadoRegistro
  FROM transaccion_ordenpedidocontrolproceso WHERE  OrdenPedidoControlProcesoId = v_OrdenPedidoControlProcesoId;
END;

CREATE PROCEDURE sp_OrdenPedidoControlProceso_Save(
    OUT v_OrdenPedidoControlProcesoId int,
    IN v_OrdenPedidoId int,
    IN v_EstadoProcesoId int,
    IN v_Observacion varchar(255),
    IN v_CodUsuario varchar(25),
    IN v_FechaRegistro datetime,
    IN v_EstadoRegistro bit(1)
)
BEGIN
    INSERT INTO transaccion_ordenpedidocontrolproceso (
        OrdenPedidoControlProcesoId,
        OrdenPedidoId,
        EstadoProcesoId,
        Observacion,
        CodUsuario,
        FechaRegistro,
        EstadoRegistro
) VALUES (
        v_OrdenPedidoControlProcesoId,
        v_OrdenPedidoId,
        v_EstadoProcesoId,
        v_Observacion,
        v_CodUsuario,
        v_FechaRegistro,
        v_EstadoRegistro
    );

  SET v_OrdenPedidoControlProcesoId = LAST_INSERT_ID();
  SELECT v_OrdenPedidoControlProcesoId;
END;

CREATE PROCEDURE sp_OrdenPedidoControlProceso_Update(
    IN v_OrdenPedidoControlProcesoId int,
    IN v_OrdenPedidoId int,
    IN v_EstadoProcesoId int,
    IN v_Observacion varchar(255),
    IN v_CodUsuario varchar(25),
    IN v_FechaRegistro datetime,
    IN v_EstadoRegistro bit(1)
)
BEGIN
    UPDATE transaccion_ordenpedidocontrolproceso
    SET
        OrdenPedidoControlProcesoId = v_OrdenPedidoControlProcesoId,
        OrdenPedidoId = v_OrdenPedidoId,
        EstadoProcesoId = v_EstadoProcesoId,
        Observacion = v_Observacion,
        CodUsuario = v_CodUsuario,
        FechaRegistro = v_FechaRegistro,
        EstadoRegistro = v_EstadoRegistro
    WHERE
        OrdenPedidoControlProcesoId = v_OrdenPedidoControlProcesoId;

  SELECT v_OrdenPedidoControlProcesoId;

END;

CREATE  PROCEDURE `sp_OrdenPedidoControlProceso_Delete`(IN v_OrdenPedidoControlProcesoId int)
BEGIN
  DELETE
    FROM transaccion_ordenpedidocontrolproceso
  WHERE OrdenPedidoControlProcesoId = v_OrdenPedidoControlProcesoId;
  END;
