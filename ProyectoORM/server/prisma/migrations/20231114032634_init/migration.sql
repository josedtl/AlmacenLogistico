-- CreateTable
CREATE TABLE `Catalogo_TipoEstadoUsuario` (
    `TipoEstadoUsuarioId` INTEGER NOT NULL AUTO_INCREMENT,
    `Nombre` VARCHAR(255) NOT NULL,
    `CodUsuario` VARCHAR(10) NOT NULL,

    PRIMARY KEY (`TipoEstadoUsuarioId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Catalogo_Usuario` (
    `UsuarioId` INTEGER NOT NULL AUTO_INCREMENT,
    `Codigo` VARCHAR(20) NOT NULL,
    `contrasena` VARCHAR(40) NOT NULL,
    `FechaRegistro` DATETIME(3) NOT NULL,
    `CodUsuario` VARCHAR(15) NOT NULL,
    `FechaVencimiento` DATETIME(3) NOT NULL,
    `TipoEstadoUsuarioId` INTEGER NOT NULL,
    `RolId` INTEGER NOT NULL,

    PRIMARY KEY (`UsuarioId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Catalogo_UsuarioDealle` (
    `UsuarioDetalleId` INTEGER NOT NULL AUTO_INCREMENT,
    `Detalle` VARCHAR(191) NOT NULL,
    `UsuarioId` INTEGER NOT NULL,

    PRIMARY KEY (`UsuarioDetalleId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Catalogo_Rol` (
    `RolId` INTEGER NOT NULL AUTO_INCREMENT,
    `Codigo` VARCHAR(191) NOT NULL,
    `Nombre` VARCHAR(191) NOT NULL,
    `CodUsuario` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Catalogo_Rol_Codigo_key`(`Codigo`),
    PRIMARY KEY (`RolId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `DatoEntidad` (
    `DatoId` INTEGER NOT NULL AUTO_INCREMENT,
    `EntidadId` INTEGER NOT NULL,
    `valor` VARCHAR(191) NOT NULL,
    `CampoId` INTEGER NOT NULL,

    PRIMARY KEY (`DatoId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Campo` (
    `CampoId` INTEGER NOT NULL AUTO_INCREMENT,
    `campo` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`CampoId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Entidad` (
    `EntidadId` INTEGER NOT NULL AUTO_INCREMENT,
    `EsEmpresa` BOOLEAN NOT NULL,
    `TipoDocuemntoIdentidad` INTEGER NOT NULL,
    `NumDocumento` VARCHAR(30) NOT NULL,
    `NombreCompleto` VARCHAR(30) NOT NULL,
    `FechaRegistro` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `CodUsuario` VARCHAR(25) NOT NULL,

    PRIMARY KEY (`EntidadId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TipDocIdentidad` (
    `TipDocIdentidadId` INTEGER NOT NULL AUTO_INCREMENT,
    `Nombre` VARCHAR(100) NOT NULL DEFAULT '',

    PRIMARY KEY (`TipDocIdentidadId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Catalogo_Usuario` ADD CONSTRAINT `Catalogo_Usuario_TipoEstadoUsuarioId_fkey` FOREIGN KEY (`TipoEstadoUsuarioId`) REFERENCES `Catalogo_TipoEstadoUsuario`(`TipoEstadoUsuarioId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Catalogo_Usuario` ADD CONSTRAINT `Catalogo_Usuario_RolId_fkey` FOREIGN KEY (`RolId`) REFERENCES `Catalogo_Rol`(`RolId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Catalogo_UsuarioDealle` ADD CONSTRAINT `Catalogo_UsuarioDealle_UsuarioId_fkey` FOREIGN KEY (`UsuarioId`) REFERENCES `Catalogo_Usuario`(`UsuarioId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DatoEntidad` ADD CONSTRAINT `DatoEntidad_EntidadId_fkey` FOREIGN KEY (`EntidadId`) REFERENCES `Entidad`(`EntidadId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DatoEntidad` ADD CONSTRAINT `DatoEntidad_CampoId_fkey` FOREIGN KEY (`CampoId`) REFERENCES `Campo`(`CampoId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Entidad` ADD CONSTRAINT `Entidad_TipoDocuemntoIdentidad_fkey` FOREIGN KEY (`TipoDocuemntoIdentidad`) REFERENCES `TipDocIdentidad`(`TipDocIdentidadId`) ON DELETE RESTRICT ON UPDATE CASCADE;
