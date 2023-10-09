-- DROP PROCEDURE sp_OrdenPedidoAllItem;
-- DROP PROCEDURE sp_OrdenPedidoAllItems;
-- DROP PROCEDURE sp_OrdenPedidoDelete;
-- DROP PROCEDURE sp_OrdenPedido_Save;
-- DROP PROCEDURE sp_OrdenPedido_Update;

CREATE PROCEDURE sp_OrdenPedidoAllItems()
BEGIN
  SELECT
    OrdenPedidoId,
    TipoProcesoId,
    Codigo,
    EsEmpresaCliente,
    ClienteId,
    ProcesoId,
    EstadoProcesoId,
    FechaEmision,
    CantidadTotal,
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
    TipoProcesoId,
    Codigo,
    EsEmpresaCliente,
    ClienteId,
    ProcesoId,
    EstadoProcesoId,
    FechaEmision,
    CantidadTotal,
    BloqueoEdicionOtros,
    FechaRegistro,
    CodUsuario,
    EstadoRegistro
  FROM transaccion_ordenpedido WHERE  OrdenPedidoId = v_OrdenPedidoId;
END;

CREATE PROCEDURE sp_OrdenPedido_Save(
    OUT v_OrdenPedidoId int,
    IN v_TipoProcesoId int,
    IN v_Codigo varchar(20),
    IN v_EsEmpresaCliente bit(1),
    IN v_ClienteId int,
    IN v_ProcesoId int,
    IN v_EstadoProcesoId int,
    IN v_FechaEmision date,
    IN v_CantidadTotal decimal(10,2),
    IN v_BloqueoEdicionOtros varchar(255),
    IN v_FechaRegistro datetime,
    IN v_CodUsuario varchar(25),
    IN v_EstadoRegistro bit(1)
)
BEGIN
    INSERT INTO transaccion_ordenpedido (
        OrdenPedidoId,
        TipoProcesoId,
        Codigo,
        EsEmpresaCliente,
        ClienteId,
        ProcesoId,
        EstadoProcesoId,
        FechaEmision,
        CantidadTotal,
        BloqueoEdicionOtros,
        FechaRegistro,
        CodUsuario,
        EstadoRegistro
) VALUES (
        v_OrdenPedidoId,
        v_TipoProcesoId,
        v_Codigo,
        v_EsEmpresaCliente,
        v_ClienteId,
        v_ProcesoId,
        v_EstadoProcesoId,
        v_FechaEmision,
        v_CantidadTotal,
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
    IN v_TipoProcesoId int,
    IN v_Codigo varchar(20),
    IN v_EsEmpresaCliente bit(1),
    IN v_ClienteId int,
    IN v_ProcesoId int,
    IN v_EstadoProcesoId int,
    IN v_FechaEmision date,
    IN v_CantidadTotal decimal(10,2),
    IN v_BloqueoEdicionOtros varchar(255),
    IN v_FechaRegistro datetime,
    IN v_CodUsuario varchar(25),
    IN v_EstadoRegistro bit(1)
)
BEGIN
    UPDATE transaccion_ordenpedido
    SET
        OrdenPedidoId = v_OrdenPedidoId,
        TipoProcesoId = v_TipoProcesoId,
        Codigo = v_Codigo,
        EsEmpresaCliente = v_EsEmpresaCliente,
        ClienteId = v_ClienteId,
        ProcesoId = v_ProcesoId,
        EstadoProcesoId = v_EstadoProcesoId,
        FechaEmision = v_FechaEmision,
        CantidadTotal = v_CantidadTotal,
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
