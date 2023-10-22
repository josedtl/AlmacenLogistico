-- DROP PROCEDURE sp_OrdenPedidoAllItem;
-- DROP PROCEDURE sp_OrdenPedidoAllItems;
-- DROP PROCEDURE sp_OrdenPedidoDelete;
-- DROP PROCEDURE sp_OrdenPedido_Save;
-- DROP PROCEDURE sp_OrdenPedido_Update;

CREATE PROCEDURE sp_OrdenPedidoAllItems()
BEGIN
  SELECT
    OrdenPedidoId,
    ProcesoId,
    TipoProcesoId,
    EstadoProcesoId,
    Codigo,
    ResponsableId,
    NumDocumentoResponsable,
    NomResponsable,
    FechaEmision,
    BloqueoEdicionOtros,
    FechaRegistro,
    CodUsuario,
    EstadoRegistro
  FROM transaccion_ordenpedido;
END;

CREATE PROCEDURE sp_OrdenPedidoAllItem(IN v_OrdenPedidoId INT)
BEGIN
  SELECT
    OrdenPedidoId,
    ProcesoId,
    TipoProcesoId,
    EstadoProcesoId,
    Codigo,
    ResponsableId,
    NumDocumentoResponsable,
    NomResponsable,
    FechaEmision,
    BloqueoEdicionOtros,
    FechaRegistro,
    CodUsuario,
    EstadoRegistro
  FROM transaccion_ordenpedido WHERE  OrdenPedidoId = v_OrdenPedidoId;
END;

CREATE PROCEDURE sp_OrdenPedido_Save(
    OUT v_OrdenPedidoId int,
    IN v_ProcesoId int,
    IN v_TipoProcesoId int,
    IN v_EstadoProcesoId int,
    IN v_Codigo varchar(20),
    IN v_ResponsableId int,
    IN v_NumDocumentoResponsable varchar(20),
    IN v_NomResponsable varchar(50),
    IN v_FechaEmision date,
    IN v_BloqueoEdicionOtros bit(1),
    IN v_FechaRegistro datetime,
    IN v_CodUsuario varchar(25),
    IN v_EstadoRegistro bit(1)
)
BEGIN
    INSERT INTO transaccion_ordenpedido (
        OrdenPedidoId,
        ProcesoId,
        TipoProcesoId,
        EstadoProcesoId,
        Codigo,
        ResponsableId,
        NumDocumentoResponsable,
        NomResponsable,
        FechaEmision,
        BloqueoEdicionOtros,
        FechaRegistro,
        CodUsuario,
        EstadoRegistro
) VALUES (
        v_OrdenPedidoId,
        v_ProcesoId,
        v_TipoProcesoId,
        v_EstadoProcesoId,
        v_Codigo,
        v_ResponsableId,
        v_NumDocumentoResponsable,
        v_NomResponsable,
        v_FechaEmision,
        v_BloqueoEdicionOtros,
        v_FechaRegistro,
        v_CodUsuario,
        v_EstadoRegistro
    );

  SET v_OrdenPedidoId = LAST_INSERT_ID();
  SELECT v_OrdenPedidoId;
END;

CREATE PROCEDURE sp_OrdenPedido_Update(
    IN v_OrdenPedidoId int,
    IN v_ProcesoId int,
    IN v_TipoProcesoId int,
    IN v_EstadoProcesoId int,
    IN v_Codigo varchar(20),
    IN v_ResponsableId int,
    IN v_NumDocumentoResponsable varchar(20),
    IN v_NomResponsable varchar(50),
    IN v_FechaEmision date,
    IN v_BloqueoEdicionOtros bit(1),
    IN v_FechaRegistro datetime,
    IN v_CodUsuario varchar(25),
    IN v_EstadoRegistro bit(1)
)
BEGIN
    UPDATE transaccion_ordenpedido
    SET
        OrdenPedidoId = v_OrdenPedidoId,
        ProcesoId = v_ProcesoId,
        TipoProcesoId = v_TipoProcesoId,
        EstadoProcesoId = v_EstadoProcesoId,
        Codigo = v_Codigo,
        ResponsableId = v_ResponsableId,
        NumDocumentoResponsable = v_NumDocumentoResponsable,
        NomResponsable = v_NomResponsable,
        FechaEmision = v_FechaEmision,
        BloqueoEdicionOtros = v_BloqueoEdicionOtros,
        FechaRegistro = v_FechaRegistro,
        CodUsuario = v_CodUsuario,
        EstadoRegistro = v_EstadoRegistro
    WHERE
        OrdenPedidoId = v_OrdenPedidoId;

  SELECT v_OrdenPedidoId;

END;

CREATE  PROCEDURE `sp_OrdenPedido_Delete`(IN v_OrdenPedidoId int)
BEGIN
  DELETE
    FROM transaccion_ordenpedido
  WHERE OrdenPedidoId = v_OrdenPedidoId;
  END;
