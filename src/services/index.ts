import { GetResipesResponse } from 'types/services';
import configApi from './api';

const apiKey = process.env.REACT_APP_API_KEY;
const apiId = process.env.REACT_APP_API_ID;

export const getRecipesService = async (value: string) => {
  try {
    const response = await configApi.get<GetResipesResponse>(
      `/search?q=${value}&app_id=${apiId}&app_key=${apiKey}&from=0&to=4`
    );

    return response.data;
  } catch (error) {}
};
