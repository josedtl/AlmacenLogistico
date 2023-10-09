-- DROP PROCEDURE sp_MonedaAllItem;
-- DROP PROCEDURE sp_MonedaAllItems;
-- DROP PROCEDURE sp_MonedaDelete;
-- DROP PROCEDURE sp_Moneda_Save;
-- DROP PROCEDURE sp_Moneda_Update;

CREATE PROCEDURE sp_MonedaAllItems()
BEGIN
  SELECT
    MonedaId,
    CodMoneda,
    Simbolo,
    Descripcion
  FROM catalogo_moneda;
END;

CREATE PROCEDURE sp_MonedaAllItem(IN v_MonedaId INT)
BEGIN
  SELECT
    MonedaId,
    CodMoneda,
    Simbolo,
    Descripcion
  FROM catalogo_moneda WHERE  MonedaId = v_MonedaId;
END;

CREATE PROCEDURE sp_Moneda_Save(
    OUT v_MonedaId int,
    IN v_CodMoneda varchar(10),
    IN v_Simbolo varchar(5),
    IN v_Descripcion varchar(50)
)
BEGIN
    INSERT INTO catalogo_moneda (
        MonedaId,
        CodMoneda,
        Simbolo,
        Descripcion
) VALUES (
        v_MonedaId,
        v_CodMoneda,
        v_Simbolo,
        v_Descripcion
    );

  SET v_MonedaId = LAST_INSERT_ID();
  SELECT v_MonedaId;
END;

CREATE PROCEDURE sp_Moneda_Update(
    IN v_MonedaId int,
    IN v_CodMoneda varchar(10),
    IN v_Simbolo varchar(5),
    IN v_Descripcion varchar(50)
)
BEGIN
    UPDATE catalogo_moneda
    SET
        MonedaId = v_MonedaId,
        CodMoneda = v_CodMoneda,
        Simbolo = v_Simbolo,
        Descripcion = v_Descripcion
    WHERE
        MonedaId = v_MonedaId;

  SELECT v_MonedaId;

END;

CREATE  PROCEDURE `sp_Moneda_Delete`(IN v_MonedaId int)
BEGIN
  DELETE
    FROM catalogo_moneda
  WHERE MonedaId = v_MonedaId;
  END;
