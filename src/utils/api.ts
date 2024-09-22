import axios from "axios";

const BASE_URL = "https://pokeapi.co/api/v2";

export const getPokemonList = async (limit = 151, offset = 0) => {
  const response = await axios.get(
    `${BASE_URL}/pokemon?limit=${limit}&offset=${offset}`,
  );
  return response.data;
};

export const getPokemonDetails = async (nameOrId: string | number) => {
  const response = await axios.get(`${BASE_URL}/pokemon/${nameOrId}`);
  return response.data;
};
