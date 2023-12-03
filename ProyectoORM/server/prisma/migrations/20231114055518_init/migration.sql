/*
  Warnings:

  - You are about to drop the column `TipoDocuemntoIdentidadId` on the `Entidad` table. All the data in the column will be lost.
  - Added the required column `TipoDocumentoIdentidadId` to the `Entidad` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Entidad` DROP FOREIGN KEY `Entidad_TipoDocuemntoIdentidadId_fkey`;

-- AlterTable
ALTER TABLE `Entidad` DROP COLUMN `TipoDocuemntoIdentidadId`,
    ADD COLUMN `TipoDocumentoIdentidadId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Entidad` ADD CONSTRAINT `Entidad_TipoDocumentoIdentidadId_fkey` FOREIGN KEY (`TipoDocumentoIdentidadId`) REFERENCES `TipDocIdentidad`(`TipoDocuemntoIdentidadId`) ON DELETE RESTRICT ON UPDATE CASCADE;
