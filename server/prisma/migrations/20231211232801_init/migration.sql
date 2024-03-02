/*
  Warnings:

  - You are about to drop the column `ResponsableId` on the `transaccion_ordenpedido` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `transaccion_ordenpedido` DROP COLUMN `ResponsableId`,
    ADD COLUMN `EntidadId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `transaccion_ordenpedido` ADD CONSTRAINT `transaccion_ordenpedido_EntidadId_fkey` FOREIGN KEY (`EntidadId`) REFERENCES `Entidad`(`EntidadId`) ON DELETE SET NULL ON UPDATE CASCADE;
