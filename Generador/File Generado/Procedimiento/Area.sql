-- DROP PROCEDURE sp_AreaAllItem;
-- DROP PROCEDURE sp_AreaAllItems;
-- DROP PROCEDURE sp_AreaDelete;
-- DROP PROCEDURE sp_Area_Save;
-- DROP PROCEDURE sp_Area_Update;

CREATE PROCEDURE sp_AreaAllItems()
BEGIN
  SELECT
    AreaId,
    Nombre,
    FechaRegistro,
    CodUsuario,
    Estado
  FROM catalogo_area;
END;

CREATE PROCEDURE sp_AreaAllItem(IN v_AreaId INT)
BEGIN
  SELECT
    AreaId,
    Nombre,
    FechaRegistro,
    CodUsuario,
    Estado
  FROM catalogo_area WHERE  AreaId = v_AreaId;
END;

CREATE PROCEDURE sp_Area_Save(
    OUT v_AreaId int,
    IN v_Nombre varchar(100),
    IN v_FechaRegistro datetime,
    IN v_CodUsuario varchar(25),
    IN v_Estado bit(1)
)
BEGIN
    INSERT INTO catalogo_area (
        AreaId,
        Nombre,
        FechaRegistro,
        CodUsuario,
        Estado
) VALUES (
        v_AreaId,
        v_Nombre,
        v_FechaRegistro,
        v_CodUsuario,
        v_Estado
    );

  SET v_AreaId = LAST_INSERT_ID();
  SELECT v_AreaId;
END;

CREATE PROCEDURE sp_Area_Update(
    IN v_AreaId int,
    IN v_Nombre varchar(100),
    IN v_FechaRegistro datetime,
    IN v_CodUsuario varchar(25),
    IN v_Estado bit(1)
)
BEGIN
    UPDATE catalogo_area
    SET
        AreaId = v_AreaId,
        Nombre = v_Nombre,
        FechaRegistro = v_FechaRegistro,
        CodUsuario = v_CodUsuario,
        Estado = v_Estado
    WHERE
        AreaId = v_AreaId;

  SELECT v_AreaId;

END;

CREATE  PROCEDURE `sp_Area_Delete`(IN v_AreaId int)
BEGIN
  DELETE
    FROM catalogo_area
  WHERE AreaId = v_AreaId;
  END;
