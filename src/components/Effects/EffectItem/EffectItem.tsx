import React from 'react';
import { cn } from '@bem-react/classname';
import './EffectItem.scss';
import { Image } from '../../Image';
import { EffectSchema } from './__generated__/Effect.fragment';

export const cnEffectsItem = cn('EffectsItem');

export interface EffectItemSchema {
  effect: EffectSchema;
  onChange?: () => void;
  className?: string;
}

export const EffectItem: React.FC<EffectItemSchema> = ({
  effect,
  onChange,
  className,
}) => {
  return (
    <button className={className} type="button" onClick={onChange}>
      <span className={cnEffectsItem('Label')}>{effect.name}</span>
      {effect.image && <Image url={effect.image.url} />}
    </button>
  );
};
