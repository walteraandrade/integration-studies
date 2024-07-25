import { useQuery as reactQueryUseQuery } from '@tanstack/react-query';
import axios from 'axios';

export const useQuery = ({ key, id}: { key: string, id: string}) => {
    return reactQueryUseQuery({ queryKey: key, queryFn: () => axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`).then(res => res.json())})
}

export const useGetPokemonById = (id: string) => {
    return useQuery({ key: 'pokemon', id })
}