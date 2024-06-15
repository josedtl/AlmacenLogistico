-- CreateTable
CREATE TABLE "Catalogo_TipoEstadoUsuario" (
    "TipoEstadoUsuarioId" SERIAL NOT NULL,
    "Nombre" VARCHAR(255) NOT NULL,
    "CodUsuario" VARCHAR(10) NOT NULL,

    CONSTRAINT "Catalogo_TipoEstadoUsuario_pkey" PRIMARY KEY ("TipoEstadoUsuarioId")
);

-- CreateTable
CREATE TABLE "Catalogo_Usuario" (
    "UsuarioId" SERIAL NOT NULL,
    "Codigo" VARCHAR(20) NOT NULL,
    "contrasena" VARCHAR(40) NOT NULL,
    "FechaRegistro" TIMESTAMP(3) NOT NULL,
    "CodUsuario" VARCHAR(15) NOT NULL,
    "FechaVencimiento" TIMESTAMP(3) NOT NULL,
    "TipoEstadoUsuarioId" INTEGER NOT NULL,
    "RolId" INTEGER NOT NULL,

    CONSTRAINT "Catalogo_Usuario_pkey" PRIMARY KEY ("UsuarioId")
);

-- CreateTable
CREATE TABLE "Catalogo_UsuarioDealle" (
    "UsuarioDetalleId" SERIAL NOT NULL,
    "Detalle" TEXT NOT NULL,
    "UsuarioId" INTEGER NOT NULL,

    CONSTRAINT "Catalogo_UsuarioDealle_pkey" PRIMARY KEY ("UsuarioDetalleId")
);

-- CreateTable
CREATE TABLE "Catalogo_Rol" (
    "RolId" SERIAL NOT NULL,
    "Codigo" TEXT NOT NULL,
    "Nombre" TEXT NOT NULL,
    "CodUsuario" TEXT NOT NULL,

    CONSTRAINT "Catalogo_Rol_pkey" PRIMARY KEY ("RolId")
);

-- CreateTable
CREATE TABLE "DatoEntidad" (
    "DatoId" SERIAL NOT NULL,
    "EntidadId" INTEGER NOT NULL,
    "valor" TEXT NOT NULL,
    "CampoId" INTEGER NOT NULL,

    CONSTRAINT "DatoEntidad_pkey" PRIMARY KEY ("DatoId")
);

-- CreateTable
CREATE TABLE "Campo" (
    "CampoId" SERIAL NOT NULL,
    "campo" TEXT NOT NULL,
    "TypeValorId" INTEGER NOT NULL,

    CONSTRAINT "Campo_pkey" PRIMARY KEY ("CampoId")
);

-- CreateTable
CREATE TABLE "Entidad" (
    "EntidadId" SERIAL NOT NULL,
    "EsEmpresa" BOOLEAN NOT NULL,
    "TipoDocumentoIdentidadId" INTEGER NOT NULL,
    "NumDocumento" VARCHAR(30) NOT NULL,
    "NombreCompleto" VARCHAR(30) NOT NULL,
    "FechaRegistro" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "CodUsuario" VARCHAR(25) NOT NULL,

    CONSTRAINT "Entidad_pkey" PRIMARY KEY ("EntidadId")
);

-- CreateTable
CREATE TABLE "TipDocIdentidad" (
    "TipoDocumentoIdentidadId" SERIAL NOT NULL,
    "Nombre" VARCHAR(100) NOT NULL DEFAULT '',

    CONSTRAINT "TipDocIdentidad_pkey" PRIMARY KEY ("TipoDocumentoIdentidadId")
);

-- CreateTable
CREATE TABLE "TypeValor" (
    "TypeValorId" SERIAL NOT NULL,
    "Nombre" VARCHAR(40) NOT NULL,

    CONSTRAINT "TypeValor_pkey" PRIMARY KEY ("TypeValorId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Catalogo_Rol_Codigo_key" ON "Catalogo_Rol"("Codigo");

-- AddForeignKey
ALTER TABLE "Catalogo_Usuario" ADD CONSTRAINT "Catalogo_Usuario_TipoEstadoUsuarioId_fkey" FOREIGN KEY ("TipoEstadoUsuarioId") REFERENCES "Catalogo_TipoEstadoUsuario"("TipoEstadoUsuarioId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Catalogo_Usuario" ADD CONSTRAINT "Catalogo_Usuario_RolId_fkey" FOREIGN KEY ("RolId") REFERENCES "Catalogo_Rol"("RolId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Catalogo_UsuarioDealle" ADD CONSTRAINT "Catalogo_UsuarioDealle_UsuarioId_fkey" FOREIGN KEY ("UsuarioId") REFERENCES "Catalogo_Usuario"("UsuarioId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DatoEntidad" ADD CONSTRAINT "DatoEntidad_EntidadId_fkey" FOREIGN KEY ("EntidadId") REFERENCES "Entidad"("EntidadId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DatoEntidad" ADD CONSTRAINT "DatoEntidad_CampoId_fkey" FOREIGN KEY ("CampoId") REFERENCES "Campo"("CampoId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Campo" ADD CONSTRAINT "Campo_TypeValorId_fkey" FOREIGN KEY ("TypeValorId") REFERENCES "TypeValor"("TypeValorId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Entidad" ADD CONSTRAINT "Entidad_TipoDocumentoIdentidadId_fkey" FOREIGN KEY ("TipoDocumentoIdentidadId") REFERENCES "TipDocIdentidad"("TipoDocumentoIdentidadId") ON DELETE RESTRICT ON UPDATE CASCADE;
