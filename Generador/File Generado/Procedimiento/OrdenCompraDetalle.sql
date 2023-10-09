-- DROP PROCEDURE sp_OrdenCompraDetalleAllItem;
-- DROP PROCEDURE sp_OrdenCompraDetalleAllItems;
-- DROP PROCEDURE sp_OrdenCompraDetalleDelete;
-- DROP PROCEDURE sp_OrdenCompraDetalle_Save;
-- DROP PROCEDURE sp_OrdenCompraDetalle_Update;

CREATE PROCEDURE sp_OrdenCompraDetalleAllItems()
BEGIN
  SELECT
    OrdenCompraDetalleId,
    OrdenCompraId,
    ProductoId,
    UnidadMedidaId,
    Cantidad,
    FechaRegistro,
    CodUsuario,
    EstadoRegistro
  FROM transaccion_ordencompradetalle;
END;

CREATE PROCEDURE sp_OrdenCompraDetalleAllItem(IN v_OrdenCompraDetalleId INT)
BEGIN
  SELECT
    OrdenCompraDetalleId,
    OrdenCompraId,
    ProductoId,
    UnidadMedidaId,
    Cantidad,
    FechaRegistro,
    CodUsuario,
    EstadoRegistro
  FROM transaccion_ordencompradetalle WHERE  OrdenCompraDetalleId = v_OrdenCompraDetalleId;
END;

CREATE PROCEDURE sp_OrdenCompraDetalle_Save(
    OUT v_OrdenCompraDetalleId int,
    IN v_OrdenCompraId int,
    IN v_ProductoId int,
    IN v_UnidadMedidaId int,
    IN v_Cantidad decimal(12,2),
    IN v_FechaRegistro datetime,
    IN v_CodUsuario varchar(20),
    IN v_EstadoRegistro bit(1)
)
BEGIN
    INSERT INTO transaccion_ordencompradetalle (
        OrdenCompraDetalleId,
        OrdenCompraId,
        ProductoId,
        UnidadMedidaId,
        Cantidad,
        FechaRegistro,
        CodUsuario,
        EstadoRegistro
) VALUES (
        v_OrdenCompraDetalleId,
        v_OrdenCompraId,
        v_ProductoId,
        v_UnidadMedidaId,
        v_Cantidad,
        v_FechaRegistro,
        v_CodUsuario,
        v_EstadoRegistro
    );

  SET v_OrdenCompraDetalleId = LAST_INSERT_ID();
  SELECT v_OrdenCompraDetalleId;
END;

CREATE PROCEDURE sp_OrdenCompraDetalle_Update(
    IN v_OrdenCompraDetalleId int,
    IN v_OrdenCompraId int,
    IN v_ProductoId int,
    IN v_UnidadMedidaId int,
    IN v_Cantidad decimal(12,2),
    IN v_FechaRegistro datetime,
    IN v_CodUsuario varchar(20),
    IN v_EstadoRegistro bit(1)
)
BEGIN
    UPDATE transaccion_ordencompradetalle
    SET
        OrdenCompraDetalleId = v_OrdenCompraDetalleId,
        OrdenCompraId = v_OrdenCompraId,
        ProductoId = v_ProductoId,
        UnidadMedidaId = v_UnidadMedidaId,
        Cantidad = v_Cantidad,
        FechaRegistro = v_FechaRegistro,
        CodUsuario = v_CodUsuario,
        EstadoRegistro = v_EstadoRegistro
    WHERE
        OrdenCompraDetalleId = v_OrdenCompraDetalleId;

  SELECT v_OrdenCompraDetalleId;

END;

CREATE  PROCEDURE `sp_OrdenCompraDetalle_Delete`(IN v_OrdenCompraDetalleId int)
BEGIN
  DELETE
    FROM transaccion_ordencompradetalle
  WHERE OrdenCompraDetalleId = v_OrdenCompraDetalleId;
  END;
