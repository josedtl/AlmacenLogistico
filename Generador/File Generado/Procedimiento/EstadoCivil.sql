-- DROP PROCEDURE sp_EstadoCivilAllItem;
-- DROP PROCEDURE sp_EstadoCivilAllItems;
-- DROP PROCEDURE sp_EstadoCivilDelete;
-- DROP PROCEDURE sp_EstadoCivil_Save;
-- DROP PROCEDURE sp_EstadoCivil_Update;

CREATE PROCEDURE sp_EstadoCivilAllItems()
BEGIN
  SELECT
    EstadoCivilId,
    Nombre,
    EstadoRegistro
  FROM catalogo_estadocivil;
END;

CREATE PROCEDURE sp_EstadoCivilAllItem(IN v_EstadoCivilId INT)
BEGIN
  SELECT
    EstadoCivilId,
    Nombre,
    EstadoRegistro
  FROM catalogo_estadocivil WHERE  EstadoCivilId = v_EstadoCivilId;
END;

CREATE PROCEDURE sp_EstadoCivil_Save(
    OUT v_EstadoCivilId int,
    IN v_Nombre varchar(50),
    IN v_EstadoRegistro bit(1)
)
BEGIN
    INSERT INTO catalogo_estadocivil (
        EstadoCivilId,
        Nombre,
        EstadoRegistro
) VALUES (
        v_EstadoCivilId,
        v_Nombre,
        v_EstadoRegistro
    );

  SET v_EstadoCivilId = LAST_INSERT_ID();
  SELECT v_EstadoCivilId;
END;

CREATE PROCEDURE sp_EstadoCivil_Update(
    IN v_EstadoCivilId int,
    IN v_Nombre varchar(50),
    IN v_EstadoRegistro bit(1)
)
BEGIN
    UPDATE catalogo_estadocivil
    SET
        EstadoCivilId = v_EstadoCivilId,
        Nombre = v_Nombre,
        EstadoRegistro = v_EstadoRegistro
    WHERE
        EstadoCivilId = v_EstadoCivilId;

  SELECT v_EstadoCivilId;

END;

CREATE  PROCEDURE `sp_EstadoCivil_Delete`(IN v_EstadoCivilId int)
BEGIN
  DELETE
    FROM catalogo_estadocivil
  WHERE EstadoCivilId = v_EstadoCivilId;
  END;
