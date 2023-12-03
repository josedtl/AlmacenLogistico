/*
  Warnings:

  - You are about to drop the `Catalogo_Rol` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Catalogo_TipoEstadoUsuario` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Catalogo_Usuario` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Catalogo_UsuarioDealle` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `Catalogo_Usuario` DROP FOREIGN KEY `Catalogo_Usuario_RolId_fkey`;

-- DropForeignKey
ALTER TABLE `Catalogo_Usuario` DROP FOREIGN KEY `Catalogo_Usuario_TipoEstadoUsuarioId_fkey`;

-- DropForeignKey
ALTER TABLE `Catalogo_UsuarioDealle` DROP FOREIGN KEY `Catalogo_UsuarioDealle_UsuarioId_fkey`;

-- DropTable
DROP TABLE `Catalogo_Rol`;

-- DropTable
DROP TABLE `Catalogo_TipoEstadoUsuario`;

-- DropTable
DROP TABLE `Catalogo_Usuario`;

-- DropTable
DROP TABLE `Catalogo_UsuarioDealle`;

-- CreateTable
CREATE TABLE `transaccion_ordenpedido` (
    `OrdenPedidoId` INTEGER NOT NULL AUTO_INCREMENT,
    `ProcesoId` INTEGER NOT NULL,
    `TipoProcesoId` INTEGER NOT NULL,
    `EstadoProcesoId` INTEGER NOT NULL,
    `Codigo` VARCHAR(20) NOT NULL,
    `ResponsableId` INTEGER NULL,
    `NumDocumentoResponsable` VARCHAR(191) NULL,
    `NomResponsable` VARCHAR(191) NULL,
    `FechaEmision` DATETIME(3) NOT NULL,
    `BloqueoEdicionOtros` BOOLEAN NULL,
    `FechaRegistro` DATETIME(3) NULL,
    `CodUsuario` VARCHAR(191) NULL,
    `EstadoRegistro` BOOLEAN NULL,

    PRIMARY KEY (`OrdenPedidoId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `transaccion_ordenpedidodetalle` (
    `OrdenPedidoDetalleId` INTEGER NOT NULL AUTO_INCREMENT,
    `OrdenPedidoId` INTEGER NOT NULL,
    `ProductoId` INTEGER NOT NULL,
    `UnidadMedidaId` INTEGER NOT NULL,
    `CantidadSolicitado` DOUBLE NOT NULL,
    `CantidadReservado` DOUBLE NULL,
    `CantidadFaltante` DOUBLE NOT NULL,
    `CantidadAtendido` DOUBLE NOT NULL,
    `Enlazado` BOOLEAN NOT NULL,
    `EsAtendido` BOOLEAN NOT NULL,
    `FechaRegistro` DATETIME(3) NOT NULL,
    `CodUsuario` VARCHAR(191) NOT NULL,
    `EstadoRegistro` BOOLEAN NULL,

    PRIMARY KEY (`OrdenPedidoDetalleId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `catalogo_producto` (
    `ProductoId` INTEGER NOT NULL AUTO_INCREMENT,
    `Codigo` VARCHAR(30) NOT NULL,
    `CategoriaId` INTEGER NOT NULL,
    `TipoProductoId` INTEGER NOT NULL,
    `MarcaId` INTEGER NOT NULL,
    `ModeloId` INTEGER NOT NULL,
    `Nombre` VARCHAR(100) NOT NULL,
    `Descripcion` VARCHAR(200) NOT NULL,
    `UnidadMedidaId` INTEGER NOT NULL,
    `Reserva` DOUBLE NOT NULL,
    `Stock` DOUBLE NOT NULL,
    `FechaRegistro` DATETIME(3) NOT NULL,
    `CodUsuario` VARCHAR(15) NOT NULL,
    `EstadoRegistro` BOOLEAN NOT NULL,

    PRIMARY KEY (`ProductoId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `catalogo_categoria` (
    `CategoriaId` INTEGER NOT NULL AUTO_INCREMENT,
    `Nombre` VARCHAR(100) NOT NULL,
    `FechaRegistro` DATETIME(3) NOT NULL,
    `CodUsuario` VARCHAR(15) NOT NULL,
    `EstadoRegistro` BOOLEAN NOT NULL,

    PRIMARY KEY (`CategoriaId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `catalogo_tipoproducto` (
    `TipoProductoId` INTEGER NOT NULL AUTO_INCREMENT,
    `Nombre` VARCHAR(50) NOT NULL,
    `FechaRegistro` DATETIME(3) NOT NULL,
    `CodUsuario` VARCHAR(15) NOT NULL,
    `EstadoRegistro` BOOLEAN NOT NULL,

    PRIMARY KEY (`TipoProductoId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `catalogo_marca` (
    `MarcaId` INTEGER NOT NULL AUTO_INCREMENT,
    `Nombre` VARCHAR(100) NOT NULL,
    `FechaRegistro` DATETIME(3) NOT NULL,
    `CodUsuario` VARCHAR(15) NOT NULL,
    `EstadoRegistro` BOOLEAN NOT NULL,

    PRIMARY KEY (`MarcaId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `catalogo_modelo` (
    `ModeloId` INTEGER NOT NULL AUTO_INCREMENT,
    `Nombre` VARCHAR(100) NOT NULL,
    `FechaRegistro` DATETIME(3) NOT NULL,
    `CodUsuario` VARCHAR(15) NOT NULL,
    `EstadoRegistro` BOOLEAN NOT NULL,

    PRIMARY KEY (`ModeloId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `catalogo_unidadmedida` (
    `UnidadMedidaId` INTEGER NOT NULL AUTO_INCREMENT,
    `Codigo` VARCHAR(25) NOT NULL,
    `CodigoComercial` VARCHAR(25) NOT NULL,
    `Nombre` VARCHAR(100) NOT NULL,

    PRIMARY KEY (`UnidadMedidaId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `catalogo_producto` ADD CONSTRAINT `catalogo_producto_CategoriaId_fkey` FOREIGN KEY (`CategoriaId`) REFERENCES `catalogo_categoria`(`CategoriaId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `catalogo_producto` ADD CONSTRAINT `catalogo_producto_TipoProductoId_fkey` FOREIGN KEY (`TipoProductoId`) REFERENCES `catalogo_tipoproducto`(`TipoProductoId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `catalogo_producto` ADD CONSTRAINT `catalogo_producto_MarcaId_fkey` FOREIGN KEY (`MarcaId`) REFERENCES `catalogo_marca`(`MarcaId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `catalogo_producto` ADD CONSTRAINT `catalogo_producto_ModeloId_fkey` FOREIGN KEY (`ModeloId`) REFERENCES `catalogo_modelo`(`ModeloId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `catalogo_producto` ADD CONSTRAINT `catalogo_producto_UnidadMedidaId_fkey` FOREIGN KEY (`UnidadMedidaId`) REFERENCES `catalogo_unidadmedida`(`UnidadMedidaId`) ON DELETE RESTRICT ON UPDATE CASCADE;
