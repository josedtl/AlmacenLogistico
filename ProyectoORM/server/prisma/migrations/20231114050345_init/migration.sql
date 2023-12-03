/*
  Warnings:

  - Added the required column `TypeValorId` to the `DatoEntidad` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `DatoEntidad` ADD COLUMN `TypeValorId` INTEGER NOT NULL;

-- CreateTable
CREATE TABLE `TypeValor` (
    `TypeValorId` INTEGER NOT NULL AUTO_INCREMENT,
    `Nombre` VARCHAR(40) NOT NULL,

    PRIMARY KEY (`TypeValorId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `DatoEntidad` ADD CONSTRAINT `DatoEntidad_TypeValorId_fkey` FOREIGN KEY (`TypeValorId`) REFERENCES `TypeValor`(`TypeValorId`) ON DELETE RESTRICT ON UPDATE CASCADE;
