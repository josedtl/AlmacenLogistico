-- DROP PROCEDURE sp_SexoAllItem;
-- DROP PROCEDURE sp_SexoAllItems;
-- DROP PROCEDURE sp_SexoDelete;
-- DROP PROCEDURE sp_Sexo_Save;
-- DROP PROCEDURE sp_Sexo_Update;

CREATE PROCEDURE sp_SexoAllItems()
BEGIN
  SELECT
    SexoId,
    Nombre,
    EstadoRegistro
  FROM catalogo_sexo;
END;

CREATE PROCEDURE sp_SexoAllItem(IN v_SexoId INT)
BEGIN
  SELECT
    SexoId,
    Nombre,
    EstadoRegistro
  FROM catalogo_sexo WHERE  SexoId = v_SexoId;
END;

CREATE PROCEDURE sp_Sexo_Save(
    OUT v_SexoId int,
    IN v_Nombre varchar(50),
    IN v_EstadoRegistro bit(1)
)
BEGIN
    INSERT INTO catalogo_sexo (
        SexoId,
        Nombre,
        EstadoRegistro
) VALUES (
        v_SexoId,
        v_Nombre,
        v_EstadoRegistro
    );

  SET v_SexoId = LAST_INSERT_ID();
  SELECT v_SexoId;
END;

CREATE PROCEDURE sp_Sexo_Update(
    IN v_SexoId int,
    IN v_Nombre varchar(50),
    IN v_EstadoRegistro bit(1)
)
BEGIN
    UPDATE catalogo_sexo
    SET
        SexoId = v_SexoId,
        Nombre = v_Nombre,
        EstadoRegistro = v_EstadoRegistro
    WHERE
        SexoId = v_SexoId;

  SELECT v_SexoId;

END;

CREATE  PROCEDURE `sp_Sexo_Delete`(IN v_SexoId int)
BEGIN
  DELETE
    FROM catalogo_sexo
  WHERE SexoId = v_SexoId;
  END;
