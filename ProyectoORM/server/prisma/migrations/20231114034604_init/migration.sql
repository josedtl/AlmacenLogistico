/*
  Warnings:

  - You are about to drop the column `TipoDocuemntoIdentidad` on the `Entidad` table. All the data in the column will be lost.
  - The primary key for the `TipDocIdentidad` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `TipDocIdentidadId` on the `TipDocIdentidad` table. All the data in the column will be lost.
  - Added the required column `TipoDocuemntoIdentidadId` to the `Entidad` table without a default value. This is not possible if the table is not empty.
  - Added the required column `TipoDocuemntoIdentidadId` to the `TipDocIdentidad` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Entidad` DROP FOREIGN KEY `Entidad_TipoDocuemntoIdentidad_fkey`;

-- AlterTable
ALTER TABLE `Entidad` DROP COLUMN `TipoDocuemntoIdentidad`,
    ADD COLUMN `TipoDocuemntoIdentidadId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `TipDocIdentidad` DROP PRIMARY KEY,
    DROP COLUMN `TipDocIdentidadId`,
    ADD COLUMN `TipoDocuemntoIdentidadId` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`TipoDocuemntoIdentidadId`);

-- AddForeignKey
ALTER TABLE `Entidad` ADD CONSTRAINT `Entidad_TipoDocuemntoIdentidadId_fkey` FOREIGN KEY (`TipoDocuemntoIdentidadId`) REFERENCES `TipDocIdentidad`(`TipoDocuemntoIdentidadId`) ON DELETE RESTRICT ON UPDATE CASCADE;
