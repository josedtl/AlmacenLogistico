-- DROP PROCEDURE sp_ModeloAllItem;
-- DROP PROCEDURE sp_ModeloAllItems;
-- DROP PROCEDURE sp_ModeloDelete;
-- DROP PROCEDURE sp_Modelo_Save;
-- DROP PROCEDURE sp_Modelo_Update;

CREATE PROCEDURE sp_ModeloAllItems()
BEGIN
  SELECT
    ModeloId,
    Nombre,
    FechaRegistro,
    CodUsuario,
    EstadoRegistro
  FROM catalogo_modelo;
END;

CREATE PROCEDURE sp_ModeloAllItem(IN v_ModeloId INT)
BEGIN
  SELECT
    ModeloId,
    Nombre,
    FechaRegistro,
    CodUsuario,
    EstadoRegistro
  FROM catalogo_modelo WHERE  ModeloId = v_ModeloId;
END;

CREATE PROCEDURE sp_Modelo_Save(
    OUT v_ModeloId int,
    IN v_Nombre varchar(100),
    IN v_FechaRegistro datetime,
    IN v_CodUsuario varchar(25),
    IN v_EstadoRegistro bit(1)
)
BEGIN
    INSERT INTO catalogo_modelo (
        ModeloId,
        Nombre,
        FechaRegistro,
        CodUsuario,
        EstadoRegistro
) VALUES (
        v_ModeloId,
        v_Nombre,
        v_FechaRegistro,
        v_CodUsuario,
        v_EstadoRegistro
    );

  SET v_ModeloId = LAST_INSERT_ID();
  SELECT v_ModeloId;
END;

CREATE PROCEDURE sp_Modelo_Update(
    IN v_ModeloId int,
    IN v_Nombre varchar(100),
    IN v_FechaRegistro datetime,
    IN v_CodUsuario varchar(25),
    IN v_EstadoRegistro bit(1)
)
BEGIN
    UPDATE catalogo_modelo
    SET
        ModeloId = v_ModeloId,
        Nombre = v_Nombre,
        FechaRegistro = v_FechaRegistro,
        CodUsuario = v_CodUsuario,
        EstadoRegistro = v_EstadoRegistro
    WHERE
        ModeloId = v_ModeloId;

  SELECT v_ModeloId;

END;

CREATE  PROCEDURE `sp_Modelo_Delete`(IN v_ModeloId int)
BEGIN
  DELETE
    FROM catalogo_modelo
  WHERE ModeloId = v_ModeloId;
  END;
