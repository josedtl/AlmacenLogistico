USE factcoredb;

DROP PROCEDURE IF EXISTS sp_ComprobantePagoDatosXML;
DELIMITER $$

CREATE PROCEDURE sp_ComprobantePagoDatosXML(IN v_ComprobantePagoId int)
BEGIN
  SELECT 
    cp.ComprobantePagoId,
    cp.TipoOperacionId,
    cst.Nombre AS NomTipoOperacion,
    cst.Codigo AS CodTipoOperacion,
    cp.TipoDocumentoId,
    cstd.Codigo AS CodTipoDocumento,
    cstd.Nombre AS NomTipoDocumento,

    cp.SecuenciaCorrelativo,
    cp.Correlativo,
    cp.CorrelativoId,
    tc.Codigo AS Serie,

    cp.TipoDocumentoIdentidadId,
    cstdi.Codigo AS CodTipoDocIdentidad,
    cstdi.Nombre AS NomTipoDocIdentidad,
    '71422425' AS NumDodcumentoEmisor,  /*MODIFICAR DESPUES CON AJUSTE DE TABLA CONSOLIDADO DE DATOS*/
    'ADCODE SYSTEMS S.A.' AS NombreEmisor,  /*MODIFICAR DESPUES CON AJUSTE DE TABLA CONSOLIDADO DE DATOS*/
    cp.ClienteId,
    cp.NumDocumento,
    cp.NombreCliente,
    cp.Direccion,
    cp.FormaPagoId,
    CF.Nombre AS FormaPago,
    (SELECT leyenda.Codigo FROM ctg_sunat52_leyenda leyenda WHERE LeyendaId = 1) AS CodigoLeyenda, /*MODIFICAR DESPUES CON AJUSTE DE TABLA CONSOLIDADO DE DATOS*/
    cp.TipoTributoId,
    cstt.Codigo AS CodTipoTributo,
    cstt.Nombre AS NomTipoTributo,
    cp.MonedaId,
    csm.CodigoSunat,
    cp.TipoPrecioVentaUnitarioId,
    cstpvu.Codigo AS CodTipoPrecioVentaUnitario,
    cp.ImpuestoTotal AS NomTipoPrecioVentaUnitario,
    cp.ImporteBrutoTotal,
    cp.ImporteNetoTotal
  FROM ts_comprobantepago cp
    INNER JOIN ctg_sunat51_tipooperacion cst  ON cp.TipoOperacionId = cst.TipoOperacionId
    INNER JOIN ctg_sunat01_tipodocumento cstd ON cp.TipoDocumentoId = cstd.TipoDocumentoId
    INNER JOIN ctg_sunat06_tipodocumentoidentidad cstdi ON cp.TipoDocumentoIdentidadId = cstdi.TipoDocumentoIdentidadId
    INNER JOIN ctg_sunat05_tipotributo cstt ON cp.TipoTributoId = cstt.TipoTributosId
    INNER JOIN ctg_sunat02_moneda csm ON cp.MonedaId = csm.MonedaId
    INNER JOIN ctg_sunat16_tipoprecioventaunitario cstpvu ON cp.TipoPrecioVentaUnitarioId = cstpvu.TipoPrecioVentaUnitarioId
    INNER JOIN ts_correlativo tc ON cp.CorrelativoId = tc.CorrelativoId
    INNER JOIN ctg_formapago cf ON cp.FormaPagoId = cf.FormaPagoId

   WHERE cp.ComprobantePagoId = v_ComprobantePagoId;
END
$$

DELIMITER ;

