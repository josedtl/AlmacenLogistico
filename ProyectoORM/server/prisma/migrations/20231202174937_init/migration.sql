-- AlterTable
ALTER TABLE `Catalogo_Usuario` MODIFY `FechaRegistro` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `ListaRelacion` MODIFY `EstadoRegistro` BOOLEAN NOT NULL DEFAULT true;
