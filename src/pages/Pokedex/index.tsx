import React, { useEffect, useState } from 'react';
import PokemonCard from '../../components/PokemonCard';
import s from './Pokedex.module.scss';

export interface PokemonsData {
  abilities: string[];
  ['base_experience']: number;
  height: number;
  id: number;
  ['is_default']: boolean;
  name: string;
  ['name_clean']: string;
  order: number;
  stats: {
    attack: number;
    defense: number;
    hp: number;
    speed: number;
  };
  types: string[];
  weight: number;
  img: string;
}

export interface Resp {
  count: number;
  limit: number;
  offset: number;
  pokemons: PokemonsData[];
  total: number;
}

const usePokemons = () => {
  const initialValue: Resp = {
    count: 0,
    limit: 0,
    offset: 0,
    pokemons: [],
    total: 0,
  };
  const [data, setData] = useState<Resp>(initialValue);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    const getPokemons = async (): Promise<void> => {
      setIsLoading(true);
      try {
        const response = await fetch('http://zar.hosthot.ru/api/v1/pokemons');
        const result = await response.json();
        setData(result);
      } catch (e) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getPokemons();
  }, []);
  return {
    data,
    isLoading,
    isError,
  };
};

const PokedexPage = () => {
  const { data, isLoading, isError } = usePokemons();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Something wrong...</div>;
  }

  return (
    <div className={s.root}>
      <div className={s.wrapper}>
        {data.pokemons.map((i) => (
          <PokemonCard
            key={i.name_clean}
            nameClean={i.name_clean}
            attack={i.stats.attack}
            defense={i.stats.defense}
            img={i.img}
            alt={i.name_clean}
          />
        ))}
        ;
      </div>
    </div>
  );
};

export default PokedexPage;
