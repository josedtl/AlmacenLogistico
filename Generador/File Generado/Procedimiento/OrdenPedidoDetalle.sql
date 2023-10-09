-- DROP PROCEDURE sp_OrdenPedidoDetalleAllItem;
-- DROP PROCEDURE sp_OrdenPedidoDetalleAllItems;
-- DROP PROCEDURE sp_OrdenPedidoDetalleDelete;
-- DROP PROCEDURE sp_OrdenPedidoDetalle_Save;
-- DROP PROCEDURE sp_OrdenPedidoDetalle_Update;

CREATE PROCEDURE sp_OrdenPedidoDetalleAllItems()
BEGIN
  SELECT
    OrdenPedidoDetalleId,
    OrdenPedidoId,
    ProductoId,
    UnidadMedidaId,
    CantidadSolicitado,
    CantidadFaltante,
    CantidadAtendido,
    Enlazado,
    EsAtendido,
    FechaRegistro,
    CodUsuario,
    EstadoRegistro
  FROM transaccion_ordenpedidodetalle;
END;

CREATE PROCEDURE sp_OrdenPedidoDetalleAllItem(IN v_OrdenPedidoDetalleId INT)
BEGIN
  SELECT
    OrdenPedidoDetalleId,
    OrdenPedidoId,
    ProductoId,
    UnidadMedidaId,
    CantidadSolicitado,
    CantidadFaltante,
    CantidadAtendido,
    Enlazado,
    EsAtendido,
    FechaRegistro,
    CodUsuario,
    EstadoRegistro
  FROM transaccion_ordenpedidodetalle WHERE  OrdenPedidoDetalleId = v_OrdenPedidoDetalleId;
END;

CREATE PROCEDURE sp_OrdenPedidoDetalle_Save(
    OUT v_OrdenPedidoDetalleId int,
    IN v_OrdenPedidoId int,
    IN v_ProductoId int,
    IN v_UnidadMedidaId int,
    IN v_CantidadSolicitado decimal(10,2),
    IN v_CantidadFaltante decimal(10,2),
    IN v_CantidadAtendido decimal(10,2),
    IN v_Enlazado bit(1),
    IN v_EsAtendido bit(1),
    IN v_FechaRegistro datetime,
    IN v_CodUsuario varchar(25),
    IN v_EstadoRegistro bit(1)
)
BEGIN
    INSERT INTO transaccion_ordenpedidodetalle (
        OrdenPedidoDetalleId,
        OrdenPedidoId,
        ProductoId,
        UnidadMedidaId,
        CantidadSolicitado,
        CantidadFaltante,
        CantidadAtendido,
        Enlazado,
        EsAtendido,
        FechaRegistro,
        CodUsuario,
        EstadoRegistro
) VALUES (
        v_OrdenPedidoDetalleId,
        v_OrdenPedidoId,
        v_ProductoId,
        v_UnidadMedidaId,
        v_CantidadSolicitado,
        v_CantidadFaltante,
        v_CantidadAtendido,
        v_Enlazado,
        v_EsAtendido,
        v_FechaRegistro,
        v_CodUsuario,
        v_EstadoRegistro
    );

  SET v_OrdenPedidoDetalleId = LAST_INSERT_ID();
  SELECT v_OrdenPedidoDetalleId;
END;

CREATE PROCEDURE sp_OrdenPedidoDetalle_Update(
    IN v_OrdenPedidoDetalleId int,
    IN v_OrdenPedidoId int,
    IN v_ProductoId int,
    IN v_UnidadMedidaId int,
    IN v_CantidadSolicitado decimal(10,2),
    IN v_CantidadFaltante decimal(10,2),
    IN v_CantidadAtendido decimal(10,2),
    IN v_Enlazado bit(1),
    IN v_EsAtendido bit(1),
    IN v_FechaRegistro datetime,
    IN v_CodUsuario varchar(25),
    IN v_EstadoRegistro bit(1)
)
BEGIN
    UPDATE transaccion_ordenpedidodetalle
    SET
        OrdenPedidoDetalleId = v_OrdenPedidoDetalleId,
        OrdenPedidoId = v_OrdenPedidoId,
        ProductoId = v_ProductoId,
        UnidadMedidaId = v_UnidadMedidaId,
        CantidadSolicitado = v_CantidadSolicitado,
        CantidadFaltante = v_CantidadFaltante,
        CantidadAtendido = v_CantidadAtendido,
        Enlazado = v_Enlazado,
        EsAtendido = v_EsAtendido,
        FechaRegistro = v_FechaRegistro,
        CodUsuario = v_CodUsuario,
        EstadoRegistro = v_EstadoRegistro
    WHERE
        OrdenPedidoDetalleId = v_OrdenPedidoDetalleId;

  SELECT v_OrdenPedidoDetalleId;

END;

CREATE  PROCEDURE `sp_OrdenPedidoDetalle_Delete`(IN v_OrdenPedidoDetalleId int)
BEGIN
  DELETE
    FROM transaccion_ordenpedidodetalle
  WHERE OrdenPedidoDetalleId = v_OrdenPedidoDetalleId;
  END;
