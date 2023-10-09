-- DROP PROCEDURE sp_ProveedorEmpresaAllItem;
-- DROP PROCEDURE sp_ProveedorEmpresaAllItems;
-- DROP PROCEDURE sp_ProveedorEmpresaDelete;
-- DROP PROCEDURE sp_ProveedorEmpresa_Save;
-- DROP PROCEDURE sp_ProveedorEmpresa_Update;

CREATE PROCEDURE sp_ProveedorEmpresaAllItems()
BEGIN
  SELECT
    ProveedorEmpresaId,
    ProveedorId,
    EmpresaId
  FROM catalogo_proveedorempresa;
END;

CREATE PROCEDURE sp_ProveedorEmpresaAllItem(IN v_ProveedorEmpresaId INT)
BEGIN
  SELECT
    ProveedorEmpresaId,
    ProveedorId,
    EmpresaId
  FROM catalogo_proveedorempresa WHERE  ProveedorEmpresaId = v_ProveedorEmpresaId;
END;

CREATE PROCEDURE sp_ProveedorEmpresa_Save(
    OUT v_ProveedorEmpresaId int,
    IN v_ProveedorId int,
    IN v_EmpresaId int
)
BEGIN
    INSERT INTO catalogo_proveedorempresa (
        ProveedorEmpresaId,
        ProveedorId,
        EmpresaId
) VALUES (
        v_ProveedorEmpresaId,
        v_ProveedorId,
        v_EmpresaId
    );

  SET v_ProveedorEmpresaId = LAST_INSERT_ID();
  SELECT v_ProveedorEmpresaId;
END;

CREATE PROCEDURE sp_ProveedorEmpresa_Update(
    IN v_ProveedorEmpresaId int,
    IN v_ProveedorId int,
    IN v_EmpresaId int
)
BEGIN
    UPDATE catalogo_proveedorempresa
    SET
        ProveedorEmpresaId = v_ProveedorEmpresaId,
        ProveedorId = v_ProveedorId,
        EmpresaId = v_EmpresaId
    WHERE
        ProveedorEmpresaId = v_ProveedorEmpresaId;

  SELECT v_ProveedorEmpresaId;

END;

CREATE  PROCEDURE `sp_ProveedorEmpresa_Delete`(IN v_ProveedorEmpresaId int)
BEGIN
  DELETE
    FROM catalogo_proveedorempresa
  WHERE ProveedorEmpresaId = v_ProveedorEmpresaId;
  END;
