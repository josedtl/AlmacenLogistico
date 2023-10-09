-- DROP PROCEDURE sp_EmpleadoAllItem;
-- DROP PROCEDURE sp_EmpleadoAllItems;
-- DROP PROCEDURE sp_EmpleadoDelete;
-- DROP PROCEDURE sp_Empleado_Save;
-- DROP PROCEDURE sp_Empleado_Update;

CREATE PROCEDURE sp_EmpleadoAllItems()
BEGIN
  SELECT
    EmpleadoId,
    PersonaNaturalId,
    AreaId,
    CargoId,
    CorreoCorporativo,
    FechaIngreso,
    FechaRegistro,
    CodUsuario,
    Estado
  FROM catalogo_empleado;
END;

CREATE PROCEDURE sp_EmpleadoAllItem(IN v_EmpleadoId INT)
BEGIN
  SELECT
    EmpleadoId,
    PersonaNaturalId,
    AreaId,
    CargoId,
    CorreoCorporativo,
    FechaIngreso,
    FechaRegistro,
    CodUsuario,
    Estado
  FROM catalogo_empleado WHERE  EmpleadoId = v_EmpleadoId;
END;

CREATE PROCEDURE sp_Empleado_Save(
    OUT v_EmpleadoId int,
    IN v_PersonaNaturalId int,
    IN v_AreaId int,
    IN v_CargoId int,
    IN v_CorreoCorporativo varchar(100),
    IN v_FechaIngreso datetime,
    IN v_FechaRegistro datetime,
    IN v_CodUsuario varchar(25),
    IN v_Estado bit(1)
)
BEGIN
    INSERT INTO catalogo_empleado (
        EmpleadoId,
        PersonaNaturalId,
        AreaId,
        CargoId,
        CorreoCorporativo,
        FechaIngreso,
        FechaRegistro,
        CodUsuario,
        Estado
) VALUES (
        v_EmpleadoId,
        v_PersonaNaturalId,
        v_AreaId,
        v_CargoId,
        v_CorreoCorporativo,
        v_FechaIngreso,
        v_FechaRegistro,
        v_CodUsuario,
        v_Estado
    );

  SET v_EmpleadoId = LAST_INSERT_ID();
  SELECT v_EmpleadoId;
END;

CREATE PROCEDURE sp_Empleado_Update(
    IN v_EmpleadoId int,
    IN v_PersonaNaturalId int,
    IN v_AreaId int,
    IN v_CargoId int,
    IN v_CorreoCorporativo varchar(100),
    IN v_FechaIngreso datetime,
    IN v_FechaRegistro datetime,
    IN v_CodUsuario varchar(25),
    IN v_Estado bit(1)
)
BEGIN
    UPDATE catalogo_empleado
    SET
        EmpleadoId = v_EmpleadoId,
        PersonaNaturalId = v_PersonaNaturalId,
        AreaId = v_AreaId,
        CargoId = v_CargoId,
        CorreoCorporativo = v_CorreoCorporativo,
        FechaIngreso = v_FechaIngreso,
        FechaRegistro = v_FechaRegistro,
        CodUsuario = v_CodUsuario,
        Estado = v_Estado
    WHERE
        EmpleadoId = v_EmpleadoId;

  SELECT v_EmpleadoId;

END;

CREATE  PROCEDURE `sp_Empleado_Delete`(IN v_EmpleadoId int)
BEGIN
  DELETE
    FROM catalogo_empleado
  WHERE EmpleadoId = v_EmpleadoId;
  END;
