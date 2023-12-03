/*
  Warnings:

  - You are about to drop the column `TypeValorId` on the `DatoEntidad` table. All the data in the column will be lost.
  - Added the required column `TypeValorId` to the `Campo` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `DatoEntidad` DROP FOREIGN KEY `DatoEntidad_TypeValorId_fkey`;

-- AlterTable
ALTER TABLE `Campo` ADD COLUMN `TypeValorId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `DatoEntidad` DROP COLUMN `TypeValorId`;

-- AddForeignKey
ALTER TABLE `Campo` ADD CONSTRAINT `Campo_TypeValorId_fkey` FOREIGN KEY (`TypeValorId`) REFERENCES `TypeValor`(`TypeValorId`) ON DELETE RESTRICT ON UPDATE CASCADE;
