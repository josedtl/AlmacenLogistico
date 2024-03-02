-- CreateTable
CREATE TABLE `ConfiguracionEntidad` (
    `ConfiguracionEntidadId` INTEGER NOT NULL AUTO_INCREMENT,
    `Codigo` VARCHAR(10) NOT NULL,
    `Nombre` VARCHAR(150) NOT NULL,

    PRIMARY KEY (`ConfiguracionEntidadId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ConfiguracionEntidadDetalle` (
    `ConfiguracionEntidadDetalleId` INTEGER NOT NULL AUTO_INCREMENT,
    `CampoId` INTEGER NULL,
    `ConfiguracionEntidadId` INTEGER NULL,

    PRIMARY KEY (`ConfiguracionEntidadDetalleId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

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
CREATE TABLE `TipoEntidad` (
    `TipoEntidadId` INTEGER NOT NULL AUTO_INCREMENT,
    `Codigo` VARCHAR(10) NOT NULL,
    `Nombre` VARCHAR(100) NOT NULL,

    PRIMARY KEY (`TipoEntidadId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Entidad` (
    `EntidadId` INTEGER NOT NULL AUTO_INCREMENT,
    `TipoEntidadId` INTEGER NULL,
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
    `Alias` VARCHAR(100) NOT NULL DEFAULT '',
    `Descripcion` VARCHAR(100) NOT NULL DEFAULT '',
    `EsEmpresa` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`TipoDocumentoIdentidadId`)
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
    `EntidadId` INTEGER NULL,
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

-- CreateTable
CREATE TABLE `typevalor` (
    `TypeValorId` INTEGER NOT NULL AUTO_INCREMENT,
    `Codigo` VARCHAR(191) NULL,
    `Nombre` VARCHAR(191) NULL,

    PRIMARY KEY (`TypeValorId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `mer_campo` (
    `CampoId` INTEGER NOT NULL,
    `Codigo` VARCHAR(191) NOT NULL,
    `Campo` VARCHAR(191) NOT NULL,
    `Nombre` VARCHAR(191) NOT NULL,
    `TypeValorId` INTEGER NOT NULL,

    PRIMARY KEY (`CampoId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `mer_lista` (
    `ListaId` INTEGER NOT NULL AUTO_INCREMENT,
    `CampoId` INTEGER NOT NULL,
    `Codigo` VARCHAR(40) NOT NULL,
    `Nombre` VARCHAR(250) NOT NULL DEFAULT '',
    `Descripcion` VARCHAR(250) NOT NULL,
    `FechaRegistro` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `CodUsuario` VARCHAR(20) NOT NULL DEFAULT '',
    `EstadoRegistro` BOOLEAN NOT NULL DEFAULT true,

    PRIMARY KEY (`ListaId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `mercaderia` (
    `MercaderiaId` INTEGER NOT NULL AUTO_INCREMENT,
    `TipoMercaderiaId` INTEGER NOT NULL,
    `EstadoMercaderia` INTEGER NOT NULL,
    `UnidadMedidaControlId` INTEGER NOT NULL,
    `Stock` DOUBLE NOT NULL,
    `Reserva` DOUBLE NOT NULL,

    PRIMARY KEY (`MercaderiaId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `mer_dato` (
    `DatoId` INTEGER NOT NULL AUTO_INCREMENT,
    `MercaderiaId` INTEGER NOT NULL,
    `CampoId` INTEGER NOT NULL,
    `AlfaNumerico` VARCHAR(250) NULL,
    `FechaValor` DATETIME(3) NULL,
    `ListaId` INTEGER NULL,

    PRIMARY KEY (`DatoId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `ConfiguracionEntidadDetalle` ADD CONSTRAINT `ConfiguracionEntidadDetalle_CampoId_fkey` FOREIGN KEY (`CampoId`) REFERENCES `Campo`(`CampoId`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ConfiguracionEntidadDetalle` ADD CONSTRAINT `ConfiguracionEntidadDetalle_ConfiguracionEntidadId_fkey` FOREIGN KEY (`ConfiguracionEntidadId`) REFERENCES `ConfiguracionEntidad`(`ConfiguracionEntidadId`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DatoEntidad` ADD CONSTRAINT `DatoEntidad_EntidadId_fkey` FOREIGN KEY (`EntidadId`) REFERENCES `Entidad`(`EntidadId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DatoEntidad` ADD CONSTRAINT `DatoEntidad_CampoId_fkey` FOREIGN KEY (`CampoId`) REFERENCES `Campo`(`CampoId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DatoEntidad` ADD CONSTRAINT `DatoEntidad_ListaRelacionId_fkey` FOREIGN KEY (`ListaRelacionId`) REFERENCES `ListaRelacion`(`ListaRelacionId`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Entidad` ADD CONSTRAINT `Entidad_TipoEntidadId_fkey` FOREIGN KEY (`TipoEntidadId`) REFERENCES `TipoEntidad`(`TipoEntidadId`) ON DELETE SET NULL ON UPDATE CASCADE;

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
ALTER TABLE `transaccion_ordenpedido` ADD CONSTRAINT `transaccion_ordenpedido_EntidadId_fkey` FOREIGN KEY (`EntidadId`) REFERENCES `Entidad`(`EntidadId`) ON DELETE SET NULL ON UPDATE CASCADE;

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

-- AddForeignKey
ALTER TABLE `mer_campo` ADD CONSTRAINT `mer_campo_TypeValorId_fkey` FOREIGN KEY (`TypeValorId`) REFERENCES `typevalor`(`TypeValorId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `mer_dato` ADD CONSTRAINT `mer_dato_CampoId_fkey` FOREIGN KEY (`CampoId`) REFERENCES `mer_campo`(`CampoId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `mer_dato` ADD CONSTRAINT `mer_dato_ListaId_fkey` FOREIGN KEY (`ListaId`) REFERENCES `mer_lista`(`ListaId`) ON DELETE SET NULL ON UPDATE CASCADE;
