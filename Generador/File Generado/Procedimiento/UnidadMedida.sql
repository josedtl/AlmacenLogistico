-- DROP PROCEDURE sp_UnidadMedidaAllItem;
-- DROP PROCEDURE sp_UnidadMedidaAllItems;
-- DROP PROCEDURE sp_UnidadMedidaDelete;
-- DROP PROCEDURE sp_UnidadMedida_Save;
-- DROP PROCEDURE sp_UnidadMedida_Update;

CREATE PROCEDURE sp_UnidadMedidaAllItems()
BEGIN
  SELECT
    UnidadMedidaId,
    Codigo,
    CodigoComercial,
    Nombre
  FROM catalogo_unidadmedida;
END;

CREATE PROCEDURE sp_UnidadMedidaAllItem(IN v_UnidadMedidaId INT)
BEGIN
  SELECT
    UnidadMedidaId,
    Codigo,
    CodigoComercial,
    Nombre
  FROM catalogo_unidadmedida WHERE  UnidadMedidaId = v_UnidadMedidaId;
END;

CREATE PROCEDURE sp_UnidadMedida_Save(
    OUT v_UnidadMedidaId int,
    IN v_Codigo varchar(25),
    IN v_CodigoComercial varchar(25),
    IN v_Nombre varchar(100)
)
BEGIN
    INSERT INTO catalogo_unidadmedida (
        UnidadMedidaId,
        Codigo,
        CodigoComercial,
        Nombre
) VALUES (
        v_UnidadMedidaId,
        v_Codigo,
        v_CodigoComercial,
        v_Nombre
    );

  SET v_UnidadMedidaId = LAST_INSERT_ID();
  SELECT v_UnidadMedidaId;
END;

CREATE PROCEDURE sp_UnidadMedida_Update(
    IN v_UnidadMedidaId int,
    IN v_Codigo varchar(25),
    IN v_CodigoComercial varchar(25),
    IN v_Nombre varchar(100)
)
BEGIN
    UPDATE catalogo_unidadmedida
    SET
        UnidadMedidaId = v_UnidadMedidaId,
        Codigo = v_Codigo,
        CodigoComercial = v_CodigoComercial,
        Nombre = v_Nombre
    WHERE
        UnidadMedidaId = v_UnidadMedidaId;

  SELECT v_UnidadMedidaId;

END;

CREATE  PROCEDURE `sp_UnidadMedida_Delete`(IN v_UnidadMedidaId int)
BEGIN
  DELETE
    FROM catalogo_unidadmedida
  WHERE UnidadMedidaId = v_UnidadMedidaId;
  END;
