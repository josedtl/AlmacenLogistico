-- DROP PROCEDURE sp_ClienteEmpresaAllItem;
-- DROP PROCEDURE sp_ClienteEmpresaAllItems;
-- DROP PROCEDURE sp_ClienteEmpresaDelete;
-- DROP PROCEDURE sp_ClienteEmpresa_Save;
-- DROP PROCEDURE sp_ClienteEmpresa_Update;

CREATE PROCEDURE sp_ClienteEmpresaAllItems()
BEGIN
  SELECT
    ClienteEmpresaId,
    ClienteId,
    EmpresaId
  FROM catalogo_clienteempresa;
END;

CREATE PROCEDURE sp_ClienteEmpresaAllItem(IN v_ClienteEmpresaId INT)
BEGIN
  SELECT
    ClienteEmpresaId,
    ClienteId,
    EmpresaId
  FROM catalogo_clienteempresa WHERE  ClienteEmpresaId = v_ClienteEmpresaId;
END;

CREATE PROCEDURE sp_ClienteEmpresa_Save(
    OUT v_ClienteEmpresaId int,
    IN v_ClienteId int,
    IN v_EmpresaId int
)
BEGIN
    INSERT INTO catalogo_clienteempresa (
        ClienteEmpresaId,
        ClienteId,
        EmpresaId
) VALUES (
        v_ClienteEmpresaId,
        v_ClienteId,
        v_EmpresaId
    );

  SET v_ClienteEmpresaId = LAST_INSERT_ID();
  SELECT v_ClienteEmpresaId;
END;

CREATE PROCEDURE sp_ClienteEmpresa_Update(
    IN v_ClienteEmpresaId int,
    IN v_ClienteId int,
    IN v_EmpresaId int
)
BEGIN
    UPDATE catalogo_clienteempresa
    SET
        ClienteEmpresaId = v_ClienteEmpresaId,
        ClienteId = v_ClienteId,
        EmpresaId = v_EmpresaId
    WHERE
        ClienteEmpresaId = v_ClienteEmpresaId;

  SELECT v_ClienteEmpresaId;

END;

CREATE  PROCEDURE `sp_ClienteEmpresa_Delete`(IN v_ClienteEmpresaId int)
BEGIN
  DELETE
    FROM catalogo_clienteempresa
  WHERE ClienteEmpresaId = v_ClienteEmpresaId;
  END;
