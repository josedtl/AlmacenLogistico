-- DROP PROCEDURE sp_ProveedorPersonaNaturalAllItem;
-- DROP PROCEDURE sp_ProveedorPersonaNaturalAllItems;
-- DROP PROCEDURE sp_ProveedorPersonaNaturalDelete;
-- DROP PROCEDURE sp_ProveedorPersonaNatural_Save;
-- DROP PROCEDURE sp_ProveedorPersonaNatural_Update;

CREATE PROCEDURE sp_ProveedorPersonaNaturalAllItems()
BEGIN
  SELECT
    ProveedorPersonaNaturalId,
    ProveedorId,
    PersonaNaturalId
  FROM catalogo_proveedorpersonanatural;
END;

CREATE PROCEDURE sp_ProveedorPersonaNaturalAllItem(IN v_ProveedorPersonaNaturalId INT)
BEGIN
  SELECT
    ProveedorPersonaNaturalId,
    ProveedorId,
    PersonaNaturalId
  FROM catalogo_proveedorpersonanatural WHERE  ProveedorPersonaNaturalId = v_ProveedorPersonaNaturalId;
END;

CREATE PROCEDURE sp_ProveedorPersonaNatural_Save(
    OUT v_ProveedorPersonaNaturalId int,
    IN v_ProveedorId int,
    IN v_PersonaNaturalId int
)
BEGIN
    INSERT INTO catalogo_proveedorpersonanatural (
        ProveedorPersonaNaturalId,
        ProveedorId,
        PersonaNaturalId
) VALUES (
        v_ProveedorPersonaNaturalId,
        v_ProveedorId,
        v_PersonaNaturalId
    );

  SET v_ProveedorPersonaNaturalId = LAST_INSERT_ID();
  SELECT v_ProveedorPersonaNaturalId;
END;

CREATE PROCEDURE sp_ProveedorPersonaNatural_Update(
    IN v_ProveedorPersonaNaturalId int,
    IN v_ProveedorId int,
    IN v_PersonaNaturalId int
)
BEGIN
    UPDATE catalogo_proveedorpersonanatural
    SET
        ProveedorPersonaNaturalId = v_ProveedorPersonaNaturalId,
        ProveedorId = v_ProveedorId,
        PersonaNaturalId = v_PersonaNaturalId
    WHERE
        ProveedorPersonaNaturalId = v_ProveedorPersonaNaturalId;

  SELECT v_ProveedorPersonaNaturalId;

END;

CREATE  PROCEDURE `sp_ProveedorPersonaNatural_Delete`(IN v_ProveedorPersonaNaturalId int)
BEGIN
  DELETE
    FROM catalogo_proveedorpersonanatural
  WHERE ProveedorPersonaNaturalId = v_ProveedorPersonaNaturalId;
  END;
