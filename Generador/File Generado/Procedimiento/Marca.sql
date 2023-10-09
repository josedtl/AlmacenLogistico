-- DROP PROCEDURE sp_MarcaAllItem;
-- DROP PROCEDURE sp_MarcaAllItems;
-- DROP PROCEDURE sp_MarcaDelete;
-- DROP PROCEDURE sp_Marca_Save;
-- DROP PROCEDURE sp_Marca_Update;

CREATE PROCEDURE sp_MarcaAllItems()
BEGIN
  SELECT
    MarcaId,
    Nombre,
    FechaRegistro,
    CodUsuario,
    EstadoRegistro
  FROM catalogo_marca;
END;

CREATE PROCEDURE sp_MarcaAllItem(IN v_MarcaId INT)
BEGIN
  SELECT
    MarcaId,
    Nombre,
    FechaRegistro,
    CodUsuario,
    EstadoRegistro
  FROM catalogo_marca WHERE  MarcaId = v_MarcaId;
END;

CREATE PROCEDURE sp_Marca_Save(
    OUT v_MarcaId int,
    IN v_Nombre varchar(100),
    IN v_FechaRegistro datetime,
    IN v_CodUsuario varchar(25),
    IN v_EstadoRegistro bit(1)
)
BEGIN
    INSERT INTO catalogo_marca (
        MarcaId,
        Nombre,
        FechaRegistro,
        CodUsuario,
        EstadoRegistro
) VALUES (
        v_MarcaId,
        v_Nombre,
        v_FechaRegistro,
        v_CodUsuario,
        v_EstadoRegistro
    );

  SET v_MarcaId = LAST_INSERT_ID();
  SELECT v_MarcaId;
END;

CREATE PROCEDURE sp_Marca_Update(
    IN v_MarcaId int,
    IN v_Nombre varchar(100),
    IN v_FechaRegistro datetime,
    IN v_CodUsuario varchar(25),
    IN v_EstadoRegistro bit(1)
)
BEGIN
    UPDATE catalogo_marca
    SET
        MarcaId = v_MarcaId,
        Nombre = v_Nombre,
        FechaRegistro = v_FechaRegistro,
        CodUsuario = v_CodUsuario,
        EstadoRegistro = v_EstadoRegistro
    WHERE
        MarcaId = v_MarcaId;

  SELECT v_MarcaId;

END;

CREATE  PROCEDURE `sp_Marca_Delete`(IN v_MarcaId int)
BEGIN
  DELETE
    FROM catalogo_marca
  WHERE MarcaId = v_MarcaId;
  END;
