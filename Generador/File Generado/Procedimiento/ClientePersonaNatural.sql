-- DROP PROCEDURE sp_ClientePersonaNaturalAllItem;
-- DROP PROCEDURE sp_ClientePersonaNaturalAllItems;
-- DROP PROCEDURE sp_ClientePersonaNaturalDelete;
-- DROP PROCEDURE sp_ClientePersonaNatural_Save;
-- DROP PROCEDURE sp_ClientePersonaNatural_Update;

CREATE PROCEDURE sp_ClientePersonaNaturalAllItems()
BEGIN
  SELECT
    ClientePersonaNaturalId,
    ClienteId,
    PersonaNaturalId
  FROM catalogo_clientepersonanatural;
END;

CREATE PROCEDURE sp_ClientePersonaNaturalAllItem(IN v_ClientePersonaNaturalId INT)
BEGIN
  SELECT
    ClientePersonaNaturalId,
    ClienteId,
    PersonaNaturalId
  FROM catalogo_clientepersonanatural WHERE  ClientePersonaNaturalId = v_ClientePersonaNaturalId;
END;

CREATE PROCEDURE sp_ClientePersonaNatural_Save(
    OUT v_ClientePersonaNaturalId int,
    IN v_ClienteId int,
    IN v_PersonaNaturalId int
)
BEGIN
    INSERT INTO catalogo_clientepersonanatural (
        ClientePersonaNaturalId,
        ClienteId,
        PersonaNaturalId
) VALUES (
        v_ClientePersonaNaturalId,
        v_ClienteId,
        v_PersonaNaturalId
    );

  SET v_ClientePersonaNaturalId = LAST_INSERT_ID();
  SELECT v_ClientePersonaNaturalId;
END;

CREATE PROCEDURE sp_ClientePersonaNatural_Update(
    IN v_ClientePersonaNaturalId int,
    IN v_ClienteId int,
    IN v_PersonaNaturalId int
)
BEGIN
    UPDATE catalogo_clientepersonanatural
    SET
        ClientePersonaNaturalId = v_ClientePersonaNaturalId,
        ClienteId = v_ClienteId,
        PersonaNaturalId = v_PersonaNaturalId
    WHERE
        ClientePersonaNaturalId = v_ClientePersonaNaturalId;

  SELECT v_ClientePersonaNaturalId;

END;

CREATE  PROCEDURE `sp_ClientePersonaNatural_Delete`(IN v_ClientePersonaNaturalId int)
BEGIN
  DELETE
    FROM catalogo_clientepersonanatural
  WHERE ClientePersonaNaturalId = v_ClientePersonaNaturalId;
  END;
