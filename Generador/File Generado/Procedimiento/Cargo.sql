-- DROP PROCEDURE sp_CargoAllItem;
-- DROP PROCEDURE sp_CargoAllItems;
-- DROP PROCEDURE sp_CargoDelete;
-- DROP PROCEDURE sp_Cargo_Save;
-- DROP PROCEDURE sp_Cargo_Update;

CREATE PROCEDURE sp_CargoAllItems()
BEGIN
  SELECT
    CargoId,
    Nombre,
    FechaRegistro,
    CodUsuario,
    Estado
  FROM catalogo_cargo;
END;

CREATE PROCEDURE sp_CargoAllItem(IN v_CargoId INT)
BEGIN
  SELECT
    CargoId,
    Nombre,
    FechaRegistro,
    CodUsuario,
    Estado
  FROM catalogo_cargo WHERE  CargoId = v_CargoId;
END;

CREATE PROCEDURE sp_Cargo_Save(
    OUT v_CargoId int,
    IN v_Nombre varchar(100),
    IN v_FechaRegistro datetime,
    IN v_CodUsuario varchar(25),
    IN v_Estado bit(1)
)
BEGIN
    INSERT INTO catalogo_cargo (
        CargoId,
        Nombre,
        FechaRegistro,
        CodUsuario,
        Estado
) VALUES (
        v_CargoId,
        v_Nombre,
        v_FechaRegistro,
        v_CodUsuario,
        v_Estado
    );

  SET v_CargoId = LAST_INSERT_ID();
  SELECT v_CargoId;
END;

CREATE PROCEDURE sp_Cargo_Update(
    IN v_CargoId int,
    IN v_Nombre varchar(100),
    IN v_FechaRegistro datetime,
    IN v_CodUsuario varchar(25),
    IN v_Estado bit(1)
)
BEGIN
    UPDATE catalogo_cargo
    SET
        CargoId = v_CargoId,
        Nombre = v_Nombre,
        FechaRegistro = v_FechaRegistro,
        CodUsuario = v_CodUsuario,
        Estado = v_Estado
    WHERE
        CargoId = v_CargoId;

  SELECT v_CargoId;

END;

CREATE  PROCEDURE `sp_Cargo_Delete`(IN v_CargoId int)
BEGIN
  DELETE
    FROM catalogo_cargo
  WHERE CargoId = v_CargoId;
  END;
