-- DROP PROCEDURE sp_ModuloSistemaAllItem;
-- DROP PROCEDURE sp_ModuloSistemaAllItems;
-- DROP PROCEDURE sp_ModuloSistemaDelete;
-- DROP PROCEDURE sp_ModuloSistema_Save;
-- DROP PROCEDURE sp_ModuloSistema_Update;

CREATE PROCEDURE sp_ModuloSistemaAllItems()
BEGIN
  SELECT
    ModuloSistemaId,
    Codigo,
    Nombre,
    FechaRegistro,
    CodUsuario,
    EstadoRegistro
  FROM catalogo_modulosistema;
END;

CREATE PROCEDURE sp_ModuloSistemaAllItem(IN v_ModuloSistemaId INT)
BEGIN
  SELECT
    ModuloSistemaId,
    Codigo,
    Nombre,
    FechaRegistro,
    CodUsuario,
    EstadoRegistro
  FROM catalogo_modulosistema WHERE  ModuloSistemaId = v_ModuloSistemaId;
END;

CREATE PROCEDURE sp_ModuloSistema_Save(
    OUT v_ModuloSistemaId int,
    IN v_Codigo varchar(15),
    IN v_Nombre varchar(80),
    IN v_FechaRegistro datetime,
    IN v_CodUsuario varchar(25),
    IN v_EstadoRegistro bit(1)
)
BEGIN
    INSERT INTO catalogo_modulosistema (
        ModuloSistemaId,
        Codigo,
        Nombre,
        FechaRegistro,
        CodUsuario,
        EstadoRegistro
) VALUES (
        v_ModuloSistemaId,
        v_Codigo,
        v_Nombre,
        v_FechaRegistro,
        v_CodUsuario,
        v_EstadoRegistro
    );

  SET v_ModuloSistemaId = LAST_INSERT_ID();
  SELECT v_ModuloSistemaId;
END;

CREATE PROCEDURE sp_ModuloSistema_Update(
    IN v_ModuloSistemaId int,
    IN v_Codigo varchar(15),
    IN v_Nombre varchar(80),
    IN v_FechaRegistro datetime,
    IN v_CodUsuario varchar(25),
    IN v_EstadoRegistro bit(1)
)
BEGIN
    UPDATE catalogo_modulosistema
    SET
        ModuloSistemaId = v_ModuloSistemaId,
        Codigo = v_Codigo,
        Nombre = v_Nombre,
        FechaRegistro = v_FechaRegistro,
        CodUsuario = v_CodUsuario,
        EstadoRegistro = v_EstadoRegistro
    WHERE
        ModuloSistemaId = v_ModuloSistemaId;

  SELECT v_ModuloSistemaId;

END;

CREATE  PROCEDURE `sp_ModuloSistema_Delete`(IN v_ModuloSistemaId int)
BEGIN
  DELETE
    FROM catalogo_modulosistema
  WHERE ModuloSistemaId = v_ModuloSistemaId;
  END;
