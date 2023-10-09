-- DROP PROCEDURE sp_DistritoAllItem;
-- DROP PROCEDURE sp_DistritoAllItems;
-- DROP PROCEDURE sp_DistritoDelete;
-- DROP PROCEDURE sp_Distrito_Save;
-- DROP PROCEDURE sp_Distrito_Update;

CREATE PROCEDURE sp_DistritoAllItems()
BEGIN
  SELECT
    DistritoId,
    CodDistrito,
    NomDistrito,
    ProvinciaId
  FROM catalogo_distrito;
END;

CREATE PROCEDURE sp_DistritoAllItem(IN v_DistritoId INT)
BEGIN
  SELECT
    DistritoId,
    CodDistrito,
    NomDistrito,
    ProvinciaId
  FROM catalogo_distrito WHERE  DistritoId = v_DistritoId;
END;

CREATE PROCEDURE sp_Distrito_Save(
    OUT v_DistritoId int,
    IN v_CodDistrito int,
    IN v_NomDistrito varchar(50),
    IN v_ProvinciaId int
)
BEGIN
    INSERT INTO catalogo_distrito (
        DistritoId,
        CodDistrito,
        NomDistrito,
        ProvinciaId
) VALUES (
        v_DistritoId,
        v_CodDistrito,
        v_NomDistrito,
        v_ProvinciaId
    );

  SET v_DistritoId = LAST_INSERT_ID();
  SELECT v_DistritoId;
END;

CREATE PROCEDURE sp_Distrito_Update(
    IN v_DistritoId int,
    IN v_CodDistrito int,
    IN v_NomDistrito varchar(50),
    IN v_ProvinciaId int
)
BEGIN
    UPDATE catalogo_distrito
    SET
        DistritoId = v_DistritoId,
        CodDistrito = v_CodDistrito,
        NomDistrito = v_NomDistrito,
        ProvinciaId = v_ProvinciaId
    WHERE
        DistritoId = v_DistritoId;

  SELECT v_DistritoId;

END;

CREATE  PROCEDURE `sp_Distrito_Delete`(IN v_DistritoId int)
BEGIN
  DELETE
    FROM catalogo_distrito
  WHERE DistritoId = v_DistritoId;
  END;
