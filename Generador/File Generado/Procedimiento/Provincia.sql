-- DROP PROCEDURE sp_ProvinciaAllItem;
-- DROP PROCEDURE sp_ProvinciaAllItems;
-- DROP PROCEDURE sp_ProvinciaDelete;
-- DROP PROCEDURE sp_Provincia_Save;
-- DROP PROCEDURE sp_Provincia_Update;

CREATE PROCEDURE sp_ProvinciaAllItems()
BEGIN
  SELECT
    ProvinciaId,
    CodProvincia,
    NomProvincia,
    DepartamentoId
  FROM catalogo_provincia;
END;

CREATE PROCEDURE sp_ProvinciaAllItem(IN v_ProvinciaId INT)
BEGIN
  SELECT
    ProvinciaId,
    CodProvincia,
    NomProvincia,
    DepartamentoId
  FROM catalogo_provincia WHERE  ProvinciaId = v_ProvinciaId;
END;

CREATE PROCEDURE sp_Provincia_Save(
    OUT v_ProvinciaId int,
    IN v_CodProvincia int,
    IN v_NomProvincia varchar(50),
    IN v_DepartamentoId int
)
BEGIN
    INSERT INTO catalogo_provincia (
        ProvinciaId,
        CodProvincia,
        NomProvincia,
        DepartamentoId
) VALUES (
        v_ProvinciaId,
        v_CodProvincia,
        v_NomProvincia,
        v_DepartamentoId
    );

  SET v_ProvinciaId = LAST_INSERT_ID();
  SELECT v_ProvinciaId;
END;

CREATE PROCEDURE sp_Provincia_Update(
    IN v_ProvinciaId int,
    IN v_CodProvincia int,
    IN v_NomProvincia varchar(50),
    IN v_DepartamentoId int
)
BEGIN
    UPDATE catalogo_provincia
    SET
        ProvinciaId = v_ProvinciaId,
        CodProvincia = v_CodProvincia,
        NomProvincia = v_NomProvincia,
        DepartamentoId = v_DepartamentoId
    WHERE
        ProvinciaId = v_ProvinciaId;

  SELECT v_ProvinciaId;

END;

CREATE  PROCEDURE `sp_Provincia_Delete`(IN v_ProvinciaId int)
BEGIN
  DELETE
    FROM catalogo_provincia
  WHERE ProvinciaId = v_ProvinciaId;
  END;
