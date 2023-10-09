-- DROP PROCEDURE sp_TarifaProductoAllItem;
-- DROP PROCEDURE sp_TarifaProductoAllItems;
-- DROP PROCEDURE sp_TarifaProductoDelete;
-- DROP PROCEDURE sp_TarifaProducto_Save;
-- DROP PROCEDURE sp_TarifaProducto_Update;

CREATE PROCEDURE sp_TarifaProductoAllItems()
BEGIN
  SELECT
    TarifaProductoId,
    ProductoId,
    UnidaMedidaId,
    MonedaId,
    ValorCompra,
    ValorVenta,
    FechaRegistro,
    FechaVigencia,
    CodUsuario,
    EstadoRegistro
  FROM catalogo_tarifaproducto;
END;

CREATE PROCEDURE sp_TarifaProductoAllItem(IN v_TarifaProductoId INT)
BEGIN
  SELECT
    TarifaProductoId,
    ProductoId,
    UnidaMedidaId,
    MonedaId,
    ValorCompra,
    ValorVenta,
    FechaRegistro,
    FechaVigencia,
    CodUsuario,
    EstadoRegistro
  FROM catalogo_tarifaproducto WHERE  TarifaProductoId = v_TarifaProductoId;
END;

CREATE PROCEDURE sp_TarifaProducto_Save(
    OUT v_TarifaProductoId int,
    IN v_ProductoId int,
    IN v_UnidaMedidaId int,
    IN v_MonedaId int,
    IN v_ValorCompra decimal(12,3),
    IN v_ValorVenta decimal(12,3),
    IN v_FechaRegistro datetime,
    IN v_FechaVigencia datetime,
    IN v_CodUsuario varchar(20),
    IN v_EstadoRegistro bit(1)
)
BEGIN
    INSERT INTO catalogo_tarifaproducto (
        TarifaProductoId,
        ProductoId,
        UnidaMedidaId,
        MonedaId,
        ValorCompra,
        ValorVenta,
        FechaRegistro,
        FechaVigencia,
        CodUsuario,
        EstadoRegistro
) VALUES (
        v_TarifaProductoId,
        v_ProductoId,
        v_UnidaMedidaId,
        v_MonedaId,
        v_ValorCompra,
        v_ValorVenta,
        v_FechaRegistro,
        v_FechaVigencia,
        v_CodUsuario,
        v_EstadoRegistro
    );

  SET v_TarifaProductoId = LAST_INSERT_ID();
  SELECT v_TarifaProductoId;
END;

CREATE PROCEDURE sp_TarifaProducto_Update(
    IN v_TarifaProductoId int,
    IN v_ProductoId int,
    IN v_UnidaMedidaId int,
    IN v_MonedaId int,
    IN v_ValorCompra decimal(12,3),
    IN v_ValorVenta decimal(12,3),
    IN v_FechaRegistro datetime,
    IN v_FechaVigencia datetime,
    IN v_CodUsuario varchar(20),
    IN v_EstadoRegistro bit(1)
)
BEGIN
    UPDATE catalogo_tarifaproducto
    SET
        TarifaProductoId = v_TarifaProductoId,
        ProductoId = v_ProductoId,
        UnidaMedidaId = v_UnidaMedidaId,
        MonedaId = v_MonedaId,
        ValorCompra = v_ValorCompra,
        ValorVenta = v_ValorVenta,
        FechaRegistro = v_FechaRegistro,
        FechaVigencia = v_FechaVigencia,
        CodUsuario = v_CodUsuario,
        EstadoRegistro = v_EstadoRegistro
    WHERE
        TarifaProductoId = v_TarifaProductoId;

  SELECT v_TarifaProductoId;

END;

CREATE  PROCEDURE `sp_TarifaProducto_Delete`(IN v_TarifaProductoId int)
BEGIN
  DELETE
    FROM catalogo_tarifaproducto
  WHERE TarifaProductoId = v_TarifaProductoId;
  END;
