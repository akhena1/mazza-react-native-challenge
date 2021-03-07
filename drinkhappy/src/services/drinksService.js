import axios from 'axios';

const DrinkService = {
  async getCategoriesListService() {
    try {
      const response = await axios.get(
        'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'
      );

      return response.data;
    } catch (error) {
      return error.response;
    }
  },

  async getDrinksByCategoryService(category) {
    try {
      const response = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`
      );

      return response.data;
    } catch (error) {
      return error.response;
    }
  },

  async getDrinksByNameService(name) {
    try {
      const response = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`
      );

      return response.data;
    } catch (error) {
      return error.response;
    }
  },

  async getDrinkDetailsByIdService(id) {
    try {
      const response = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
      );

      return response.data;
    } catch (error) {
      return error.response;
    }
  },
};

export default DrinkService;
