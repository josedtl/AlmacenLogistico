-- DROP PROCEDURE sp_ProcesoAllItem;
-- DROP PROCEDURE sp_ProcesoAllItems;
-- DROP PROCEDURE sp_ProcesoDelete;
-- DROP PROCEDURE sp_Proceso_Save;
-- DROP PROCEDURE sp_Proceso_Update;

CREATE PROCEDURE sp_ProcesoAllItems()
BEGIN
  SELECT
    ProcesoId,
    ModuloSistemaId,
    TipoProcesoId,
    Nombre,
    Descripcion,
    EsPordefecto,
    FechaRegistro,
    CodUsuario,
    EstadoRegistro
  FROM catalogo_proceso;
END;

CREATE PROCEDURE sp_ProcesoAllItem(IN v_ProcesoId INT)
BEGIN
  SELECT
    ProcesoId,
    ModuloSistemaId,
    TipoProcesoId,
    Nombre,
    Descripcion,
    EsPordefecto,
    FechaRegistro,
    CodUsuario,
    EstadoRegistro
  FROM catalogo_proceso WHERE  ProcesoId = v_ProcesoId;
END;

CREATE PROCEDURE sp_Proceso_Save(
    OUT v_ProcesoId int,
    IN v_ModuloSistemaId int,
    IN v_TipoProcesoId int,
    IN v_Nombre varchar(50),
    IN v_Descripcion int,
    IN v_EsPordefecto bit(1),
    IN v_FechaRegistro datetime,
    IN v_CodUsuario varchar(25),
    IN v_EstadoRegistro bit(1)
)
BEGIN
    INSERT INTO catalogo_proceso (
        ProcesoId,
        ModuloSistemaId,
        TipoProcesoId,
        Nombre,
        Descripcion,
        EsPordefecto,
        FechaRegistro,
        CodUsuario,
        EstadoRegistro
) VALUES (
        v_ProcesoId,
        v_ModuloSistemaId,
        v_TipoProcesoId,
        v_Nombre,
        v_Descripcion,
        v_EsPordefecto,
        v_FechaRegistro,
        v_CodUsuario,
        v_EstadoRegistro
    );

  SET v_ProcesoId = LAST_INSERT_ID();
  SELECT v_ProcesoId;
END;

CREATE PROCEDURE sp_Proceso_Update(
    IN v_ProcesoId int,
    IN v_ModuloSistemaId int,
    IN v_TipoProcesoId int,
    IN v_Nombre varchar(50),
    IN v_Descripcion int,
    IN v_EsPordefecto bit(1),
    IN v_FechaRegistro datetime,
    IN v_CodUsuario varchar(25),
    IN v_EstadoRegistro bit(1)
)
BEGIN
    UPDATE catalogo_proceso
    SET
        ProcesoId = v_ProcesoId,
        ModuloSistemaId = v_ModuloSistemaId,
        TipoProcesoId = v_TipoProcesoId,
        Nombre = v_Nombre,
        Descripcion = v_Descripcion,
        EsPordefecto = v_EsPordefecto,
        FechaRegistro = v_FechaRegistro,
        CodUsuario = v_CodUsuario,
        EstadoRegistro = v_EstadoRegistro
    WHERE
        ProcesoId = v_ProcesoId;

  SELECT v_ProcesoId;

END;

CREATE  PROCEDURE `sp_Proceso_Delete`(IN v_ProcesoId int)
BEGIN
  DELETE
    FROM catalogo_proceso
  WHERE ProcesoId = v_ProcesoId;
  END;
