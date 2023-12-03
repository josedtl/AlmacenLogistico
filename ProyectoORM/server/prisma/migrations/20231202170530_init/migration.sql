/*
  Warnings:

  - The primary key for the `TipDocIdentidad` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `TipoDocuemntoIdentidadId` on the `TipDocIdentidad` table. All the data in the column will be lost.
  - Added the required column `TipoDocumentoIdentidadId` to the `TipDocIdentidad` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Entidad` DROP FOREIGN KEY `Entidad_TipoDocumentoIdentidadId_fkey`;

-- AlterTable
ALTER TABLE `DatoEntidad` ADD COLUMN `ListaRelacionId` INTEGER NULL;

-- AlterTable
ALTER TABLE `TipDocIdentidad` DROP PRIMARY KEY,
    DROP COLUMN `TipoDocuemntoIdentidadId`,
    ADD COLUMN `TipoDocumentoIdentidadId` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`TipoDocumentoIdentidadId`);

-- CreateTable
CREATE TABLE `ListaRelacion` (
    `ListaRelacionId` INTEGER NOT NULL AUTO_INCREMENT,
    `Nombre` VARCHAR(100) NOT NULL DEFAULT '',
    `Estado` BOOLEAN NOT NULL,
    `TipoListaRelacionId` INTEGER NOT NULL,

    PRIMARY KEY (`ListaRelacionId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TipoListaRelacion` (
    `TipoListaRelacionId` INTEGER NOT NULL AUTO_INCREMENT,
    `Nombre` VARCHAR(100) NOT NULL DEFAULT '',

    PRIMARY KEY (`TipoListaRelacionId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `DatoEntidad` ADD CONSTRAINT `DatoEntidad_ListaRelacionId_fkey` FOREIGN KEY (`ListaRelacionId`) REFERENCES `ListaRelacion`(`ListaRelacionId`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Entidad` ADD CONSTRAINT `Entidad_TipoDocumentoIdentidadId_fkey` FOREIGN KEY (`TipoDocumentoIdentidadId`) REFERENCES `TipDocIdentidad`(`TipoDocumentoIdentidadId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ListaRelacion` ADD CONSTRAINT `ListaRelacion_TipoListaRelacionId_fkey` FOREIGN KEY (`TipoListaRelacionId`) REFERENCES `TipoListaRelacion`(`TipoListaRelacionId`) ON DELETE RESTRICT ON UPDATE CASCADE;
