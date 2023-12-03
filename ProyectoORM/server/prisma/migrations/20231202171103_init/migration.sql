/*
  Warnings:

  - You are about to drop the column `Estado` on the `ListaRelacion` table. All the data in the column will be lost.
  - Added the required column `EstadoRegistro` to the `ListaRelacion` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `ListaRelacion` DROP COLUMN `Estado`,
    ADD COLUMN `CodUsuario` VARCHAR(15) NOT NULL DEFAULT '',
    ADD COLUMN `EstadoRegistro` BOOLEAN NOT NULL,
    ADD COLUMN `FechaRegistro` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);
