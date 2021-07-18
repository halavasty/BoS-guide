import React from 'react';
import { cn } from '@bem-react/classname';
import './EffectList.scss';
import { EffectItem, cnEffectsItem } from '../EffectItem';
import { EffectSchema } from '../EffectSchema';
import { EffectsData } from '../apollo';

const cnEffectsList = cn('EffectsList');

interface EffectsI extends EffectsData {
  onChange: (id: string) => void;
  active: string;
}

export const EffectsList: React.FC<EffectsI> = ({
  onChange,
  effects,
  active,
}) => {
  return (
    <ul className={cnEffectsList()}>
      {effects &&
        effects.map((effect: EffectSchema) => (
          <EffectItem
            key={effect.id}
            id={effect.id}
            name={effect.name}
            className={cnEffectsItem({ active: effect.id === active })}
            onChange={() => onChange(effect.id)}
            image={effect.image}
          />
        ))}
    </ul>
  );
};
