import React, {useMemo, useState} from 'react';
import PokemonCard from '../../components/PokemonCard';
import s from './Pokedex.module.scss';
import useData from "../../hook/getData";




const PokedexPage = () => {
  const [searchValue,setSearchValue] = useState('');
  const [query,setQuery] = useState({});


  const { data, isLoading, isError } = useData('getPokemons',query,[searchValue];

  const handleSerachChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
    setSearchValue(e.target.value);
    setQuery((state)=>({
        ...state,
      name:e.target.value,
    }),)
  }

  if (isError) {
    return <div>Something wrong...</div>;
  }

  return (

      <div className={s.root}>
        <div className={s.wrapper}>
          <div>
            <input type="text" value={searchValue} onChange={handleSerachChange}/>
          </div>
          {!isLoading && data.total}
          {!isLoading && data.pokemons.map((i) => (
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
