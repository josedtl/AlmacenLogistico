export class FormaPagoItemModel {
    FormaPagoId: number;
    Nombre: string;

    constructor() {
        this.FormaPagoId = 0;
        this.Nombre = '';
    }
}

export class MonedaItemModel {
    MonedaId : number;
    CodigoSunat : string;
    Simbolo : string;
    Nombre : string;

    constructor() {
        this.MonedaId = 0;
        this.CodigoSunat = '';
        this.Simbolo = '';
        this.Nombre = '';
    }
}

export class TipoDocumentoIdentidadItemModel {
    TipoDocumentoIdentidadId: number;
    Nombre: string;

    constructor() {
        this.TipoDocumentoIdentidadId = 0;
        this.Nombre = '';
    }
}

export class TipoOperacionItemModel {
    TipoOperacionId: number;
    Codigo: string;
    Nombre: string;

    constructor() {
        this.TipoOperacionId = 0;
        this.Codigo = '';
        this.Nombre = '';
    }
}

export class tipoprecioventaunitarioItemModel {
    TipoPrecioVentaUnitarioId: number;
    Codigo: string;
    Nombre: string;

    constructor() {
        this.TipoPrecioVentaUnitarioId = 0;
        this.Codigo = '';
        this.Nombre = '';
    }
}

export class TripotributoItemModel {
    TipoTributosId: number;
    Nombre: string;

    constructor() {
        this.TipoTributosId = 0;
        this.Nombre = '';
    }
}

export class TipoDocumentoItemModel {
    TipoDocumentoId: number;
    Codigo: string;
    Nombre: string;

    constructor() {
        this.TipoDocumentoId = 0;
        this.Codigo = '';
        this.Nombre = '';
    }
}
