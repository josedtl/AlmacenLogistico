-- DROP PROCEDURE sp_CategoriaAllItem;
-- DROP PROCEDURE sp_CategoriaAllItems;
-- DROP PROCEDURE sp_CategoriaDelete;
-- DROP PROCEDURE sp_Categoria_Save;
-- DROP PROCEDURE sp_Categoria_Update;

CREATE PROCEDURE sp_CategoriaAllItems()
BEGIN
  SELECT
    CategoriaId,
    Nombre,
    FechaRegistro,
    CodUsuario,
    EstadoRegistro
  FROM catalogo_categoria;
END;

CREATE PROCEDURE sp_CategoriaAllItem(IN v_CategoriaId INT)
BEGIN
  SELECT
    CategoriaId,
    Nombre,
    FechaRegistro,
    CodUsuario,
    EstadoRegistro
  FROM catalogo_categoria WHERE  CategoriaId = v_CategoriaId;
END;

CREATE PROCEDURE sp_Categoria_Save(
    OUT v_CategoriaId int,
    IN v_Nombre varchar(50),
    IN v_FechaRegistro datetime,
    IN v_CodUsuario varchar(15),
    IN v_EstadoRegistro bit(1)
)
BEGIN
    INSERT INTO catalogo_categoria (
        CategoriaId,
        Nombre,
        FechaRegistro,
        CodUsuario,
        EstadoRegistro
) VALUES (
        v_CategoriaId,
        v_Nombre,
        v_FechaRegistro,
        v_CodUsuario,
        v_EstadoRegistro
    );

  SET v_CategoriaId = LAST_INSERT_ID();
  SELECT v_CategoriaId;
END;

CREATE PROCEDURE sp_Categoria_Update(
    IN v_CategoriaId int,
    IN v_Nombre varchar(50),
    IN v_FechaRegistro datetime,
    IN v_CodUsuario varchar(15),
    IN v_EstadoRegistro bit(1)
)
BEGIN
    UPDATE catalogo_categoria
    SET
        CategoriaId = v_CategoriaId,
        Nombre = v_Nombre,
        FechaRegistro = v_FechaRegistro,
        CodUsuario = v_CodUsuario,
        EstadoRegistro = v_EstadoRegistro
    WHERE
        CategoriaId = v_CategoriaId;
END;

CREATE  PROCEDURE `sp_CategoriaDelete`(IN v_CategoriaId int)
BEGIN
  DELETE
    FROM catalogo_categoria
  WHERE CategoriaId = v_CategoriaId;
  END;
