import React from 'react';


import s from './PokemonCard.module.scss';

interface PokemonProps {
  nameClean?: string;
  stats?: number[];
  img?: string;
  alt?: string;
  attack?: number;
  defense?: number;
}

const PokemonCard: React.FC<PokemonProps> = ({ nameClean, stats, img, alt, attack, defense }) => {
  return (
    <div className={s.root}>
      <div className={s.infoWrap}>
        <h2>{nameClean}</h2>
        <div className={s.statWrap}>
          <div className={s.statItem}>
            <div className={s.statValue}>{attack}</div>
            Attack
          </div>
          <div className={s.statItem}>
            <div className={s.statValue}>{defense}</div>
            Defense
          </div>
        </div>
        <div className={s.labelWrap}>
          <span className={s.label}>Fire</span>
        </div>
      </div>
      <div className={s.pictureWrap}>
        <img src={img} alt={alt} />
      </div>
    </div>
  );
};

export default PokemonCard;
