
export function convertirValorAlTipoDato(valor: string, tipo: string): any {
    switch (tipo) {
        case 'number':
            return Number(valor);
        case 'decimal':
            return parseFloat(valor);
        case 'date':
            return new Date(valor);
        case  'string':
            return String(valor);
        case 'boolean':
            return Boolean(valor);
        case 'object':
            try {
                return JSON.parse(valor);
            } catch (error) {
                console.error(`Error al convertir a tipo 'object': ${error}`);
                return null;
            }
        case 'array':
            try {
                return JSON.parse(valor);
            } catch (error) {
                console.error(`Error al convertir a tipo 'array': ${error}`);
                return null;
            }
        default:
            throw new Error(`Tipo de dato no reconocido: ${tipo}`);
    }
}
