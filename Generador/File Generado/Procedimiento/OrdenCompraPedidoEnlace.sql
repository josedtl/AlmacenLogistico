-- DROP PROCEDURE sp_OrdenCompraPedidoEnlaceAllItem;
-- DROP PROCEDURE sp_OrdenCompraPedidoEnlaceAllItems;
-- DROP PROCEDURE sp_OrdenCompraPedidoEnlaceDelete;
-- DROP PROCEDURE sp_OrdenCompraPedidoEnlace_Save;
-- DROP PROCEDURE sp_OrdenCompraPedidoEnlace_Update;

CREATE PROCEDURE sp_OrdenCompraPedidoEnlaceAllItems()
BEGIN
  SELECT
    OrdenCompraPedidoEnlaceId,
    OrdenCompraId,
    OrdenPedidoId,
    OrdenCompraDetalleId,
    OrdenPedidoDetalleId,
    FechaRegistro,
    CodUsuario,
    EstadoRegistro
  FROM transaccion_ordencomprapedidoenlace;
END;

CREATE PROCEDURE sp_OrdenCompraPedidoEnlaceAllItem(IN v_OrdenCompraPedidoEnlaceId INT)
BEGIN
  SELECT
    OrdenCompraPedidoEnlaceId,
    OrdenCompraId,
    OrdenPedidoId,
    OrdenCompraDetalleId,
    OrdenPedidoDetalleId,
    FechaRegistro,
    CodUsuario,
    EstadoRegistro
  FROM transaccion_ordencomprapedidoenlace WHERE  OrdenCompraPedidoEnlaceId = v_OrdenCompraPedidoEnlaceId;
END;

CREATE PROCEDURE sp_OrdenCompraPedidoEnlace_Save(
    OUT v_OrdenCompraPedidoEnlaceId int,
    IN v_OrdenCompraId int,
    IN v_OrdenPedidoId int,
    IN v_OrdenCompraDetalleId int,
    IN v_OrdenPedidoDetalleId int,
    IN v_FechaRegistro datetime,
    IN v_CodUsuario varchar(20),
    IN v_EstadoRegistro bit(1)
)
BEGIN
    INSERT INTO transaccion_ordencomprapedidoenlace (
        OrdenCompraPedidoEnlaceId,
        OrdenCompraId,
        OrdenPedidoId,
        OrdenCompraDetalleId,
        OrdenPedidoDetalleId,
        FechaRegistro,
        CodUsuario,
        EstadoRegistro
) VALUES (
        v_OrdenCompraPedidoEnlaceId,
        v_OrdenCompraId,
        v_OrdenPedidoId,
        v_OrdenCompraDetalleId,
        v_OrdenPedidoDetalleId,
        v_FechaRegistro,
        v_CodUsuario,
        v_EstadoRegistro
    );

  SET v_OrdenCompraPedidoEnlaceId = LAST_INSERT_ID();
  SELECT v_OrdenCompraPedidoEnlaceId;
END;

CREATE PROCEDURE sp_OrdenCompraPedidoEnlace_Update(
    IN v_OrdenCompraPedidoEnlaceId int,
    IN v_OrdenCompraId int,
    IN v_OrdenPedidoId int,
    IN v_OrdenCompraDetalleId int,
    IN v_OrdenPedidoDetalleId int,
    IN v_FechaRegistro datetime,
    IN v_CodUsuario varchar(20),
    IN v_EstadoRegistro bit(1)
)
BEGIN
    UPDATE transaccion_ordencomprapedidoenlace
    SET
        OrdenCompraPedidoEnlaceId = v_OrdenCompraPedidoEnlaceId,
        OrdenCompraId = v_OrdenCompraId,
        OrdenPedidoId = v_OrdenPedidoId,
        OrdenCompraDetalleId = v_OrdenCompraDetalleId,
        OrdenPedidoDetalleId = v_OrdenPedidoDetalleId,
        FechaRegistro = v_FechaRegistro,
        CodUsuario = v_CodUsuario,
        EstadoRegistro = v_EstadoRegistro
    WHERE
        OrdenCompraPedidoEnlaceId = v_OrdenCompraPedidoEnlaceId;

  SELECT v_OrdenCompraPedidoEnlaceId;

END;

CREATE  PROCEDURE `sp_OrdenCompraPedidoEnlace_Delete`(IN v_OrdenCompraPedidoEnlaceId int)
BEGIN
  DELETE
    FROM transaccion_ordencomprapedidoenlace
  WHERE OrdenCompraPedidoEnlaceId = v_OrdenCompraPedidoEnlaceId;
  END;
