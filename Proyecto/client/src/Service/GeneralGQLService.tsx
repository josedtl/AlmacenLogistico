import axios from 'axios';
import { UnidadMedidaEntity } from '@/Models/UnidadMedidaEntity';

const URL = process.env.NEXT_PUBLIC_SERVER_API_BASE_URL;
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