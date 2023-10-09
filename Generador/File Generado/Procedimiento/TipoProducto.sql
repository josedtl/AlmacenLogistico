-- DROP PROCEDURE sp_TipoProductoAllItem;
-- DROP PROCEDURE sp_TipoProductoAllItems;
-- DROP PROCEDURE sp_TipoProductoDelete;
-- DROP PROCEDURE sp_TipoProducto_Save;
-- DROP PROCEDURE sp_TipoProducto_Update;

CREATE PROCEDURE sp_TipoProductoAllItems()
BEGIN
  SELECT
    TipoProductoId,
    Nombre,
    FechaRegistro,
    CodUsuario,
    EstadoRegistro
  FROM catalogo_tipoproducto;
END;

CREATE PROCEDURE sp_TipoProductoAllItem(IN v_TipoProductoId INT)
BEGIN
  SELECT
    TipoProductoId,
    Nombre,
    FechaRegistro,
    CodUsuario,
    EstadoRegistro
  FROM catalogo_tipoproducto WHERE  TipoProductoId = v_TipoProductoId;
END;

CREATE PROCEDURE sp_TipoProducto_Save(
    OUT v_TipoProductoId int,
    IN v_Nombre varchar(50),
    IN v_FechaRegistro datetime,
    IN v_CodUsuario varchar(50),
    IN v_EstadoRegistro bit(1)
)
BEGIN
    INSERT INTO catalogo_tipoproducto (
        TipoProductoId,
        Nombre,
        FechaRegistro,
        CodUsuario,
        EstadoRegistro
) VALUES (
        v_TipoProductoId,
        v_Nombre,
        v_FechaRegistro,
        v_CodUsuario,
        v_EstadoRegistro
    );

  SET v_TipoProductoId = LAST_INSERT_ID();
  SELECT v_TipoProductoId;
END;

CREATE PROCEDURE sp_TipoProducto_Update(
    IN v_TipoProductoId int,
    IN v_Nombre varchar(50),
    IN v_FechaRegistro datetime,
    IN v_CodUsuario varchar(50),
    IN v_EstadoRegistro bit(1)
)
BEGIN
    UPDATE catalogo_tipoproducto
    SET
        TipoProductoId = v_TipoProductoId,
        Nombre = v_Nombre,
        FechaRegistro = v_FechaRegistro,
        CodUsuario = v_CodUsuario,
        EstadoRegistro = v_EstadoRegistro
    WHERE
        TipoProductoId = v_TipoProductoId;

  SELECT v_TipoProductoId;

END;

CREATE  PROCEDURE `sp_TipoProducto_Delete`(IN v_TipoProductoId int)
BEGIN
  DELETE
    FROM catalogo_tipoproducto
  WHERE TipoProductoId = v_TipoProductoId;
  END;
