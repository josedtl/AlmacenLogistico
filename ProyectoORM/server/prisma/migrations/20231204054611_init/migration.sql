-- CreateTable
CREATE TABLE `DatoEntidad` (
    `DatoId` INTEGER NOT NULL AUTO_INCREMENT,
    `EntidadId` INTEGER NOT NULL,
    `valor` VARCHAR(250) NOT NULL,
    `CampoId` INTEGER NOT NULL,
    `ListaRelacionId` INTEGER NULL,

    PRIMARY KEY (`DatoId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Campo` (
    `CampoId` INTEGER NOT NULL AUTO_INCREMENT,
    `Campo` VARCHAR(50) NOT NULL,
    `TypeValorId` INTEGER NOT NULL,

    PRIMARY KEY (`CampoId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Entidad` (
    `EntidadId` INTEGER NOT NULL AUTO_INCREMENT,
    `EsEmpresa` BOOLEAN NOT NULL DEFAULT false,
    `TipoDocumentoIdentidadId` INTEGER NULL,
    `NumDocumento` VARCHAR(30) NOT NULL,
    `NombreCompleto` VARCHAR(30) NOT NULL,
    `FechaRegistro` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `CodUsuario` VARCHAR(25) NOT NULL,
    `UbigeoId` INTEGER NULL,

    PRIMARY KEY (`EntidadId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `catalogo_ubigeo` (
    `UbigeoId` INTEGER NOT NULL,
    `CodUbigeo` VARCHAR(20) NOT NULL,
    `DesUbigeo` VARCHAR(100) NOT NULL,
    `DepartamentoId` INTEGER NOT NULL,
    `ProvinciaId` INTEGER NOT NULL,
    `DistritoId` INTEGER NOT NULL,

    PRIMARY KEY (`UbigeoId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `catalogo_TipoDocumentoIdentidad` (
    `TipoDocumentoIdentidadId` INTEGER NOT NULL AUTO_INCREMENT,
    `Codigo` VARCHAR(100) NOT NULL DEFAULT '',
    `Nombre` VARCHAR(100) NOT NULL DEFAULT '',
    `EsEmpresa` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`TipoDocumentoIdentidadId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TypeValor` (
    `TypeValorId` INTEGER NOT NULL AUTO_INCREMENT,
    `Nombre` VARCHAR(40) NOT NULL,

    PRIMARY KEY (`TypeValorId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ListaRelacion` (
    `ListaRelacionId` INTEGER NOT NULL AUTO_INCREMENT,
    `TipoListaRelacionId` INTEGER NOT NULL,
    `Nombre` VARCHAR(100) NOT NULL DEFAULT '',
    `FechaRegistro` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `CodUsuario` VARCHAR(15) NOT NULL DEFAULT '',
    `EstadoRegistro` BOOLEAN NOT NULL DEFAULT true,

    PRIMARY KEY (`ListaRelacionId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TipoListaRelacion` (
    `TipoListaRelacionId` INTEGER NOT NULL AUTO_INCREMENT,
    `Codigo` VARCHAR(10) NOT NULL DEFAULT '',
    `Nombre` VARCHAR(100) NOT NULL DEFAULT '',

    PRIMARY KEY (`TipoListaRelacionId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `transaccion_ordenpedido` (
    `OrdenPedidoId` INTEGER NOT NULL AUTO_INCREMENT,
    `ProcesoId` INTEGER NOT NULL,
    `TipoProcesoId` INTEGER NOT NULL,
    `EstadoProcesoId` INTEGER NOT NULL,
    `Codigo` VARCHAR(30) NOT NULL DEFAULT '',
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

-- CreateTable
CREATE TABLE `catalogo_departamento` (
    `DepartamentoId` INTEGER NOT NULL,
    `CodDepartamento` INTEGER NOT NULL,
    `NomDepartamento` VARCHAR(50) NOT NULL,

    PRIMARY KEY (`DepartamentoId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `catalogo_provincia` (
    `ProvinciaId` INTEGER NOT NULL,
    `CodProvincia` INTEGER NOT NULL,
    `NomProvincia` VARCHAR(50) NOT NULL,
    `DepartamentoId` INTEGER NOT NULL,

    PRIMARY KEY (`ProvinciaId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `catalogo_distrito` (
    `DistritoId` INTEGER NOT NULL,
    `CodDistrito` INTEGER NOT NULL,
    `NomDistrito` VARCHAR(50) NOT NULL,
    `ProvinciaId` INTEGER NOT NULL,

    PRIMARY KEY (`DistritoId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `DatoEntidad` ADD CONSTRAINT `DatoEntidad_EntidadId_fkey` FOREIGN KEY (`EntidadId`) REFERENCES `Entidad`(`EntidadId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DatoEntidad` ADD CONSTRAINT `DatoEntidad_CampoId_fkey` FOREIGN KEY (`CampoId`) REFERENCES `Campo`(`CampoId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DatoEntidad` ADD CONSTRAINT `DatoEntidad_ListaRelacionId_fkey` FOREIGN KEY (`ListaRelacionId`) REFERENCES `ListaRelacion`(`ListaRelacionId`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Campo` ADD CONSTRAINT `Campo_TypeValorId_fkey` FOREIGN KEY (`TypeValorId`) REFERENCES `TypeValor`(`TypeValorId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Entidad` ADD CONSTRAINT `Entidad_TipoDocumentoIdentidadId_fkey` FOREIGN KEY (`TipoDocumentoIdentidadId`) REFERENCES `catalogo_TipoDocumentoIdentidad`(`TipoDocumentoIdentidadId`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Entidad` ADD CONSTRAINT `Entidad_UbigeoId_fkey` FOREIGN KEY (`UbigeoId`) REFERENCES `catalogo_ubigeo`(`UbigeoId`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `catalogo_ubigeo` ADD CONSTRAINT `catalogo_ubigeo_DepartamentoId_fkey` FOREIGN KEY (`DepartamentoId`) REFERENCES `catalogo_departamento`(`DepartamentoId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `catalogo_ubigeo` ADD CONSTRAINT `catalogo_ubigeo_ProvinciaId_fkey` FOREIGN KEY (`ProvinciaId`) REFERENCES `catalogo_provincia`(`ProvinciaId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `catalogo_ubigeo` ADD CONSTRAINT `catalogo_ubigeo_DistritoId_fkey` FOREIGN KEY (`DistritoId`) REFERENCES `catalogo_distrito`(`DistritoId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ListaRelacion` ADD CONSTRAINT `ListaRelacion_TipoListaRelacionId_fkey` FOREIGN KEY (`TipoListaRelacionId`) REFERENCES `TipoListaRelacion`(`TipoListaRelacionId`) ON DELETE RESTRICT ON UPDATE CASCADE;

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

-- AddForeignKey
ALTER TABLE `catalogo_provincia` ADD CONSTRAINT `catalogo_provincia_DepartamentoId_fkey` FOREIGN KEY (`DepartamentoId`) REFERENCES `catalogo_departamento`(`DepartamentoId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `catalogo_distrito` ADD CONSTRAINT `catalogo_distrito_ProvinciaId_fkey` FOREIGN KEY (`ProvinciaId`) REFERENCES `catalogo_provincia`(`ProvinciaId`) ON DELETE RESTRICT ON UPDATE CASCADE;
