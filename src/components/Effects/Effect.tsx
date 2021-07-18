import React from 'react';
import { useQuery } from '@apollo/client';
import { cn } from '@bem-react/classname';
import { EFFECTS_LIST, EffectsData } from './apollo';
import './Effect.scss';
import { EffectsList } from './EffectList';

export const cnEffects = cn('Effects');
interface EffectsI {
  onChange: (id: string) => void;
}

export const Effects: React.FC<EffectsI> = ({ onChange }) => {
  const { loading, error, data } = useQuery<EffectsData>(EFFECTS_LIST);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data && data.effects ? (
    <div className={cnEffects()}>
      <header>
        Фильтр по эффектам
        <button type="button">сбросить</button>
      </header>
      <EffectsList effects={data?.effects} onChange={onChange} />
    </div>
  ) : null;
};
