-- DROP PROCEDURE sp_ProductoAllItem;
-- DROP PROCEDURE sp_ProductoAllItems;
-- DROP PROCEDURE sp_ProductoDelete;
-- DROP PROCEDURE sp_Producto_Save;
-- DROP PROCEDURE sp_Producto_Update;

CREATE PROCEDURE sp_ProductoAllItems()
BEGIN
  SELECT
    ProductoId,
    Codigo,
    CategoriaId,
    TipoProductoId,
    MarcaId,
    ModeloId,
    Nombre,
    Descripcion,
    UnidadMedidaId,
    Reserva,
    Stock,
    FechaRegistro,
    CodUsuario,
    EstadoRegistro
  FROM catalogo_producto;
END;

CREATE PROCEDURE sp_ProductoAllItem(IN v_ProductoId INT)
BEGIN
  SELECT
    ProductoId,
    Codigo,
    CategoriaId,
    TipoProductoId,
    MarcaId,
    ModeloId,
    Nombre,
    Descripcion,
    UnidadMedidaId,
    Reserva,
    Stock,
    FechaRegistro,
    CodUsuario,
    EstadoRegistro
  FROM catalogo_producto WHERE  ProductoId = v_ProductoId;
END;

CREATE PROCEDURE sp_Producto_Save(
    OUT v_ProductoId int,
    IN v_Codigo varchar(30),
    IN v_CategoriaId int,
    IN v_TipoProductoId int,
    IN v_MarcaId int,
    IN v_ModeloId int,
    IN v_Nombre varchar(100),
    IN v_Descripcion varchar(200),
    IN v_UnidadMedidaId int,
    IN v_Reserva decimal(12,2),
    IN v_Stock decimal(12,2),
    IN v_FechaRegistro datetime,
    IN v_CodUsuario varchar(25),
    IN v_EstadoRegistro bit(1)
)
BEGIN
    INSERT INTO catalogo_producto (
        ProductoId,
        Codigo,
        CategoriaId,
        TipoProductoId,
        MarcaId,
        ModeloId,
        Nombre,
        Descripcion,
        UnidadMedidaId,
        Reserva,
        Stock,
        FechaRegistro,
        CodUsuario,
        EstadoRegistro
) VALUES (
        v_ProductoId,
        v_Codigo,
        v_CategoriaId,
        v_TipoProductoId,
        v_MarcaId,
        v_ModeloId,
        v_Nombre,
        v_Descripcion,
        v_UnidadMedidaId,
        v_Reserva,
        v_Stock,
        v_FechaRegistro,
        v_CodUsuario,
        v_EstadoRegistro
    );

  SET v_ProductoId = LAST_INSERT_ID();
  SELECT v_ProductoId;
END;

CREATE PROCEDURE sp_Producto_Update(
    IN v_ProductoId int,
    IN v_Codigo varchar(30),
    IN v_CategoriaId int,
    IN v_TipoProductoId int,
    IN v_MarcaId int,
    IN v_ModeloId int,
    IN v_Nombre varchar(100),
    IN v_Descripcion varchar(200),
    IN v_UnidadMedidaId int,
    IN v_Reserva decimal(12,2),
    IN v_Stock decimal(12,2),
    IN v_FechaRegistro datetime,
    IN v_CodUsuario varchar(25),
    IN v_EstadoRegistro bit(1)
)
BEGIN
    UPDATE catalogo_producto
    SET
        ProductoId = v_ProductoId,
        Codigo = v_Codigo,
        CategoriaId = v_CategoriaId,
        TipoProductoId = v_TipoProductoId,
        MarcaId = v_MarcaId,
        ModeloId = v_ModeloId,
        Nombre = v_Nombre,
        Descripcion = v_Descripcion,
        UnidadMedidaId = v_UnidadMedidaId,
        Reserva = v_Reserva,
        Stock = v_Stock,
        FechaRegistro = v_FechaRegistro,
        CodUsuario = v_CodUsuario,
        EstadoRegistro = v_EstadoRegistro
    WHERE
        ProductoId = v_ProductoId;

  SELECT v_ProductoId;

END;

CREATE  PROCEDURE `sp_Producto_Delete`(IN v_ProductoId int)
BEGIN
  DELETE
    FROM catalogo_producto
  WHERE ProductoId = v_ProductoId;
  END;
