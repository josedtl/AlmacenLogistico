
import { apiFactCore } from './axios-config';
import { FormaPagoItemModel, MonedaItemModel, TipoDocumentoIdentidadItemModel, TipoDocumentoItemModel, TipoOperacionItemModel, tipoprecioventaunitarioItemModel, TripotributoItemModel } from '../Models/Sunat/SunatEntity';


class SunatService {

    async ObtenerTipoOperacion(Tipo: boolean): Promise<TipoOperacionItemModel[]> {
        try {
            const response = await apiFactCore.get(`api/Sunat/ObtenerTipoOperacionLista/${Tipo}`);
            return response.data.Value;
        } catch (error) {
            throw error;
        }
    }

    async ObtenerTipoDocumentoIdentidadLista(): Promise<TipoDocumentoIdentidadItemModel[]> {
        try {
            const response = await apiFactCore.get(`api/Sunat/ObtenerTipoDocumentoIdentidadLista`);
            return response.data.Value;
        } catch (error) {
            throw error;
        }
    }
    async ObtenerFormaPagoLista(): Promise<FormaPagoItemModel[]> {
        try {
            const response = await apiFactCore.get(`api/Sunat/ObtenerFormaPagoLista`);
            return response.data.Value;
        } catch (error) {
            throw error;
        }
    }

    async ObtenerTipotributoLista(): Promise<TripotributoItemModel[]> {
        try {
            const response = await apiFactCore.get(`api/Sunat/ObtenerTipotributoLista`);
            return response.data.Value;
        } catch (error) {
            throw error;
        }
    }

    async ObtenerMonedaLista(): Promise<MonedaItemModel[]> {
        try {
            const response = await apiFactCore.get(`api/Sunat/ObtenerMonedaLista`);
            return response.data.Value;
        } catch (error) {
            throw error;
        }
    }

    async ObtenerTipoprecioventaunitarioLista(): Promise<tipoprecioventaunitarioItemModel[]> {
        try {
            const response = await apiFactCore.get(`api/Sunat/ObtenerTipoprecioventaunitarioLista`);
            return response.data.Value;
        } catch (error) {
            throw error;
        }
    }

    async ObtenerTipodocumentoLista(): Promise<TipoDocumentoItemModel[]> {
        try {
            const response = await apiFactCore.get(`api/Sunat/ObtenerTipodocumentoLista`);
            return response.data.Value;
        } catch (error) {
            throw error;
        }
    }
}

export default SunatService;