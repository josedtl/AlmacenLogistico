import axios from 'axios';
import { UnidadMedidaEntity } from '../Models/UnidadMedidaEntity';

const URL = import.meta.env.VITE_SOME_KEY;
class GeneralGQLService {

    async GetUnidadMedidaItems(): Promise<UnidadMedidaEntity[]> {
        const GET_TODOS = `
    {
        GQL_UnidadMedida {
          UnidadMedidaId
          Nombre
        }
      }
  `;

        const response = await axios.post(`${URL}/gql`, {
            query: GET_TODOS,
        });

        return await response.data.data.GQL_UnidadMedida

    }


}

export default GeneralGQLService;