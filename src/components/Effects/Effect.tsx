import React from 'react';
import { cn } from '@bem-react/classname';
import { useEffectList } from './__generated__/Effect.query';
import { EffectItem, cnEffectsItem } from './EffectItem';
import './Effect.scss';

export const cnEffects = cn('Effects');
interface EffectsI {
  active: string;
  onChange: (id: string) => void;
  onClean: () => void;
}

export const Effects: React.FC<EffectsI> = ({ onChange, onClean, active }) => {
  const { loading, error, data } = useEffectList();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data && data.effects ? (
    <div className={cnEffects()}>
      <header>
        Фильтр по эффектам
        <button onClick={onClean} type="button">
          сбросить
        </button>
      </header>
      <ul className={cnEffects('List')}>
        {data.effects &&
          data.effects.map(
            (effect) =>
              effect && (
                <li key={effect.id}>
                  <EffectItem
                    effect={effect}
                    className={cnEffectsItem({ active: effect.id === active })}
                    onChange={() => onChange(effect.id)}
                  />
                </li>
              )
          )}
      </ul>
    </div>
  ) : null;
};
