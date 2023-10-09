-- DROP PROCEDURE sp_OrdenCompraAllItem;
-- DROP PROCEDURE sp_OrdenCompraAllItems;
-- DROP PROCEDURE sp_OrdenCompraDelete;
-- DROP PROCEDURE sp_OrdenCompra_Save;
-- DROP PROCEDURE sp_OrdenCompra_Update;

CREATE PROCEDURE sp_OrdenCompraAllItems()
BEGIN
  SELECT
    OrdenCompraId,
    ProcesoId,
    EstadoProcesoId,
    Codigo,
    EsEmpresaProveedor,
    ProveedorId,
    Observacion,
    FechaEmision,
    FechaRegistro,
    CodUsuario,
    EstadoRegistro
  FROM transaccion_ordencompra;
END;

CREATE PROCEDURE sp_OrdenCompraAllItem(IN v_OrdenCompraId INT)
BEGIN
  SELECT
    OrdenCompraId,
    ProcesoId,
    EstadoProcesoId,
    Codigo,
    EsEmpresaProveedor,
    ProveedorId,
    Observacion,
    FechaEmision,
    FechaRegistro,
    CodUsuario,
    EstadoRegistro
  FROM transaccion_ordencompra WHERE  OrdenCompraId = v_OrdenCompraId;
END;

CREATE PROCEDURE sp_OrdenCompra_Save(
    OUT v_OrdenCompraId int,
    IN v_ProcesoId int,
    IN v_EstadoProcesoId int,
    IN v_Codigo varchar(255),
    IN v_EsEmpresaProveedor bit(1),
    IN v_ProveedorId int,
    IN v_Observacion varchar(255),
    IN v_FechaEmision datetime,
    IN v_FechaRegistro datetime,
    IN v_CodUsuario varchar(25),
    IN v_EstadoRegistro bit(1)
)
BEGIN
    INSERT INTO transaccion_ordencompra (
        OrdenCompraId,
        ProcesoId,
        EstadoProcesoId,
        Codigo,
        EsEmpresaProveedor,
        ProveedorId,
        Observacion,
        FechaEmision,
        FechaRegistro,
        CodUsuario,
        EstadoRegistro
) VALUES (
        v_OrdenCompraId,
        v_ProcesoId,
        v_EstadoProcesoId,
        v_Codigo,
        v_EsEmpresaProveedor,
        v_ProveedorId,
        v_Observacion,
        v_FechaEmision,
        v_FechaRegistro,
        v_CodUsuario,
        v_EstadoRegistro
    );

  SET v_OrdenCompraId = LAST_INSERT_ID();
  SELECT v_OrdenCompraId;
END;

CREATE PROCEDURE sp_OrdenCompra_Update(
    IN v_OrdenCompraId int,
    IN v_ProcesoId int,
    IN v_EstadoProcesoId int,
    IN v_Codigo varchar(255),
    IN v_EsEmpresaProveedor bit(1),
    IN v_ProveedorId int,
    IN v_Observacion varchar(255),
    IN v_FechaEmision datetime,
    IN v_FechaRegistro datetime,
    IN v_CodUsuario varchar(25),
    IN v_EstadoRegistro bit(1)
)
BEGIN
    UPDATE transaccion_ordencompra
    SET
        OrdenCompraId = v_OrdenCompraId,
        ProcesoId = v_ProcesoId,
        EstadoProcesoId = v_EstadoProcesoId,
        Codigo = v_Codigo,
        EsEmpresaProveedor = v_EsEmpresaProveedor,
        ProveedorId = v_ProveedorId,
        Observacion = v_Observacion,
        FechaEmision = v_FechaEmision,
        FechaRegistro = v_FechaRegistro,
        CodUsuario = v_CodUsuario,
        EstadoRegistro = v_EstadoRegistro
    WHERE
        OrdenCompraId = v_OrdenCompraId;

  SELECT v_OrdenCompraId;

END;

CREATE  PROCEDURE `sp_OrdenCompra_Delete`(IN v_OrdenCompraId int)
BEGIN
  DELETE
    FROM transaccion_ordencompra
  WHERE OrdenCompraId = v_OrdenCompraId;
  END;
