-- DROP PROCEDURE sp_UbigeoAllItem;
-- DROP PROCEDURE sp_UbigeoAllItems;
-- DROP PROCEDURE sp_UbigeoDelete;
-- DROP PROCEDURE sp_Ubigeo_Save;
-- DROP PROCEDURE sp_Ubigeo_Update;

CREATE PROCEDURE sp_UbigeoAllItems()
BEGIN
  SELECT
    UbigeoId,
    CodUbigeo,
    DesUbigeo,
    DepartamentoId,
    ProvinciaId,
    DistritoId
  FROM catalogo_ubigeo;
END;

CREATE PROCEDURE sp_UbigeoAllItem(IN v_UbigeoId INT)
BEGIN
  SELECT
    UbigeoId,
    CodUbigeo,
    DesUbigeo,
    DepartamentoId,
    ProvinciaId,
    DistritoId
  FROM catalogo_ubigeo WHERE  UbigeoId = v_UbigeoId;
END;

CREATE PROCEDURE sp_Ubigeo_Save(
    OUT v_UbigeoId int,
    IN v_CodUbigeo int,
    IN v_DesUbigeo varchar(100),
    IN v_DepartamentoId int,
    IN v_ProvinciaId int,
    IN v_DistritoId int
)
BEGIN
    INSERT INTO catalogo_ubigeo (
        UbigeoId,
        CodUbigeo,
        DesUbigeo,
        DepartamentoId,
        ProvinciaId,
        DistritoId
) VALUES (
        v_UbigeoId,
        v_CodUbigeo,
        v_DesUbigeo,
        v_DepartamentoId,
        v_ProvinciaId,
        v_DistritoId
    );

  SET v_UbigeoId = LAST_INSERT_ID();
  SELECT v_UbigeoId;
END;

CREATE PROCEDURE sp_Ubigeo_Update(
    IN v_UbigeoId int,
    IN v_CodUbigeo int,
    IN v_DesUbigeo varchar(100),
    IN v_DepartamentoId int,
    IN v_ProvinciaId int,
    IN v_DistritoId int
)
BEGIN
    UPDATE catalogo_ubigeo
    SET
        UbigeoId = v_UbigeoId,
        CodUbigeo = v_CodUbigeo,
        DesUbigeo = v_DesUbigeo,
        DepartamentoId = v_DepartamentoId,
        ProvinciaId = v_ProvinciaId,
        DistritoId = v_DistritoId
    WHERE
        UbigeoId = v_UbigeoId;

  SELECT v_UbigeoId;

END;

CREATE  PROCEDURE `sp_Ubigeo_Delete`(IN v_UbigeoId int)
BEGIN
  DELETE
    FROM catalogo_ubigeo
  WHERE UbigeoId = v_UbigeoId;
  END;
