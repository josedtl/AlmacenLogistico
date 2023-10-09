-- DROP PROCEDURE sp_DepartamentoAllItem;
-- DROP PROCEDURE sp_DepartamentoAllItems;
-- DROP PROCEDURE sp_DepartamentoDelete;
-- DROP PROCEDURE sp_Departamento_Save;
-- DROP PROCEDURE sp_Departamento_Update;

CREATE PROCEDURE sp_DepartamentoAllItems()
BEGIN
  SELECT
    DepartamentoId,
    CodDepartamento,
    NomDepartamento
  FROM catalogo_departamento;
END;

CREATE PROCEDURE sp_DepartamentoAllItem(IN v_DepartamentoId INT)
BEGIN
  SELECT
    DepartamentoId,
    CodDepartamento,
    NomDepartamento
  FROM catalogo_departamento WHERE  DepartamentoId = v_DepartamentoId;
END;

CREATE PROCEDURE sp_Departamento_Save(
    OUT v_DepartamentoId int,
    IN v_CodDepartamento int,
    IN v_NomDepartamento varchar(50)
)
BEGIN
    INSERT INTO catalogo_departamento (
        DepartamentoId,
        CodDepartamento,
        NomDepartamento
) VALUES (
        v_DepartamentoId,
        v_CodDepartamento,
        v_NomDepartamento
    );

  SET v_DepartamentoId = LAST_INSERT_ID();
  SELECT v_DepartamentoId;
END;

CREATE PROCEDURE sp_Departamento_Update(
    IN v_DepartamentoId int,
    IN v_CodDepartamento int,
    IN v_NomDepartamento varchar(50)
)
BEGIN
    UPDATE catalogo_departamento
    SET
        DepartamentoId = v_DepartamentoId,
        CodDepartamento = v_CodDepartamento,
        NomDepartamento = v_NomDepartamento
    WHERE
        DepartamentoId = v_DepartamentoId;

  SELECT v_DepartamentoId;

END;

CREATE  PROCEDURE `sp_Departamento_Delete`(IN v_DepartamentoId int)
BEGIN
  DELETE
    FROM catalogo_departamento
  WHERE DepartamentoId = v_DepartamentoId;
  END;
